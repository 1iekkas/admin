<template>
  <div class="table">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="活动区"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="买号名"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别/年龄"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="level"
        label="买号等级"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="use"
        label="今/周试用数"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="date"
        label="绑定时间"
        align="center"
        width="180"
        >
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作"
        align="center"
        width="150"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            >更新</el-button>
          <el-button
            size="mini"
            type="danger"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
      tableData: [{
        name: '淘宝天猫',
        date: '2019-10-28 11:00:00',
        sex: '男/20-25岁',
        level: '100',
        use: '0/10',
        state: '等待客服审核'
      }]
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

>>>.el-table {
  .cell {
    font-size 13px
  }
}

</style>