<template>
  <div class="section bg-white">
    <div class="title">
      <span>获取验证码</span>
    </div>
    <div class="manage-form form-margin">
      <el-form ref="form" :model="form" :rules="rules" label-width="auto">
        <el-form-item label="取回密码方式：">
          <el-row :gutter="20">
            <el-col :span="14" align="left">
              <el-radio-group v-model="form.radio">
                <el-radio :label="1">手机号</el-radio>
                <el-radio :label="2">邮箱</el-radio>
              </el-radio-group>
            </el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="用户名：" prop="name">
          <el-row :gutter="20">
            <el-col :span="14"><el-input v-model="form.name"></el-input></el-col>
          </el-row>
        </el-form-item>
      
        <el-form-item label="验证码：" prop="code">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.code"></el-input></el-col>
            <el-col :span="10">
              <div class="code" @click="changeCode">
                <img :src="codeSrc" alt="">
              </div>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label=" ">
          <el-row :gutter="20">
            <el-col :span="10"><el-button style="width: 100%" type="success" @click="onSubmit('form')">提 交</el-button></el-col>
          </el-row>
        </el-form-item>
      </el-form>  
    </div>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
        radio: 1,
        name: '',
        code: '',
      },
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      },
      /**验证码 */
      codeSrc: '',
      codeId: '',
    }
  },

  async created() {
    await this.changeCode()
  },

  methods: {
    async onSubmit(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.postForm()
        }
      });

    },

    async postForm() {
      let params = {
        name: this.form.name,
        radio: this.form.radio,
        codeId: this.codeId,
        code: this.form.code
      }
      let res = await this.Global.getFindPwdCode(this, params)
      if(!res.data.code) {
        this.$alert('短信验证码已发送到你的手机，请接收', '发送成功', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({
              path: `/findPassword?action=pwd&step=2&username=${this.form.name}`
            })
          }
        });
        
      }else {
        /* this.$message.error(res.data.msg); */
        this.$alert(res.data.msg, '发送失败', {
          confirmButtonText: '确定',
          callback: action => {
            return false
          }
        });
      }

    },

    /**刷新二维码 */
    async changeCode() {
      await this.Global.getCode(this)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>