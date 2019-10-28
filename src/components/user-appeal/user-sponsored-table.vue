<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="my-table">
      <el-table
        align="center"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          align="center"
          prop="express"
          label="标题"
          width="85">
        </el-table-column>
        <el-table-column
          align="center"
          prop="code"
          label="被申诉人"
          width=""> 
        </el-table-column>
        <el-table-column
          align="center"  
          prop="start"
          show-overflow-tooltip
          label="申诉时间"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="订单编号"
          show-overflow-tooltip
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="pass"
          label="是否辩解"
          width="">
          <template slot-scope="scope">
            <div class="text-red">{{scope.row.pass}}</div>
          </template> 
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="辩解时间"
          width="">
          <template slot-scope="scope">
            <div class="action">已被领取</div>
          </template> 
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="官网意见"
          width="">
          <template slot-scope="scope">
            <div class="action">已被领取</div>
          </template> 
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="操作"
          width="85">
          <template slot-scope="scope">
            <div class="action">已被领取</div>
          </template> 
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
      dialogVisible: false,
      tableData: [{  //表格数据
        express: '顺丰速递',
        code: '55da*********',
        start: '广东省 广州市 广州市',
        pass: '已扫描',
        time: '2019-10-17 16:35',
      }]
    }
  },

  methods: {
    handleClose() {
      this.dialogVisible = false
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