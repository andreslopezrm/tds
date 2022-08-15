import { Entity, Repository, Schema } from "redis-om";
import { redisClient, redisConnect } from "./redis.server";

export interface Stat {
    userId: string;
    createAt: Date;
    count: number;
}

export class Stat extends Entity {}

const statSchema = new Schema(Stat, {
    userId: { type: "string", indexed: true },
    createAt: { type: "date", indexed: true },
    count: { type: "number" }
});

async function getStatRepository(): Promise<Repository<Stat>> {
    await redisConnect();
    const repository = redisClient.fetchRepository(statSchema);
  
    await repository.createIndex();
    return repository;
}

export async function createStat(userId: string) {
    const repository = await getStatRepository();
    
    const createAt = new Date();
    createAt.setHours(0,0,0);
    //return repository.createAndSave({ userId, createAt });
}

export async function getStatsInWeek(userId: string) {
    const repository = await getStatRepository();
    
    const now = new Date();
    now.setHours(0,0,0);

    const sevenDaysAgo = new Date((+now) - (5*86400000));

    const stats = await repository.search()
                    .where("userId")
                    .equals(userId)
                    .where("createAt")
                    .between(sevenDaysAgo, now)
                    .all();

    return stats;
}