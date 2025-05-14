import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import authSlice from "./authSlice";
export default configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
  },
});
