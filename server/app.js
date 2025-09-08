// server/app.js

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables
const authRoutes = require('./routes/auth');

// Initialize Express application
const app = express();

// Get port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// --- Debug: Check if .env is loaded ---
console.log('Environment Variables loaded:');
console.log('PORT:', process.env.PORT);
console.log('MONGO_URI exists:', !!process.env.MONGO_URI); // This will show 'true' or 'false'

// --- Middleware ---
// Enable CORS to allow requests from your frontend applications (React Native & React)
app.use(cors());
// Parse incoming JSON requests
app.use(express.json());
app.use('/api/auth', authRoutes);

// --- Database Connection ---
const MONGO_URI = process.env.MONGO_URI;

// Check if the URI is available before attempting to connect
if (!MONGO_URI) {
    console.error('\x1b[31m', 'FATAL ERROR: MONGO_URI is not defined in the environment variables.'); // Red text
    console.error('Please check your .env file in the server directory.');
    process.exit(1); // Exit the process if no URI is found
}

// Function to connect to MongoDB with retry logic
const connectWithRetry = () => {
    console.log('Attempting to connect to MongoDB...');
    mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('\x1b[32m', 'MongoDB connection established successfully!'); // Green text
    })
    .catch((error) => {
        console.error('\x1b[31m', 'MongoDB connection failed:', error.message); // Red text
        console.log('Retrying connection in 5 seconds...');
        setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
    });
};

// Initialize the connection
connectWithRetry();

// --- Define Routes ---
// Basic API test route to verify backend is running
app.get('/api/', (req, res) => {
    res.json({ message: "Ghar ka Khana API is running successfully!" });
});

// --- Start Server ---
app.listen(PORT, () => {
    console.log('\x1b[36m', `Server is running on port ${PORT}`); // Cyan text
    console.log('\x1b[0m'); // Reset text color
});