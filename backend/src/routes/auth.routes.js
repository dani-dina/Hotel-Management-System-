import express from 'express';
import Login from '../auth/login.auth.js';

const router = express.Router()

router.post('/auth',Login);

export default router;