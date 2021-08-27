import axios from "axios";

export const getPosts = async (page) => {
  const res = await fetch(`http://localhost:3000/posts?_page=${page}`);
  return res.json();
};

export const addPost = async (data) => {
  axios.post("http://localhost:3000/posts", data);
};

export const deletePost = async (id) => {
  axios.delete(`http://localhost:3000/posts/${id}`);
};
