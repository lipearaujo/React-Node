"use client";
import { instance } from "@/axios/axios";
import { ChangeEvent, useEffect, useState } from "react";

import Card from "@/components/Card";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
  });

  useEffect(() => {
    instance
      .get("/user")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [setUsers]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    instance
      .post("/user", formValues)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = (id: string) => {
    instance.delete(`user/${id}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24">
      <div className="w-[300px] h-[200px] ">
        <form
          onSubmit={onSubmit}
          className="h-full border flex flex-col gap-4 p-3"
        >
          <input
            className="h-[50px] p-2 rounded-md outline-0 text-black"
            type="text"
            name="name"
            value={formValues.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            className="h-[50px] p-2 rounded-md outline-0 text-black"
            type="text"
            name="age"
            value={formValues.age}
            placeholder="Age"
            onChange={handleChange}
          />
          <button className="h-[30px] rounded-lg text-xl bg-gradient-to-r from-green-400 to-green-800 hover:font-bold hover:bg-green-500">
            Send
          </button>
        </form>
      </div>

      <p className="text-3xl">Registered Users</p>
      <div className="flex gap-3">
        {users.map((user: any, key) => (
          <Card key={key} name={user.name} age={user.age} deleteUser={() => deleteUser(user.id)} />
        ))}
      </div>

      {/*       <table className="w-full border">
        <tbody>
          <tr>
            <th className="border bg-gray-400 text-black text-xl">Name</th>
            <th className="border bg-gray-400 text-black text-xl">Age</th>
          </tr>
          {users.map((user: any) => (
            <tr className="text-center border">
              <td className="">{user.name}</td>
              <td className="">{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </main>
  );
}
