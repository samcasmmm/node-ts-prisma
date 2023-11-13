import express, { Application } from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';

import connectDatabase from './config/connectDatabase.js';
import validateEnv from './utils/validateEnv.js';

const app: Application = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send({
    status: res.statusCode,
    message: 'success',
    url: req.url,
    meta: '',
    data: '',
  });
});

app.get('/health', (req, res) => {
  res.send({
    status: res.statusCode,
    message: 'success',
    url: req.url,
    meta: '',
    data: 'health is okay',
  });
});
app.get('/time', (req, res) => {
  let mr = morgan('combined');
  console.log(mr);
  setTimeout(() => {
    res.send({
      status: res.statusCode,
      message: 'success',
      url: req.url,
      meta: '',
      data: mr,
    });
  }, 5);
});

const startServer = () => {
  app.listen(PORT, () => {
    console.log('working');
    // connectDatabase();
    validateEnv();
    console.log(`Server listening on http://localhost:${PORT}`);
  });
};

startServer();
