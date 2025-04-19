import { HTTP_STATUS } from "../constants/index.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const findUser = async (accountId) => {
    return await User.findOne({ accountId });
};

/* Get all users */
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(HTTP_STATUS.OK).json({ message: users });
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

/* Get user by ID */
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "User Not Found!" });
        }
        return res.status(HTTP_STATUS.OK).json({ message: user });
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

/* Add new user */
const addNewUser = async (req, res) => {
    try {
        const {
            accountId,
            email,
            phoneNumber,
            password, // Changed from passWord to match schema
            role,
            linkedProfile,
            isActive,
            createdAt,
            lastLogin,
        } = req.body;

        // Check if the user already exists
        const existingUser = await findUser(accountId);
        if (existingUser) {
            return res.status(HTTP_STATUS.CONFLICT).json({ message: "User Already Exists!" });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            accountId,
            email,
            phoneNumber,
            password: hashedPassword, // Ensure hashed password is stored
            role,
            linkedProfile,
            isActive,
            createdAt,
            lastLogin,
        });

        await newUser.save();
        return res.status(HTTP_STATUS.CREATED).json({ message: "User successfully added!" });
    } catch (error) {
        console.error("Error adding new user:", error);
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

/* Update user by ID */
const updateUserById = async (req, res) => {
    try {
        if (req.body.password) { // Fixed from passWord to password
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "User Not Found!" });
        }
        return res.status(HTTP_STATUS.OK).json({ message: "User successfully updated!" });
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

/* Delete user by ID */
const deleteUserById = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "User Not Found!" });
        }
        return res.status(HTTP_STATUS.OK).json({ message: "User successfully deleted!" });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

export default { getAllUsers, getUserById, addNewUser, updateUserById, deleteUserById };
