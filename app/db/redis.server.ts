import { Client } from 'redis-om'
const url = "redis://default:IGR4niFMT9eR0LXMPu7rG0iRSSVg0XZ3@redis-15245.c273.us-east-1-2.ec2.cloud.redislabs.com:15245";

const redisClient = new Client();

const redisConnect = async () => {
    if (!redisClient.isOpen()) {
      await redisClient.open(url);
    }
};

export { redisClient, redisConnect };

