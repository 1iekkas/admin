<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="remove-bind-form">
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="二级密码：">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.pwd"></el-input></el-col>
            <el-col :span="13" class="form-tips-gray" align="left">请输入6-20位的二级密码</el-col>
          </el-row>
        </el-form-item>
        <el-form-item label=" ">
          <el-row :gutter="20">
            <el-col :span="8" align="left">
              <el-button style="width: 70%" type="primary">解除绑定</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form> 
      <div class="tips" align="left">
        <p class="tips-title text-red">温馨提示：</p>
    　　<p class="tips-text">某某客网客户端优化助手软件在异地登录（不在同一台电脑）时才需要解除绑定，解除后才可以在其他电脑运行挂机，一般建议在原电脑登录软件后，在设置里面去掉绑定勾即可。</p>
      </div> 
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
        pwd: ''
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