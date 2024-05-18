import { Application, Request, Response } from 'express';
import cors from 'cors';
import express from 'express';
// const express = require('express')
const app: Application = express();
// const port = 3000

//parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  // const a = 10;

  res.send('Hello World!');

  // res.send(a);
});
// console.log(process.cwd());
export default app;
