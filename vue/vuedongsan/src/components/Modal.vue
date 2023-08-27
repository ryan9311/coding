<template>
  <div class="black-bg" v-if="modalOpen == true">
    <div class="white-bg">
      <img :src="onerooms[clickId].image" />
      <h4>{{ onerooms[clickId].title }}</h4>
      <p>{{ onerooms[clickId].content }}</p>
      <p>{{ onerooms[clickId].price }} 원</p>
      <!-- <button @click="modalOpen = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    onerooms: Array,
    clickId: Number,
    modalOpen: Boolean,
  },
};
</script>

<style></style>
