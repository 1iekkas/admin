<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="remove-bind-form">
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="用户名：">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.pwd"></el-input></el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="拉入天数：">
          <el-row :gutter="20">
            <el-col :span="16" align="left">
              <el-radio-group v-model="form.radio">
                <el-radio :label="3">7天</el-radio>
                <el-radio :label="6">15天</el-radio>
                <el-radio :label="9">30天</el-radio>
                <el-radio :label="10">永久</el-radio>
              </el-radio-group>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form> 
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
      form: {
        pwd: '',
        radio: 3
      }
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
.remove-bind-form  {
  .el-form {
    margin 45px 0 0 200px
  }
  .tips {
    text-align left
    margin 60px 30px 0 30px
    .tips-text {
      font-size 14px
    }
  }
}

</style>