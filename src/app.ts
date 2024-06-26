import { Application, Request, Response } from 'express';
import cors from 'cors';
import express from 'express';
import { StudentRoutes } from './app/modules/student/student.route';

// const express = require('express')
const app: Application = express();
// const port = 3000

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

const getController = (req: Request, res: Response) => {
  const a = 30;

  res.send(a);
};

app.get('/', getController);
// console.log(process.cwd());
export default app;
