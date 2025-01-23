"use client";
import React, { useEffect, useState, ReactNode } from "react";

import Page from "@/components/template/Page";

import instance from "@/lib/axios";

import Card from "@/components/Card";
import { IProduct } from "@/models/products";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    try {
      await instance.get("/products").then((response) => {
        setProducts(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Page>
      <div className="container flex flex-wrap gap-8 justify-center mx-auto">
        {products.map((product, i) => (
          <Card
            key={i}
            product={product}
            /*             id={product.id}
            name={product.name}
            description={product.description}
            imageURL={product.imageURL}
            price={product.price}
            stockQuantity={product.stockQuantity} */
          />
        ))}
      </div>
    </Page>
  );
}
