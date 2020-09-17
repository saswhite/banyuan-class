<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <div class="header-left-container">
          <a href="#" class="right-tri"></a>
          <span class="header-left-title">编程入门</span>
        </div>
      </div>
      <div class="header-right">
        <a href="#" class="right-icon"></a>
        <span class="header-right-title">Html页面演示</span>
      </div>
    </div>
    <div class="content">
      <div class="nav-container">
        <div class="nav-box">
          <div class="nav-item">
            <span class="item-title">课程介绍</span>
            <span class="item-icon"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px;
    z-index: 1;
    .header-left {
      float: left;
      width: 300px;
      background: #263445;
      height: 100%;
      box-sizing: border-box;
      .header-left-container {
        width: 100%;
        background: #334154;
        padding-left: 20px;
        white-space: nowrap;
        .right-tri {
          display: inline-block;
          width: 26px;
          height: 32px;
          background: url(https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/catalog/back.png);
          background-size: 100% 100%;
          margin-right: 30px;
          vertical-align: middle;
        }
        .header-left-title {
          font-size: 16px;
          font-weight: 400;
          line-height: 56px;
          color: #fff;
          vertical-align: middle;
          white-space: nowrap;
        }
      }
    }
    .header-right {
      width: 100%;
      height: 100%;
      background: #263445;
      padding-left: 300px;
      font-size: 16px;
      font-weight: 400;
      color: #fff;
      line-height: 56px;
      text-align: center;
      .right-icon {
        position: absolute;
        left: 350px;
        top: 0;
        bottom: 0;
        margin: auto 0;
        width: 20px;
        height: 20px;
        background: url(https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/catalog/more.png);
        background-size: 100% 100%;
      }
      .header-right-title {
        margin-right: 300px;
      }
    }
  }
  .content {
    width: 100%;
    .nav-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 300px;
      height: 100vh;
      padding-top: 56px;
      background: #141c3b;
      .nav-box {
        width: 100%;
        .nav-item {
          width: 100%;
          box-sizing: border-box;
          padding-left: 20px;
          color: #d8d8d8;
          font-weight: 300;
          background-color: #2c3849;
          font-size: 14px;
          height: 52px;
          line-height: 52px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>