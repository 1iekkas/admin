<template>
  <div class="form-section">
    <el-tabs v-model="activeName" @tab-click="handleClick" lazy="true">
      <el-tab-pane label="推广赚钱" name="0">
        <div class="bg-white" v-if="activeName == 0">
          <user-spread-form name="我的推广"></user-spread-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我推广的用户" name="1">
        <div class="bg-white" v-if="activeName == 1">
          <user-spread-table name="我推广的用户"></user-spread-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="佣金明细" name="2">
       
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import userSpreadForm from "@components/user-spread/spread-form"
import userSpreadTable from "@components/user-spread/user-spread-table"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    userSpreadForm,
    userSpreadTable

  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
    activeName(n, o) {
      /* if(n !== o && n !== 0) {
        this.$router.push({
          path: `/userAppeal?tab=${n}`
        })
      } */
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