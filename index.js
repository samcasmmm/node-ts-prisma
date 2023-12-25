// @ Package File
import dotenv from 'dotenv'

dotenv.config()

// @ Imported File
import app from './src/app.js'
import { connectDB } from './src/config/index.js';



// @ In-built Middleware
// @ Routes 
// @ Custom  Middleware



const startServer = async () => {
   try {
      connectDB(process.env.MONGODB_URL);
   } catch (error) {
      console.log(error);
   }
   app.listen(process.env.PORT, () => {
      console.log(
         `${process.env.NODE_ENV} server on http://localhost:${process.env.PORT}`
      );
   });
};

startServer();
