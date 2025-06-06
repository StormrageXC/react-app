import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: localStorage.getItem("theme") !== 'dark'
    },
    reducers: {
        changeTheme: (state, action) => {
            state.value = action.payload === 'light' ? true : false;
            localStorage.setItem("theme", action.payload);
        },
        getThemeData: (state) => {

        }
    },
});
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;