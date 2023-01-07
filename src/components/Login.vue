<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录 -->
      <el-form
        label-width="0px"
        :rules="loginRules"
        ref="ruleForm"
        :model="loginForm"
        class="login_form"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-usercenter"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submitLogin">登录</el-button>
          <el-button type="success">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 4, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    resetForm(formName) {
        this.$refs[formName].resetFields();
    },
    submitLogin(){
        this.$refs.ruleForm.validate(async valid => {
            if(!valid) return;
            const {data: res} = await this.$http.post("/login",this.loginForm);
            if(res.code !== 200) return this.$message.error("登录失败,用户名或密码错误")
            this.$message.success("登录成功")
            window.sessionStorage.setItem("token",res.data.token);
            this.$router.push("/home")
        })
    }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: rgb(76, 70, 169);
  height: 100%;
}
.login_box {
  width: 500px;
  height: 280px;
  background-color: white;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 100px;
    width: 100px;
    border: 1px solid whitesmoke;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0, 0, 10, #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
}
</style>