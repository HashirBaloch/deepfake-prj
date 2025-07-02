from PIL import Image
from tensorflow.keras.models import load_model
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, UploadFile, HTTPException
from typing import Optional

import numpy as np
import tensorflow as tf
import os
from database.models import create_detection_record, get_all_detections, get_detection_stats

app = FastAPI()

# Fix CORS: allow only frontend origin
origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/detect")
async def detect_deepfake(file: UploadFile = File(...)):
    try:
        # Save the uploaded file
        file_path = f"uploads/{file.filename}"
        os.makedirs("uploads", exist_ok=True)
        
        with open(file_path, "wb") as buffer:
            content = await file.read()
            buffer.write(content)
        
        # Process the image
        im = Image.open(file_path)
        # Resize image to model input size (e.g., 224x224)
        im = im.convert('RGB')
        im = im.resize((256, 256))  # Change (224, 224) to your model's required size
        input_arr = tf.keras.utils.img_to_array(im)
        input_arr = np.array([input_arr])
        
        model = load_model('model.tf')
        prediction = model.predict(input_arr)
        confidence = float(prediction[0][0])
        
        # Create detection result
        result = {
            "is_fake": bool(confidence > 0.5),
            "confidence": confidence
        }
        
        # Store in database
        create_detection_record(file_path, result, confidence)
        
        return result
    except Exception as e:
        print(f"[ERROR] /detect: {e}")  # Log the error to the console
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/detections")
async def get_detections(limit: Optional[int] = 20, skip: Optional[int] = 0):
    try:
        return get_all_detections(limit, skip)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/stats")
async def get_statistics():
    try:
        return get_detection_stats()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))