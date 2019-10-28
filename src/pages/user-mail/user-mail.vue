<template>
  <div class="form-section">
    <el-tabs v-model="activeName" @tab-click="handleClick" lazy="true">
      <el-tab-pane label="系统消息" name="0">
        <div class="bg-white" v-if="activeName == 0">
          <system-mail name="系统消息" :id="1"></system-mail>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收件箱" name="1">
        <div class="bg-white" v-if="activeName == 1">
          <in-box name="收件箱" :id="2"></in-box>
        </div>
      </el-tab-pane>
      <el-tab-pane label="发件箱" name="2">
        <div class="bg-white" v-if="activeName == 2">
          <out-box name="发件箱" :id="3"></out-box>
        </div>
      </el-tab-pane>

      <el-tab-pane label="写新消息" name="3">
        <div class="bg-white" v-if="activeName == 3">
          <create-mail name="发短消息"></create-mail>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import systemMail from "@components/user-mail/system-mail"
import createMail from "@components/user-mail/create-mail"
import inBox from "@components/user-mail/in-box"
import outBox from "@components/user-mail/out-box"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    systemMail,
    createMail,
    inBox,
    outBox

  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
    activeName(n, o) {
      if(n !== o && n !== 0) {
        this.$router.push({
          path: `/userMail?tab=${n}`
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