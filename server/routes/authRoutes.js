import express from 'express';
import { login, register, logout, sendVerifyOtp, verifyEmail } from '../controllers/authController.js';
import userAuth from '../middleware/userauth.js';

const authRoutes = express.Router();

authRoutes.post('/register', register);
authRoutes.post('/login', login);
authRoutes.post('/logout', logout);
authRoutes.post('/verify', userAuth, sendVerifyOtp);
authRoutes.post('/verify-account', userAuth, verifyEmail);

export default authRoutes;