
import { createClient } from 'redis';

const RedisClient = createClient({
   password: process.env.REDIS_PASSWORD,
   host: process.env.REDIS_ENDPOINT,
   port: process.env.REDIS_PORT
});

RedisClient.on('connect', () => {
   console.log('Connected to Redis');
});

RedisClient.on('error', (err) => {
   console.error('Redis error:', err);
});



export default RedisClient
