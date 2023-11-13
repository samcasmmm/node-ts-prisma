import express, { Application } from 'express';
import path from 'path';

import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';

import connectDatabase from './config/connectDatabase.js';

const app: Application = express();

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
  app.listen(9001, () => {
    console.log('working');
    connectDatabase();
    console.log(`Server listening on http://localhost:${9001}`);
  });
};

startServer();
