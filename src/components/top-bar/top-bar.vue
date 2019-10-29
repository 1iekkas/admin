<template>
  <div class="top-bar">
    <div class="header">
      <div class="info">
        您好, <router-link to="/">{{userInfo.userName}}</router-link> 欢迎您回来！ 
        <router-link to="/userMail?tab=0">短消息 <span>({{userInfo.msgCount}})</span></router-link>
        <router-link to="">会员中心</router-link>
        <router-link to="/login">退出</router-link>
      </div>
      <div class="nav nav-left">
        <router-link to="/">会员首页</router-link>
        <router-link to="">邀请好友</router-link>
        <router-link to="">手机版</router-link>
        <router-link to="">帮助中心</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: this.Global.getCookieUserInfo('memberInfo')
    }
  },

  created() {
   
  }
}
</script>

<style lang="stylus" scoped>
.info {
  a {
    margin: 0 10px;
    &:hover {
      color: red
    }
    &:first-child {
      margin: 0 3px;
      color: red 
    } 
    span {
      color: red
    }
  }
}
.nav {
  display: flex;
  justify-content: flex-end;
  a {
    width: 80px; 
    &:hover {
      color: red
    }
  }
}

</style>