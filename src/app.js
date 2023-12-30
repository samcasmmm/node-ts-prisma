import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import { sendResponse, token } from './utils/index.js'
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

app.get('/token', (req, res) => {

   res.json({
      meta: null,
      status: 200,
      message: "Token is generated1",
      data: token({ id: 2 })
   })

});


app.use(errorMiddleware)
app.use(notFoundMiddleware)
export default app;