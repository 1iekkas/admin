<template>
  <div class="section section-group">
    <div class="title">
      <span>双向指定单号</span>
    </div>
    <div class="tips">
      <div align="center">
        <img src="http://demo2.hsk.cc/templates/main/images/zhiding.gif" alt="">
      </div>
      <div>【派单时间】9:00-17:00刷的是晚上20:00提供，17点00-9:00刷的是第二天15:00提供</div>
      <div>【发货地址】淘宝无备货小卖家,有千千万!所以淘宝不查发货地的!收件时间要比付款时间迟,收货地址要对得上就行了!</div>
    </div>
    <!---->
    <div class="section">
      <div class="flex tab">
        <div class="tab-title">选择订购方式</div>
        <div class="tab-cell flex">
          <div class="tab-item" :class="{'tab-active': active == 0}" @click="changeForm(0)">我要单独购买</div>
          <div class="tab-item" :class="{'tab-active': active == 1}" @click="changeForm(1)">我有任务编号购买</div>
        </div>
      </div>
      <!---->
      <buy-two-way-single v-if="active == 0"></buy-two-way-single>
      <buy-two-way-code v-if="active == 1"></buy-two-way-code>
    </div>
  </div>  
</template>

<script>
import BuyTwoWaySingle from "@components/express-form/buy-two-way-single"
import BuyTwoWayCode from "@components/express-form/buy-two-way-code"
export default {
  data() {
    return {
      active: 0
    }
  },

  components: {
    BuyTwoWaySingle,
    BuyTwoWayCode
  },

  methods: {
    changeForm(key) {
      if(this.active !== key) {
        this.active = key
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tips {
  line-height 30px
  text-align center
  color red
  font-size 15px
  padding 10px
  font-weight bold
  border 1px solid #FC3
  background-color #FFFEDF
  margin-bottom 20px
} 
.tab {
  padding-right 16px
  margin 40px 0 30px 50px
  align-items center
  justify-content flex-start
  font-size 14px
  .tab-title {
    padding-right: 16px;
    width 100px
    margin-right 20px
  }
  .tab-cell {
    width 400px
    align-items center
    justify-content center
    border 1px solid #f39970
    .tab-item {
      flex 1
      padding 11px 25px
      &.tab-active {
        color white
        background #ff5000
      }
    }  
  }
}

.tips-title {
  color #555
}

.table-section {
  margin-top 30px
  .table-title {
    background-color #f1f1f1
    align-items center
    justify-content center
    margin 0 15px
    div {
      color #f00
      font-size 13px
      text-align left
      &:first-child {
        width 250px
      }
      &:nth-child(2) {
        flex 1
      }
      &:hover {
        color #F60
      }
    }
  }
  .name {
    color #0078e4
    &:hover {
      color #f60
    }
  }
}
</style>