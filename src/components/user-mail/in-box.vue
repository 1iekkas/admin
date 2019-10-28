<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div> 
    <div class="system-mail-table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="title"
          label="内容"
          width="400">
          <template slot-scope="scope">
            <div class="column-title">{{scope.row.title}}</div>
            <div class="column-content">{{scope.row.content}}</div>
          </template>
        </el-table-column>
        <el-table-column
          prop="isRead"
          label="状态">
          <template slot-scope="scope">
            <div class="" :class="{'text-red': scope.row.isRead}">{{scope.row.isRead ? '已读' : '未读'}}</div>
          </template>
        </el-table-column>
        <el-table-column
          prop="postTime"
          label="时间"
          width="180"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="状态"
          show-overflow-tooltip>
          <template>
            删除
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-section">
      <el-button size="medium" type="danger">删除</el-button>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="limit"
        :page-count="pageCount"
        @current-change="changePage">
      </el-pagination>
    </div>
    <div class="action">
      
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
      tableData: [],
      multipleSelection: [],
      limit: 10,
      page: 1, //当前页
      pageCount: 20
    }
  },

  async created() {
    await this.getInMail()
  },

  methods: {
    async getInMail() {
      let res = await this.api.post(`${this.baseUrl}/brush/app/messageList`, {
        type: (this.id).toString(),
        page: (this.page).toString(),
        limit: (this.limit).toString()
      }, this, {headers: {'token': this.$cookies.get('token')}})
      
      if(!res.data.code) {
        this.tableData = this.tableData.concat(res.data.messageList.list)
        this.pageCount = res.data.messageList.totalPage
      }else {
        this.$message.error({
          message: res.data.msg,
          offset: 200,
          duration: 1500,
        })
      }
    },

    async changePage(page) {
      this.page = page
      this.tableData = []
      await this.getOutMail()
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

.action {
  margin-top 35px
  text-align left 
}

.column-title {
  font-weight bold
  color #232323
}

</style>