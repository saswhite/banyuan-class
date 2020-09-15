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
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>