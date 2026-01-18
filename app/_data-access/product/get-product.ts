import "server-only"

import { db } from "@/app/_lib/prisma"
import { Product } from "@prisma/client"
import { cache } from "react"

export interface ProductDTO extends Omit<Product, 'price'> {
  price: number;
}

export const getProducts = async (): Promise<ProductDTO[]> => {
  const products = await db.product.findMany({});
  return products.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
};

export const cachedGetProducts = cache(getProducts)