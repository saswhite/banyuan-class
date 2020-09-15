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

        <div class="section">
          <div class="container">
            <img
              src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-my-course.png"
              class="section-icon"
            />
            <span @click="select('MyClass')">我的课程</span>
          </div>
        </div>
        <div class="section">
          <div class="container">
            <img
              src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-email.png"
              class="section-icon"
            />
            <span @click="select('Email')">邮箱</span>
          </div>
        </div>
      </div>
      <div class="sider-down">
        <div class="section-container">
          <div class="section">
            <div class="container">
              <img
                src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-set.png"
                class="section-icon"
              />
              <span @click="select('Setting')">设置</span>
            </div>
          </div>
          <div class="section">
            <div class="container">
              <img
                src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-quit.png"
                class="section-icon"
              />
              <span>退出</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header">
      <img
        src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/ic_fanhui_jiashi.svg"
        alt
        class="return"
      />
      <a href="#" class="header-link">返回首页</a>
      <p class="header-title">我的课程</p>
    </div>
    <div class="content">
      <!-- <div class="box">123</div> -->
      <component :is="selected" class="box"></component>
    </div>
  </div>
</template>

<script>
import MyClass from "./components/MyClass";
import Email from "./components/Email";
import Setting from "./components/Setting";

export default {
  name: "App",
  data() {
    return {
      selected: ""
    };
  },
  components: {
    MyClass,
    Email,
    Setting
  },
  methods: {
    select: function(name) {
      this.selected = name;
    }
  }
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
  font-weight: 300;
  position: fixed;
  left: 0;
  top: 0;
}

.sider-up {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.index {
  width: 146px;
  height: 43px;
  cursor: pointer;
  padding: 16px 0;
}

.name-container {
  padding: 48px 0 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name-icon {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 10px;
}

.name {
  font-size: 14px;
  text-align: center;
}
.header {
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 20px;
  background: #fff;
  box-shadow: 5px 6px 4px rgba(213, 209, 209, 0.5);
  position: fixed;
  top: 0;
  left: 15.6vw;
  right: 0;
}
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
.section {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  font-size: 16px;
  width: 15.6vw;
  height: 54px;
  line-height: 54px;
  text-align: center;
  cursor: pointer;
}
.container {
  width: 95px;
  display: flex;
  align-items: center;
}
.section:hover {
  background-color: rgba(105, 100, 209, 0.35);
}
.section-icon {
  width: 22px;
  height: 22px;
  margin-right: 9px;
}
.sider-down {
  margin-bottom: 40px;
}

.header-link {
  text-decoration: none;
  font-size: 16px;
  color: #707070;
  line-height: 56px;
  margin-right: 30px;
  cursor: pointer;
}
.return {
  cursor: pointer;
  margin-right: 20px;
}
.header-link:hover {
  color: #000;
}
.header-title {
  font-size: 16px;
  font-weight: 300;
  color: #202020;
  line-height: 56px;
}
</style>
