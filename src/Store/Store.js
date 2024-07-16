import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./Country-Slice";
import uiSlice from "./UI-Slice";

const store = configureStore({
  reducer: { country: countrySlice.reducer, ui: uiSlice.reducer },
});

export default store;
