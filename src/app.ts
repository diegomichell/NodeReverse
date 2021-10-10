import cors from 'cors';
import express from 'express';
import { StringsRouter } from './routes';

const app = express();

app.use(cors());

app.use(StringsRouter);

export default app;
