// @ Package File
import dotenv from 'dotenv'

dotenv.config()

// @ Imported File
import app from './src/app.js'
import { connectDB } from './src/config/index.js';



// @ In-built Middleware
// @ Routes 
// @ Custom  Middleware


// @ fn Start Server
const startServer = async () => {
   app.listen(process.env.PORT, async () => {
      console.log(`Runing on http://localhost:${process.env.PORT}`);
      connectDB()
   })
};

// @ start server
startServer();
