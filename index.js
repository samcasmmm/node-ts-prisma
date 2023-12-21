import express from 'express'
import morgan from 'morgan';


const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
   res.json({ msg: 'Hello' })
})


app.get('/template', (req, res) => {
   const { uid, pid, tid, html } = req.query;

   if (uid === undefined || pid === undefined || tid === undefined, html === undefined) {
      res.status(400).json({ error: 'Please provide all parameters' });
   } else {
      res.json({ UserId: uid, PropertyId: pid, TemplateId: tid })

   }
});



const server = () => {
   const port = 3000;

   app.listen(port, () => {
      console.log(`Runing on http://localhost:${port}`);
   });
};

server();
