import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    reservationId: { type: String, required: true, unique: true },  
    guestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Guest', required: true },  
    reservationType: { 
        type: String, 
        required: true, 
        enum: ['Room', 'Table', 'Service']
    },  
    reservationDetails: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        refPath: 'reservationType'
    },
    checkInDate: { type: Date, required: function() { return this.reservationType === 'Room'; } },  
    checkOutDate: { type: Date, required: function() { return this.reservationType === 'Room'; } },  
    reservationDate: { type: Date, default: Date.now },  
    status: { 
        type: String, 
        enum: ['Pending', 'Confirmed', 'Cancelled', 'Checked-in', 'Completed'], 
        default: 'Pending' 
    },
    totalAmount: { type: Number, required: true },  
    paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Cancelled'], default: 'Pending' },  
    specialRequests: { type: String, required: false },  
    createdAt: { type: Date, default: Date.now },  
    updatedAt: { type: Date, default: Date.now }  
}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;

