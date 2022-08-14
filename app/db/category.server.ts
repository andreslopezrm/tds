import { Entity, Repository, Schema } from "redis-om";
import { redisClient, redisConnect } from "./redis.server";

export interface Category {
    name: string,
    slug: string,
    userId: string,
    createAt: Date
}

export class Category extends Entity {}

export type CategoryCreate = Pick<Category, "userId" | "name" | "slug">

export type CategoryUpdate = Pick<Category, "entityId" | "name" | "slug">

export type CategorySearch = {
    userId: string;
    offset?: number;
    perPage?: number;
}

const categorySchema = new Schema(Category, {
    name: { type: "string" },
    slug: { type: "string", indexed: true },
    userId: { type: "string", indexed: true },
    createAt: { type: "date"}
});

async function getCategoryRepository(): Promise<Repository<Category>> {
    await redisConnect();
    const repository = redisClient.fetchRepository(categorySchema);
  
    await repository.createIndex();
    return repository;
}

export async function createCategory({ userId, name, slug } : CategoryCreate) : Promise<Category> {
    const repository = await getCategoryRepository();
    return repository.createAndSave({ userId, name, slug, createAt: new Date() });
}

export async function getAllCategoriesByUser({ userId, offset = 0, perPage = 1}: CategorySearch): Promise<Category[]> {
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

export async function getCategoryById(entityId: string): Promise<Category> {
    const repository = await getCategoryRepository();
    return repository.fetch(entityId);
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
    const repository = await getCategoryRepository();
    return repository.search()
                .where("slug")
                .equals(slug)
                .first();
}

export async function updateCategory({ entityId, name, slug }: CategoryUpdate): Promise<string> {
    const repository = await getCategoryRepository();
    const category = await getCategoryById(entityId);
    
    if(!category) {
        throw new Error("Category not found");
    }
    category.name = name;
    category.slug = slug;
    return repository.save(category);
}

export async function deleteCategory(entityId: string): Promise<void> {
    const repository = await getCategoryRepository();
    await repository.remove(entityId);
}