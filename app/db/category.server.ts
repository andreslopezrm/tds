import { Entity, Repository, Schema } from "redis-om";
import { redisClient, redisConnect } from "./redis.server";

interface Category {
    name: string,
    slug: string,
    userId: string,
    createAt: Date
}

class Category extends Entity {}

const categorySchema = new Schema(Category, {
    name: { type: "string" },
    slug: { type: "string" },
    userId: { type: "string" },
    createAt: { type: "date"}
});

async function getCategoryRepository(): Promise<Repository<Category>> {
    await redisConnect();
    const repository = redisClient.fetchRepository(categorySchema);
  
    await repository.createIndex();
    return repository;
}

export async function createCategory(userId: string, name: string) : Promise<Category> {
    const repository = await getCategoryRepository();
    return repository.createAndSave({ name, userId });
}

export async function getAllCategoriesByUser(userId: string, offset: number = 0, perPage: number = 1): Promise<Category[]> {
    const repository = await getCategoryRepository();

    return await repository.search()
            .where("userId")
            .equals(userId)
            .return
            .page(offset, perPage);
}

export async function countAllCategoriesByUser(userId: string): Promise<number> {
    const repository = await getCategoryRepository();

    return repository.search()
        .where("userId")
        .equals(userId)
        .return
        .count();
} 

export async function getCategoryById(categoryId: string): Promise<Category> {
    const repository = await getCategoryRepository();
    return repository.fetch(categoryId);
}

export async function updateCategory(categoryId: string, name: string): Promise<string> {
    const repository = await getCategoryRepository();
    const category = await getCategoryById(categoryId);
    
    if(!category) {
        throw new Error("Category not found");
    }
    category.name = name;
    return repository.save(category);
}

export async function deleteCategory(categoryId: string): Promise<void> {
    const repository = await getCategoryRepository();
    await repository.remove(categoryId);
}