import { useState } from "react";
import { createContext } from "react";

const blogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  return <blogContext.Provider value={{ post, setPost }}>{children}</blogContext.Provider>;
};

export default blogContext;
