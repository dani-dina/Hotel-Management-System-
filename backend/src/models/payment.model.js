import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    paymentId : {type : String , required : true, unique : true},
    orderId :{type : mongoose.Schema.Types.ObjectId,required : true, ref: 'Order',},
    guestId : {type : mongoose.Schema.Types.ObjectId, required : true, ref: 'Guest',},
    amount  : {type : Number , required : true},
    paymentMethod: { type: String, enum: [
        'Credit Card',
        'Debit Card',
        'PayPal',
        'Cash',
        'Bank Transfer'], required: true },
    paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed', 'Cancelled'], default: 'Pending' },
    paymentDate: { type: Date, default: Date.now },
    transactionId: { type: String, required: true },
    currency: { type: String, required: true, default: 'USD' },
    paymentReceipt: { type: String, required: false },
    notes: { type: String, required: false },
    paymentConfirmation: { type: Boolean, required: true, default: false }
},{timestamps : true}
);

const Payment = mongoose.model('Payment',paymentSchema);
export default Payment;
