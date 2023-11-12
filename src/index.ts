import express, { Application } from 'express';
import connectDatabase from '@/config/connectDatabase';
import 'module-alias/register';

const app: Application = express();

app.get('/', (req, res) => {
  res.send({
    status: res.statusCode,
    message: 'success',
    url: req.url,
    meta: '',
    data: '',
  });
});

const startServer = () => {
  app.listen(9001, () => {
    console.log('working');
    // connectDatabase();
    console.log(`Server listening on http://localhost:${9001}`);
  });
};

startServer();
