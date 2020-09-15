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
          class="right-icon"
        />
        <span right>意见反馈</span>
      </div>
    </div>
    <div class="table">
      <div class="table-title">
        <div class="table-title-item">内容</div>
        <div class="table-title-item">发布者</div>
        <div class="table-title-item">日期</div>
      </div>
      <div class="table-item"></div>
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
.right {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.right-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>