import { createContext } from "react";

const blogContext = createContext();

export const blogProvider = ({ children }) => {
  return <blogContext.Provider value={{}}>{children}</blogContext.Provider>;
};

export default blogContext;
