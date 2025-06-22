import passport from 'passport';
import User from '../models/user.model.js';
import Employee from '../models/employees.model.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utility/jwt.utl.js';
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';

dotenv.config();
const router = express.Router();

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Try to find user in User collection first, then Employee
    let user = await User.findOne({ email }) || await Employee.findOne({ email });
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
        role: user.role,
      }
    });
  
  router.get('/google',passport.authenticate('google'),{scope : ['email', 'profile']});
  router.get('/google/callback',
    passport.authenticate('google', { failureRedirect : '/'}),
    (req,res) => {
      const token = jwt.sign({ googleId : req.user.id }, process.env.JWT_SECRET, {expireIn : '1h'});
      res.redirect(`http://localhost:${process.env.PORT}/oauth-success?token=${token}`);
    }
  );

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export default Login;
