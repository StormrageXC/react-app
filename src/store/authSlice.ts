import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "theme",
    initialState: {
        value: true,
    },
    reducers: {
        authState: (state) => {
            state.value = true;
        },
    },
});
export const { authState } = authSlice.actions;

export default authSlice.reducer;