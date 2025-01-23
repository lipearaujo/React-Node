import React, { ReactNode } from "react";
import Image from "next/image";
import useCart from "@/hooks/useCart";
import { IProduct } from "@/models/products";

interface CardProduct {
  product: IProduct;
}

const Card = (props: CardProduct) => {
  const { addToCart, getCartItemCount } = useCart();

  const cartItemCount = getCartItemCount(props.product.id);

  return (
    <div className="w-1/5 flex flex-col gap-4 items-center py-10">
      <div className="w-56 h-80 relative">
        <Image
          src={props.product.imageURL}
          fill
          alt=""
          quality={100}
          className="object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex flex-col gap-5 h-4/5">
          <p className="font-bold text-xl text-center">{props.product.name}</p>
          <p className="w-[90%] text-sm  h-28 flex items-center text-center mx-auto">
            {props.product.description}
          </p>
          <p className=" text-center font-semibold">U$ {props.product.price}</p>
        </div>
        <div className="w-full h-full flex flex-1 justify-center items-end ">
          {props.product.stockQuantity === 0 ? (
            <h1 className="font-extrabold">OUT OF STOCK</h1>
          ) : (
            <button
              onClick={() => addToCart(props.product.id)}
              className="w-40 px-4 py-2 rounded-md border border-black hover:bg-zinc-900 hover:text-white duration-300"
            >
              Add to cart {cartItemCount > 0 && <>({cartItemCount})</>}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
