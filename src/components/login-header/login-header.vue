<template>
  <div class="section border--bottom">
    <div class="logo">
      <a href="#">
        <img src="@assets/logo.png" alt="">
      </a>
    </div>
    <div class="title"></div>
    <div class="action">
      <div class="action-item"><router-link to="/login">登录</router-link></div>
      <div class="action-item"><router-link to="/register">注册</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**类型0登录 1注册 */
    type: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.section {
  height: 80px;
  display: flex;
  align-items: center;
  min-width: 1200px;  
}

.logo {
  width: 400px;  
  a {
    display: block; 
    img {
      height: 60px;
      margin: 0 auto;
    } 
  }
}

.title {
  flex: 1;
}

.action {
  width: 400px;
  display: flex;
  align-items: center;
  padding: 0 100px;   
  .action-item {
    width: 100px;
  }
}
</style>