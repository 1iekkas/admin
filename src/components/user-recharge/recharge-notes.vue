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
          label="交易号/流水号"
          width="200">
        </el-table-column>
        <el-table-column
          align="center"
          prop="code"
          label="充值方式"
          width="150"> 
        </el-table-column>
        <el-table-column
          align="center"  
          prop="start"
          label="充值金额"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="时间"
          show-overflow-tooltip
          width="200">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="状态"
          width="100">
        </el-table-column>
      </el-table>
    </div>  
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>   

<script>
import thirdParty from "@components/user-recharge/third-party"
import remitMoney from "@components/user-recharge/remit-money"
import eBank from "@components/user-recharge/e-bank"
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
      tableData: []
    }
  },

  methods: {

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

</style>