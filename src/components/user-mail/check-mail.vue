<template>
  <div class="section">
    <el-dialog
      title="查看短消息"
      :visible.sync="dialogVisible"
      width="30%"
      @close="closeDialog">
      <div class="mail-info-wrap" v-if="messageInfo">
        <div class="cell text-black">{{messageInfo.postUserName}}</div>
        <div class="cell">{{messageInfo.postTime}} <span>收件人：{{messageInfo.acceptUserName}}</span></div>
        <div class="cell">{{messageInfo.content}}</div>
      </div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>  
</template>

<script>
export default {
  props: {
    showCheckBox: {
      type: Boolean,
      default: false
    },

    id: {
      type: Number,
      default: ''
    }
  },

  data() {
    return {
      dialogVisible: this.showCheckBox,
      messageInfo: null
    }
  },

  async created() {
    await this.getMailDetail()
  },

  methods: {
    async getMailDetail() {
      let res = await this.api.post(`${this.baseUrl}/brush/app/messageInfo`, {
        id: this.id
      }, this, {headers: {'token': this.$cookies.get('token')}})

      if(!res.data.code) {
        this.messageInfo = res.data.messageInfo
      }else {
        this.$message.error({
          message: res.data.msg,
          offset: 200,
          duration: 1500,
        })
      }
    },

    /**关闭 */
    closeDialog() {
      this.dialogVisible = false
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.mail-info-wrap {
  .cell {
    padding-bottom 20px
    text-align left 
    span {
      padding 0 20px 0 20px
    }
  }
}
</style>