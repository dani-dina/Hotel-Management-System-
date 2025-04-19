import mongoose from 'mongoose';
import { hashPassword } from '../utility/hashpassword.utility.js';
import bcrypt from 'bcrypt';

const EmployeeSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        middleName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
        password: { type: String, required: true },
        jobPosition: { type: String, required: true },
        salary: { type: String, required: false },
        profileImage: { type: String, required: false },
        sex: { type: String, enum: ['Male', 'Female'] },
        address: { type: String, required: true },
        fin: { type: String, required: true, unique: true },
        phoneNumber: { type: String, required: true, unique: true },
        status: { type: String, required: true },
        description: { type: String, required: false },
        rate: { type: Number, required: false },
        role: { type: String, enum: ['guest', 'admin', 'staff'], default: 'guest' },
    },
    { timestamps: true }
);

// Hashing the password before saving
EmployeeSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
        next();
    }catch(error){
        next(error);
    }
    
});

// Hash password before updating the user
EmployeeSchema.pre('findOneAndUpdate', async function (next) {
    const update = this.getUpdate();
    if (update.password) {
        try {
            const salt = await bcrypt.genSalt(10);
            update.password = await bcrypt.hash(update.password, salt);
        } catch (error) {
            return next(error);
        }
    }
    next();
});

const Employee = mongoose.model('Employee', EmployeeSchema);
export default Employee;
