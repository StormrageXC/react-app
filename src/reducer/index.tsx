import { useReducer } from "react";
interface State {
  theme: boolean;
}
interface Action {
  theme: boolean;
}
export default function themeReducer(theme: State, action: Action) {
  return {
    ...action,
  };
}
