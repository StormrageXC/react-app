import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, ConfigProvider } from "antd";
import { NavLink, Link, Routes, Route, Navigate } from "react-router";
import Login from "./login";
import "./app.scss";
import { light, dark } from "./theme";
import image from "./assets/sunrise.jpeg";
import video from "./assets/video.mp4";
import txt from "./assets/a.txt";
const { Header, Sider, Content, Footer } = Layout;
console.log(txt);
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        token: collapsed ? light : dark,
      }}
    >
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
          <nav>
            {/* NavLink makes it easy to show active states */}
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              app
            </NavLink>

            <Link to="/login">login</Link>
          </nav>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* <img src={image} style={{ width: "100%" }} /> */}
            <video
              src={video}
              poster={image}
              controls
              style={{ width: "100%" }}
            ></video>
            <Routes>
              <Route path="/" element={<Navigate to={`/login`} replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <div id="qiankun"></div>
          </Content>
          <Footer style={{ textAlign: "center" }}>App is building...</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
