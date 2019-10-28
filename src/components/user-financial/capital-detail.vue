<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
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
          label="时间"
          width="120">
        </el-table-column>
        <el-table-column
          align="center"
          prop="code"
          label="收入"
          width="80">
          <template slot-scope="scope">
            <div class="text-red">{{scope.row.code}}</div>
          </template>  
        </el-table-column>
        <el-table-column
          align="center"  
          prop="start"
          label="支出"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="end"
          label="摘要"
          show-overflow-tooltip
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="当前余额"
          width="">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="备注"
          width="200">
          <template slot-scope="scope">
            <div class="action" @click="open(scope.row)">操作</div>
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
      tableData: []
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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

</style>