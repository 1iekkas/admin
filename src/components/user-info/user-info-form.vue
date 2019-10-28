<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="info-form" v-if="userInfo">
      <el-form ref="form" :model="form" :rules="rules" label-width="auto">
        <el-form-item label="用户名：">
          <el-row :gutter="20">
            <el-col :span="6">{{userInfo.userName}}</el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="真实姓名：">
          <el-row :gutter="20">
            <el-col :span="10"><el-input v-model="form.name"></el-input></el-col>
            <el-col :span="13" class="form-tips-gray" align="left">*如果实名认证通过后如需要修改请联系客服！</el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="性别：" prop="sex">
          <el-row :gutter="20">
            <el-col :span="23">
              <el-radio-group v-model="form.sex">
                <el-radio label="男">男</el-radio>
                <el-radio label="女">女</el-radio>
                <el-radio label="保密">保密</el-radio>
              </el-radio-group>
            </el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="生日：" prop="birthday">
          <el-row :gutter="20">
            <el-col :span="23">
              <el-date-picker
                v-model="form.birthday"
                type="date"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
              </el-date-picker>
            </el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="QQ：" prop="qq">
          <el-row :gutter="20">
            <el-col :span="10"><el-input v-model="form.qq"></el-input></el-col>
            <el-col :span="13" class="form-tips-gray" align="left">*如果实名认证通过后如需要修改请联系客服！</el-col>
          </el-row>
        
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
          <el-row :gutter="20">
            <el-col :span="10"><el-input v-model="form.email"></el-input></el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="手机：" prop="telphone">
          <el-row :gutter="20">
            <el-col :span="10"><el-input v-model="form.telphone"></el-input></el-col>
            <el-col :span="13" class="form-tips-gray" align="left">*如果实名认证通过后如需要修改请联系客服！</el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="电话：">
          <el-row :gutter="20">
            <el-col :span="10"><el-input v-model="form.phone"></el-input></el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="所属地区：" prop="area">
          <el-row :gutter="20">
            <el-col :span="10">
              <el-cascader
                style="width: 100%"
                size="large"
                :options="options"
                v-model="selectedOptions"
                @change="handleChange">
              </el-cascader>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="详细地址：" prop="address">
          <el-row :gutter="20">
            <el-col :span="10"><el-input v-model="form.address"></el-input></el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="个性签名：">
          <el-row :gutter="20">
            <el-col :span="10"><el-input v-model="form.name"></el-input></el-col>
          </el-row>
        </el-form-item>

        <el-form-item label=" ">
          <el-row :gutter="20">
            <el-col :span="10"><el-button type="success" @click="onSubmit">确认修改</el-button></el-col>
          </el-row>
        </el-form-item>
      </el-form>  
    </div>
  </div>  
</template>

<script>
import { regionDataPlus, CodeToText } from 'element-china-area-data'
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    userInfo: {
      type: Object,
      default: () => {
        return null
      }
    }
  },

  data() {
    /**邮箱验证 */
    let checkEmail = (rule, value, callback) => {
      this.Validator.checkEmail(rule, value, callback)
    }
    /**手机验证 */
    let checkTel = (rule, value, callback) => {
      this.Validator.checkTel(rule, value, callback)
    }

    return {
      form : {
        name: '',
        sex: '男',
        qq: '',
        birthday: '',
        email: '',
        telphone: '',
        phone: '',
        area: '',
        address: ''
      },
      rules: {
        sex: [{ required: true, message: '请选择性别', trigger: 'change' }],
        birthday: [{ required: true, message: '请选择生日日期', trigger: 'change' }],
        email: [{ required: true, trigger: 'blur', validator: checkEmail }],
        telphone: [{ required: true, trigger: 'blur', validator: checkTel }],
        area: [{ required: true, message: '请选择所属区域', trigger: 'change' }],
        address: [{ required: true, message: '请填写详细地址', trigger: 'blur' }]
      },
      options: regionDataPlus,
      selectedOptions: [],
    }
  },

  created() {},

  methods: {
    handleChange(e) {
      e.forEach(code => {
        this.form.area += CodeToText[code]
      }); 

    },

    async onSubmit() {
      this.$refs['form'].validate(async (valid) => {
        if(valid) {
          let res = await this.api.post(`${this.baseUrl}/brush/app/setMemberDetails`, {
            sex: this.form.sex,
            birthday: this.form.birthday,
            email: this.form.email,
            telphone: this.form.telphone,
            area: this.form.area,
            address: this.form.address	
          }, this, {headers: {"token": this.$cookies.get('token')}})

          if(!res.data.code) {
            this.$alert('更新资料成功', '修改成功', {
              confirmButtonText: '确定',
              callback: action => {
                this.$router.push({
                  path: '/'
                })
              }
            });
          } else {
            this.$alert(res.data.msg, '更新资料失败', {
              confirmButtonText: '确定',
              callback: action => {
                return
              }
            });
          }

        }
      })
      


    },



  }
}
</script>

<style lang="stylus" scoped>
.info-form {
  width 750px
  margin 0 auto
  text-align left 
}
</style>