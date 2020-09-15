<template>
  <div>
    <div class="title">自主学习</div>
    <div class="section-container">
      <div class="section"></div>
    </div>
    <div class="section"></div>
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
  position: relative;
  width: 100%;
  padding: 40px 40px 40px 44px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  font-size: 0;
  box-shadow: 4px 2px 4px rgba(212, 210, 210, 0.27);
  cursor: pointer;
}
</style>