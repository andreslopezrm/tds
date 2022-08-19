import { Entity, Repository, Schema } from "redis-om";
import { redisClient, redisConnect } from "./redis.server";
import dayjs from "dayjs";

const FORMAT = "DD-MM-YYYY";

export interface Stat {
    userId: string;
    createAt: string;
    count: number;
}

export class Stat extends Entity {}

const statSchema = new Schema(Stat, {
    userId: { type: "string", indexed: true },
    createAt: { type: "string", indexed: true },
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
    const createAt = now.format(FORMAT);

    const existToday = await repository.search()
                        .where("createAt")
                        .equals(createAt)
                        .first();
    

    if(existToday) {
        existToday.count = (existToday.count === undefined || existToday.count === null) ? 0 : existToday.count + 1;
        repository.save(existToday);
        return existToday;
    }
    
    const stat = await repository.createAndSave({ userId, createAt, count: 1 });
    return stat;
}

export async function getStatsInWeek(userId: string) {
    const repository = await getStatRepository();
    
    const now = dayjs();
    const oneDaysAgo = now.subtract(1, "day");
    const twoDaysAgo = now.subtract(2, "day");
    const threeDaysAgo = now.subtract(3, "day");
    const fourDaysAgo = now.subtract(4, "day");
    const fiveDaysAgo = now.subtract(5, "day");

    const nowFormat = now.format(FORMAT);
    const oneDaysAgoFormat = oneDaysAgo.format(FORMAT);
    const twoDaysAgoFormat = twoDaysAgo.format(FORMAT);
    const threeDaysAgoFormat = threeDaysAgo.format(FORMAT);
    const fourDaysAgoFormat = fourDaysAgo.format(FORMAT);
    const fiveDaysAgoFormat = fiveDaysAgo.format(FORMAT);

    const dates = [nowFormat, oneDaysAgoFormat, twoDaysAgoFormat, threeDaysAgoFormat, fourDaysAgoFormat, fiveDaysAgoFormat].reverse();
    
    const queries = dates.map(date => repository.search()
                                                .where("userId")
                                                .equals(userId)
                                                .where("createAt")
                                                .equals(date)
                                                .first()
    );
    const stats = await Promise.all(queries);

    return dates.map(date => (
        {
            date,
            count: stats.find(stat => stat?.createAt == date)?.count ?? 0
        }
    ));
}

export async function getStatsToday(userId: string): Promise<number> {
    const repository = await getStatRepository();

    const now = dayjs();
    const nowFormat = now.format(FORMAT);

    const stat = await repository.search()
                    .where("userId")
                    .equals(userId)
                    .where("createAt")
                    .equals(nowFormat)
                    .first();
    return stat?.count ?? 0;
}