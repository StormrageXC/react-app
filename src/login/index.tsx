import React, {
  useActionState,
  useState,
  useEffect,
  Component,
  createElement,
} from "react";
import { createRoot } from "react-dom/client";
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
// type Info = {
//   id: String;
//   user?: String;
//   className?: String;
// };
// class Post extends Component<Info> {
//   render(): React.ReactNode {
//     console.log(this);
//     return createElement(
//       "div",
//       {
//         id: 1,
//         className: "post",
//         onClick: this.handleClick,
//       },
//       this.props.user
//     );
//   }
//   constructor(props: Info) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       id: 1,
//     };
//   }
//   handleClick() {
//     console.log("click", this);
//   }
// }
// const MyPost = createElement(Post, {
//   id: "231",
//   user: "cbw",
// });
// const el = document.getElementById("test"),
//   root = createRoot(el!);
// root.render(MyPost);

export default function Login() {
  const [A, setA] = useState(1);
  const navigate = useNavigate(),
    init: FieldType = { remember: localStorage.getItem("remember") === "true" },
    [state, formAction] = useActionState(increment, false),
    dispatch = useDispatch(),
    [form] = Form.useForm(),
    onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
      values.remember
        ? localStorage.setItem("remember", "true")
        : localStorage.removeItem("remember");
      await new Promise((resolve) => {
        setTimeout(resolve, 3000);
      });
      dispatch(authState(), 1);
      navigate("/app", { replace: true });
    },
    onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
      console.log("Failed:", errorInfo);
    },
    onValuesChange = (changedValues: FieldType, allValues: FieldType) => {};
  setA(2);
  useEffect(() => {
    console.log(A, "USEeffect");
  });
  setTimeout(() => {
    console.log(A, "TIMEOUT");
  });
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
          <header>
            <div></div>
          </header>
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
