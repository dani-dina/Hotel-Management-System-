import express from 'express';
import serviceController from '../controller/service.controller.js';

const { 
    getAllServices, 
    getServiceById, 
    addNewService, 
    updateServiceById, 
    deleteServiceById 
} = serviceController;

const router = express.Router();

router.get('/services', getAllServices);
router.get('/services/:id', getServiceById);
router.post('/services', addNewService);
router.put('/services/:id', updateServiceById);
router.delete('/services/:id', deleteServiceById);

export default router;
