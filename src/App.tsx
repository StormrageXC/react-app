import React, { useSyncExternalStore } from "react";
import { Flex, Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(50% - 8px)",
  maxWidth: "calc(50% - 8px)",
};

// const App: React.FC = () => (
//   <Flex gap="middle" wrap>
//     <Layout style={layoutStyle}>
//       <Header style={headerStyle}>Header</Header>
//       <Content style={contentStyle}>Content</Content>
//       <Footer style={footerStyle}>Footer</Footer>
//     </Layout>

//     <Layout style={layoutStyle}>
//       <Header style={headerStyle}>Header</Header>
//       <Layout>
//         <Sider width="25%" style={siderStyle}>
//           Sider
//         </Sider>
//         <Content style={contentStyle}>Content</Content>
//       </Layout>
//       <Footer style={footerStyle}>Footer</Footer>
//     </Layout>

//     <Layout style={layoutStyle}>
//       <Header style={headerStyle}>Header</Header>
//       <Layout>
//         <Content style={contentStyle}>Content</Content>
//         <Sider width="25%" style={siderStyle}>
//           Sider
//         </Sider>
//       </Layout>
//       <Footer style={footerStyle}>Footer</Footer>
//     </Layout>

//     <Layout style={layoutStyle}>
//       <Sider width="25%" style={siderStyle}>
//         Sider
//       </Sider>
//       <Layout>
//         <Header style={headerStyle}>Header</Header>
//         <Content style={contentStyle}>Content</Content>
//         <Footer style={footerStyle}>Footer</Footer>
//       </Layout>
//     </Layout>
//   </Flex>
// );

// export default App;

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
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  );
  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
