import React, { useState, useReducer, useContext } from "react";
import { ConfigProvider } from "antd";
import { Routes, Route, Navigate, Await } from "react-router-dom";
import Login from "./login";
import LayoutPage from "./layout";
import "./app.scss";
import { light, dark } from "./theme";
import themeReducer from "./reducer";
import { themeContext } from "./context";
import { useDispatch, useSelector } from "react-redux";
import Identify from "./identify";
interface State {
  onDispatch: Function;
}
const App: React.FC = () => {
  const theme = useSelector((state: any) => state.theme.value);
  const [state, dispatch] = useReducer(themeReducer, { theme: true });
  const isAuth = useSelector((state: any) => state.auth.value);

  return (
    <ConfigProvider
      theme={{
        token: theme ? light : dark,
      }}
    >
      <themeContext.Provider value={theme}>
        {!isAuth && <Navigate to={`/app/home`} replace />}
        <Routes>
          <Route path="/" element={<Navigate to={`/app/home`} replace />} />
          <Route path="/app/*" element={<LayoutPage onDispatch={dispatch} />}>
            <Route path="home" element={<Identify />}></Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </themeContext.Provider>
    </ConfigProvider>
  );
};

export default App;
