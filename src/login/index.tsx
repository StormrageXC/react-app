import React, { useActionState, useState } from "react";
import type { FormProps } from "antd";
import { Layout, Button, Checkbox, Form, Input, ConfigProvider } from "antd";
import "./test.scss";
import { useNavigate, redirect } from "react-router-dom";
import { authState } from "../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
const url = new URL("../assets/love-death-robot.gif", import.meta.url);
function increment(previousState: Boolean, formData: any) {
  console.log(formData.entries().next());
  return previousState;
}
export default function Login() {
  const navigate = useNavigate();
  const [state, formAction] = useActionState(increment, false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, username: e.target.value });
  }
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    dispatch(authState(), 1);
    navigate("/app", { replace: true });
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#043170",
        },
        components: {
          Button: {
            primaryShadow: "0 2px 0 rgba(5,145,255,0.1)",
          },
          Checkbox: {},
        },
      }}
    >
      <Layout className="layout">
        <main>
          <header></header>
          <Form
            action={formAction}
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              label={null}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              label={null}
              wrapperCol={{ span: 24 }}
              className="button-wrapper"
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </main>
      </Layout>
    </ConfigProvider>
  );
}
