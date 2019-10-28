<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div> 
    <div class="flex tab">
      <div class="tab-cell flex">
        <div class="tab-item" :class="{'tab-active': active == 0}" @click="changeForm(0)">全部</div>
        <div class="tab-item" :class="{'tab-active': active == 1}" @click="changeForm(1)">支付宝</div>
        <div class="tab-item" :class="{'tab-active': active == 2}" @click="changeForm(2)">微信</div>
        <div class="tab-item" :class="{'tab-active': active == 3}" @click="changeForm(3)">银行</div>
      </div>
    </div>
    <div class="financial-table">
      <el-table
        align="center"
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          align="center"
          prop="express"
          label="编号"
          width="120">
        </el-table-column>
        <el-table-column
          align="center"
          prop="code"
          label="姓名"
          width="80">
          <template slot-scope="scope">
            <div class="text-red">{{scope.row.code}}</div>
          </template>  
        </el-table-column>
        <el-table-column
          align="center"  
          prop="start"
          label="类型"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="end"
          label="账户"
          show-overflow-tooltip
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="方式"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="金额"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="实付金额"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="日期"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="状态"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="备注"
          width="">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>   

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      active: 0,
      tableData: []
    }
  },

  methods: {
    changeForm(key) {
      if(this.active !== key) {
        this.active = key
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.section {
  margin-bottom 60px
  .tips {
    line-height 30px
    text-align center
    color red
    font-size 15px
    padding 10px
    font-weight bold
    border 1px solid #FC3
    background-color #FFFEDF
    margin-bottom 20px
  }
  .action {
    &:hover {
      color #0089CD
    }
  }  
}

.tab {
  padding-right 16px
  margin 40px 0 30px 50px
  align-items center
  justify-content flex-start
  font-size 14px
  .tab-title {
    padding-right: 16px;
    width 100px
    margin-right 20px
  }
  .tab-cell {
    width 400px
    align-items center
    justify-content center
    border 1px solid #f39970
    .tab-item {
      flex 1
      padding 11px 25px
      &.tab-active {
        color white
        background #ff5000
      }
    }  
  }
}

</style>