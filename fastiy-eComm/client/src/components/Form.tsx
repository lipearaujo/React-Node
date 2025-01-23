"use client";
import instance from "@/lib/axios";
import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { createSession } from "@/lib/session";

type Props = {
  type: string;
};

const Form = (props: Props) => {
  const router = useRouter();

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleRegister = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setRegister({ ...register, [name]: value });
  };

  const handleLogin = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLogin({ ...login, [name]: value });
  };

  const onSubmitRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await instance.post("/users/register", register).then((response) => {
        console.log(response.data);
      });
    } catch (error) {
      console.log(error);
    }

    setRegister({ name: "", email: "", password: "" });
  };

  const onSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await instance.post("/users/login", login).then((response) => {
        console.log(response.data);
        let values = [response.data.accessToken, response.data.userId];
        createSession(response.data.accessToken);
        localStorage.setItem("values", JSON.stringify(values));
        router.push("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      {props.type === "register" ? (
        <form
          method="POST"
          onSubmit={onSubmitRegister}
          className="flex flex-col items-center justify-center gap-5 h-96 rounded-md bg-zinc-900"
        >
          <h1 className="text-2xl font-bold text-white">Register</h1>
          <input
            type="text"
            className="border w-[50%] rounded-md p-3 text-xl outline-1 focus:border-0 focus:outline-none focus:outline-[#42ffa0]"
            placeholder="Name"
            required
            name="name"
            value={register.name}
            onChange={handleRegister}
          />
          <input
            type="email"
            className="border w-[50%] rounded-md p-3 text-xl outline-1 focus:border-0 focus:outline-none focus:outline-[#42ffa0]"
            placeholder="Email"
            required
            name="email"
            value={register.email}
            onChange={handleRegister}
          />
          <input
            type="password"
            className="border w-[50%] rounded-md p-3 text-xl outline-1 focus:border-0 focus:outline-none focus:outline-[#42ffa0]"
            placeholder="Password"
            required
            name="password"
            value={register.password}
            onChange={handleRegister}
          />
          <button
            type="submit"
            className="bg-white w-[30%] p-2 rounded-lg hover:bg-[#42ffa0] hover:font-bold hover:shadow-lg hover:shadow-[#42ffa0] duration-300"
          >
            Register
          </button>
        </form>
      ) : (
        <form
          method="POST"
          onSubmit={onSubmitLogin}
          className="flex flex-col items-center justify-center gap-5 h-96 rounded-md bg-zinc-900"
        >
          <h1 className="text-2xl font-bold text-white">Login</h1>
          <input
            type="email"
            className="border w-[50%] rounded-md p-3 text-xl outline-1 focus:border-0 focus:outline-none focus:outline-[#42ffa0]"
            placeholder="Email"
            required
            name="email"
            value={login.email}
            onChange={handleLogin}
          />
          <input
            type="password"
            className="border w-[50%] rounded-md p-3 text-xl outline-1 focus:border-0 focus:outline-none focus:outline-[#42ffa0]"
            placeholder="Password"
            required
            name="password"
            value={login.password}
            onChange={handleLogin}
          />
          <button
            type="submit"
            className="bg-white w-[30%] p-2 rounded-lg hover:bg-[#42ffa0] hover:font-bold hover:shadow-lg hover:shadow-[#42ffa0] duration-300"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
