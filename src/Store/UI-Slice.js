import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { light: true },
  reducers: {
    changeMode(state) {
      state.light = !state.light;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
