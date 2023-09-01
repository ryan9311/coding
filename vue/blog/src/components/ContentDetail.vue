<template>
  <div class="contentHeader">
    <h5>{{ blogContents[$route.params.id].title }}</h5>
    <p>{{ blogContents[$route.params.id].date }}</p>
  </div>
  <p>{{ blogContents[$route.params.id].content }}</p>
</template>

<script>
export default {
  name: "ContentDetail",
  props: {
    blogContents: Array,
  },
};
</script>

<style>
.contentHeader {
  display: flex;
  justify-content: center;
}
</style>
