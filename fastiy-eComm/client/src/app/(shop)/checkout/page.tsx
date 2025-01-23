"use client";
import Page from "@/components/template/Page";
import useCart from "@/hooks/useCart";
import instance from "@/lib/axios";
import { IProduct } from "@/models/products";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const Checkout = (props: Props) => {
  const values = localStorage.getItem("values") as string;
  const value = JSON.parse(values);
  const token = value?.[0];
  const customerId = value?.[1];

  const [products, setProducts] = useState<IProduct[]>([]);

  const {
    addToCart,
    removeFromCart,
    checkout,
    getCartItemCount,
    updateCartItemCount,
    getTotalCartAmount,
  } = useCart();

  const totalAmount = getTotalCartAmount();

  const fetchProducts = async () => {
    try {
      await instance.get("/products").then((response) => {
        setProducts(response.data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {token != null ? (
        <Page>
          <div className="w-full container mx-auto flex flex-col items-center p-3">
            <h1 className="font-bold text-3xl">Your Cart Items</h1>
            <div className="flex flex-col gap-20 w-full h-full mt-5 items-center justify-center">
              {products.map((product, index) => {
                if (getCartItemCount(product.id) !== 0) {
                  const cartItemCount = getCartItemCount(product.id);
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between w-[40%] p-3 rounded-2xl shadow-xl "
                    >
                      <div className="w-36 h-36 relative">
                        <Image
                          src={product.imageURL}
                          fill
                          alt=""
                          quality={100}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center gap-3">
                        <p className="text-xl font-bold">{product.name}</p>
                        <p className="text-xl">Price: ${product.price}</p>
                        <div className="flex justify-center items-center gap-1">
                          <button
                            className="rounded-full w-6 h-6 flex items-center justify-center font-bold bg-zinc-900 text-white"
                            onClick={() => removeFromCart(product.id)}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="border w-1/4 p-2"
                            value={cartItemCount}
                            onChange={(e) =>
                              updateCartItemCount(
                                Number(e.target.value),
                                product.id
                              )
                            }
                          />
                          <button
                            className="rounded-full w-6 h-6 flex items-center justify-center font-bold bg-zinc-900 text-white"
                            onClick={() => addToCart(product.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}

              {totalAmount !== 0 ? (
                <div className="flex flex-col items-center justify-center gap-4 ">
                  <p className="font-semibold">
                    Subtotal: ${totalAmount.toFixed(2)}
                  </p>
                  <div className="flex gap-4 w-96 mt-4">
                    <Link
                      className="py-2 px-4 w-1/2 font-semibold rounded-md border border-black hover:bg-zinc-900 hover:text-white duration-300"
                      href="/"
                    >
                      Continue Shopping
                    </Link>
                    <button
                      className=" w-1/2 font-semibold rounded-md border border-black hover:bg-zinc-900 hover:text-white duration-300"
                      onClick={() => checkout(customerId)}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              ) : (
                <h2 className="flex items-center justify-center text-3xl font-extrabold">
                  Your Shopping Cart is Empty!
                </h2>
              )}
            </div>
          </div>
        </Page>
      ) : (
        redirect("/auth")
      )}
    </>
  );
};

export default Checkout;
