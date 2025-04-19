import express from 'express';
import guestController from '../controller/guests.controller.js';

const { 
    getAllGuests, 
    getGuestById, 
    addNewGuest, 
    updateGuestById, 
    deleteGuestById 
} = guestController;

const router = express.Router();

router.get('/guests', getAllGuests);
router.get('/guests/:id', getGuestById);
router.post('/guests', addNewGuest);
router.put('/guests/:id', updateGuestById);
router.delete('/guests/:id', deleteGuestById);

export default router;
