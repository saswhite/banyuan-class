<template>
  <div>
    <router-view>
      <Home></Home>
    </router-view>
  </div>
</template>

<script>
import Home from "./pages/home";
export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
