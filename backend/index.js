import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/database.config.js';
import { PORT } from './src/config/env.js';
import userRoutes from './src/routes/user.routes.js';
import serviceRoutes from './src/routes/service.routes.js';
import roomRoutes from './src/routes/room.routes.js';
import reservationRoutes from './src/routes/reservation.routes.js';
import productRoutes from './src/routes/product.routes.js';
import paymentRoutes from './src/routes/payment.routes.js';
import orderRoutes from './src/routes/order.routes.js';
import inventoryRoutes from './src/routes/inventory.routes.js';
import guestRoutes from './src/routes/guest.routes.js';
import foodRoutes from './src/routes/food.routes.js';
import employeeRoutes from './src/routes/employee.routes.js';
import drinkRoutes from './src/routes/drinks.routes.js';;
import passport from 'passport';
import './src/auth/passport.js';
import session from 'cookie-session';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

app.use(cors({
    origin: process.env.FRONTEND_ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

connectDB();

// Routess
app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/products', productRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/guests', guestRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/drinks', drinkRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Hotel Management API');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
