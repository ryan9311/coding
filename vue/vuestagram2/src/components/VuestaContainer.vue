<template>
  <div>
    <ContentsPost v-for="(a, i) in vuesta" :key="i" :vuesta="vuesta[i]" />
  </div>
</template>

<script>
import ContentsPost from "./VuestaPost.vue";

export default {
  name: "VuestaContainer",
  components: {
    ContentsPost,
  },
  props: {
    vuesta: Array,
  },
};
</script>

<style></style>
