"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { FaShoppingCart } from "react-icons/fa";
import MobileHeader from "./MobileHeader";

import { deleteSession, getCookie } from "@/lib/session";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import useCart from "@/hooks/useCart";

const Header = () => {
  const [cookies, setCookies] = useState<string | null>();

  const router = useRouter();

  const { itemsCount } = useCart();

  const getSession = async () => {
    try {
      const cookie = await getCookie();

      setCookies(cookie);
    } catch (error) {
      console.log(error);
    }
  };

  const destroySession = async () => {
    try {
      await deleteSession();
      localStorage.clear();

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <header className="w-screen py-5 bg-zinc-900 text-white flex items-center">
      <nav className="container mx-auto hidden sm:flex sm:justify-between ">
        <div>
          <Link href="/">
            <h1 className="text-4xl font-extrabold">FastShop</h1>
          </Link>
        </div>

        <div className="flex items-center gap-6 text-2xl">
          <Link href="/">
            <p className="">Shop</p>
          </Link>
          <Link href="/purchased">
            <p className="">Purchased</p>
          </Link>

          <Link href="/checkout">
            <i>
              <FaShoppingCart />
            </i>
          </Link>
          <div className="w-6 h-6 rounded-full flex items-center justify-center relative top-[-10px] left-[-30px] bg-red-500 text-base">
            {itemsCount}
          </div>
          {cookies !== null ? (
            <button
              onClick={destroySession}
              className="text-xl relative left-[-30px]"
            >
              Logout
            </button>
          ) : (
            <Link href="/auth" className="text-xl relative left-[-30px]">
              Login
            </Link>
          )}
        </div>
      </nav>

      <div className="sm:hidden w-full">
        <MobileHeader />
      </div>
    </header>
  );
};

export default Header;
