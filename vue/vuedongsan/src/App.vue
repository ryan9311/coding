<template>
  <div>
    <div class="black-bg" v-if="modalOpen == true">
      <div class="white-bg">
        <img :src="onerooms[clickId].image" />
        <h4>{{ onerooms[clickId].title }}</h4>
        <p>{{ onerooms[clickId].content }}</p>
        <p>{{ onerooms[clickId].price }} 원</p>
        <button @click="modalOpen = false">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a v-for="(a, i) in menus" :key="i">{{ a }}</a>
    </div>

    <Discount />

    <h2>원룸#</h2>

    <div v-for="(a, i) in onerooms" :key="i">
      <img :src="a.image" />
      <h4
        class="productTitle"
        @click="
          modalOpen = true;
          clickId = i;
        "
      >
        {{ a.title }}
      </h4>
      <p>{{ a.price }}원</p>
      <button @click="reportCnt[i]++">허위매물신고</button>
      <span> 신고 수 : {{ reportCnt[i] }}</span>
    </div>
  </div>
</template>

<script>
import oneroom from "./assets/oneroom.js";
import Discount from "./Discount.vue";

export default {
  components: { Discount },
  name: "App",
  data() {
    return {
      clickId: 0,
      onerooms: oneroom,
      modalOpen: false,
      reportCnt: [0, 0, 0],
      menus: ["Home", "Products", "About"],
      products: ["역삼동 원룸", "천호동 원룸", "마포구 원룸"],
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

.productTitle:hover {
  cursor: pointer;
}
</style>
