<template>
  <div
    :class="filter + ' filter-item'"
    :style="`background-image: url(${imgUrl})`"
  >
    {{ filter }}
  </div>
</template>

<script>
export default {
  name: "filterBox",
  props: {
    imgUrl: String,
    filter: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
