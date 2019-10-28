<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="form">
      <div class="form-nav">
        <div class="inline-flex">
          <div class="nav-item" :class="{'active': active == nav.id}" v-for="(nav, index) in type" :key="index" @click="switchTab(nav.id)">
            {{nav.name}}
          </div>
        </div>
      </div>
      <div class="form-wrap">
        <components :is="type[active].component" :type="active"></components>
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
        name: '支付宝充值',
        component: thirdParty
      },{
        id: 1,
        name: '微信充值',
        component: thirdParty
      },{
        id: 2,
        name: '网银汇款',
        component: remitMoney
      },{
        id: 3,
        name: '网银充值',
        component: eBank
      }]
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
    color #666
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
</style>