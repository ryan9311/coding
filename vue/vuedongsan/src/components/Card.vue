<template>
  <div v-for="(a, i) in onerooms" :key="i">
    <img :src="a.image" />
    <h4 class="productTitle" clickId="i;">
      {{ a.title }}
    </h4>
    <p>{{ a.price }}원</p>
    <button>허위매물신고</button>
    <span> 신고 수 : {{ reportCnt[i] }}</span>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    onerooms: Array,
    reportCnt: Number,
    modalOpen: Boolean,
  },
};
</script>

<style></style>
