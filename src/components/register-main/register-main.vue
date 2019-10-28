<template>
  <div class="section">
    <div class="register-main">
      <div class="register-wrap register-left">
        <div class="register-title">普通用户注册</div>
        <div class="register-desc">
          我有的是时间，我想要做任务赚钱，帮助商家踩踩店，并将这份快乐传递给更多人！适合普通用户注册！
        </div>
        <div class="register-content flex">
          <img src="http://demo2.hsk.cc/templates/main/images/buyer.jpg" alt="">
          <router-link class="link link--default" to="">用户注册</router-link>
        </div>
        <div class="registet-tips flex">
          我已经注册过了 现在就  <el-link type="primary" @click="nav('/login')">登录</el-link>
        </div>
      </div>
      <div class="register-wrap register-left">
        <div class="register-title">商家注册</div>
        <div class="register-desc">
          我开了网店，想要推广商品、收集新品市场反馈、提升产品销量，打造专属于我的品牌！立即注册，百万用户为您进行推广营销！
        </div>
        <div class="register-content flex">
          <img src="http://demo2.hsk.cc/templates/main/images/store_ico.png" alt="">
          <router-link class="link link--blue" to="">商家注册</router-link>
        </div>
        <div class="registet-tips flex">
          我已经注册过了 现在就  <el-link type="primary" @click="nav('/login')">登录</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nav(path) {
      this.$router.push({ path : path})
    }
  }
}
</script>

<style lang="stylus" scoped>
.section {
  min-width: 1200px; 
  background-color: #f1f1f1;
  overflow: hidden;
}

.register-main {
  text-align left 
  width: 1200px;
  margin: 40px auto;   
  display flex
  .register-wrap {
    flex 1
    margin 0 15px
    background-color white
    padding 40px 55px 
    border 1px solid #ccc
    .register-title {
      font-size 20px
      color #444
      font-weight bold
      padding-bottom 8px
      border-bottom 2px solid #eaeaea
      position relative
      &:after {
        content ''
        position absolute
        left 0
        bottom -2px
        width 90px
        height 2px
        background-color #f00
      }
    }
    .register-desc {
      font-size 15px
      color #777
      padding 20px 0
      line-height 25px
    }
    .register-content {
      padding 10px
      justify-content space-between
      .link {
        color white
        text-align center
        padding 12px 75px
        border-radius 30px
        &.link--default {
          background-color #ff6000
          color #fbffb5
        }
        &.link--blue {
          background-color #0793ef
          color white
        }
      }
    }
    .registet-tips {
      padding-top 35px
      color #777
      font-size 13px
      align-items center
      justify-content center
      a {
        margin 0 8px
        font-size 13px
      }
    }
  }
  .register-left {
    .register-title {
      &:after {
        background-color #0793ef
      }
    }
  }
}
</style>