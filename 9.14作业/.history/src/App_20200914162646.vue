<template>
  <div>
    <div class="sider">
      <div class="sider-up">
        <img
          src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/logo_black_bottom@2x.png"
          class="index"
        />
        <div class="name-container">
          <img
            src="http://by-image.oss-cn-shanghai.aliyuncs.com/official-site/E2_Icon.jpg"
            class="name-icon"
          />
          <div class="name">付费会员</div>
        </div>
        <div class="section-container">
          <div class="section">
            <img src alt />
            <span>我的课程</span>
          </div>
          <div class="section">
            <img src alt />
            <span>邮箱</span>
          </div>
        </div>
      </div>
      <div class="sider-down">
        <div class="section-container">
          <div class="section">
            <img src alt />
            <span>设置</span>
          </div>
          <div class="section">
            <img src alt />
            <span>退出</span>
          </div>
        </div>
      </div>
    </div>
    <div class="header"></div>
    <div class="content">
      <div class="box">123</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.sider {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15.6vw;
  height: 100vh;
  background-color: #141c3b;
  color: #e8e8e8;
  position: fixed;
  left: 0;
  top: 0;
}
.index {
  width: 146px;
  height: 43px;
  cursor: pointer;
}
.name-icon {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.header {
  height: 56px;
  padding: 0 40px;
  background: #fff;
  box-shadow: 5px 6px 4px rgba(213, 209, 209, 0.5);
  position: fixed;
  top: 0;
  left: 15.6vw;
  right: 0;
}
.content {
  width: 100%;
  position: absolute;
  left: 15.6vw;
  top: 60px;
}

.box {
  height: 600px;
  width: 600px;
  margin: 0 auto;
  padding: 120px 0;
}
</style>
