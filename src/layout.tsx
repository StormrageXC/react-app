import React, { useState, useReducer, useContext } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Input, Row, Col } from "antd";
import { NavLink, Link, Routes, Route, Navigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import Login from "./login";
import "./app.scss";
import { light, dark } from "./theme";
import image from "./assets/sunrise.jpeg";
import video from "./assets/video.mp4";
import txt from "./assets/a.txt";
const { Header, Sider, Content, Footer } = Layout;
import { changeTheme } from "./store/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import { themeContext } from "./context";
interface State {
  onDispatch: Function;
}
const App: React.FC<State> = ({ onDispatch }) => {
  const themeSatus = useContext(themeContext);
  const [collapsed, setCollapsed] = useState(!themeSatus);
  const {
    token: { colorBgContainer, borderRadiusLG },
    token,
  } = theme.useToken();
  const dispatch = useDispatch();
  // const a = Object.keys(token).filter((key) => token[key] === "#e6f4ff");
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to="/app">app</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <Link to="/login">login</Link>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <Link to="/">default</Link>,
            },
          ]}
        />
      </Sider>
      <Layout style={{ overflow: "auto", maxHeight: "100vh" }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row>
            <Col span={1}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => {
                  setCollapsed(!collapsed);
                  dispatch(changeTheme());
                }}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col span={2}>
              <Input prefix={<SearchOutlined />}></Input>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div id="qiankun"></div>
        </Content>
        <Footer style={{ textAlign: "center" }}>App is building...</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
