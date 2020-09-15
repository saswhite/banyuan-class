<template>
  <div>
    <component :is="componentId"></component>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      selected: ""
    };
  }
};
</script>

<style scoped>
.content {
  width: 84.4vw;
  position: absolute;
  left: 15.6vw;
  top: 60px;
}

.box {
  width: 60vw;
  margin: 0 auto;
  padding: 80px 0 120px;
}
</style>