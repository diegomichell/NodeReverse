import express, { Router } from 'express';
import path from 'path';

// @ts-ignore
const AppRouter = new Router();

AppRouter.get('/app', async (req, res) => {
  const options = {root: path.join(__dirname, "../views")};
  res.sendFile('index.html',options);
});

AppRouter.use('/client', express.static(path.join(__dirname, "../views/js")));

export default AppRouter;
