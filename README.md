# Flashcard Learning Tool

This project is a Flashcard Learning Tool built using React for the frontend and Node.js/Express for the backend. It allows users to view and navigate through flashcards and provides an admin dashboard to manage flashcards.

## Table of Contents
- [Getting Started](#getting-started)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Running the Application](#running-the-application)
- [Database Setup](#database-setup)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Learn More](#learn-more)

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the React application:**
   ```bash
   npm start
   ```
   This will start the frontend application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. **Available Scripts:**
   - `npm start`: Runs the app in development mode.
   - `npm test`: Launches the test runner in interactive watch mode.
   - `npm run build`: Builds the app for production to the `build` folder.
   - `npm run eject`: Ejects the configuration, giving full control over the build tools and configuration files.

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file for environment variables:**
   ```plaintext
   DB_HOST=localhost
   DB_USER=username
   DB_PASSWORD=password
   DB_NAME=flashcards_db
   PORT=5000
   ```

4. **Run the Node.js server:**
   ```bash
   node server.js
   ```
   This will start the backend server on port 5000. The server will handle API requests and interact with the database.

### Running the Application

1. **Start the Backend Server:**
   - Navigate to the backend directory and run:
     ```bash
     node server.js
     ```

2. **Start the Frontend Application:**
   - Navigate to the frontend directory and run:
     ```bash
     npm start
     ```

3. **Access the Application:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the frontend.
   - The frontend will communicate with the backend running at [http://localhost:5000](http://localhost:5000).

### Database Setup

1. **Connect to MySQL:**
   - Open your terminal and connect to MySQL:
     ```bash
     mysql -u username -p
     ```

2. **Create a Database:**
   ```sql
   CREATE DATABASE flashcards_db;
   USE flashcards_db;
   ```

3. **Create the `flashcards` Table:**
   ```sql
   CREATE TABLE flashcards (
       id INT AUTO_INCREMENT PRIMARY KEY,
       question VARCHAR(255) NOT NULL,
       answer TEXT NOT NULL
   );
   ```

4. **Insert Sample Data (Optional):**
   ```sql
   INSERT INTO flashcards (question, answer)
   VALUES ('What is React?', 'A JavaScript library for building user interfaces.');
   ```

### Deployment

For deployment instructions, refer to the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment) for frontend deployment and follow standard practices for deploying Node.js/Express applications.

### Troubleshooting

- **npm run build fails to minify:** Refer to [this troubleshooting guide](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) for solutions.
- **Database connection issues:** Ensure your `.env` file contains the correct database credentials and that the database server is running.

### Learn More

- **Frontend Documentation:** [React Documentation](https://reactjs.org/docs/getting-started.html)
- **Backend Documentation:** [Express Documentation](https://expressjs.com/)
- **Database Documentation:** [MySQL Documentation](https://dev.mysql.com/doc/)