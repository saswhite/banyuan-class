<template>
  <div>
    <Sider></Sider>
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
// import MyClass from "./components/MyClass";
// import Email from "./components/Email";
// import Setting from "./components/Setting";

import Header from "./components/Header";
import Sider from "./components/Sider";
import Content from "./components/Content";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Header,
    Sider,
    Content
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
