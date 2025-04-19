import express from 'express';
import orderController from '../controller/order.controller.js';

const { 
    getAllOrders,
    getOrderById,
    addNewOrder,
    updateOrderById,
    deleteOrderById,
} = orderController;

const router = express.Router();

router.get('/orders', getAllOrders);
router.get('/orders/:id', getOrderById);
router.post('/orders', addNewOrder);
router.put('/orders/:id', updateOrderById);
router.delete('/orders/:id', deleteOrderById);

export default router;
