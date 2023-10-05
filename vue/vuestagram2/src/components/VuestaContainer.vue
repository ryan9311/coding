<template>
  <div>
    <div v-if="step == 0">
      <ContentsPost v-for="(a, i) in vuesta" :key="i" :vuesta="vuesta[i]" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div
        :class="ClickFilter + ` upload-image`"
        :style="`background-image: url(${imgUrl}) `"
      ></div>
      <div class="filters">
        <FilterBox
          :filter="filter"
          :imgUrl="imgUrl"
          v-for="filter in filters"
          :key="filter"
        ></FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div
        :class="ClickFilter + ` upload-image`"
        :style="`background-image: url(${imgUrl}) `"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          @input="$emit('cntTxt', $event.target.value)"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import ContentsPost from "./VuestaPost.vue";
import FilterBox from "./FilterBox.vue";

export default {
  name: "VuestaContainer",
  components: {
    ContentsPost,
    FilterBox,
  },
  props: {
    vuesta: Array,
    step: Number,
    imgUrl: String,
  },
  data() {
    return {
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      ClickFilter: "",
    };
  },
  mounted() {
    this.emitter.on("filter", (a) => {
      this.ClickFilter = a;
    });
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
