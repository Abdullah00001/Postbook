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

app.use(`${baseUrl}/user`, UserRoutes);

export { app };
