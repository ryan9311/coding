<template>
  <div>
    <div class="black-bg" v-if="modalOpen == true">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지내용임</p>
        <button @click="modalOpen = false">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a v-for="(menuItem, i) in menus" :key="i">{{ menuItem }}</a>
    </div>
    <h2>원룸#</h2>

    <div v-for="(productArea, i) in products" :key="i">
      <img src="./assets/room0.jpg" />
      <h4 class="productTitle" @click="modalOpen = true">{{ productArea }}</h4>
      <p>50 만원</p>
      <button @click="reportCnt[i]++">허위매물신고</button>
      <span> 신고 수 : {{ reportCnt[i] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
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
