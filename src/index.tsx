import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@ant-design/v5-patch-for-react-19";
import App from "./App";
const el = document.getElementById("root"),
  root = createRoot(el!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
