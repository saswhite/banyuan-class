<template>
  <div>
    <Header></Header>
    <Floor1></Floor1>
    <Floor2></Floor2>
  </div>
</template>

<script>
import Header from "./Header";
import Floor1 from "./floor1";
import Floor2 from "./floor2";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    Floor1,
    Floor2
  }
};
</script>

<style lang="scss" scoped>
</style>