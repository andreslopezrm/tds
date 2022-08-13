import { Entity, Repository, Schema } from "redis-om";
import { redisClient, redisConnect } from "./redis.server";

interface Product {
    name: string,
    userId: string,
    createAt: Date
}

class Product extends Entity {}

const productSchema = new Schema(Product, {
    name: { type: "string" },
    userId: { type: "string" },
    createAt: { type: "date"}
});

async function getProductRepository(): Promise<Repository<Product>> {
    await redisConnect();
    return redisClient.fetchRepository(productSchema);
}

export async function createProduct(userId: string, name: string) : Promise<Product> {
    const repository = await getProductRepository();
    return repository.createAndSave({ name, userId });
}

export async function getAllProductsByUser(userId: string, offset: number = 0, perPage: number = 1): Promise<Product[]> {
    const repository = await getProductRepository();

    return repository.search()
            .where("userId")
            .equals(userId)
            .return
            .page(offset, perPage);

}

export async function countAllProductsByUser(userId: string): Promise<number> {
    const repository = await getProductRepository();

    return repository.search()
        .where("userId")
        .equals(userId)
        .return
        .count();
} 

export async function getProductById(productId: string): Promise<Product> {
    const repository = await getProductRepository();
    return repository.fetch(productId);
}

export async function updateProduct(productId: string, name: string): Promise<string> {
    const repository = await getProductRepository();
    const product = await getProductById(productId);
    
    if(!product) {
        throw new Error("Product not found");
    }
    product.name = name;
    return repository.save(product);
}

export async function deleteProduct(productId: string): Promise<void> {
    const repository = await getProductRepository();
    await repository.remove(productId);
}

async function createIndex() {
    await redisConnect();
    const repository = redisClient.fetchRepository(productSchema);
  
    await repository.createIndex();
    await redisClient.close();
}
  
createIndex();