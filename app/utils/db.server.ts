import { Client, Entity, Repository, Schema } from 'redis-om'
const url = "redis://default:IGR4niFMT9eR0LXMPu7rG0iRSSVg0XZ3@redis-15245.c273.us-east-1-2.ec2.cloud.redislabs.com:15245";

const client = new Client();

class Person extends Entity {}

const personSchema = new Schema(Person, {
  firstName: { type: 'string' },
  lastName: { type: 'string' }
})

const connect = async () => {
    if (!client.isOpen()) {
      await client.open(url);
    }
};

export const createIndex = async () => {
    await connect();
  
    const repository = client.fetchRepository(personSchema);
  
    await repository.createIndex();
    await client.close();
};


createIndex();

export const searchScore = async () => {
    await connect();
  
    const repository = client.fetchRepository(personSchema);
  
    const offset = 0;
  
    const count = 200;
  
    const scores = await repository
      .search()
      .return.page(offset, count);
  
    return scores;
};

export const deleteScore = async () => {
    await connect();
    const repository = client.fetchRepository(personSchema);

    await repository.remove("01GAAJ7HPYKBNVBPH7PAJ9YEKH")
}
