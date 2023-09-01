<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">UpLoad</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <VuestaContainer
    :vuesta="vuesta"
    :step="step"
    :imgUrl="imgUrl"
    @cntTxt="uploadTxt = $event"
  />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        accept="image/*"
        multiple
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import vuesta from "./assets/vuesta.js";
import VuestaContainer from "./components/VuestaContainer.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    VuestaContainer,
  },
  data() {
    return {
      vuesta: vuesta,
      moreClick: 0,
      step: 0,
      imgUrl: "",
      uploadTxt: "",
    };
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreClick}.json`)
        .then((result) => {
          this.vuesta.push(result.data);
          this.moreClick++;
        })
        .catch((err) => {
          console.log("err:" + err);
        });
    },
    upload(e) {
      let file = e.target.files;
      console.log(file[0]);
      let url = URL.createObjectURL(file[0]);
      console.log(url);
      this.imgUrl = url;
      this.step = 1;
    },
    publish() {
      let uploadFile = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: `${this.imgUrl}`,
        likes: 0,
        date: "May 15",
        liked: false,
        content: `${this.uploadTxt}`,
        filter: "perpetua",
      };
      this.vuesta.unshift(uploadFile);
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
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
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
