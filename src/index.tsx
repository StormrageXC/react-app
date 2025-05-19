import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { registerMicroApps, start } from "qiankun";
import "@ant-design/v5-patch-for-react-19";
const basename = "/";
import store from "./store";
import { Provider } from "react-redux";
console.log(store);
const el = document.getElementById("layout"),
  root = createRoot(el!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </Provider>
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
