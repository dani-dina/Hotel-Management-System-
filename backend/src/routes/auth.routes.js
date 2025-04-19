import express from 'express';
import login from '../auth/login.auth.js';

const router = express.Router()

router.post('/',login);

export default router;