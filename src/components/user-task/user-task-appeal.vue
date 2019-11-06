<template>
  <div class="section task-section">
    <div class="task-section-title">我的申诉</div>
    <div class="flex task-section-main">
      <div class="task-item">
        我发起的未解决申诉：<span class="text-orange text-bold">69</span>
      </div>
      <div class="task-item">
        我被申诉的未解决申诉：<span class="text-orange text-bold">69</span>
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
  margin-top 35px
  .task-section-title {
    background-color #ffc2be
    padding 5px 0 5px 20px
    color #444
    font-size 16px
    font-weight normal
    line-height 28px
    text-align left 
  }
  .task-section-main {
    padding 10px 70px 10px 70px;
    flex-wrap wrap
    justify-content flex-start
    .task-item {
      flex 1
      padding 10px 0
      text-align left 
      color #666
    }
  }
}
</style>