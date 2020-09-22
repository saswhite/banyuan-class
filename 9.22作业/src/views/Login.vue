<template>
  <div class="login">
    <h1>登陆</h1>
    <input type="text" placeholder="姓名" class="input" v-model="name" />
    <input type="text" placeholder="年龄" class="input" v-model="age" />
    <input type="text" placeholder="昵称" class="input" v-model="nickName" />
    <input type="text" placeholder="大学" class="input" v-model="school" />
    <button class="submit" @click="jump">登陆</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      age: 0,
      nickName: "",
      school: ""
    };
  },
  methods: {
    ...mapActions({ pushListState: "login/pushListState" }),
    jump() {
      let list = {
        name: this.name,
        age: this.age,
        nickName: this.nickName,
        school: this.school
      };
      this.$router.push({
        name: "content"
      });
      this.pushListState(list);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 500px;
  height: auto;
  margin-top: 100px;
  .input {
    width: 400px;
    height: 40px;
    margin: 20px 0;
    border: 1px solid #eeeeee;
  }
  .submit {
    cursor: pointer;
    width: 400px;
    height: 40px;
    background-color: #58a1ec;
    color: #fff;
    font-size: 24px;
  }
}
</style>
