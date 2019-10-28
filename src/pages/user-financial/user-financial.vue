<template>
  <div class="form-section">
    <!-- <div class="bg-white margin-bottom">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>设置发货地址</el-breadcrumb-item>
      </el-breadcrumb>
    </div> -->
    <el-tabs v-model="activeName" @tab-click="handleClick" lazy="true">
      <el-tab-pane label="资金明细" name="1">
        <div class="bg-white" v-if="activeName == 1">
          <capital-detail name="资金明细"></capital-detail>
        </div>
      </el-tab-pane>
      <el-tab-pane label="佣金明细" name="2">
        <div class="bg-white" v-if="activeName == 2">
          <commission-detail name="佣金明细"></commission-detail>
        </div>
      </el-tab-pane>
      <el-tab-pane label="提现明细" name="3">
        <div class="bg-white" v-if="activeName == 3">
          <withdrawals-detail name="提现明细"></withdrawals-detail>
        </div>
      </el-tab-pane>
      <el-tab-pane label="发布点明细" name="4">
        <div class="bg-white" v-if="activeName == 4">
          <point-detail name="发布点明细"></point-detail>
        </div>
      </el-tab-pane>

      <el-tab-pane label="有效期明细" name="5">
        <div class="bg-white" v-if="activeName == 5">
          <expiration-detail name="有效期明细"></expiration-detail>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import capitalDetail from "@components/user-financial/capital-detail"
import commissionDetail from "@components/user-financial/commission-detail"
import pointDetail from "@components/user-financial/point-detail"
import withdrawalsDetail from "@components/user-financial/withdrawals-detail"
import expirationDetail from "@components/user-financial/expiration-detail"
export default {
  data() {
    return {
      activeName: '1'
    }
  },
  components: {
    capitalDetail,
    commissionDetail,
    pointDetail,
    withdrawalsDetail,
    expirationDetail
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
    activeName(n, o) {
      if(n !== o && n !== 0) {
        this.$router.push({
          path: `/userFinancial?tab=${n}`
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
</style>