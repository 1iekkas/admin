<template>
  <div class="section task-section" :class="{'blue': userType == 2}">
    <div class="task-section-title">我的任务</div>
    <div class="flex task-section-main" v-if="userType == 1">
      <div class="task-item">
        已参与任务：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        待商家发货：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        待收货好评：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        待审核返款：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        我发起的未解决申诉：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        我被申诉的未解决申诉：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        已完成：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        我已被：<span class="text-orange text-bold">69</span> 人拉入黑名单（达到10人系统禁止接任务）
      </div>
    </div>
    <!---->
    <div class="flex task-section-main" v-else>
      <div class="task-item">
        已发布任务：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        待接手任务：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        已接手任务：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        待我发货：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        待收货好评：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        待审核返款：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        已完成：<span class="text-orange text-bold">69</span>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      userType: this.Global.getCookieUserInfo('memberInfo')['type']
    }
  }    
}
</script>

<style lang="stylus" scoped>
.task-section {
  border 1px solid #e6928c
  .task-section-title {
    background-color #ffc2be
    padding 5px 0 5px 20px
    color #444
    font-size 16px
    font-weight normal
    line-height 28px
    text-align left 
  }
  &.blue {
     border-color #b6e2ff
    .task-section-title{
      background-color #b6e2ff
    }
  }
  .task-section-main {
    padding 10px 70px 10px 70px;
    flex-wrap wrap
    justify-content space-between
    .task-item {
      min-width 190px
      padding 10px 0
      text-align left 
      color #666
    }
  }
}
</style>