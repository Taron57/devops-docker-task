# devops-docker-task

# Task 1 : Deploy a Node.js + MongoDB App with Docker Compose

Build a full-stack-ready backend using Node.js and MongoDB, containerized and networked using Docker Compose.

 Run the App

docker-compose up --build

Visit http://localhost:3000 to see your app running, connected to MongoDB.

# Task 2 : Add a Frontend Container (React)

Create a React App (inside frontend/ folder)

You can scaffold this with:

npx create-react-app frontend

# Update frontend/package.json

Ensure proxy to backend is set in frontend/package.json:

"proxy": "http://web:3000"

# Update docker-compose.yml

Add a frontend service.

# Test if the Proxy is Working:

 Start Your Application:
 Ensure both the backend (Node.js) and frontend (React) containers are up and running with Docker Compose:

docker-compose up --build

# Check the React Frontend:

Open your browser and go to http://localhost:8080. This is the React app running inside your Docker container.