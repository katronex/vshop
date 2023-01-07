<template>
  <div>
    <p>home</p>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      window.sessionStorage.clear("token");
      this.$router.push("/login");
      this.$message.success("退出成功");
    },
  },
};
</script>

<style>
</style>