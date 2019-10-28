<template>
  <div class="form-section">
    <el-tabs v-model="activeName" @tab-click="handleClick" lazy="true">
      <el-tab-pane label="我要申诉" name="0">
        <div class="bg-white" v-if="activeName == 0">
          <user-appeal-form name="我要申诉"></user-appeal-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我发起的申诉" name="1">
        <div class="bg-white" v-if="activeName == 1">
          <user-sponsored-table name="我发起的申诉"></user-sponsored-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我收到的申诉" name="2">
        <div class="bg-white" v-if="activeName == 2">
          <user-receive-table name="我收到的申诉"></user-receive-table>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import userAppealForm from "@components/user-appeal/user-appeal-form"
import userSponsoredTable from "@components/user-appeal/user-sponsored-table"
import userReceiveTable from "@components/user-appeal/user-receive-table"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    userAppealForm,
    userSponsoredTable,
    userReceiveTable
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
    activeName(n, o) {
      if(n !== o && n !== 0) {
        this.$router.push({
          path: `/userAppeal?tab=${n}`
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