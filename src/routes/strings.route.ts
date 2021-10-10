import express, { Router } from 'express';
import { StringsDataParams } from '../types';

// @ts-ignore
const StringsRouter = new Router();

StringsRouter.use(express.json());

StringsRouter.post('/data', async (req, res) => {
  try {
    const { data } = req.body as StringsDataParams;

    if (!data) {
      res.status(400).send({
        error: '"data" field is required',
      });
    }

    const reversedString = data.split('').reverse().join('');

    res.status(200).send({
      data: reversedString,
    });
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
});


export default StringsRouter;
