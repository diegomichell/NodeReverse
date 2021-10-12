import cors from 'cors';
import express from 'express';
import { AppRouter, StringsRouter } from './routes';

const app = express();

app.use(cors());

app.use(StringsRouter);
app.use(AppRouter);

export default app;
