import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { blogProvider } from "./Utilities/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <blogProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </blogProvider>
);
