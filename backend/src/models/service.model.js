import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    serviceId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    category: { 
        type: String, 
        required: true, 
        enum: [
            'Room Service', 
            'Housekeeping', 
            'Laundry', 
            'Spa & Wellness', 
            'Food & Beverage', 
            'Transportation', 
            'Fitness', 
            'Business Center', 
            'Others'
        ] 
    },
    price: { type: Number, required: true },
    availability: { type: Boolean, default: true },
    serviceDuration: { type: String, required: false }, // e.g., "30 mins", "1 hour"
    serviceProvider: { type: String, required: false }, 
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);
export default Service;
