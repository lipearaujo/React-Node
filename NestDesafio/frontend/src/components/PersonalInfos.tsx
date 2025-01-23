"use client";
import React, { ChangeEvent, useState } from "react";
import { instance } from "@/axios/axios";

type Props = {};

const PersonalInfos = (props: Props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    gender: "",
    birthDate: "",
    maritalState: "",
    CEP: "",
    street: "",
    number: "",
    Complement: "",
    Neighborhood: "",
    State: "",
    City: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    instance
      .post("/person", formValues)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    alert("Pessoa cadastrada com sucesso!");
      
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-[500px] rounded-lg p-8 mx-auto my-5 bg-white flex flex-col justify-center gap-5"
    >
      <label htmlFor="name" className="flex items-center justify-between">
        <span className="text-xl">Nome:</span>
        <input
          className="border p-2 rounded-md "
          type="text"
          name="name"
          id=""
          onChange={handleChange}
        />
      </label>
      <label htmlFor="gender" className="flex items-center justify-between">
        <span className="text-xl">Gênero:</span>
        <input
          className="border p-2  rounded-md"
          type="text"
          name="gender"
          id=""
          onChange={handleChange}
        />
      </label>
      <label htmlFor="birthDate" className="flex items-center justify-between">
        <span className="text-xl">Nascimento:</span>
        <input
          className="border p-2  rounded-md "
          type="text"
          name="bithDate"
          id=""
          onChange={handleChange}
        />
      </label>

      <label
        htmlFor="maritalState"
        className="flex items-center justify-between"
      >
        <span className="text-xl">Estado Civil:</span>
        <input
          className="border p-2 rounded-md "
          type="text"
          name="maritalState"
          id=""
          onChange={handleChange}
        />
      </label>

      <label htmlFor="CEP" className="flex items-center justify-between">
        <span className="text-xl">CEP:</span>
        <input
          className="border p-2 rounded-md "
          type="text"
          name="CEP"
          id=""
          onChange={handleChange}
        />
      </label>

      <label htmlFor="street" className="flex items-center justify-between">
        <span className="text-xl">Rua:</span>
        <input
          className="border p-2 rounded-md "
          type="text"
          name="street"
          id=""
          onChange={handleChange}
        />
      </label>

      <label htmlFor="number" className="flex items-center justify-between">
        <span className="text-xl">Número:</span>
        <input
          className="border p-2 rounded-md "
          type="text"
          name="number"
          id=""
          onChange={handleChange}
        />
      </label>

      <label htmlFor="Complement" className="flex items-center justify-between">
        <span className="text-xl">Complemento:</span>
        <input
          className="border p-2 rounded-md "
          type="text"
          name="complement"
          id=""
          onChange={handleChange}
        />
      </label>

      <label
        htmlFor="Neighborhood"
        className="flex items-center justify-between"
      >
        <span className="text-xl">Bairro:</span>
        <input
          className="border p-2 rounded-md "
          type="text"
          name="neighborhood"
          id=""
          onChange={handleChange}
        />
      </label>

      <label htmlFor="state" className="flex items-center justify-between">
        <span className="text-xl">Estado:</span>
        <input
          className="border p-2 rounded-md "
          type="text"
          name="state"
          id=""
          onChange={handleChange}
        />
      </label>

      <label htmlFor="city" className="flex items-center justify-between">
        <span className="text-xl">Cidade:</span>
        <input
          className="border p-2 rounded-md "
          type="text"
          name="city"
          id=""
          onChange={handleChange}
        />
      </label>

      <button className="w-[150px] h-[30px] m-auto rounded-lg text-xl bg-gradient-to-r from-green-400 to-green-800 hover:font-bold hover:bg-green-500">
        Cadastrar
      </button>
    </form>
  );
};

export default PersonalInfos;
