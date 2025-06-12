import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userAccountSchema = new mongoose.Schema({
    accountId: { type: String, required: true, unique: true },  
    email: { type: String, required: true, unique: true },  
    phoneNumber: { type: String, required: true, unique: true },  
    password: { type: String, required: true }, // Hashed password  
    role: { 
        type: String, 
        required: true, 
        enum: ['Guest', 'Admin', 'Employee']  
    },
    linkedProfile: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        refPath: 'role' // Dynamically references 'Guest', 'Admin', or 'Employee'
    },
    isActive: { type: Boolean, default: true },  
    createdAt: { type: Date, default: Date.now },  
    lastLogin: { type: Date, default: null }  
}, { timestamps: true });

// Hash password before saving a new user or updating the password
userAccountSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); 
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

userAccountSchema.pre('findOneAndUpdate', async function (next) {
    const update = this.getUpdate();
    if (update.password) {
        try {
            const salt = await bcrypt.genSalt(10);
            update.password = await bcrypt.hash(update.password, salt);
            this.setUpdate(update);
        } catch (error) {
            return next(error);
        }
    }
    next();
});

const User = mongoose.model('UserAccount', userAccountSchema);
export default User;
