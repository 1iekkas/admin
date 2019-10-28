<template>

    <el-form ref="form" :model="form" :rules="rules" label-width="auto">
    <el-form-item label="电商平台类型：">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-select style="width: 100%" v-model="form.activeShop" placeholder="请选择平台" @change="changeType">
            <el-option v-for="(item, index) in form.shopList" :key="index" :label="item.title" :value="item.id"></el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-form-item>
    
    <el-form-item label="下单的买号名：">
      <el-row :gutter="20">
        <el-col :span="10"><el-input v-model="form.name"></el-input></el-col>
      </el-row>
    </el-form-item>
    
    <el-form-item label="性别：" prop="sex">
      <el-row :gutter="20">
        <el-col :span="23">
          <el-radio-group v-model="form.sex">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
    </el-form-item>
    
    <el-form-item label="年龄：">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-select style="width: 100%" v-model="form.name" placeholder="请选择平台">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-form-item>
    
    <el-form-item label="积分信用等级：">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-select style="width: 100%" disabled v-model="form.name" placeholder="请选择平台">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label="是否实名认证：">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-select style="width: 100%" disabled v-model="form.name" placeholder="请选择平台">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label="支付宝实名认证截图：">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label="支付宝与淘宝会员名截图：">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label=" ">
      <el-row :gutter="20">
        <el-col :span="10"><el-button type="success" @click="onSubmit">确认修改</el-button></el-col>
      </el-row>
    </el-form-item>
  </el-form>
</template>

<script>
import { regionDataPlus, CodeToText } from 'element-china-area-data'
import taskConfig from "@common/js/getTaskConfig"
export default {
  props: {
    type: {
      type: Number,
      default: 0
    },
    typeList: {
      type: Array,
      default: () => {
        return []
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
      userInfo: this.Global.getCookieUserInfo('memberInfo'),
      form : {
        shopList: [],
        activeShop: this.type,
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
      fileList: [],
    }
  },

  async created() {
    this.setType()
  },

  methods: {
    async setType() {
      let res = await taskConfig.getTaskType(this)
      if(!res.data.code) {
        this.form.shopList = res.data.shopSiteList
      }
    },

    changeType(v) {
      this.$emit('set', v)
    },

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

    /** */
    handlePreview() {},

    /** */
    handleRemove() {},

    /** */
    handleRemove() {},

    handleExceed() {},

    beforeRemove() {},
  }
}
</script>