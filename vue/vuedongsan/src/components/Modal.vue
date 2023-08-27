<template>
  <div class="black-bg" v-if="modalOpen == true">
    <div class="white-bg">
      <img :src="onerooms[clickId].image" class="roomImg" />
      <h4>{{ onerooms[clickId].title }}</h4>
      <p>{{ onerooms[clickId].content }}</p>
      <input v-model="month" placeholder="개월 수 입력" />
      <p>{{ month }}개월 금액 : {{ onerooms[clickId].price * month }} 원</p>
      <button @click="$emit('modalClose')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      month: 1,
    };
  },
  props: {
    onerooms: Array,
    clickId: Number,
    modalOpen: Boolean,
  },
};
</script>

<style>
.roomImg {
  width: 500px;
}
</style>
