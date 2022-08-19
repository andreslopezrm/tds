import { Entity, Repository, Schema } from "redis-om";
import { uuid } from "uuidv4";
import { redisClient, redisConnect } from "./redis.server";

export interface ApiKey {
    userId: string;
    value: string;
    updateAt: Date;
}

export class ApiKey extends Entity {}

const apiKeySchema = new Schema(ApiKey, {
    userId: { type: "string", indexed: true },
    value: { type: "string", indexed: true },
    updateAt: { type: "date" }
});


async function getApiKeyRepository(): Promise<Repository<ApiKey>> {
    await redisConnect();
    const repository = redisClient.fetchRepository(apiKeySchema);
  
    await repository.createIndex();
    return repository;
}

export function generateApiKeyValue(): string {
    return `${uuid()}-api-key`;
}

export async function getApiKeyByUser(userId: string): Promise<ApiKey | null> {
    const repository = await getApiKeyRepository();

    return repository.search()
            .where("userId")
            .equals(userId)
            .first();
}

export async function createApiKey(userId: string) : Promise<ApiKey> {
    const repository = await getApiKeyRepository();                   
    const value = generateApiKeyValue();
    return repository.createAndSave({ userId, value, updateAt: new Date() });
}


export async function updateApiKey(userId: string) : Promise<ApiKey> {
    const repository = await getApiKeyRepository();
    const apiKey = await getApiKeyByUser(userId);
    
    if(apiKey) {
        apiKey.value = generateApiKeyValue();
        await repository.save(apiKey);
        return apiKey;
    }                       
    const value = generateApiKeyValue();
    return repository.createAndSave({ userId, value, updateAt: new Date() });
}

export async function getUserIdByApiKey(apiKey: string): Promise<string | undefined> {
    const repository = await getApiKeyRepository();
    const entity = await repository.search()
                            .where("value")
                            .equals(apiKey)
                            .first();
    return entity?.userId;
}