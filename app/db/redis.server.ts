import { Client } from "redis-om";

const redisClient = new Client();

const redisConnect = async () => {
    if (!redisClient.isOpen()) {
      await redisClient.open(process.env.REDIS_URL);
    }
};

export { redisClient, redisConnect };

