// lib/redis.js
import Redis from 'ioredis';

const redis = new Redis({
  host: 'localhost',   // The Redis server host (default: localhost)
  port: 6379,          // The Redis server port (default: 6379)
  // password: 'your-redis-password', // Uncomment if you set a password
});

export default redis;
