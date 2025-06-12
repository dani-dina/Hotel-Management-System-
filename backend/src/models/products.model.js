import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    category: { 
        type: String, 
        required: true, 
        enum: [
            'Food', 
            'Drink', 
            'Room Amenity', 
            'Cleaning Supply', 
            'Electronics', 
            'Furniture', 
            'Others'
        ] 
    },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true, default: 0 },
    supplier: { type: String, required: false },
    image: { type: String, required: false },
    expiryDate: { type: Date, required: false },  
    addedDate: { type: Date, default: Date.now },
    isAvailable: { type: Boolean, default: true },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
