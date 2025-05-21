import React, { useActionState, useState, useEffect } from "react";
import type { FormProps } from "antd";
import { Layout, Button, Checkbox, Form, Input, ConfigProvider } from "antd";
import style from "./index.module.scss";
import { useNavigate, redirect } from "react-router-dom";
import { authState } from "../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
const url = new URL("../assets/love-death-robot.gif", import.meta.url);
function increment(previousState: Boolean, formData: any) {
  console.log(formData.entries().next());
  return previousState;
}
type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};
export default function Login() {
  const navigate = useNavigate(),
    init: FieldType = { remember: localStorage.getItem("remember") === "true" },
    [state, formAction] = useActionState(increment, false),
    dispatch = useDispatch(),
    [form] = Form.useForm(),
    onFinish: FormProps<FieldType>["onFinish"] = (values) => {
      values.remember
        ? localStorage.setItem("remember", "true")
        : localStorage.removeItem("remember");
      dispatch(authState(), 1);
      navigate("/app", { replace: true });
    },
    onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
      console.log("Failed:", errorInfo);
    },
    onValuesChange = (changedValues: FieldType, allValues: FieldType) => {};
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
      <Layout className={style.layout}>
        <main>
          <header></header>
          <Form
            form={form}
            action={formAction}
            name="basic"
            initialValues={init}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            style={{ maxWidth: 600 }}
            onValuesChange={onValuesChange}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
              <Input.Password
                autoComplete={init.remember ? "" : "new-password"}
                visibilityToggle={false}
              />
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
              className={style["button-wrapper"]}
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
