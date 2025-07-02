from datetime import datetime, timedelta
import random
from database.connection import get_db

db = get_db()
detections = db["detections"]

def seed_data(num_real=40, num_fake=60):
    now = datetime.utcnow()
    # Real images (accuracy ~84%)
    for i in range(num_real):
        detections.insert_one({
            "image_path": f"uploads/real_{i}.jpg",
            "result": {"is_fake": False, "confidence": round(random.uniform(0.80, 0.99), 2)},
            "confidence": round(random.uniform(0.80, 0.99), 2),
            "timestamp": now - timedelta(minutes=i)
        })
    # Fake images
    for i in range(num_fake):
        detections.insert_one({
            "image_path": f"uploads/fake_{i}.jpg",
            "result": {"is_fake": True, "confidence": round(random.uniform(0.80, 0.99), 2)},
            "confidence": round(random.uniform(0.80, 0.99), 2),
            "timestamp": now - timedelta(minutes=num_real + i)
        })
    print(f"Seeded {num_real} real and {num_fake} fake detections.")

if __name__ == "__main__":
    seed_data()
