<template>
  <div>
    <div class="title">自主学习</div>
    <div class="section-container">
      <div class="section">
        <div class="left">
          <div class="up-title">预备课程</div>
          <div class="down-title">预备课程</div>
        </div>
        <div class="right"></div>
      </div>
    </div>
    <div class="section"></div>
  </div>
</template>

<script>
export default {
  name: "MyClass",
  data() {
    return {};
  }
};
</script>

<style scoped>
.title {
  font-size: 20px;
  font-weight: 400;
  color: #707070;
  line-height: 28px;
}
.section-container {
  width: 100%;
  padding: 15px 0;
}
.section {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 40px 40px 40px 44px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  box-shadow: 4px 2px 4px rgba(212, 210, 210, 0.27);
  cursor: pointer;
}
.up-title {
  font-size: 20px;
  font-weight: 500;
  font-family: PingFangSC-Regular;
  color: #404040;
  line-height: 28px;
  padding-bottom: 10px;
}
.down-title {
  font-size: 16px;
  font-weight: 500;
  font-family: PingFangSC-Regular;
  color: #909090;
  line-height: 22px;
}
</style>