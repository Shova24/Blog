import { createContext } from "react";

const blogContext = createContext();

export const BlogProvider = ({ children }) => {
  return <blogContext.Provider value={{}}>{children}</blogContext.Provider>;
};

export default blogContext;
