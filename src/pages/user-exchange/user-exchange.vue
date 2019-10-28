<template>
  <div class="form-section">
    <el-tabs v-model="activeName" @tab-click="handleClick" :before-leave="watchActive">
      <el-tab-pane label="兑换资金" name="0">
        <div class="bg-white">
          <user-exchange name="兑换资金" :id="0"></user-exchange>
        </div>
      </el-tab-pane>
      <el-tab-pane label="资金明细" name="1">
       
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import userExchange from "@components/user-exchange/user-exchange"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    userExchange
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
      if(activeName == 1) {
        this.$router.push({
          path: '/address'
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