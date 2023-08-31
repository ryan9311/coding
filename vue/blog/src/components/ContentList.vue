<template>
  <div v-for="(a, i) in blogContents" :key="i">
    <h5>{{ a.title }}</h5>
    <p>{{ a.date }}</p>
  </div>
</template>

<script>
export default {
  name: "ContentList",
  props: {
    blogContents: Array,
  },
};
</script>

<style></style>
