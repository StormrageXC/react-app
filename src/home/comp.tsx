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
import "./index.css";
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

export default function Comp() {
  return <div className="a">Comp</div>;
}
