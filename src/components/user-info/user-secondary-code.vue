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
        
        <el-form-item label="旧的二级密码：">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.name"></el-input></el-col>
            <el-col :span="5" class="form-tips-gray">
              *请输入旧二级密码
            </el-col>
            <el-col :span="5" class="form-tips-gray">
              <router-link to="">如果忘记，点我找回</router-link>
            </el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="新的二级密码：">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.name"></el-input></el-col>
            <el-col :span="15" class="form-tips-gray">
              *请输入您的新的二级密码并牢记！主要用于资金流转、帐户安全等重要操作
            </el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="确认新的二级密码：">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.name"></el-input></el-col>
            <el-col :span="15" class="form-tips-gray">
              *再输入一次新二级密码！
            </el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="接收短信手机号：">
          <el-row :gutter="20">
            <el-col :span="8">156*****988</el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="手机验证码：">
          <el-row :gutter="20">
            <el-col :span="6"><el-input v-model="form.name"></el-input></el-col>
            <el-col :span="5">
              <el-button type="default">发送验证码</el-button>
            </el-col>
            <el-col :span="9" class="form-tips-gray">
              请输入手机收到的短信验证码
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