import express from 'express';
import paymentController from '../controller/payment.controller.js';

const { 
    getAllPayments, 
    getPaymentById, 
    addNewPayment, 
    updatePaymentById, 
    deletePaymentById 
} = paymentController;

const router = express.Router();

router.get('/payments', getAllPayments);
router.get('/payments/:id', getPaymentById);
router.post('/payments', addNewPayment);
router.put('/payments/:id', updatePaymentById);
router.delete('/payments/:id', deletePaymentById);

export default router;
