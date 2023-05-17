import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-20 bg-slate-900 text-slate-300 py-4 px-8">
      <h2 className="font-bold text-4xl">
        <Link to={`/`}>Blog</Link>
      </h2>
      <ul className="flex justify-center items-center gap-8">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li className="font-bold border rounded-2xl py-2 px-4">
          <Link to={`/new`}>New Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
