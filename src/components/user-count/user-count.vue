<template>
  <div class="section count-section">
    <div class="flex">
      <div class="count-item" v-for="(item, index) in 5" :key="index">
        <div class="count-item-title">
          账户余额
        </div>
        <div class="count-item-value">
          ￥3357.00 元
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="count-item-button" v-for="(item, index) in 4" :key="index">
        <router-link to="/">账户充值</router-link>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.count-section {
  .count-item {
    flex 1
    padding-top 40px
  }
  .count-item-title {
    font-size 16px
    color #474e5d
    font-weight bold
    padding 12px 0
  }
  .count-item-value {
    color #0082f6
    font-size 22px
    padding 12px 0
  }
  .count-item-button {
    padding 35px 0 35px 0
    flex 1
    a {
      display block
      background-color #ea544e
      color white
      width 40%
      margin 0 auto
      padding 8px 18px
      border-radius 20px
    }
  }
}
</style>