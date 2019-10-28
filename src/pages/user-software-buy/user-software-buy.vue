<template>
  <div class="form-section">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="软件卡密中心" name="0">
        <div class="bg-white">
          <soft-ware-table name="软件卡密中心" :id="0"></soft-ware-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我购买的卡密" name="1">
        <div class="bg-white">
          <soft-ware-table name="我购买的卡密" :id="1"></soft-ware-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import softWareTable from "@components/software-buy/software-table"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    softWareTable
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
    activeName(n, o) {
      if(n !== o && n !== 0) {
        this.$router.push({
          path: `/softwarebuy?tab=${n}`
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