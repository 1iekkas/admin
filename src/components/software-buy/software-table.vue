<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="tips" v-if="!id">
      <div>好消息！需要代理IP软件的朋友请直接购买即可！</div>
      <div>软件绿色多线程，快速更换IP，刷钻必备工具，欢迎选购及代理！</div>
    </div>
    <div class="my-table">
      <el-table
        align="center"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          align="center"
          prop="code"
          label="软件名称"
          width="150">
        </el-table-column>
        <el-table-column
          align="center"
          prop="type"
          label="卡密类型"
          width="150"> 
        </el-table-column>
        <el-table-column
          align="center"  
          prop="time"
          label="卡号"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="pass"
          label="卡密"
          show-overflow-tooltip
          width="100">
        </el-table-column>
        <el-table-column
          align="center"
          prop="price"
          label="价格"
          width="100">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <div v-if="!id">已被购买</div>
            <div v-else class="action" @click="open(scope.row)">查看详情</div>
          </template> 
        </el-table-column>
      </el-table>
    </div>  
    <!---->
    <el-dialog
      title="我购买的小号信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div class="dialog-section" id="dialog" ref="dialog">
        <div class="cell flex" v-for="item in 8" :key="item">
          <div class="cell-title">选购的快递公司：</div>
          <div class="cell-value">申通快递(拼多多-专用)</div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button data-clipboard-target="#dialog" class="copyButton" @click="onCopy">复 制</el-button>
        <el-button @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
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
        type: '半月卡',
        code: '55da*********',
        number: '0',
        pass: '*****',
        time: '55da*********',
        price: '20.00元'
      }]
    }
  },

  methods: {
    handleClose() {
      this.dialogVisible = false
    },

    open(item) {
      this.dialogVisible = true
    },

    onCopy(e) {
      const clipboard = new this.clipboard('.copyButton');
      clipboard.on('success', (e) => {
        this.$message({
          message: '已复制到剪贴板',
          type: 'success'
        });
        e.clearSelection();  
      })
      clipboard.on('error', (e) => {
        this.$message.error('复制失败');
      })
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