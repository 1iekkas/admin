<template>
  <div class="form-section">
    <el-tabs v-model="activeName" @tab-click="handleClick" lazy="true">
      <el-tab-pane label="绑定店铺" name="0">
        <div class="bg-white" v-if="activeName == 0">
          <bind-shop-form name="绑定店铺" :id="1"></bind-shop-form>
        </div>
        <div class="account-tips">
          <p class="text-orange text-bold">注：绑定后账号名将无法修改，同时删除后也无法再重新添加！</p>
          <p>提示：您所在用户组每个试用区可以绑定<span>1</span>个店铺号，想要绑定更多，请升级为更高级别会员！</p>
          <p>建议：发布活动时可以适当选择部分增值功能，可有效增加宝贝权重和提高搜索排名！</p>
        </div>
        <list v-if="activeName == 0"></list>

      </el-tab-pane>
      <el-tab-pane label="买号列表" name="1">
        <div class="bg-white" v-if="activeName == 1">
          <account-list name="买号列表" :id="2"></account-list>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import bindShopForm from "@components/bind-shop-form/bind-shop-form"
import accountList from "@components/bind-account-form/account-list"
import list from "@components/bind-shop-form/list"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    bindShopForm,
    accountList,
    list
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
    activeName(n, o) {
      if(n !== o && n !== 0) {
        this.$router.push({
          path: `/bindAccount?tab=${n}`
        })
      }
    },
    /**监听手动修改url参数 */
    '$route' (to, from) {
      this.activeName = to.query.tab 
    }
  },

  methods: {
    handleClick(e) {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
.account-tips {
  font-size 14px
  text-align left
  padding 15px 25px 
  background-color #ebf8ff
  border 1px solid #c8e6ff
  margin-bottom 25px
  p {
    color #555
    line-height 30px
    &:nth-child(2), span {
      color #0078e4
    }
  }
}
</style>