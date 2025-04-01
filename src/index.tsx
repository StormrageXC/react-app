import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { registerMicroApps, start } from "qiankun";
import Login from "./login";
const basename = "/";
const el = document.getElementById("yourContainer"),
  root = createRoot(el!);
root.render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Navigate to={`/app`} replace />} />
        <Route path="/app" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

registerMicroApps(
  [
    {
      name: "nicefish-react-main", // app name registered
      entry: "//localhost:8091/post",
      container: "#qiankun",
      activeRule: "/app",
    },
  ],
  {
    beforeLoad: (app): any => {
      console.log("before load", app.name);
    },
    beforeMount: (app): any => {
      console.log("before mount", app.name);
    },
  }
);

start();
