import { useState } from "react";
import { createContext } from "react";

const blogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    try {
      setShowLoader(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUser(data);
      setShowLoader(false);
    } catch {
      console.log("Something went wrong while fetching users");
    }
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setUser(
    //       data.map((el) => ({
    //         ...el,
    //         key: el.id,
    //       }))
    //     );
    //   });
  };

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
  return <blogContext.Provider value={{ post, showLoader, user, getUsers, setPost, getPosts }}>{children}</blogContext.Provider>;
};

export default blogContext;
