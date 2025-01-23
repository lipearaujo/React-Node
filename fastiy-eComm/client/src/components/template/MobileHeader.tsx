import Link from "next/link";
import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

const MobileHeader = (props: Props) => {
  return (
    <div className="px-3 flex justify-between items-center">
      <div className="">
        <Link href="/">
          <h1 className="text-3xl font-extrabold">FastShop</h1>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <i className="text-3xl cursor-pointer" onClick={() => alert("Click")}>
          <GiHamburgerMenu />
        </i>
        {/*  <Link href="/">
      <p className="text-xl">Shop</p>
    </Link>
    <Link href="/purchased">
      <p className="text-xl">Purchased</p>
    </Link>
    <Link href="/checkout">
      <i className="text-xl">
        <FaShoppingCart />
      </i>
    </Link> */}
      </div>
    </div>
  );
};

export default MobileHeader;
