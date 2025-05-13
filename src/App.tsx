import React, { useState, useReducer, useContext } from "react";
import { ConfigProvider } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import LayoutPage from "./layout";
import "./app.scss";
import { light, dark } from "./theme";
import themeReducer from "./reducer";
import { themeContext } from "./context";
import { useDispatch, useSelector } from "react-redux";
interface State {
  onDispatch: Function;
}
const App: React.FC = () => {
  const theme = useSelector((state: any) => state.theme.value);
  const [state, dispatch] = useReducer(themeReducer, { theme: true });
  return (
    <ConfigProvider
      theme={{
        token: theme ? light : dark,
      }}
    >
      <themeContext.Provider value={theme}>
        <Routes>
          <Route path="/" element={<Navigate to={`/login`} replace />} />
          <Route path="/app" element={<LayoutPage onDispatch={dispatch} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </themeContext.Provider>
    </ConfigProvider>
  );
};

export default App;
