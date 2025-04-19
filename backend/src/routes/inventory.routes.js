import express from 'express';
import inventoryController from '../controller/inventory.controller.js';

const { 
    getAllInventory, 
    getInventoryById, 
    addNewInventery, 
    updateInventoryById, 
    deleteInventoryById 
} = inventoryController;

const router = express.Router();

router.get('/inventory', getAllInventory);
router.get('/inventory/:id', getInventoryById);
router.post('/inventory', addNewInventery);
router.put('/inventory/:id', updateInventoryById);
router.delete('/inventory/:id', deleteInventoryById);

export default router;
