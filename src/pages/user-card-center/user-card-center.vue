<template>
  <div class="form-section">
    <el-tabs v-model="activeName" @tab-click="handleClick" :before-leave="watchActive">
      <el-tab-pane label="购卡中心" name="0">
        <div class="bg-white">
          <card-center name="购卡中心" :id="0"></card-center>
        </div>
      </el-tab-pane>
      <el-tab-pane label="资金明细" name="1">
       
      </el-tab-pane>
      <el-tab-pane label="发布点明细" name="4">
        
      </el-tab-pane>
      <el-tab-pane label="有效期明细" name="5">
        
      </el-tab-pane>
      <el-tab-pane label="提现明细" name="3">
        
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import cardCenter from "@components/card-center/card-center"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    cardCenter
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
  },

  methods: {
    handleClick(e) {
      
    },
    watchActive(activeName, oldActiveName) {
      console.log('123')
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