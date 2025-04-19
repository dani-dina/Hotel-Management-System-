import express from 'express';
import reservationsController from '../controller/reservations.controller.js';

const { 
    getAllReservations, 
    getReservationById, 
    addNewReservation, 
    updateReservationById, 
    deleteReservationById 
} = reservationsController;

const router = express.Router();

router.get('/reservations', getAllReservations);
router.get('/reservations/:id', getReservationById);
router.post('/reservations', addNewReservation);
router.put('/reservations/:id', updateReservationById);
router.delete('/reservations/:id', deleteReservationById);

export default router;
