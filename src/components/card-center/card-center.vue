<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="count flex">
      <div>账户余额：<span>4018.58</span>元</div> 
      <div>发布点：<span>4018.58</span>点</div>
      <div>收藏点：<span>4018.58</span>点</div>
      <div>流量点：<span>4018.58</span>点</div>
    </div>
    <div class="form">
      <div class="form-nav">
        <div class="inline-flex">
          <div class="nav-item" :class="{'active': active == nav.id}" v-for="(nav, index) in type" :key="index" @click="switchTab(nav.id)">
            {{nav.name}}
          </div>
        </div>
      </div>
      <div class="form-wrap flex">
        <div class="card" v-for="item in 6" :key="item">
          <div class="card-content">
            <div class="img">
              <img src="http://demo2.hsk.cc/templates/main/images/buyer_vip1.jpg" alt="">
            </div>
            <div class="card-title">
              一个月VIP会员卡【试客专用】 <span class="text-red">15元</span>
            </div>
            <div class="card-action">
              <div class="button"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>   

<script>
import thirdParty from "@components/user-recharge/third-party"
import remitMoney from "@components/user-recharge/remit-money"
import eBank from "@components/user-recharge/e-bank"
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      active: 0,
      type: [{
        id: 0,
        name: '全部'
      },{
        id: 1,
        name: 'VIP会员卡'
      },{
        id: 2,
        name: '身份切换卡'
      }],
      dataList: [1,2,3,4,5,6,7,8]
    }
  },

  methods: {
    switchTab(id) {
      if(this.active !== id) {
        this.active = id
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.section {
  margin-bottom 60px
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
  .action {
    &:hover {
      color #0089CD
    }
  }  
}

.form {
  width auto
  margin 0
  overflow hidden
}

.form-nav {
  margin-top 15px
  text-align left
  font-size 14px
  .inline-flex {
    border 1px solid #f39970
    display inline-flex
  }
  .nav-item {
    padding 15px 25px
    width 150px
    color #666
    text-align center
    border-right 1px solid #efefef
    &:last-child {
      border-right 0
    }
    &.active {
      color: #fff;
      background: #ff5000;
    }
  }
}

.form-wrap {
  padding-top 20px
  flex-wrap wrap
  .card {
    margin-bottom 30px
    width 33.33%
    .card-content {
      padding 10px 0 15px 0
      margin 0 10px
      background-color #f0f4f8
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12)
      border 1px solid #e8e8e8
    }
    img {
      margin 0 auto
    }
    .card-title {
      font-size 14px
      font-weight bold
      color #555
      height 40px
      line-height 40px
    }
    .card-action {
      text-align center
      .button {
        margin 0 auto
        width 90px
        height 32px
        background-image url('http://demo2.hsk.cc/style/images/card_bt.gif')
      }
    }
  }
}

.count {
  justify-content center
  margin-bottom 20px
  div {
    color #6e717a
    font-size 14px
    padding 0 10px
  }
  span {
    color #f60
    font-weight bold
    padding 0 3px
  }
}
</style>