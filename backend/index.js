const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/connect');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// connect to database
connectDB();

// routes
const studentRoutes = require('./routes/studentRoutes');
app.use('/api/student', studentRoutes);

// server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
