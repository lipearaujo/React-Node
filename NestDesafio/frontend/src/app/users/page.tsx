"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { instance } from "@/axios/axios";

type Props = {};

const Users = (props: Props) => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    instance
      .get("/person")
      .then((response) => {
        setPersons(response.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [setPersons]);

  const deletePerson = (id: string) => {
    instance.delete(`person/${id}`);
    alert("Pessoa deletada com sucesso!");
  };

  return (
    <>
      <header className="flex gap-5 flex-wrap items-center justify-between p-5">
        <h1 className="text-5xl font-bold">CRUD Database</h1>
        <Link
          href="http://localhost:3000"
          className=" text-white text-center w-[100px] bg-[#FA7070] p-2 rounded-xl hover:font-bold hover:shadow-lg hover:shadow-[#000] ease-in-out duration-300"
        >
          Voltar
        </Link>
      </header>

      <div className="p-5">
        <table className="w-full ">
          <tbody>
            <tr className="border-b border-gray-400">
              <th className="text-black text-xl">Nome</th>
              <th className="text-black text-xl">CEP</th>
              <th className="text-black text-xl">Número</th>
              <th className="text-black text-xl">Complemento</th>
              <th className="text-black text-xl">Bairro</th>
              <th className="text-black text-xl">Estado</th>
              <th className="text-black text-xl">Cidade</th>
              <th className="text-black text-xl">Ações</th>
            </tr>

            {persons.map((person: any, key) => (
              <tr key={key} className="text-center border-b border-gray-400">
                <td className="">{person.name}</td>
                <td className="">{person.CEP}</td>
                <td className="">{person.number}</td>
                <td className="">{person.complement}</td>
                <td className="">{person.neighborhood}</td>
                <td className="">{person.state}</td>
                <td className="">{person.city}</td>
                <td className="flex justify-center gap-5">
                  <button className="text-white text-center w-[80px] bg-[#FFBB70] p-2 rounded-xl hover:font-bold hover:shadow-lg hover:shadow-[#000] ease-in-out duration-300">
                    Editar
                  </button>
                  <button
                    onClick={() => deletePerson(person.id)}
                    className="text-white text-center w-[80px] bg-[#803D3B] p-2 rounded-xl hover:font-bold hover:shadow-lg hover:shadow-[#000] ease-in-out duration-300"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
