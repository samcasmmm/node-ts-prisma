import express from 'express'
import morgan from 'morgan';
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const apolloServer = new ApolloServer({
   typeDefs: {},
   resolvers: {},
});

app.use(morgan('dev'));
app.use(express.json());
app.use('/graphql', expressMiddleware)

app.get('/', (req, res) => {
   res.json({ msg: 'Hello' })
})

const startServer = async () => {
   app.listen(port, async () => {
      console.log(`Runing on http://localhost:${port}`);
      await apolloServer.start()
   });
};

// @ start server
startServer();
