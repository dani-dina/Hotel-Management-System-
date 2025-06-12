import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
    itemId: { type: String, required: true, unique: true },
    itemName: { type: String, required: true },
    category: { 
        type: String, 
        enum: ['Food', 'Drink', 'Cleaning Supply', 'Linen', 'Furniture', 'Electronics', 'Other'], 
        required: true 
    },
    quantity: { type: Number, required: true }, // Current stock level
    unit: { 
        type: String, 
        enum: ['kg', 'liters', 'units', 'packs', 'bottles', 'boxes'], 
        required: true 
    }, // Measurement unit
    purchaseDate: { type: Date, required: true, default: Date.now }, // Date of purchase
    expiryDate: { type: Date, required: false }, // Expiry date (for food & perishable items)
    supplier: { type: String, required: false }, // Supplier name
    purchasePrice: { type: Number, required: true }, // Cost per unit
    sellingPrice: { type: Number, required: false }, // Selling price if applicable
    restockLevel: { type: Number, required: true }, // Minimum quantity before restocking
    lastRestockDate: { type: Date, default: Date.now }, // Date when last restocked
    status: { 
        type: String, 
        enum: ['In Stock', 'Low Stock', 'Out of Stock'], 
        default: 'In Stock' 
    }, // Status of item availability
    notes: { type: String, required: false } // Additional remarks
},{timestamps : true}
);

const Inventory = mongoose.model('Inventory',inventorySchema);
export default Inventory;