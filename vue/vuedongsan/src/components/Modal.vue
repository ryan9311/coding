<template>
  <div class="black-bg" v-if="modalOpen == true">
    <div class="white-bg">
      <img :src="onerooms[clickId].image" class="roomImg" />
      <h4>{{ onerooms[clickId].title }}</h4>
      <p>{{ onerooms[clickId].content }}</p>
      <input v-model="month" placeholder="개월 수 입력" />
      <input v-model="month" type="range" min="1" max="12" />
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
  watch: {
    month(a) {
      if (isNaN(a)) {
        alert("숫자만 입력!");
        this.month = 1;
      } else if (a > 12) {
        alert("최대 12개월 입니다.");
        this.month = 12;
      }
    },
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
