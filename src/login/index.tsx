import React, { useSyncExternalStore } from "react";
import image from "../assets/qljst.jpeg";
import { Layout } from "antd";
import "./index.scss";
import { sculptureList } from "./data";
let nextId = 0;
let todos = [{ id: nextId++, text: "Todo #1" }];
let listeners: Array<any> = [];

export const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: "Todo #" + nextId }];
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

export default function TodosApp() {
  return <Layout className="layout">、123</Layout>;
}
