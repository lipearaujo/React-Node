import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import blogFetch from "./../axios/config";

const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetch.post("/posts", {
      body: post,
    });

    navigate("/");
  };

  return (
    <div className="h-screen flex justify-center">
      <form
        onSubmit={(e) => createPost(e)}
        className="flex flex-col w-full max-w-lg gap-8"
      >
        <div className="flex flex-col justify-center items-start ">
          <label
            htmlFor="title"
            className="font-bold text-2xl text-white text-center mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-md bg-slate-700 outline-0 border-0"
            name="title"
            id="title"
            placeholder="Type the title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col justify-center items-start">
          <label
            htmlFor="body"
            className="font-bold text-2xl text-white text-center mb-2"
          >
            Content:
          </label>
          <textarea
            className="outline-0 border-0 bg-slate-700 resize-none w-full p-2 rounded-md"
            name="body"
            id="body"
            placeholder="Type the content..."
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          value="Create Post"
          className="w-full max-w-xs my-0 mx-auto font-bold bg-white hover:bg-zinc-900 hover:text-white transition ease-in-out delay-150 text-black border rounded-2xl py-2 px-4"
        />
      </form>
    </div>
  );
};

export default NewPost;
