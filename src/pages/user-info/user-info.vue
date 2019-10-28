<template>
  <div class="form-section">
    <!-- <div class="bg-white margin-bottom">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>设置发货地址</el-breadcrumb-item>
      </el-breadcrumb>
    </div> -->
    <el-tabs v-model="activeName" @tab-click="handleClick" lazy="true">
      <el-tab-pane label="个人资料" name="0">
        <div class="bg-white" v-if="activeName == 0">
          <user-info-form name="个人资料" :user-info="userInfo"></user-info-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="修改登录密码" name="1">
        <div class="bg-white" v-if="activeName == 1">
          <user-key-form name="修改登录密码" :user-info="userInfo"></user-key-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="修改二级密码" name="2">
        <div class="bg-white" v-if="activeName == 2">
          <user-secondary-code name="修改二级密码" :user-info="userInfo"></user-secondary-code>
        </div>
      </el-tab-pane>
      <el-tab-pane label="修改密保问题" name="3">
        <div class="bg-white" v-if="activeName == 3">
          <user-secret-question name="修改密保问题"  :user-info="userInfo"></user-secret-question>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import userInfoForm from "@components/user-info/user-info-form"
import userKeyForm from "@components/user-info/user-key-form"
import userSecondaryCode from "@components/user-info/user-secondary-code"
import userSecretQuestion from "@components/user-info/user-secret-question"
export default {
  data() {
    return {
      activeName: '0',
      userInfo: this.Global.getCookieUserInfo('memberInfo'),
    }
  },
  components: {
    userInfoForm,
    userKeyForm,
    userSecondaryCode,
    userSecretQuestion
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
    activeName(n, o) {
      if(n !== o && n !== 0) {
        this.$router.push({
          path: `/userInfo?tab=${n}`
        })
      }
    },
    /**监听手动修改url参数 */
    '$route' (to, from) {
      this.activeName = to.query.tab 
    }
  },

  methods: {
    handleClick(e) {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
>>>.el-tabs__header {
  background-color white
  padding 0 20px
}

>>>.el-tabs__active-bar {
  background-color #ff5000
}

>>>.el-tabs__item {
  &.is-active, &:hover {
    color #ff5000
  }
}
</style>