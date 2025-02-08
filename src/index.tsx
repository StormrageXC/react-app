import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const el = document.getElementById("root"),
  root = createRoot(el!);
root.render(
  <>
    <App />
  </>
);
