import slugify from "slugify";
import { Entity, Repository, Schema } from "redis-om";
import { redisClient, redisConnect } from "./redis.server";

export interface Category {
    name: string,
    slug: string,
    userId: string,
    createAt: Date
}

export class Category extends Entity {}

export type CategoryCreate = Pick<Category, "userId" | "name">

export type CategoryUpdate = Pick<Category, "entityId" | "userId" | "name">

export type CategorySearchSlug = Pick<Category, "userId" | "slug">

export type CategorySearch = {
    userId: string;
    offset?: number;
    perPage?: number;
}

const categorySchema = new Schema(Category, {
    name: { type: "string" },
    slug: { type: "string", indexed: true },
    userId: { type: "string", indexed: true },
    createAt: { type: "date", sortable: true }
});

async function getCategoryRepository(): Promise<Repository<Category>> {
    await redisConnect();
    const repository = redisClient.fetchRepository(categorySchema);
  
    await repository.createIndex();
    return repository;
}

async function getCategorySlug({ userId, name } : CategoryCreate): Promise<string> {
    const slug = slugify(name);
    
   const category = await getCategoryByUserAndSlug({ userId, slug });
   if(category) {
    return `${slug}-${+new Date()}`;
   }

   return slug;
}

export async function createCategory({ userId, name } : CategoryCreate) : Promise<Category> {
    const repository = await getCategoryRepository();
    const slug = await getCategorySlug({ userId, name });
    return repository.createAndSave({ userId, name, slug, createAt: new Date() });
}

export async function getAllCategoriesByUser({ userId, offset = 0, perPage = 1}: CategorySearch): Promise<Category[]> {
    const repository = await getCategoryRepository();

    return await repository.search()
            .where("userId")
            .equals(userId)
            .sortDescending("createAt")
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

export async function getCategoryByUserAndSlug({ userId, slug }: CategorySearchSlug): Promise<Category | null> {
    const repository = await getCategoryRepository();
    return repository.search()
                .where("slug")
                .equals(slug)
                .where("userId")
                .equals(userId)
                .first();
}

export async function updateCategory({ entityId, userId, name }: CategoryUpdate): Promise<Category> {
    const repository = await getCategoryRepository();
    const category = await getCategoryById(entityId);
    
    if(!category) {
        throw new Error("Category not found");
    }
    const slug = await getCategorySlug({ userId, name });
    category.name = name;
    category.slug = slug;
    
    await repository.save(category);
    return category;
}

export async function deleteCategory(entityId: string): Promise<void> {
    const repository = await getCategoryRepository();
    await repository.remove(entityId);
}
