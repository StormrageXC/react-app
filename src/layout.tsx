import React, { useState, useReducer, useContext, ChangeEvent } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Input, Row, Col } from "antd";
import { Navigate, Link, useMatch, Route, Outlet } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import style from "./layout.module.scss";
const { Header, Sider, Content, Footer } = Layout;
import { changeTheme } from "./store/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import { themeContext } from "./context";
import { useImmer, useImmerReducer } from "use-immer";
interface State {
  onDispatch: Function;
}
interface Props {
  onDispatch?: Function;
  children: React.ReactNode;
}
interface Style {
  logo: string;
}
interface Item {
  key: String;
  icon: object;
  label: object;
}
const LayoutPage: React.FC<State> = ({ onDispatch }) => {
  const match = useMatch("/app");
  const themeSatus = useContext(themeContext);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
    token,
  } = theme.useToken();
  const [person, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });
  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    updatePerson((draft) => {
      draft.name = e.target.value;
    });
  }
  const dispatch = useDispatch();
  // const a = Object.keys(token).filter((key) => token[key] === "#e6f4ff");
  const [items, updateItems] = useImmer<any>([
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
      label: <Link to="/app/home">default</Link>,
    },
  ]);
  function handleAdd() {
    updateItems((draft: Array<Item>) => {
      draft.push({
        key: "4",
        icon: <UploadOutlined />,
        label: <Link to="/app/home">default</Link>,
      });
    });
  }
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className={style.logo} />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
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
                }}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col span={2}>
              <Input
                prefix={<SearchOutlined />}
                onChange={handleNameChange}
              ></Input>
            </Col>
            <Col span={2}>{person.name}</Col>
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
          {match && <Navigate to={`/app/home`} replace />}
          <Outlet></Outlet>
          <button onClick={handleAdd}>add menu</button>
          <div id="qiankun"></div>
        </Content>
        <Footer style={{ textAlign: "center" }}>App is building...</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
