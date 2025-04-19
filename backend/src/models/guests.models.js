import mongoose from 'mongoose';
import { hashPassword } from '../utility/hashpassword.utility.js';

const guestSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    },
    password: { type: String, required: true },
    sex: { type: String, enum: ['Male', 'Female'], required: true },
    address: { type: String, required: true },
    profileImage: { type: String, required: false },
    roomNumber: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Cancelled'], default: 'Pending' },
    bookingStatus: { type: String, enum: ['Confirmed', 'Checked-In', 'Checked-Out', 'Cancelled'], default: 'Confirmed' },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true }
}, { timestamps: true });

guestSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await hashPassword(this.password);
    next();
    
});
const Guest = mongoose.model('Guest', guestSchema);
export default Guest;
