import { Index } from "@upstash/vector";
import * as dotenv from 'dotenv'

dotenv.config()

export type Product = {
    id: string;
    imageId: string;
    name: string;
    size:"S" | "M" | "L";
    color:"white"| "beige" | "blue" | "green"| "purple";
    price: number;
}

// Passing type generic so that the vector's metadata can be inferred
export const db = new Index<Product>()