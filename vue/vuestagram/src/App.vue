<template>
  <div class="header">
    <ul>
      <li class="cancelBtn">cancel</li>
    </ul>
    <img class="logo" src="./assets/vuestalog.png" alt="logo" />
    <ul>
      <li>Next</li>
    </ul>
  </div>

  <VuestaPost :vueSta="vueSta" />
  <button @click="more">더 보실?</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import VueSta from "./assets/vuesta.js";
import VuestaPost from "./components/VuestaPost.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    VuestaPost,
  },
  data() {
    return {
      vueSta: VueSta,
      moreClick: 0,
    };
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreClick}.json`)
        .then((result) => {
          this.vueSta.push(result.data);
          this.moreClick++;
        })
        .catch((err) => {
          alert("더이상 게시물이 없습니다.");
          console.log("에러코드:" + err);
        });
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
  margin-top: 0px;
}
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  text-align: center;
  font-weight: bold;
  color: #9d44c0;
  font-size: 20px;
  cursor: pointer;
}

ul {
  margin: 0;
  padding: 10px;
}

.header {
  position: sticky;
  top: 0;
  width: 600px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 100px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
</style>
