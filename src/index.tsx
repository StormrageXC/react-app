import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { registerMicroApps, start } from "qiankun";
import Login from "./login";
import "@ant-design/v5-patch-for-react-19";
const basename = "/";
const el = document.getElementById("yourContainer"),
  root = createRoot(el!);
root.render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
      INPUT: <input id="123" />
    </BrowserRouter>
  </StrictMode>
);

registerMicroApps(
  [
    {
      name: "child-react-app", // app name registered
      entry: "//localhost:8082/",
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

function Handle() {
  queueMicrotask(() => {
    document.body.click();
  });
}
document.body.onclick = function () {
  console.log("body click");
};
console.log("start");
Handle();
console.log("end");
start({
  sandbox: {
    // strictStyleIsolation: true, // 严格模式，开启shadow dom
    // experimentalStyleIsolation: true,
  },
  singular: true,
});
