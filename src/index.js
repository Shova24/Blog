import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BlogProvider } from "./Utilities/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BlogProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BlogProvider>
);
