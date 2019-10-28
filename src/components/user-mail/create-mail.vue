<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div> 
    <div class="create-mail-form">
      <el-form ref="form" :rules="rules" :model="form" label-width="auto">
  
        <el-form-item label="收件人：" prop="acceptUserName">
          <el-row :gutter="20">
            <el-col :span="10">
              <el-input v-model="form.acceptUserName"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="标题：" prop="title">
          <el-row :gutter="20">
            <el-col :span="10"><el-input v-model="form.title"></el-input></el-col>
          </el-row>
        
        </el-form-item>

        <el-form-item label="内容：" prop="content">
          <el-row :gutter="20">
            <el-col :span="10"><el-input v-model="form.content" type="textarea" :rows="4"></el-input></el-col>
          </el-row>
        </el-form-item>

        <el-form-item label=" ">
          <el-row :gutter="20">
            <el-col :span="20">
              <el-checkbox v-model="form.checked">保存到发件箱</el-checkbox>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="验证码：" prop="code">
          <el-row :gutter="20">
            <el-col :span="10"><el-input v-model="form.code"></el-input></el-col>
            <el-col :span="13">
              <div class="code" @click="changeCode">
                <img :src="codeSrc" alt="">
              </div>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label=" ">
          <el-row :gutter="20">
            <el-col :span="10"><el-button type="success" @click="onSubmit('form')">发 送</el-button></el-col>
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
    }
  },

  data() {
    return {
      /**表单验证 */
      rules: {
        acceptUserName: [{ required: true, message: '请输入收件人', trigger: 'blur' }],
        title: [{ required: true, message: '请输入邮件标题', trigger: 'blur' }],
        content: [{ required: true, message: '请输入邮件内容', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      /**表单字段 */
      form: {
        title: '',
        acceptUserName: "",
        content: '',
        checked: false,
        code: ''
      },
      /**验证码 */
      codeSrc: '',
      codeId: ''
    }
  },

  created() {
    this.changeCode()
  },

  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          /**请求 */ 
          let res = await this.api.post(`${this.baseUrl}/brush/app/sendMessage`, {
            type: this.form.checked ? 3 : 0,
            title: this.form.title,
            content: this.form.content,
            acceptUserName: this.form.acceptUserName,
            uuId: this.codeId,
            captcha: this.form.code
          }, this, { headers: {'token': this.$cookies.get('token')} })
          
          if(!res.data.code) {
            this.$message.success({
              message: '发送成功',
              offset: 200,
              duration: 1500,
            })
          }else {
            this.$message.error({
              message: res.data.msg,
              offset: 200,
              duration: 1500,
            })
          }

        } else {
          return false;
        }
      });  
    },

    /**刷新二维码 */
    changeCode() {
      this.Global.getCode(this)
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

.create-mail-form {
  width 750px
  margin 0 auto
  text-align left 
  .code {
    display flex
    align-items center
    justify-content center
    border 1px solid #DCDFE6
    border-radius 4px
    height 40px
    padding 0 10px
    max-width 130px
    img {
      width 100%
    }
  }
}
</style>