<template>
  <Nav />
  <router-view :blogContents="blogContents"></router-view>
  <!-- <List :blogContents="blogContents" /> -->
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
