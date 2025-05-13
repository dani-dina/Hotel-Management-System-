import mongoose from 'mongoose';
import User from '../models/user.model.js';
import Employee from '../models/employees.model.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utility/jwt.utl.js';
import dotenv from 'dotenv';

dotenv.config();

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });

        if (!user) {
            user = await Employee.findOne({ email });
        }

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = generateToken(user._id);

        return res.json({
            token,
            user: {
                id: user._id,
                name: user.firstName ? `${user.firstName} ${user.lastName}` : user.email,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

export default login;
