const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const student = require('../models/student');

const registerStudent = async (req, res) => {
    const { name, password, sspId, mobileNo, hostelNo } = req.body;

    if (!name || !password || !sspId || !mobileNo || !hostelNo) {
        return res.status(400).json({ message: "please provide all the required fields" });
    }

    try {
        const existingStudent = await student.findOne({ sspId });

        if (existingStudent) {
            return res.status(400).json({ message: "Student already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newStudent = new student({
            name,
            password: hashedPassword,
            sspId,
            mobileNo,
            hostelNo
        });

        await newStudent.save();

        res.status(201).json({
            message: "Student registered successfully",
            student: newStudent
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error occurs" });
    }
};

const studentlogin = async (req, res) => {
    const { sspId, password } = req.body;

    if (!sspId || !password) {
        return res.status(400).json({ message: "Please provide sspId and password" });
    }

    try {
        const existingStudent = await student.findOne({ sspId });

        if (!existingStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingStudent.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: existingStudent._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "Login successful",
            student: existingStudent,
            token
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error occurs" });
    }
};

const updateSnackType = async (req, res) => {
    const { snackType } = req.body;

    if (!snackType) {
        return res.status(400).json({ message: "snackType is required" });
    }

    try {
        const updatedStudent = await student.findByIdAndUpdate(
            req.studentId,
            { snackType },
            { new: true }
        );

        res.status(200).json({
            message: "Snack type updated",
            student: updatedStudent
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error occurs" });
    }
};

module.exports = {
    registerStudent,
    studentlogin,
    updateSnackType
};
