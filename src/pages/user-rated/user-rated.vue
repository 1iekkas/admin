<template>
  <div class="form-section">
    <!-- <div class="bg-white margin-bottom">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>设置发货地址</el-breadcrumb-item>
      </el-breadcrumb>
    </div> -->
    <el-tabs v-model="activeName" @tab-click="handleClick" lazy="true">
      <el-tab-pane label="来自买家的评价" name="0">
        <div class="bg-white" v-if="activeName == 0">
          <user-rated name="来自买家的评价" :id="0"></user-rated>
        </div>
      </el-tab-pane>
      <el-tab-pane label="来自卖家的评价" name="1">
        <div class="bg-white" v-if="activeName == 1">
          <user-rated name="来自卖家的评价" :id="1"></user-rated>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我给他人的评价" name="2">
        <div class="bg-white" v-if="activeName == 2">
          <user-rated name="我给他人的评价" :id="2"></user-rated>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import userRated from "@components/user-rated/user-rated"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    userRated
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
    /* activeName(n, o) {
      if(n !== o && n !== 0) {
        this.$router.push({
          path: `/express?tab=${n}`
        })
      }
    }, */
    /**监听手动修改url参数 */
    /* '$route' (to, from) {
      this.activeName = to.query.tab 
    } */
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