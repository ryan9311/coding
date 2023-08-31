<template>
  <Nav />
  <router-view :blogContents="blogContents"></router-view>
  <div>
    <router-link to="/list">리스트 페이지 이동</router-link>
  </div>
  <router-link to="/">홈으로 이동</router-link>
</template>

<script>
import Nav from "./components/Navbar.vue";

import blogData from "./assets/blog.js";

export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return {
      blogContents: blogData,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
