# RoomEase

RoomEase is a dynamic room and apartment booking platform designed to simplify finding and reserving stays for users. The application offers seamless navigation, a personalized user experience, and features such as property listings, user authentication, and booking management. With an intuitive UI and robust backend, RoomEase ensures a reliable and user-friendly platform for both hosts and guests.

## Key Features

- **User Authentication**: Role-based access with features like login, signup, and logout.
- **Search and Filter**: Easy-to-use search with filters for location, amenities, and price.
- **Booking Management**: Real-time booking system with date range pickers and cost calculations.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Host Features**: Property listing, pricing setup, and booking management.

## Technologies Used

- **Frontend**: React, Redux, Material UI
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: SCSS, CSS
- **Libraries/Packages**: react-date-range, react-router-dom

## Setup Instructions

### 1. Clone the repository

git clone https://github.com/SanketDhengre/RoomEase.git

### 2. Install Dependencies

Navigate to both the client and server directories and install the required dependencies.

For the client:

cd client,
npm install

For the server:

cd server,
npm install

### 3. Set Up Environment Variables

Make sure to create a `.env` file in the `server` folder with the following environment variables:

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key

### 4. Run the Application

You can run the project in two terminals, one for the client and one for the server.

Start the server:

cd server,
npm start

Start the client:

cd client,
npm start

The application will be accessible at `http://localhost:3000` for the frontend and `http://localhost:3001` for the backend.
