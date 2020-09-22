<template>
  <div class="content">
    <div class="aside">
      <div class="aside-conteiner">
        <div class="aside-conteiner-section">姓名：{{ asideName }}</div>
        <div class="aside-conteiner-section">年龄：{{ asideAge }}</div>
        <div class="aside-conteiner-section">昵称：{{ asideNickName }}</div>
        <div class="aside-conteiner-section">学校：{{ asideSchool }}</div>
      </div>
    </div>
    <div class="main">
      <div class="main-title">个人信息</div>
      <div class="main-container">
        <span class="main-container-title">信息修改</span>
        <div class="input-container">
          <div>
            <span class="input-container-title">姓名</span>
            <input type="text" class="input-container-input" v-model="name" />
            <span class="input-container-title">学校</span>
            <input type="text" class="input-container-input" v-model="school" />
          </div>
          <div>
            <span class="input-container-title">昵称</span>
            <input type="text" class="input-container-input" v-model="nickName" />
          </div>
          <div>
            <span class="input-container-title">年龄</span>
            <input type="text" class="input-container-input" v-model="age" />
          </div>
        </div>
      </div>
      <button @click="change" class>修改</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      name: "",
      age: 0,
      nickName: "",
      school: "",
      asideList: this.$store.state.login.list
    };
  },
  created() {
    this.name = this.$store.state.login.list.name;
    this.age = this.$store.state.login.list.age;
    this.nickName = this.$store.state.login.list.nickName;
    this.school = this.$store.state.login.list.school;
  },
  methods: {
    change() {
      this.asideList.name = this.name;
      this.asideList.age = this.age;
      this.asideList.nickName = this.nickName;
      this.asideList.school = this.school;
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  .aside {
    position: relative;
    width: 15.6vw;
    height: 100vh;
    background-color: #131c3c;
    &-conteiner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &-section {
        margin: 50px 0;
        color: #fff;
        font-size: 16px;
      }
    }
  }
  .main {
    width: 700px;
    height: 500px;
    margin: 0 auto;
    margin-top: 100px;
    &-title {
      text-align: left;
      font-size: 20px;
    }
    &-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      width: 100%;
      height: 100%;
      border: 1px solid #efebeb;
      &-title {
        position: absolute;
        left: 50px;
        top: 100px;
      }
      .input-container {
        margin-top: 200px;
        width: 500px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        &-input {
          border: 1px solid #efebeb;
        }
      }
    }
  }
}
</style>
