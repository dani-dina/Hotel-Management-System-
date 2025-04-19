import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderId : {type : String, required : true, unique : true},
    guestId : {type : mongoose.Schema.Types.ObjectId, ref : 'Guest' , required : true},
    discount: { type: Number, required: false, default: 0 },
    totalAmount  : {type : Number , required :  true},
    paymentStatus : {type : String , enum : ['pending','paid','cancelled'], default : 'pending'},
    orderStatus : {type : String , enum : ['processing','completed','cancelled','delivered'], default : 'processing'},
    orderedDate : {type : Date , default : Date.now},
    deliveryDate : {type : Date},
    orderItem : [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        itemName : {type : String, required : true},
        itemQuantity : {type : Number, required : true},
        price : {type : Number, required : true},
    }]
},{timestamps : true}
);

const Order = mongoose.model('Order',orderSchema);
export default Order;