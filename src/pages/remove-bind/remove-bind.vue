<template>
  <div class="form-section">
    <el-tabs v-model="activeName" @tab-click="handleClick" lazy="true">
      <el-tab-pane label="解绑客户端" name="0">
        <div class="bg-white" v-if="activeName == 0">
          <remove-bind name="解绑客户端" :user-info="userInfo"></remove-bind>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import removeBind from "@components/remove-bind/remove-bind"
export default {
  data() {
    return {
      activeName: '0',
      userInfo: this.Global.getCookieUserInfo('memberInfo'),
    }
  },
  components: {
    removeBind,
  },

  created() {
    /* this.activeName = this.$route.query.tab */
  },

  watch: {
    activeName(n, o) {
      if(n !== o && n !== 0) {
        this.$router.push({
          path: `/userInfo?tab=${n}`
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