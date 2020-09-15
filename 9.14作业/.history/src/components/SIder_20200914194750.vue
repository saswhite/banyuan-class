<template>
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

      <div class="section" :class="isbg?'bg':''">
        <div class="container">
          <img
            src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-my-course.png"
            class="section-icon"
          />
          <span @click="select('MyClass',$event)">我的课程</span>
        </div>
      </div>
      <div class="section" :class="isbg?'bg':''">
        <div class="container">
          <img
            src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-email.png"
            class="section-icon"
          />
          <span @click="select('Email',$event)">邮箱</span>
        </div>
      </div>
    </div>
    <div class="sider-down">
      <div class="section-container">
        <div class="section" :class="isbg?'bg':''">
          <div class="container">
            <img
              src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-set.png"
              class="section-icon"
            />
            <span @click="select('Setting',$event)">设置</span>
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
</template>

<script>
export default {
  name: "Sider",
  data() {
    return {
      selected: "",
      isbg: false
    };
  },
  methods: {
    select: function(name, e) {
      this.selected = name;
      this.$emit("select", this.selected);
      console.log(e);
    }
  }
};
</script>

<style scoped>
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

.bg {
  background-color: rgba(105, 100, 209, 0.6);
}
.bg:hover {
  background-color: rgba(105, 100, 209, 0.8);
}
</style>