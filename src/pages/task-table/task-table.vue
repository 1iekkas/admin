<template>
  <div class="section task-section">
    <div class="task-table-wrapp">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick"  :before-leave="watchActive">
        <el-tab-pane v-for="(pane, index) in tabs" :key="index" :label="pane.name" :name="pane.key">
          <div :class="{'bg-white': activeName == 0}" v-if="activeName == index">
            <components :is="pane.components"></components>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import releaseTask from "@components/task-table/release-task"
import isRelease from "@components/task-table/is-release-task"
import taskTempalte from "@components/task-table/task-template"
export default {
  data() {
    return {
      activeName: '0',
      tabs: [
        {name: '发布任务' , key: '0', components: releaseTask},
        {name: '已发布任务' , key: '1', components: isRelease},
        {name: '任务模板' , key: '2', components: taskTempalte},
        {name: '订购空包快递' , key: '3'}
      ]
    }
  },

  components: {
    releaseTask,
    isRelease,
    taskTempalte
  },

  watch: {
    activeName(n, o) {
      if(n !== o && n !== 0) {
        this.$router.push({
          path: `/taskTable?tab=${n}`
        })
      }
    },
    /**监听手动修改url参数 */
    '$route' (to, from) {
      console.log(to,from)
      this.activeName = to.query.tab 
    }
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  methods: {
    handleClick() {},

    watchActive(activeName, oldActiveName) {
      if(activeName == 3) {
        this.$router.push({
          path: '/express?tab=0'
        })
      }else {
        this.$router.push({
          path: `taskTable?tab=${activeName}`
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.section {
  min-width 1200px
  margin 45px auto
}

.task-table-wrapp {
  font-size 14px
  width 1200px
  margin 0 auto
}

>>>.el-tabs__header {
  margin 0
  background-color transparent
  .el-tabs__nav {
    border 0
  }
  .el-tabs__item{
    margin-right 15px
    border-left 0
    border-radius 4px 4px 0 0
    font-weight bold
    color #406899
    background url('http://demo2.hsk.cc/style/images/task_tab_r.gif') no-repeat right center
    position relative
    &:after {
      content ''
      background url('http://demo2.hsk.cc/style/images/task_tab_l.gif') no-repeat left center
      height 40px
      width 8px
      position absolute
      top -1px
      left 0
      background-color transparent
    }
    
    &.is-active {
      background url('http://demo2.hsk.cc/style/images/task_tab_current_r.gif')
      border-bottom-color #FF8902
      color white !important
      &:after {
        content none
      }
    }
  }
}

.bg-white {
  >>>.el-tabs__content {
    border 4px solid #FF8902
  }
}

>>>.el-form {
  padding 25px 0
  .el-form-item {
    padding-left 50px
  }
  .el-form-item__label {
    font-weight bold
    color #106899 !important
  }
  .el-form-item__content {
    color #106899 !important
  }
}

>>>.form-tips-blue {
  color #106899 !important
}

>>>.el-checkbox__inner {
  width 20px
  height 20px
  &:after {
    height: 10px;
    left: 8px;
    top: 2px;
  }
}

</style>