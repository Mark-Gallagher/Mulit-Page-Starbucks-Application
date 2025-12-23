import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: 0,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    login: (state, action) => {
      state.user = action.payload;   //login action/function accepts a payload in the from of objects
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login,logout} = userSlice.actions;

//SELECTOR
//state.user.user is accessing the state actions login/logout
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
