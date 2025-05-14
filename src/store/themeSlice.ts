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
        getThemeData: (state) => {

        }
    },
});
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;