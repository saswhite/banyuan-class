<template>
  <div>
    <div class="sider"></div>
    <div class="header"></div>
    <div class="content">
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.sider {
  width: 15.6vw;
  height: 100vh;
  background-color: #141c3b;
  position: fixed;
  left: 0;
  top: 0;
}
.header {
  height: 56px;
  padding: 0 40px;
  background: #fff;
  box-shadow: 5px 6px 4px rgba(213, 209, 209, 0.5);
  position: fixed;
  top: 0;
  left: 15.6vw;
  right: 0;
}
.content {
  position: absolute;
  left: 15.6vw;
  top: 60px;
}
</style>
