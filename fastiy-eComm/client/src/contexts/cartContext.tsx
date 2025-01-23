"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";

import instance from "@/lib/axios";

import { IProduct } from "@/models/products";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

export interface cartProps {
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  getCartItemCount: (itemId: string) => number;
  updateCartItemCount: (newAmount: number, itemId: string) => void;
  getTotalCartAmount: () => number;
  checkout: (productId: string) => void;
  itemsCount: number;
}

const CartContext = createContext<cartProps>({} as any);

type Props = {
  children: ReactNode;
};

export function CartProvider(props: Props) {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState<{ string: number } | {}>(
    {}
  ) as any;

  const { value, updateLocalStorage } = useLocalStorage("cart-items");

  const router = useRouter();

  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    try {
      await instance
        .get("/products")
        .then((response) => setProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (itemId: string) => {
    if (!cartItems[itemId]) {
      setCartItems((prev: any) => ({ ...prev, [itemId]: 1 }));
      setCount(count + 1);
    } else {
      setCartItems((prev: { [x: string]: number }) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }
  };

  const removeFromCart = (itemId: string) => {
    if (!cartItems[itemId]) return;

    if (cartItems[itemId] == 0) return;

    setCartItems((prev: { [x: string]: number }) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getCartItemCount = (itemId: string): number => {
    if (itemId in cartItems) {
      return cartItems[itemId];
    }

    return 0;
  };

  const updateCartItemCount = (newAmount: number, itemId: string) => {
    if (newAmount < 0) return;

    setCartItems((prev: any) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo: IProduct | any = products.find(
          (product) => product.id === item
        );

        totalAmount += cartItems[item] * itemInfo?.price;
      }
    }

    return totalAmount;
  };

  const checkout = async (customerId: string) => {
    console.log(customerId);
    console.log(cartItems);
    try {
      await instance
        .post("/products/checkout", { customerId, cartItems })
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }

    setCount(0);

    router.push("/purchased");
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        getCartItemCount,
        updateCartItemCount,
        getTotalCartAmount,
        checkout,
        itemsCount: count,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
