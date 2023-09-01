<template>
  <div>
    {{ console.log(vuesta[0]) }}
    <ContentsPost :vuesta="vuesta" />
    <ContentsPost />
    <ContentsPost />
  </div>
</template>

<script>
import ContentsPost from "./Post.vue";

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
