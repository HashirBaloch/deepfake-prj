# Deepfake Detection Project (AI, DIPS, Full STACK)

This project is a full-stack web application designed to detect deepfake images using a machine learning model. The system consists of:
- A **frontend client** built with the React framework (Next.js).
- A **backend server** using FastAPI to load and run the TensorFlow models.

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

- Python 3.9 / 3.11(preffered)
- FastAPI
- Uvicorn
- TensorFlow / Keras
- NumPy
- Pillow
- Node.js 14+ and npm (for frontend)

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

