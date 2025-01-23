import React from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

type Props = {
  name: string;
  age: string;
  deleteUser: (id: any) => void
};

const Card = ({ name, age, deleteUser }: Props) => {
  return (
    <div className="w-[300px] h-[300px] text-black p-3 rounded-xl bg-white flex flex-col justify-center gap-6 ">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <div className="flex items-end justify-center gap-6 h-full">
        <button>
          <i className="text-2xl text-blue-600">
            <GrUpdate />
          </i>
        </button>
        <button>
          <i className="text-2xl text-red-700" onClick={deleteUser}>
            <MdDelete />
          </i>
        </button>
      </div>
    </div>
  );
};

export default Card;
