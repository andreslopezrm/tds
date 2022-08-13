import { Entity, Schema } from "redis-om";
import { redisClient, redisConnect } from "./redis.server";

class User extends Entity {}

const userSchema = new Schema(User, {
    clerkId: { type: "string" },
    provider: { type: "string" },
    active: { type: "boolean"},
    createAt: { type: "date"}
});

export async function checkUser(userId: string) {
    await redisConnect();
  
    const repository = redisClient.fetchRepository(userSchema);
    const user = await repository.search()
                        .where("clerkId")
                        .equals(userId)
                        .first();

    if(!user) {
        await repository.createAndSave({
            clerkId: userId,
            active: true,
            createAt: new Date()
        });
    }
}

async function createIndex() {
    await redisConnect();
    const repository = redisClient.fetchRepository(userSchema);
  
    await repository.createIndex();
    await redisClient.close();
}
  
createIndex();