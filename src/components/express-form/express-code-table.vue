<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="tips" v-if="!id">
      <div>好消息！凡是在平台发布实物任务，均可凭任务编号领取真实快递单号！</div>
      <div>如果没有发布任务只想单独购买快递单也可以！欢迎选购！</div>
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
          width="160">
        </el-table-column>
        <el-table-column
          align="center"
          prop="code"
          label="快递单号"
          width="150"> 
        </el-table-column>
        <el-table-column
          align="center"  
          prop="start"
          label="发货地"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="预计扫描时间"
          show-overflow-tooltip
          width="200">
        </el-table-column>
        <el-table-column
          align="center"
          prop="pass"
          label="是否扫描"
          width="100">
          <template slot-scope="scope">
            <div class="text-red">{{scope.row.pass}}</div>
          </template> 
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="操作"
          width="100">
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