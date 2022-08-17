import { Entity, Repository, Schema } from "redis-om";
import { redisClient, redisConnect } from "./redis.server";
import dayjs from "dayjs";

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
    
    const now = dayjs();
    now.hour(0);
    now.minute(0);
    now.second(0);
    now.millisecond(0);

    const createAt = now.toDate();

    const existToday = await repository.search()
                        .where("createAt")
                        .equals(createAt)
                        .first();

    if(existToday) {
        existToday.count = (existToday.count === undefined || existToday.count === null) ? 0 : existToday.count + 1;
        repository.save(existToday);
        return existToday;
    }

    return repository.createAndSave({ userId, createAt, count: 0 });
}

export async function getStatsInWeek(userId: string) {
    const repository = await getStatRepository();
    
    const now = dayjs();
    now.hour(0);
    now.minute(0);
    now.second(0);
    now.millisecond(0);

    const oneDaysAgo = now.subtract(1, "day");
    const twoDaysAgo = now.subtract(2, "day");

    const stats = await repository.search()
                    .where("userId")
                    .equals(userId)
                    .where("createAt")
                    .between(twoDaysAgo.toDate(), now.toDate())
                    .all();

    return [now, oneDaysAgo, twoDaysAgo].map(date => (
        {
            date: date.format('DD MMM YYYY'),
            count: stats.find(stat => stat.createAt == date.toDate())?.count ?? 0
        }
    ));
}