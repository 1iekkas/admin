<template>
  <div class="container">
    <login-header></login-header>
    <div class="wrapp">
      <div class="table-wrapp">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="找回密码" name="pwd">
            <div class="bg-white" v-if="activeName == 'pwd'">
              <find-password name="" :id="0"></find-password>
            </div>
          </el-tab-pane>
          <el-tab-pane label="重置问题与答案" name="qu">
            <div class="bg-white" v-if="activeName == 'qu'">
              <find-question name="充值记录" :id="1"></find-question>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <footer>
      <foot></foot>
    </footer>
  </div>
</template>

<script>
import LoginHeader from "@/components/login-header/login-header";
import FindPassword from "@/components/find-password/find-password";
import FindQuestion from "@/components/find-question/find-question";
import Foot from "@/components/footer/footer";
export default {
  name: 'login',
  data() {
    return {
      activeName: this.$route.query.action
    }
  },

  watch: {
    activeName(n, o) {
      console.log(n, 0)
      if(n !== o) {
        this.$router.push({
          path: `/findPassword?action=${n}&step=1`
        })
      }
    },
    /**监听手动修改url参数 */
    '$route' (to, from) {
      this.activeName = to.query.action 
    }
  },

  created() {},

  mounted() {},

  methods: {
    handleClick() {}
  },

  components: {
    LoginHeader,
    FindPassword,
    FindQuestion,
    Foot
  }

}
</script>

<style lang="stylus" scoped>
.wrapp {
  min-width: 1200px; 
  overflow: hidden;
  background-color: #f1f1f1;
}

.table-wrapp {
  margin: 40px auto;
  width: 1200px;  
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