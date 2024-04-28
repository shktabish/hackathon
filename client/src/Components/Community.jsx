import React, { useState, useEffect } from "react";
import { FaRegComment } from "react-icons/fa6";
import api from "../utils/axios";
import Comment from '../Components/Ui/Comment'; // Import the Comment component
import Navbar from './Ui/Navbar';

export default function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await api.get("/post/post");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col gap-5 h-full w-screen">
      <Navbar />
      {posts.map((post) => (
        <div
          key={post._id}
          className="mx-auto w-[80%] p-6 bg-white rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src={post.profilePic}
              alt="Profile"
            />
            <div className="text-lg font-semibold">{post.name}</div>
          </div>
          <div className="mt-2 text-xl font-semibold">{post.title}</div>
          <div className="mt-2 overflow-hidden text-justify">{post.desc}</div>
          <div className="flex items-center gap-2 mt-4">
            <FaRegComment /> Add Comments
          </div>
        </div>
      ))}
      <Comment setPosts={setPosts} />
    </div>
  );
}
