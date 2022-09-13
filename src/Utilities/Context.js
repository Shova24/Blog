import { useState } from "react";
import { createContext } from "react";

const blogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  };
  return <blogContext.Provider value={{ post, setPost, getPosts }}>{children}</blogContext.Provider>;
};

export default blogContext;
