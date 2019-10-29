<template>
  <div class="form-section">
    <el-tabs v-model="activeName" @tab-click="handleClick" lazy="true">
      <el-tab-pane label="黑名单" name="0">
        <div class="bg-white" v-if="activeName == 0">
          <add-black-list name="添加黑名单" :id="1"></add-black-list>
          <black-list-table></black-list-table>
        </div>
        

      </el-tab-pane>
      <el-tab-pane label="买号列表" name="1">
        <div class="bg-white" v-if="activeName == 1">
          <account-list name="买号列表" :id="2"></account-list>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import AddBlackList from "@components/black-list/add-black-list"
import BlackListTable from "@components/black-list/black-list-table"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
    AddBlackList,
    BlackListTable
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
    activeName(n, o) {
      if(n !== o && n !== 0) {
        this.$router.push({
          path: `/blackList?tab=${n}`
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
