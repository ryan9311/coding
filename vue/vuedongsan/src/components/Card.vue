<template>
  <div>
    <img :src="oneroom.image" class="roomImg" />
    <h4 class="productTitle" @click="$emit('modalOpen', oneroom.id)">
      {{ oneroom.title }}
    </h4>
    <p>{{ oneroom.price }}원</p>
    <button>허위매물신고</button>
    <span> 신고 수 : {{ reportCnt[i] }}</span>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    oneroom: Object,
    reportCnt: Number,
    modalOpen: Boolean,
  },
};
</script>

<style>
.roomImg {
  width: 500px;
}

.productTitle:hover {
  cursor: pointer;
}
</style>
