<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${vuesta.userImage})` }"
      ></div>
      <span class="profile-name">{{ vuesta.name }}</span>
    </div>
    <div
      :class="vuesta.filter + ` post-body`"
      :style="{ backgroundImage: `url(${vuesta.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ vuesta.likes }} Likes</p>
      <p>
        <strong>{{ vuesta.name }}</strong> {{ vuesta.content }}
      </p>
      <p class="date">{{ vuesta.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentsPost",
  props: {
    vuesta: Object,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
