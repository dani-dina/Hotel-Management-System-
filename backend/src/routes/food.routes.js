import express from 'express';
import foodController from '../controller/foodMenu.controller.js';

const { 
    getAllFoods, 
    getFoodById, 
    addNewFood, 
    updateFoodById, 
    deleteFoodById 
} = foodController;

const router = express.Router();

router.get('/foods', getAllFoods);
router.get('/foods/:id', getFoodById);
router.post('/foods', addNewFood);
router.put('/foods/:id', updateFoodById);
router.delete('/foods/:id', deleteFoodById);

export default router;
