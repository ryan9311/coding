<template>
  <div class="postCard" v-for="(a, i) in vueSta" :key="i">
    <div class="profile">
      <div class="profileWrap">
        <div
          class="profileImg"
          :style="{ backgroundImage: `url(${a.userImage})` }"
        ></div>
        <div class="name">{{ a.name }}</div>
      </div>
      <div class="date">{{ a.date }}</div>
    </div>
    <div
      class="postImg"
      :style="{ backgroundImage: `url(${a.postImage})` }"
    ></div>
    <div class="likes">{{ a.likes }} LIKE</div>
    <div class="content">{{ a.content }}</div>
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
  align-items: flex-start;
  width: 600px;
  margin: 0 auto;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;
}

.profile {
  width: 600px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin-bottom: 10px;
  justify-content: space-between;
}

.profileWrap {
  display: flex;
  gap: 20px;
  align-items: center;
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

.likes {
  display: flex;
  padding: 10px 5px;
}

.content {
  font-size: 20px;
  padding: 10px 5px;
}
</style>
