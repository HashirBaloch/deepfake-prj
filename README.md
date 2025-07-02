# Deepfake Detection Project (Full STACK)

This project is a full-stack web application designed to detect deepfake images using a machine learning model. The system consists of:
- A **frontend client** built with the React framework (Next.js).
- A **backend server** using FastAPI to load and run the TensorFlow models.
- MongoDB local  for statistics of image and results
---

## 🚀 Technologies Used

- **Next.js** for the client
- **FastAPI** for the server
- **TensorFlow** for the model

---

## 📁 Project Structure

deepfake-prj/
├── client/ # Frontend source code (Next.js)
├── server/ # Backend source code (FastAPI, model inference)
└── .gitignore # Files to be ignored by Git


---

## ⚙️ Requirements
 System Requirements 
For Users (Frontend Use): 
• A modern web browser (Chrome, Firefox, Edge) 
• Internet connection (if hosted online) 
• Desktop or mobile device 
For Developers (Local Setup): 
• Node.js (v18+) 
• Python (v3.10+) 
• pip (latest) 
• MongoDB (local or MongoDB Atlas) 
• Git (optional, for cloning repository) 

---

## 🖥️ Client Installation

```bash
# Move into the client directory
cd client

# Install NPM packages
npm install

# Start the development server
npm run dev

Open your browser and go to: http://localhost:3000
```

## 🖥 Server Installation
```

# Move into the server directory
cd ../server

# Create a virtual environment
py -3.11 -m venv venv

# Activate the virtual environment
(vary with terminal)
venv\Scripts\activate
bash: source venv/Scripts/activate

# Install Python dependencies
pip install -r requirements.txt

# Start the FastAPI development server
uvicorn main:app --reload
```
```
 How to Use the Application
```
Home Page (/) 
 • Introduction to the project 
 • Quick navigation to upload and stats pages 
Image Upload Page (/model) 
 • Drag & drop or browse to upload any image 
 • Backend runs model to detect deepfake 
 • Displays result: Real / Fake + Confidence 
Statistics Page (/stats) 
 • Pie chart of real vs fake detections 
 • Confidence trends and record history 
Code Page (/code) 
 • GitHub repository link 
 • View or contribute to open-source code
```
This project was created for academic purposes under the Full Stack Web Development 
curriculum. It demonstrates practical implementation of: 
• REST APIs 
• AI/ML model integration 
• Client-server communication 
• Secure environment variable usage 
• Database operations
```
