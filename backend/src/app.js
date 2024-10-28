import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { baseUrl } from './contants.js';
import corsConfig from './configs/cors.configs.js';

const app = express();

/* ===============================
 --- CONFIGURATION MIDDLEWARES ---
=================================*/
app.use(express.json());
app.use(cors(corsConfig));
app.use(cookieParser());

/* ===============================
------------- ROUTES ----------
=================================*/
import UserRouter from './routes/user.routes.js';

app.use(`${baseUrl}/user`, UserRouter);

export { app };
