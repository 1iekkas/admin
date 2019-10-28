<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="info-form">
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="用户名：">
          <el-row :gutter="20">
            <el-col :span="6">test</el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="二级密码：">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.name"></el-input></el-col>
            <el-col :span="12" class="form-tips-gray">
             * 请输入您的二级密码，不是登录密码哦
            </el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="原密保问题：">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.name"></el-input></el-col>
            <el-col :span="5" class="form-tips-gray">
              *请选择原密保问题
            </el-col>
            <el-col :span="5" class="form-tips-gray">
              <router-link to="">如果忘记，点我找回</router-link>
            </el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="新密保问题：">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.name"></el-input></el-col>
            <el-col :span="15" class="form-tips-gray">
              *当密码忘记时，取回密码的提示问题，请牢记
            </el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="原问题答案：">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.name"></el-input></el-col>
            <el-col :span="5" class="form-tips-gray">
                *请填写原问题答案
            </el-col>
            <el-col :span="5" class="form-tips-gray">
              <router-link to="">如果忘记，点我找回</router-link>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="新问题答案：">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.name"></el-input></el-col>
            <el-col :span="15" class="form-tips-gray">
              * 当密码忘记时，取回密码提示问题的答案，请牢记
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="验证码：">
          <el-row :gutter="20">
            <el-col :span="6"><el-input v-model="form.name"></el-input></el-col>
            <el-col :span="13">
              <div class="code">
                <img src="http://demo2.hsk.cc/tools/verify_code.ashx" alt="">
              </div>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label=" ">
          <el-row :gutter="20">
            <el-col :span="8"><el-button type="success" @click="onSubmit">确认修改</el-button></el-col>
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
      form : {
        name: '',
        sex: 3,
        bir: '',
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.info-form {
  width 850px
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
    max-width 100px
  }
  a {
    font-size 13px
    color #f60
  }
}
</style>