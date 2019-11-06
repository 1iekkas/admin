<template>
  <div class="form-section">
    <el-tabs v-model="activeName" @tab-click="handleClick" :before-leave="watchActive">
      <el-tab-pane label="认证首页" name="0">
        <div class="bg-white">
          <user-auth-index name="认证首页" :id="0"></user-auth-index>
        </div>
      </el-tab-pane>
      <el-tab-pane label="手机认证" name="1">
        <div class="bg-white">
          <auth-phone name="手机认证" :id="1"></auth-phone>
        </div>
      </el-tab-pane>
      <el-tab-pane label="实名认证" name="2">
        <div class="bg-white">
          <auth-real-name name="实名认证" :id="2"></auth-real-name>
        </div>
      </el-tab-pane>
      <el-tab-pane label="银行认证" name="3">
        <div class="bg-white">
          <auth-bank name="视频认证" :id="3"></auth-bank>
        </div>
      </el-tab-pane>
      <el-tab-pane label="视频认证" name="4">
        <div class="bg-white">
          <auth-video name="视频认证" :id="4"></auth-video>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import userAuthIndex from "@components/user-auth/auth-index"
import authPhone from "@components/user-auth/auth-phone"
import authRealName from "@components/user-auth/auth-real"
import authVideo from "@components/user-auth/auth-video"
import authBank from "@components/user-auth/auth-bank"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    userAuthIndex,
    authPhone,
    authRealName,
    authVideo,
    authBank
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
   
  },

  methods: {
    handleClick(e) {
      
    },
    watchActive(activeName, oldActiveName) {
      this.$router.push({
        path: `/userAuth?tab=${activeName}`
      }) 
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