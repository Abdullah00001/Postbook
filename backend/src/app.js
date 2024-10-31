import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { baseUrl } from './constants.js';
import corsConfig from './configs/cors.configs.js';

const app = express();

/* ===============================
 --- CONFIGURATION MIDDLEWARES ---
=================================*/
app.use(express.json());
app.use(cors('*'));
app.use(cookieParser());

/* ===============================
------------- ROUTES ----------
=================================*/
import UserRoutes from './routes/user.routes.js';
import { get } from 'mongoose';

app.use(`${baseUrl}/`, (req, res) => {
  res.json({ message: 'Server Is Running' });
});
app.use(`${baseUrl}/user`, UserRoutes);

export { app };
