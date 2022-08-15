import { Entity, Schema } from "redis-om";
import { createApiKey } from "./apikey.server";
import { createCategory } from "./category.server";
import { redisClient, redisConnect } from "./redis.server";

class User extends Entity {}

const userSchema = new Schema(User, {
    clerkId: { type: "string" },
    provider: { type: "string" },
    active: { type: "boolean"},
    createAt: { type: "date"}
});


async function getUserRepository() {
    await redisConnect();
    const repository = redisClient.fetchRepository(userSchema);
  
    await repository.createIndex();
    return repository;
}

export async function checkUser(userId: string) {
    const repository = await getUserRepository();
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

        await createCategory({ userId, name: "Default" });
        await createApiKey(userId);
    }
}