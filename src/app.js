import express from 'express'
import morgan from 'morgan';
import cors from 'cors'

const app = express();

// @ In-built Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

// @ Routes 
app.get('/', (req, res) => {
   res.json({ msg: 'Hello' })
})

export default app;