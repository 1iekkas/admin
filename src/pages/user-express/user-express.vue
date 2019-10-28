<template>
  <div class="form-section">
    <!-- <div class="bg-white margin-bottom">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>设置发货地址</el-breadcrumb-item>
      </el-breadcrumb>
    </div> -->
    <el-tabs v-model="activeName" @tab-click="handleClick" lazy="true">
      <el-tab-pane label="订购空包快递" name="0">
        <div class="bg-white" v-if="activeName == 0">
          <express-buy></express-buy>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我订购的单号" name="1">
        <div class="bg-white" v-if="activeName == 1">
          <my-buy-table></my-buy-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="双向指定单号" name="2">
        <div class="bg-white" v-if="activeName == 2">
          <two-way-form></two-way-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我指定的单号" name="3">
        <div class="bg-white" v-if="activeName == 3">
          <my-assign-table></my-assign-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="领取快递单号" name="4">
        <div class="bg-white" v-if="activeName == 4">
          <express-code-table name="领取快递单号" :id='0'></express-code-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="我领取的单号" name="5">
        <div class="bg-white" v-if="activeName == 5">
          <express-code-table name="我领取的单号" :id='1'></express-code-table>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import expressBuy from "@components/express-form/express-form-buy"
import MyBuyTable from "@components/express-form/my-buy-table"
import TwoWayForm from "@components/express-form/two-way-form"
import MyAssignTable from "@components/express-form/my-assign-table"
import ExpressCodeTable from "@components/express-form/express-code-table"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    expressBuy,
    MyBuyTable,
    TwoWayForm,
    MyAssignTable,
    ExpressCodeTable
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
    activeName(n, o) {
      if(n !== o && n !== 0) {
        this.$router.push({
          path: `/express?tab=${n}`
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