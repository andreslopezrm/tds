import { Client } from "redis-om";

const redisClient = new Client();

const redisConnect = async () => {
  console.log('conctando')
    if (!redisClient.isOpen()) {
      console.log('...abriando conexion')
      await redisClient.open(process.env.REDIS_URL);
    }
};

export { redisClient, redisConnect };

