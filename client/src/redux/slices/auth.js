import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess(state, action) {
      return state;
    },
    loginSuccess(state, action) {
      state = { ...state, user: action.payload, isLoggedIn: true };
      return state;
    },
    initialize(state, action) {
      state = { ...state, ...action.payload };
      return state;
    },
    logoutSuccess(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { registerSuccess, loginSuccess, initialize, logoutSuccess } =
  slice.actions;

export default slice.reducer;
