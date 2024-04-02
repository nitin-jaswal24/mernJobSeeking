# carrerNest Setup Guide

## Overview
carrerNest is the Job seeking website in which the job seekers can seek for the job and employer can post the jobs 
## How to Run the App

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed locally or accessible remotely.

### Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.

### Backend Setup
1. Install backend dependencies:
cd backend
npm install

2. Set up environment variables:
- Create a `.env` file in the `backend` directory.
- Define the following variables:
  ```
  PORT=4000
  MONGODB_URL=YOUR_MONGODB_CONNECTION_STRING
  JWT_SECRET=YOUR_JWT_SECRET_KEY
  ```

3. Start the backend server:
npm run dev

### Frontend Setup
1. Navigate back to the project directory:
cd ..


2. Install frontend dependencies:
cd frontend
npm install


3. Start the frontend development server:
npm run dev

4. Access the carrerNest application in your web browser at `http://localhost:4000`.
