<template>
  <div>
    <component :is="selected"></component>
  </div>
</template>

<script>
import MyClass from "./MyClass";
import Email from "./Email";
import Setting from "./Setting";
export default {
  name: "Content",
  data() {
    return {};
  },
  props: ["selected"]
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