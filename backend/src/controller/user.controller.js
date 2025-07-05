import { HTTP_STATUS } from "../constants/index.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import generateToken from "../utility/jwt.utl.js";
/* Utility: Find user by email */
const findUser = async (email) => {
  return await User.findOne({ email });
};

/* GET all users */
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(HTTP_STATUS.OK.code).json({ message: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res
      .status(HTTP_STATUS.SERVER_ERROR.code)
      .json({ message: "Internal Server Error!" });
  }
};

/* GET user by ID */
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res
        .status(HTTP_STATUS.NOT_FOUND.code)
        .json({ message: "User Not Found!" });
    }
    return res.status(HTTP_STATUS.OK.code).json({ message: user });
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return res
      .status(HTTP_STATUS.SERVER_ERROR.code)
      .json({ message: "Internal Server Error!" });
  }
};

/* POST: Register new user */
/* POST: Register new user */
const addNewUser = async (req, res) => {
  try {
    const { userName, email, password, phoneNumber } = req.body;

    // Validate required fields
    if (!userName || !email || !password || !phoneNumber) {
      return res.status(HTTP_STATUS.BAD_REQUEST.code).json({
        message: "All fields (userName, email, password, phoneNumber) are required.",
      });
    }

    // Check for duplicate email
    const existingUser = await findUser(email);
    if (existingUser) {
      return res
        .status(HTTP_STATUS.CONFLICT.code)
        .json({ message: "User already exists with this email!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const accountId = uuidv4();

    // Create new user
    const newUser = new User({
      accountId,
      userName,
      email,
      password: hashedPassword,
      phoneNumber,
      // role is excluded as per your request
    });

    await newUser.save();

    return res
      .status(HTTP_STATUS.CREATED.code)
      .json({ message: "User successfully registered!" });

  } catch (error) {
    console.error("Error adding new user:", error);
    return res
      .status(HTTP_STATUS.SERVER_ERROR.code)
      .json({ message: "Internal Server Error!" });
  }
};

/* PUT: Update user */
const updateUserById = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res
        .status(HTTP_STATUS.NOT_FOUND.code)
        .json({ message: "User Not Found!" });
    }

    return res
      .status(HTTP_STATUS.OK.code)
      .json({ message: "User successfully updated!" });
  } catch (error) {
    console.error("Error updating user:", error);
    return res
      .status(HTTP_STATUS.SERVER_ERROR.code)
      .json({ message: "Internal Server Error!" });
  }
};

/* DELETE user by ID */
const deleteUserById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res
        .status(HTTP_STATUS.NOT_FOUND.code)
        .json({ message: "User Not Found!" });
    }

    return res
      .status(HTTP_STATUS.OK.code)
      .json({ message: "User successfully deleted!" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res
      .status(HTTP_STATUS.SERVER_ERROR.code)
      .json({ message: "Internal Server Error!" });
  }
};
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Try to find user in User collection first, then Employee
    let user = await User.findOne({ email }) || await Employee.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentialss" });
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
        role: user.role,
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export default {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUserById,
  deleteUserById,
  Login
};
