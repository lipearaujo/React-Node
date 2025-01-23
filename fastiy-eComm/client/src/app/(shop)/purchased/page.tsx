"use client";
import React, { useContext, useEffect, useState } from "react";
import { redirect } from "next/navigation";

import Page from "@/components/template/Page";

import instance from "@/lib/axios";

import Image from "next/image";
import { IProduct } from "@/models/products";

type Props = {};

const Purchased = (props: Props) => {
  const values = localStorage.getItem("values") as string;
  const value = JSON.parse(values);
  const token = value?.[0];
  const customerId = value?.[1];

  const [user, setUser] = useState("");
  const [purchasedItems, setPurchasedItems] = useState([]);

  const getUser = async () => {
    try {
      await instance.post("/users/userdata", { token }).then((response) => {
        setUser(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPurchasedItems = async () => {
    try {
      await instance
        .get(`/products/purchased-items/${customerId}`)
        .then((response) => {
          setPurchasedItems(response.data.purchasedItems);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    fetchPurchasedItems();
  }, [user]);

  return (
    <>
      {token != null ? (
        <Page>
          <div className="w-full  container mx-auto flex flex-col p-3 items-center">
            <h1 className="font-bold text-3xl ">Previously Purchased Items</h1>
            <div className="flex flex-col gap-20 w-full mt-5 items-center ">
              {purchasedItems.length > 0 ? (
                purchasedItems.map((item: IProduct, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between w-[40%] p-3 rounded-2xl shadow-xl "
                  >
                    <div className="w-36 h-36 relative">
                      <Image
                        src={item.imageURL}
                        fill
                        alt=""
                        quality={100}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center gap-3">
                      <p className="text-xl font-bold">{item.name}</p>
                      <p className="text-xl">Price: ${item.price}</p>
                    </div>
                  </div>
                ))
              ) : (
                <h2 className="text-3xl font-extrabold">
                  You have not purchased items yet.
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

export default Purchased;
