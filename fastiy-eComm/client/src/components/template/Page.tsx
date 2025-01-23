import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Page = (props: Props) => {
  return (
    <main className="flex flex-col w-screen h-screen overflow-x-hidden">
      <Header />
      {props.children}
    </main>
  );
};

export default Page;
