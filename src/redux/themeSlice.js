import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: localStorage.getItem("darkMode") === "enabled",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode ? "enabled" : "disabled");
      document.body.classList.toggle("dark", state.darkMode);
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;