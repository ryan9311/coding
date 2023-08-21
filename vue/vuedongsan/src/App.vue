<template>
  <div>
    <div class="menu">
      <a v-for="(menuItem, i) in menus" :key="i">{{ menuItem }}</a>
    </div>
    <h2>원룸#</h2>

    <div v-for="(productArea, i) in products" :key="i">
      <h4>{{ productArea }}</h4>
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
