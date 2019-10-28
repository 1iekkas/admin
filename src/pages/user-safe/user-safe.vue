<template>
  <div class="form-section">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="商保服务" name="0">
        <div class="bg-white">
          <user-safe name="商保服务" :id="0"></user-safe>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import userSafe from "@components/user-safe/user-safe"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    userSafe
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
   
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