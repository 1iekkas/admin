<template>
  <div class="form-section">
    <div class="bg-white">
      <div class="notify">
        <i class="el-icon-message-solid"></i>
        <p class="notify-text">您上次登陆的时间是：{{userInfo.lastLoginTime || '2019/11/5 16:40:57'}} <span style="padding: 0 10px"></span> ip:{{userInfo.lastLoginIp || '27.36.130.234 [广东省佛山市 联通]'}}</p>
        <p><el-checkbox v-model="userInfo.isCheckLoginCity">开启异地登录限制</el-checkbox></p>
      </div> 
      <count-section></count-section>
      <task-section></task-section>
      <task-appeal v-if="userInfo.type == 2"></task-appeal>
      <task-carousel v-if="userInfo.type == 1"></task-carousel>
    </div>
    <rank-section></rank-section>
  </div>    
</template>

<script>
import CountSection from "@components/user-count/user-count"
import TaskSection from "@components/user-task/user-task"
import RankSection from "@components/user-rank/user-rank"
import TaskCarousel from "@components/user-task/user-task-carousel"
import TaskAppeal from "@components/user-task/user-task-appeal"
export default {
  data() {
    return {
      checked: false,
      userInfo: this.Global.getCookieUserInfo('memberInfo')
    }
  },

  components: {
    CountSection,
    TaskSection,
    RankSection,
    TaskCarousel,
    TaskAppeal
  }
}
</script>

<style lang="stylus" scoped>
.notify {
  height 34px
  display flex
  align-items center
  background-color #eaedf4
  padding 5px 30px 5px 50px
  text-align left
  font-size 14px
  i {
    color red
  }
  .notify-text {
    margin-left 6px
    flex 1
  }
}

.rank {
  margin-top 25px
  padding 30px
  background-color #ccc
}
</style>