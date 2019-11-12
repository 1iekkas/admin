<template>
  <div class="section task-section">
    <div class="task-table-wrapp">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="(pane, index) in tabs" :key="index" :label="pane.name" :name="pane.key">
          <div v-if="activeName == index">
            <components :is="pane.components"></components>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import taskHall from "@components/task-hall/task-hall"
import isRelease from "@components/task-hall/part-task-hall"
import taskTempalte from "@components/task-table/task-template"
export default {
  data() {
    return {
      activeName: '0',
      tabs: [
        {name: '任务大厅' , key: '0', components: taskHall},
        {name: '已参与任务' , key: '1', components: isRelease},
        {name: '订购空包快递' , key: '2'}
      ]
    }
  },

  components: {
    taskHall,
    isRelease,
    taskTempalte
  },

  watch: {
    activeName(n, o) {
      if(n !== o && n !== 0) {
        if(n !== '2') {
          this.$router.push({
            path: `/taskHall?tab=${n}`
          })
        }else {
          this.$router.push({
            path: `/express?tab=0`
          })
        }
      }
    },
    /**监听手动修改url参数 */
    '$route' (to, from) {
      this.activeName = to.query.tab 
    }
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  methods: {
    handleClick() {},

    
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
      color white
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