import express from 'express';
import roomController from '../controller/roomMenu.controller.js';

const { 
    getAllRooms, 
    getRoomById, 
    addNewRoom, 
    updateRoomById, 
    deleteRoomById 
} = roomController;

const router = express.Router();

router.get('/rooms', getAllRooms);
router.get('/rooms/:id', getRoomById);
router.post('/rooms', addNewRoom);
router.put('/rooms/:id', updateRoomById);
router.delete('/rooms/:id', deleteRoomById);

export default router;
