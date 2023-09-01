<template>
  <div class="postCard" v-for="(a, i) in vueSta" :key="i">
    <div class="profile">
      <div
        class="profileImg"
        style="background-image: url(https://picsum.photos/100?random=3)"
      ></div>
      <div>{{ a.name }}</div>
      <div>{{ a.date }}</div>
    </div>
    <div
      class="postImg"
      style="background-image: url(https://picsum.photos/600?random=5)"
    ></div>
    <div class="content">{{ a.content }}</div>
    {{ console.log(a.userImage) }}
  </div>
</template>

<script>
export default {
  naem: "VuestaPost",
  props: {
    vueSta: Array,
  },
};
</script>

<style>
.postCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.profile {
  width: 600px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin-bottom: 10px;
}

.profileImg {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-position: center;
  background-size: cover;
}

.postImg {
  width: 600px;
  height: 600px;
}

.content {
  font-size: 20px;
}
</style>
