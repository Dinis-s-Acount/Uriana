import "server-only"

import { db } from "@/app/_lib/prisma"
import { Product } from "@/app/generated/prisma"
import { cache } from "react"

export const getProducts = async (): Promise<any[]> => {
  const products = await db.product.findMany({});
  return products.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
};

export const cachedGetProducts = cache(getProducts)