const express = require('express');
const router = express.Router();

const {
    registerStudent,
    studentlogin,
    updateSnackType
} = require('../controllers/studentcontrol');

const verifyToken = require('../middlewares/studentauth');

// Register
router.post('/register', registerStudent);

// Login
router.post('/login', studentlogin);

// Update snack type (protected route)
router.post('/snack', verifyToken, updateSnackType);

module.exports = router;
