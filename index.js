// @ Package File
import dotenv from 'dotenv'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
dotenv.config()

// @ Imported File
import app from './src/app.js'
import { typeDefs } from './src/graphql/typeDefs/index.js'
import { resolvers } from './src/graphql/resolvers/index.js'

// @ Graphql init

const apolloServer = new ApolloServer({
   typeDefs: typeDefs,
   resolvers: resolvers
})

// @ In-built Middleware
// @ Routes 
// @ Custom  Middleware


// @ fn Start Server
const startServer = async () => {
   await apolloServer.start()
   app.use('/graphql', expressMiddleware(apolloServer))
   app.listen(process.env.PORT, async () => {
      console.log(`Runing on http://localhost:${process.env.PORT}`);
   })
};

// @ start server
startServer();
