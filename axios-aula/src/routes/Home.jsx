import blogFetch from "../axios/config";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");

      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white text-center uppercase">
        Last posts
      </h1>
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div className="my-2 border-b" key={post.id}>
            <h2 className="font-bold text-2xl text-white">{post.title}</h2>
            <p className="text-slate-300">{post.body}</p>
            <p className="mt-4 mb-8">
              <Link
                to={`/posts/${post.id}`}
                className="bg-white hover:bg-zinc-900 hover:text-white transition ease-in-out delay-150 text-black border rounded-2xl py-2 px-4"
              >
                Read more...
              </Link>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
