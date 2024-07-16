import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "country",
  initialState: { countries: [], filtered: [] },
  reducers: {
    replaceCountries(state, action) {
      state.countries = action.payload;
    },
    filter(state, action) {
      state.filtered = action.payload;
    },
  },
});

export const countryActions = countrySlice.actions;

export default countrySlice;
