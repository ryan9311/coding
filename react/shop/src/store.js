import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let stock = createSlice({
  name: "stock",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    conutPlus(state, action) {
      let id = state.findIndex((stock) => {
        return stock.id == action.payload;
      });
      state[id].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { conutPlus, addItem } = stock.actions;

export default configureStore({
  reducer: { user: user.reducer, stock: stock.reducer },
});
