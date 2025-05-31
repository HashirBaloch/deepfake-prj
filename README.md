# Deepfake Detection Project

This project is a full-stack web application designed to detect deepfake images using a machine learning model. The system consists of:
- A **frontend client** built with a react framework -nextjs.
- A **backend server** using FastAPI to load and run the tensorflow models.

# The technologies:
  - **NextJS** for client
  - ***FastAPI** for server
  - **Tensorflow** for model


## 📁 Project Structure
deepfake-prj/
│
├── client/ # Frontend source code (React or similar)
├── server/ # Backend source code (FastAPI, model inference)
└── .gitignore # Files to be ignored by Git

---
## ⚙️ Requirements
- Python 3.9/3.11
- FastAPI
- Uvicorn
- TensorFlow / Keras
- NumPy
- Pillow

# To Run:

## 🖥️ Client Installation

  # Move into the client directory
cd client

# Install NPM packages
npm install

# Start the development server
npm run dev


## 🧠 Server Installation
# Move into the server directory
cd ../server

# Create a virtual environment
py -3.11 -m venv venv

# Activate the virtual environment
source venv/Scripts/activate
or ( vary with terminal)
\venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt

# Start the FastAPI development server
uvicorn main:app --reload

Backend should now be running at: http://localhost:8000

