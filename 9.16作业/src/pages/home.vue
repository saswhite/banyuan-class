<template>
  <div class="container">
    <div class="nav">
      <div :class="['nav-item',name=='funClass'?'bg':'']" @click="change('funClass')">趣味小课</div>
      <div :class="['nav-item',name=='freClass'?'bg':'']" @click="change('freClass')">预备课程</div>
      <div :class="['nav-item',name=='beginClass'?'bg':'']" @click="change('beginClass')">编程入门</div>
    </div>
    <div class="content">
      <component :is="name" :list="list"></component>
    </div>
  </div>
</template>

<script>
import Data from "../utils/data";
import BeginClass from "../components/beginClass";
import FreClass from "../components/freClass";
import FunClass from "../components/funClass";

export default {
  name: "App",
  data() {
    return {
      name: "funClass",
      list: Data
    };
  },
  components: {
    BeginClass,
    FreClass,
    FunClass
  },
  methods: {
    change(name) {
      this.name = name;
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  .container {
    display: flex;
    .nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      vertical-align: top;
      width: 280px;
      height: 100vh;
      padding-top: 100px;
      box-sizing: border-box;
      overflow: hidden;
      .nav-item {
        cursor: pointer;
        padding-top: 20px;
        text-decoration: none;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        letter-spacing: 1.2px;
        display: inline-block;
        width: 160px;
        height: 34px;
        line-height: 34px;
        padding-left: 8px;
        position: relative;
        white-space: nowrap;
      }
      .nav-item:hover {
        color: rgba(105, 103, 206, 0.8);
      }
      .bg {
        color: rgb(105, 100, 209);
      }
      .bg:hover {
        color: rgba(105, 103, 206, 0.8);
      }
    }
    .content {
      padding-top: 100px;
      width: 920px;
      padding-right: 10px;
      padding-left: 80px;
    }
  }
}
</style>
