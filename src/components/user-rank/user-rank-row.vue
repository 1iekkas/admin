<template>
  <div class="rank-row">
    <div class="title">
      {{title}}   
    </div>
    <div class="list">
      <div class="item" v-for="(i, index) in list" :key="index">
        <span>第{{i}}名</span>
        <span>1*8*5547</span>
        <span>共推荐{{i+5}}人</span>
      </div>    
    </div>    
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '排行榜'
    },
    list: {
      type: Array,
      default:() => {
        return [1,2,3,4,5,6]
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
.rank-row {
  width 30%    
  background-color white
  padding 15px
  border-radius 3px
  .title {
    color #ea544a
    padding-bottom 15px 
    border-bottom 1px dashed #ff9f99   
  }
  .list {
    padding-top 15px 
    .item {
      display flex
      align-items center
      font-size 13px
      line-height 32px
      color #666
      span {
        flex 1
        text-align left 
      }
      &:first-child {
        color #0082f6
      }
      &:nth-child(2) {
        color #ff7f00
      }
      &:nth-child(3) {
        color #2CC268
      }
    }   
  }
}
</style>