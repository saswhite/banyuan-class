<template>
  <div>
    <Home></Home>
  </div>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  cursor: pointer;
  text-decoration: none;
  color: #000;
}
button,
input {
  outline: none;
  border: none;
}
body {
  font-family: PingFangSC, helvetica neue, hiragino sans gb, arial,
    microsoft yahei ui, microsoft yahei, simsun, sans-serif !important;
  background: #f4f4f4;
  min-height: 100vh;
  height: 2000px;
}
</style>
