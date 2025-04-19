import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.model.js';
import Employee from '../models/employees.model.js';
import { HTTP_STATUS } from '../constants/index.js';

dotenv.config();

const protectRoute = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: "Unauthorized token!" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the user exists in either User or Employee collection
        let user = await User.findById(decoded.id).select("-password");

        if (!user) {
            user = await Employee.findById(decoded.id).select("-password");
        }

        if (!user) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: "User not found!" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in protectRoute middleware:", error);
        return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: "Invalid Token" });
    }
};

export default protectRoute;
