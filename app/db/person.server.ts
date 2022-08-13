import { Entity, Schema } from "redis-om";
import { redisClient, redisConnect } from "./redis.server";

class Person extends Entity {}

const personSchema = new Schema(Person, {
  clerkId: { type: 'string' },
  provider: { type: 'string' },
})

export async function getAllPeople() {
    await redisConnect();
  
    const repository = redisClient.fetchRepository(personSchema);
  
    const offset = 0;
  
    const count = 200;
  
    const scores = await repository
      .search()
      .return.page(offset, count);
  
    return scores;
}

async function createIndex() {
  await redisConnect();

  const repository = redisClient.fetchRepository(personSchema);

  await repository.createIndex();
  await redisClient.close();
}

createIndex();