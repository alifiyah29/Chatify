# Chatify - Chat App

Chatify is a real-time chat application built with a modern tech stack, including React for the frontend and Express.js for the backend. The application supports real-time communication, user authentication, and secure password management, and is designed to be easily deployable.

## Project Structure

The project is organized into the following main folders:

- **Chatify** (Root Directory)
  - **Frontend**: Contains the React application.
  - **Backend**: Contains the Express server and all backend logic.

## Installation and Setup

### Frontend

1. Navigate to the `Frontend` directory:
   ```bash
   cd Chatify/Frontend
   ```

2. Create a new React application using Vite:
   ```bash
   npm create vite@latest
   ```

3. Install the necessary npm packages:
   ```bash
   npm install
   ```

### Backend

1. Initialize the Node.js application in the root directory:
   ```bash
   cd Chatify
   npm init
   ```

2. Install the required npm packages for the backend:
   ```bash
   npm install express dotenv cookie-parser bcrypt mongoose socket.io jsonwebtoken
   ```

3. Ensure that your `package.json` file has the following entry:
   ```json
   "main": "server.js"
   ```

## npm Packages

The following npm packages are used in the backend:

- **express**: A minimal and flexible Node.js web application framework used to create the server.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **cookie-parser**: Used to parse cookies attached to client requests.
- **bcrypt**: A library to help you hash passwords securely.
- **mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **socket.io**: Enables real-time bidirectional event-based communication.
- **jsonwebtoken**: A library to create and verify JSON Web Tokens (JWT) for authentication.

## Project Summary

Chatify is designed to be a robust and scalable chat application, focusing on secure user authentication and real-time communication. The project leverages modern tools and frameworks to ensure efficient development and deployment.

- **Frontend**: Built with React using Vite, which ensures a fast and optimized user interface.
- **Backend**: Powered by Express.js, with MongoDB used as the database, connected via Mongoose.
- **Security**: Passwords are securely hashed using bcrypt, and user sessions are managed using JSON Web Tokens.
- **Real-Time Communication**: Implemented using Socket.io, providing seamless chat experiences.
```


