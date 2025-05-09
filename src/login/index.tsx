import React, { useSyncExternalStore } from "react";
import image from "../assets/qljst.jpeg";
import { Layout } from "antd";
import "./index.scss";
import { sculptureList } from "./data";
let nextId = 0;
let todos = [{ id: nextId++, text: "Todo #1" }];
let listeners: Array<any> = [];
const url = new URL("../assets/sunrise.jpeg", import.meta.url);
console.log(url);
export default function TodosApp() {
  return (
    <Layout className="layout">
      <form action="">
        <div className="item">
          <label htmlFor="username">账户</label>
          <input type="text" id="username" />
        </div>
        <div className="item">
          <label htmlFor="password">密码</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">登录</button>
      </form>
    </Layout>
  );
}
