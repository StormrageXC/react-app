import React, { useState, useReducer, useEffect } from "react";
import { ConfigProvider } from "antd";
import { Routes, Route, Navigate, Await } from "react-router-dom";
import Login from "./login";
import LayoutPage from "./layout";
import "./app.scss";
import { light, dark } from "./theme";
import themeReducer from "./reducer";
import { themeContext } from "./context";
import { useDispatch, useSelector } from "react-redux";
import Home from "./home";
interface State {
  onDispatch: Function;
}
class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      val: 0,
    };
  }
  componentDidMount() {
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val);
    // 第 1 次 log
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val);
    // 第 2 次 log
    setTimeout(() => {
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val);
      // 第 3 次 log
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val);
      // 第 4 次 log
    }, 0);
  }
  handleClickWithPromise = () => {
    setTimeout(() => {
      this.setState({ ...this.state, a: "aa" });
      console.log(this.state.a);
    });
    // Promise.resolve().then(() => {
    //   this.setState({ ...this.state, a: "aaa" });
    //   console.log(this.state.a);
    // });
  };

  handleClickWithoutPromise = () => {
    this.setState({ ...this.state, a: "aa" });
    this.setState({ ...this.state, b: "bb" });
  };

  render() {
    console.log("render");
    return (
      <>
        <button onClick={this.handleClickWithPromise}>
          异步执行{this.state.a}
        </button>
        <button onClick={this.handleClickWithoutPromise}>同步执行</button>
      </>
    );
  }
}

export default App;
