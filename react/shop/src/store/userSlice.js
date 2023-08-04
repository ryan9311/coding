import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    chnageAge(state) {
      state.age = state.age + 1;
    },
  },
});

export let { chnageAge, chnageName } = user.actions;

export default user;
