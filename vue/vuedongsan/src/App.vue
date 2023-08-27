<template>
  <Modal
    @modalClose="modalOpen = false"
    :onerooms="onerooms"
    :clickId="clickId"
    :modalOpen="modalOpen"
  />

  <div class="menu">
    <a v-for="(a, i) in menus" :key="i">{{ a }}</a>
  </div>

  <Discount />

  <h2>원룸#</h2>

  <Card
    @modalOpen="
      modalOpen = true;
      clickId = $event;
    "
    :oneroom="onerooms[i]"
    :reportCnt="reportCnt"
    :modalOpen="modalOpen"
    v-for="(a, i) in onerooms"
    :key="i"
  />
</template>

<script>
import oneroom from "./assets/oneroom.js";
import Discount from "./components/Discount.vue";
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";

export default {
  components: { Discount, Modal, Card },
  name: "App",
  data() {
    return {
      clickId: 0,
      onerooms: oneroom,
      modalOpen: false,
      reportCnt: [0, 0, 0],
      menus: ["Home", "Products", "About"],
    };
  },
  methods: {
    reportBtn(i) {
      this.reportCnt[i]++;
    },
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

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu > a {
  color: white;
  padding: 10px;
}

.menu > a:hover {
  cursor: pointer;
}
</style>
