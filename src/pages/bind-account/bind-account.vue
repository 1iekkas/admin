<template>
  <div class="form-section">
    <el-tabs v-model="activeName" @tab-click="handleClick" lazy="true">
      <el-tab-pane label="绑定买号" name="0">
        <div class="bg-white" v-if="activeName == 0">
          <bind-account-form name="绑定买号" :id="1"></bind-account-form>
        </div>
        <div class="account-tips">
          <p class="text-orange text-bold">注：绑定后账号名将无法修改，同时删除后也无法再重新添加！</p>
          <p>姓别和年龄的作用：例如商家发布的活动要求只能21-25岁的女性用户接手，若你想参与此活动，你的买号必需符合这个条件才可以申请，所以请如实选择该买号的性别与年龄。</p>
          <p>提示：您所在用户组每个试用区可以绑定<span>50</span>个买号，想要绑定更多，请升级为更高级别会员！</p>
          <p>建议：请尽量绑定多个备用买号，申请试用时轮换使用，试用通过率会更高！</p>
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
import bindAccountForm from "@components/bind-account-form/bind-account-form"
import accountList from "@components/bind-account-form/account-list"
import list from "@components/bind-account-form/list"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    bindAccountForm,
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
>>>.el-tabs__header {
  background-color white
  padding 0 20px
}

>>>.el-tabs__active-bar {
  background-color #ff5000
}

>>>.el-tabs__item {
  &.is-active, &:hover {
    color #ff5000
  }
}

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