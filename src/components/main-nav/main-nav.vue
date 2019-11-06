<template>
  <div class="main-nav" :style="{'background': userType == 1 ? '#ff4401' : '#1989fa'}">
    <div class="rows">
      <img src="http://demo2.hsk.cc/templates/main/images/logo_buyer.png" alt="">
    </div>
    <div class="rows">
      <router-link to="/userSpread?tab=0">推广赚钱</router-link>
      <router-link to="/cardCenter?tab=0">购买VIP卡</router-link>
    </div>
    <div class="rows rows--relative">
      <router-link class="hover-item" to="/userInfo?tab=0" @mouseenter.native="show = true" @mouseleave.native="show = false">账户设置
        
      </router-link>
      <router-link v-if="userType == 1" to="/taskHall?tab=0">任务大厅</router-link>
      <router-link v-else to="/taskTable?tab=0">发布任务</router-link>
      <transition name="el-fade-in-linear">
          <div class="tab" v-show="show" @mouseenter="show = true" @mouseleave="show = false">
          <div class="tab-wrap flex">
            <div class="item" v-for="(item, index) in list" :key="index">
              <div class="item-title" :style="{color: item.style}">
                {{item.name}}
              </div>
              <div class="sub">
                <div class="sub-item" v-for="(sub, i) in item.sub" :key="i">
                  <router-link :to="sub.link" :style="{color: sub.style}">{{sub.name}}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      list: [],
      res: [
        {name: '安全设置', sub: [
          {name: '修改登录/二级密码', link: '/userInfo?tab=1', key: 0},
          {name: '修改个人资料', link: '/userInfo?tab=0', key: 0},
          {name: '密保问题设置', link: '/userInfo?tab=3', key: 0},
          {name: '安全认证中心', link: '/userAuth?tab=0', style: '#F00', key: 0}
        ], style: '#3aac8a'},
        {name: '其他服务', sub: [
          {name: '缴纳商保', link: '/userInfo?tab=0', style: 'green', key: 1},
          {name: '黑名单', link: '/blackList?tab=0', style: 'green', key: 2},
          {name: '兑换资金', link: '/userInfo?tab=0', key: 0}
        ], style: '#ea746b'},
        {name: '充值提现', sub: [
          {name: '账户充值', link: '/recharge?tab=0', key: 0},
          {name: '余额提现', link: '/userInfo?tab=0', key: 0}
        ], style: '#0082f6'}
      ],
      userType: this.Global.getCookieUserInfo('memberInfo')['type']
    }
  },

  created() {
    this.filterList()
  },
  
  methods: {
    showNav() {
      this.show = !this.show
    },

    filterList() {
      if(this.userType == 1) {
        this.res.forEach((item, i) => {
          this.list[i] = item
          this.list[i].sub = item['sub'].filter(i => {
            return i.key == 0 || i.key == 1
          })
        })
      }else {
        this.res.forEach((item, i) => {
          this.list[i] = item
          this.list[i].sub = item['sub'].filter(i => {
            return i.key == 0 || i.key == 2
          })
        })
      }
    }
    
  }
}
</script>

<style lang="stylus" scoped>
.main-nav {
  min-width: 1200px;
  width: 100%;
  height: 80px;
  font-size: 16px;
  text-align: center;
  background: #ff4401;
  z-index: 9900;
  border-bottom: 1px solid #ddd;
  display flex
  .rows {
    display flex
    align-items center  
    &:first-child {
      flex-grow 1
      justify-content flex-end
    }
    &:nth-child(2) {
      flex-grow 1.45
      padding 0 25px
      justify-content flex-start
    }
    &:nth-child(3) {
      flex-grow 1
      justify-content flex-start
    }
    a {
      font-size 16px
      width 100px
      color white
      &:hover {
        color #ffffa7
      }
    }
  }
  img {
    background-color white
  }
  .rows--relative {
    position relative
    .tab {
      width 450px
      color #555
      position absolute
      top 62px
      left -170px
      z-index 2
      transition all .5s linear
      &:after {
        content ''
        position absolute
        top -10px
        left 211px
        border-right 10px solid transparent
        border-left 10px solid transparent
        border-bottom 10px solid white
      } 
      .tab-wrap {
        background-color white
        border-radius 4px
        margin-top 0px
        padding 10px 15px
        box-shadow 0 0 3px 1px rgba(0, 0, 0, .1)
        align-items flex-start
        .item {
          flex 1
        }
        .item-title {
          padding 5px 15px
        }
        .sub-item {
          padding 8px 0
          a {
            color #555
            font-size 13px
            &:hover {
              color #f60 !important
            }
          }
        }
      }
    }
  }
}
</style>