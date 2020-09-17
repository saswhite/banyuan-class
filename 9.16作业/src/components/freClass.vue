<template>
  <div class="fre">
    <div class="container" v-for="(item,index) in list.list[1]" :key="'l'+index">
      <div class="item">
        <div class="item-up">
          <div class="item-up-img-container">
            <img :src="item.coverUrl" alt />
          </div>
          <div class="item-up-title">{{ item.title }}</div>
        </div>
        <div class="item-down">{{ item.summary }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "freClass",
  data() {
    return {
      item: []
    };
  },
  props: ["list"]
};
</script>

<style lang="scss" scoped>
.fre {
  display: inline-block;
  .container {
    float: left;
    height: 432px;
    width: 50%;
    .item {
      .item-up {
        width: 400px;
        background: #fff;
        border: 1px solid #eaeaea;
        border-radius: 4px;
        overflow: hidden;
        position: relative;
        z-index: 2;
        cursor: pointer;
        .item-up-img-container {
          img {
            display: block;
            width: 400px;
            height: 198px;
          }
        }
        .item-up-title {
          width: 100%;
          height: 68px;
          padding-left: 10px;
          line-height: 68px;
          border-top: 1px solid #eaeaea;
          font-family: PingFangSC-Medium;
          font-size: 18px;
          color: #000;
          letter-spacing: 1.08px;
        }
      }
      .item-up:hover {
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
      }
      .item-down {
        word-break: break-all;
        overflow: hidden;
        position: relative;
        width: 400px;
        padding: 12px 0;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #505050;
        line-height: 20px;
      }
    }
  }
}
</style>