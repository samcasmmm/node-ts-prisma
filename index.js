import express from 'express'


const app = express();

const server = () => {
   const port = 3000;

   app.listen(port, () => {
      console.log(`http://localhost:7000`);
   });
};

server();
