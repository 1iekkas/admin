<template>
  <div class="section section-group">
    <div class="title">
      <span>我指定的单号</span>
    </div>
    <div class="my-table">
      <el-table
        align="center"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          align="center"
          prop="express"
          label="快递公司"
          width="200">
        </el-table-column>
        <el-table-column
          align="center"
          prop="code"
          label="快递单号"
          width="80">
          <template slot-scope="scope">
            <div class="text-red">{{scope.row.code}}</div>
          </template>  
        </el-table-column>
        <el-table-column
          align="center"  
          prop="start"
          label="发货地"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="end"
          label="收货地"
          show-overflow-tooltip
          width="200">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="下单时间"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="操作"
          width="80">
          <template slot-scope="scope">
            <div class="action" @click="open(scope.row)">操作</div>
          </template> 
        </el-table-column>
      </el-table>
    </div>  
    <!---->
    <el-dialog
      title="查询快递"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div class="dialog-section">
        <div class="cell flex" v-for="item in 8" :key="item">
          <div class="cell-title">选购的快递公司：</div>
          <div class="cell-value">申通快递(拼多多-专用)</div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关  闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>   

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [{  //表格数据
        express: '顺丰速递',
        code: '55da',
        start: '广东省 广州市 广州市',
        end: '李小白，13800138000，…',
        time: '2019-10-17 16:35',
      }]
    }
  },

  methods: {
    open(item) {
      this.dialogVisible = true
    },
    
    handleClose() {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.section {
  margin-bottom 60px
  .title {
    position relative
    text-align left
    margin-bottom 20px
    color #666
    span {
      display inline-block
    }
    &:after {
      content ''
      position absolute
      left 120px
      right 10px
      top 10px
      border-bottom 1px solid #ececec
    }
  }
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

>>>.el-dialog__body {
  padding 5px 20px 30px
}
.dialog-section {
  padding-top 15px
  border-top 1px solid #ccc
  .cell {
    text-align left
    padding 10px 0
    .cell-title {
      width 120px
    }
    .cell-value {
      flex 1
      color #0078e4
      &:hover {
        color #f60
      }
    }
  }
}

</style>