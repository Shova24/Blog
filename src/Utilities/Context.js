import { useState } from "react";
import { createContext } from "react";

const blogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const getPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPost(data);
    } catch {
      console.log("Something went wrong while fetching data");
    }

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => setPost(data));
  };
  return <blogContext.Provider value={{ post, setPost, getPosts }}>{children}</blogContext.Provider>;
};

export default blogContext;
