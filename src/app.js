import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import { sendResponse } from './utils/index.js'
import { errorMiddleware, notFoundMiddleware } from './middlewares/error.middleware.js'

const app = express();

// @ In-built Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

// @ Routes 

app.get('/', (req, res) => {
   res.json({ msg: 'Hello' })
})

app.get('/error', (req, res) => {
   sendResponse(res, 'error', null, null, 404, 'Resource not found');
});
app.get('/ec2', (req, res) => {
   sendResponse(res, 'error', null, null, 404, 'Resource not found');
});


app.use(errorMiddleware)
app.use(notFoundMiddleware)
export default app;