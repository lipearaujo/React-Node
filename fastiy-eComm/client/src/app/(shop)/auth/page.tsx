"use client";
import Form from "@/components/Form";
import React from "react";

type Props = {};

const Auth = (props: Props) => {
  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <div className="w-full flex justify-center gap-10">
        <Form type="register" />
        <Form type="login" />
      </div>
    </div>
  );
};

export default Auth;
