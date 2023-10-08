import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: 0,
      likeCheck: false,
    };
  },
  mutations: {
    chanegeName(state) {
      state.name = "park";
      state.age++;
    },
    likeClick(state) {
      if (state.likeCheck == false) {
        state.likes++;
        state.likeCheck = true;
      } else {
        state.likes--;
        state.likeCheck = false;
      }
    },
  },
});

export default store;
