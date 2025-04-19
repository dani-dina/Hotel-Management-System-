import express from 'express';
import drinksController from '../controller/drinks.controller.js';

const { getAllDrinks, getDrinkById, addNewDrink, updateDrinkById, deleteDrinkById } = drinksController;

const router = express.Router();

router.get('/drink', getAllDrinks);
router.get('/drink/:id', getDrinkById);
router.post('/drink', addNewDrink);
router.put('/drink/:id', updateDrinkById);
router.delete('/drink/:id', deleteDrinkById);

export default router;
