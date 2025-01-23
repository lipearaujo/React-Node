"use client";
import { ReactNode } from "react";

import { CartProvider } from "@/contexts/cartContext";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return <CartProvider>{props.children}</CartProvider>;
}
