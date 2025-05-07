import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { registerMicroApps, start } from "qiankun";
import Login from "./login";
import "@ant-design/v5-patch-for-react-19";
const basename = "/";
import { light, dark } from "./theme";
const el = document.getElementById("layout"),
  root = createRoot(el!);
root.render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Navigate to={`/app`} replace />} />
        <Route path="/app/*" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

registerMicroApps(
  [
    {
      name: "child-react-app", // app name registered
      entry: "//localhost:8082/",
      container: "#qiankun",
      activeRule: "/app/",
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

// start({
//   sandbox: {
//     strictStyleIsolation: true, // 严格模式，开启shadow dom
//     experimentalStyleIsolation: true,
//   },
//   singular: true,
// });
