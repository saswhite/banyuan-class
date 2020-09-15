<template>
  <div>
    <div class="title">
      <div class="left">
        <div class="title-name">消息列表</div>
        <div class="title-btn">全部已读</div>
      </div>
      <div class="right">
        <img
          src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/mall/pic_fankui_youxiang.png"
          alt
        />
        <span right>意见反馈</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Email",
  data() {
    return {};
  }
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}
.title-name {
  font-size: 20px;
  font-weight: 400;
  color: #707070;
  line-height: 28px;
}
.left {
  display: flex;
  align-items: center;
}
.title-btn {
  cursor: pointer;
  margin: 3px 0 0 30px;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  font-size: 14px;
  color: #909090;
  line-height: 20px;
  padding: 0 9px;
}
.title-btn:hover {
  border-color: #6967ce;
  background: #6967ce;
  color: #fff;
}
</style>