import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Button,
  Layout,
  Menu,
  theme,
  ConfigProvider,
  Input,
  Row,
  Col,
} from "antd";
import { NavLink, Link, Routes, Route, Navigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import Login from "./login";
import LayoutPage from "./layout";
import "./app.scss";
import { light, dark } from "./theme";
import image from "./assets/sunrise.jpeg";
import video from "./assets/video.mp4";
import txt from "./assets/a.txt";
const { Header, Sider, Content, Footer } = Layout;

import { useDispatch, useSelector } from "react-redux";
console.log(txt);
const App: React.FC = () => {
  const theme = useSelector((state: any) => state.theme.value);
  return (
    <ConfigProvider
      theme={{
        token: theme ? dark : light,
      }}
    >
      {theme}
      <Routes>
        <Route path="/" element={<Navigate to={`/login`} replace />} />
        <Route path="/app" element={<LayoutPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ConfigProvider>
  );
};

export default App;
