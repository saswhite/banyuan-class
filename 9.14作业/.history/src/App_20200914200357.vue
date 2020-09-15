<template>
  <div>
    <Sider @select="selectValue"></Sider>
    <Header :selectValue="selected"></Header>
    <Content :selectValue="selected"></Content>
  </div>
</template>

<script>
import Header from "./components/Header";
import Sider from "./components/Sider";
import Content from "./components/Content";

export default {
  name: "App",
  data() {
    return {
      selected: "MyClass"
    };
  },
  components: {
    Header,
    Sider,
    Content
  },
  methods: {
    selectValue: function(data) {
      this.selected = data;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
