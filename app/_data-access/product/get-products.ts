import "server-only";
import { db } from "@/app/_lib/prisma";
import { Product } from "@/app/generated/prisma";
import { cache } from "react";

export type ProductStatusDto = "IN_STOCK" | "OUT_OF_STOCK";

export interface ProductsDTO extends Omit<Product, "price"> {
   price: number;
   status: ProductStatusDto;
}

export const getProducts = async (): Promise<ProductsDTO[]> => {
  const products = await db.product.findMany({});
  return products.map((product) => ({
    ...product,
    price: Number(product.price),
    status: product.stock > 0 ? "IN_STOCK" : "OUT_OF_STOCK",
  }));
};

export const cachedGetProducts = cache(getProducts);
