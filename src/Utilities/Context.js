import { useState } from "react";
import { createContext } from "react";

const blogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  const getPosts = async () => {
    try {
      setShowLoader(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPost(data);
      setShowLoader(false);
    } catch {
      console.log("Something went wrong while fetching data");
    }
  };
  return <blogContext.Provider value={{ post, showLoader, setShowLoader, setPost, getPosts }}>{children}</blogContext.Provider>;
};

export default blogContext;
