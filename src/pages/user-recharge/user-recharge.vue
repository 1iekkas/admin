<template>
  <div class="form-section">
    <el-tabs v-model="activeName" @tab-click="handleClick" :before-leave="watchActive">
      <el-tab-pane label="账户充值" name="0">
        <div class="bg-white">
          <user-recharge name="账户充值" :id="0"></user-recharge>
        </div>
      </el-tab-pane>
      <el-tab-pane label="充值记录" name="1">
        <div class="bg-white">
          <user-recharge-notes name="充值记录" :id="1"></user-recharge-notes>
        </div>
      </el-tab-pane>
      <el-tab-pane label="资金明细" name="2">
        
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import userRecharge from "@components/user-recharge/user-recharge"
import userRechargeNotes from "@components/user-recharge/recharge-notes"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    userRecharge,
    userRechargeNotes
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
   
  },

  methods: {
    handleClick(e) {
      
    },
    watchActive(activeName, oldActiveName) {
      if(activeName == 2) {
        this.$router.push({
          path: 'userFinancial?tab=1'
        })
      }else {
        this.$router.push({
          path: `/recharge?tab=${activeName}`
        })
      }
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