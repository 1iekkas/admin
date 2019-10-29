<template>
    <div class="sider-bar">
      <div class="userInfo-section" v-if="userInfo">
        <div class="avatar">
          <img :src="userInfo.avatar" alt="">
        </div>
        <div class="name">
          您好！<span class="text-bold">{{userInfo.userName}}</span>
        </div>
        <div class="desc">
          <div class="level flex">会员组：<span class="text-orange text-bold">VIP试客</span> <img width="14" height="14" src="http://demo2.hsk.cc/style/images/vip.gif" alt=""></div>
          <div class="flex">账户余额：<span class="text-orange text-bold">{{userInfo.amount}} </span>元</div>
        </div>
        <div class="icon">
          <img v-if="userInfo.mobileAuth" src="http://demo2.hsk.cc/style/images/mobile_1.gif" alt="">
          <img v-if="userInfo.realNameAuth" src="http://demo2.hsk.cc/style/images/shiming.gif" alt="">
          <img v-if="userInfo.isShangBao" src="http://demo2.hsk.cc/style/images/ShangBao.gif" alt="">
        </div>
      </div>
      <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      text-color="#232323"
      active-text-color="#F60"	
      router
      @open="handleOpen"
      @close="handleClose">
        <el-submenu v-for="(item, index) in list" :key="index" :index="`${Number(index)}`">
          <template slot="title">
            <span><i :class="item.entity.icon"></i>{{item.entity.alias}}</span>
          </template>
          <el-menu-item v-for="(sub, idx) in item.child" :key="idx" :index="sub.entity.link">{{sub.entity.alias}}</el-menu-item>
        </el-submenu> 
      </el-menu>
    </div>
</template>

<script>
import nav from "@common/json/nav"
export default {
  data() {
    return {
      list: nav,
      userInfo: this.Global.getCookieUserInfo('memberInfo')
    }
  },

  created() {  
    nav.forEach(element => {
      element.child = element.child.filter(item => item['entity'].group == this.userInfo['groupId'])
    });
  },
  
  methods: {
    
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },

    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="stylus" scoped>
.sider-bar {
  width 200px
  border-radius 3px
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  overflow hidden
}

.el-menu{
  border-right-width 0
  >>>.el-submenu__title:hover {
    background-color transparent
  }
  >>>.el-menu-item:hover {
    background-color transparent
  }
  >>>.el-menu-item:focus {
    background-color transparent
  }
  >>>.el-submenu__title {
    display flex
    align-items center
    justify-content center
  }
  >>>.el-submenu__icon-arrow {
    position relative
    top 0
    left 0
    margin-left 12px
    margin-top 0px
  }
  >>>.el-menu-item {
    background-color #fcfcfc
  }
  >>>.el-menu-item-group__title {
    padding 0
  }
} 

.userInfo-section {
  background-color #fcfcfc
  padding 20px 15px 10px 15px
  font-size 14px
  border-bottom 1px solid #d8dce5
  .avatar {
    img {
      border-radius 50%
      width 87px
      height 87px
      border: 3px solid white
      margin 0 auto
    }
  }
  .name {
    margin 10px 0 10px
  }
  .desc {
    margin-bottom 10px
    .level {
      margin-bottom 10px
      img {
        margin-left 6px
      }
    }
  }
  .icon {
    margin 6px 0 10px 0 
    display flex
    align-items center
    justify-content center
    img {
      margin 0 8px
    }
  }
}
</style>