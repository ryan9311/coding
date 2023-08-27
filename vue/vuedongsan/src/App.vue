<template>
  <transition name="fade">
    <Modal
      @modalClose="modalOpen = false"
      :onerooms="onerooms"
      :clickId="clickId"
      :modalOpen="modalOpen"
    />
  </transition>

  <div class="menu">
    <a v-for="(a, i) in menus" :key="i">{{ a }}</a>
  </div>

  <Discount />

  <h2>원룸#</h2>
  <button @click="priceHigh">가격 높은순</button>
  <button @click="priceSort">가격 낮은순</button>
  <button @click="titleOrder">가나다 순</button>
  <button @click="priceFilter">50만원 이하 상품</button>
  <button @click="sortBack">되돌리기</button>
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
      oneroomsOrg: [...oneroom],
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
    sortBack() {
      this.onerooms = [...this.oneroomsOrg];
    },
    priceSort() {
      this.onerooms.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    priceHigh() {
      this.onerooms.sort(function (a, b) {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      });
    },
    titleOrder() {
      this.onerooms.sort(function (a, b) {
        if (a.title < b.title) return -1;
        if (b.title > a.title) return 1;
        return 0;
      });
    },
    priceFilter() {
      this.onerooms.filter(() => {});
    },
  },
};
</script>

<style>
.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

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
