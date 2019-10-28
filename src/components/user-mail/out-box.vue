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
            <div class="column-content" @click="checkMail(scope.row.id)">{{scope.row.content}}</div>
          </template>
        </el-table-column>
        <el-table-column
          prop="isRead"
          label="状态">
          <template slot-scope="scope">
            <div class="" :class="{'text-red': scope.row.isRead == 1}">{{scope.row.isRead == 1 ? '已读' : '未读'}}</div>
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
            <div class="delete-btn" @click="onDelete">删除</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-section">
      <el-button size="medium" type="danger" :disabled="!multipleSelection.length" @click="onDelete">删除</el-button>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="limit"
        :page-count="pageCount"
        @current-change="changePage">
      </el-pagination>
    </div>
    <!---->
    <check-mail-box v-if="showCheckBox" :show-check-box="showCheckBox" :id="checkId" @close="checkMail"></check-mail-box>
  </div>
</template>   

<script>
import checkMailBox from "@components/user-mail/check-mail"
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
      pageCount: 20,
      checkId: '',
      showCheckBox: false
    }
  },

  components: {
    checkMailBox
  },

  async created() {
    await this.getOutMail()
  },

  methods: {
    async getOutMail() {
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
    },

    /**点击按钮 */
    async onDelete() {
      let ids = []
      this.multipleSelection.forEach(item => {
        ids = ids.concat(item.id)
      });

      this.$confirm('被删除的邮件将不可恢复, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then( async () => {
        await this.postDelete(ids)
      })
    },

    /**请求删除接口 */
    async postDelete(ids) {
      let res = await this.api.post(`${this.baseUrl}/brush/app/deleteMessage`, {
        ids: ids
      }, this, {headers: {'token': this.$cookies.get('token')}})
      if(!res.data.code) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.restTable()
      }else {
        this.$message.error({
          message: res.data.msg,
          offset: 200,
          duration: 1500,
        })
      }
    },

    /**重置表单 */
    restTable() {
      this.tableData = []
      this.getOutMail()
    },

    /**查看邮件 */
    checkMail(id='') {
      this.checkId = id
      this.showCheckBox = !this.showCheckBox
      console.log(this.showCheckBox)
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

.column-content {
  cursor pointer
}

.column-title {
  font-weight bold
  color #232323
}

.delete-btn {
  cursor pointer
  &:hover {
    color #f60
  }
}

</style>