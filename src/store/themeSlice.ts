import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: localStorage.getItem("theme") === 'true',
    },
    reducers: {
        changeTheme: (state) => {
            state.value = !state.value;
            localStorage.setItem("theme", state.value.toString());
        },
    },
});
// 每个 case reducer 函数会生成对应的 Action creators
console.log(themeSlice.actions);
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;