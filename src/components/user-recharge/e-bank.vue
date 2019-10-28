<template>
  <div class="section">
    <div class="form-table">
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="提示：">
          <div class="tips text-red">网银在线充值需要向你收取手续费 1% 【建议使用支付宝或财付通充值】</div>
        </el-form-item>
        <el-form-item label="转账金额：" class="inline">
          <el-input v-model="form.account"></el-input>元
        </el-form-item>
        <el-form-item label="支付方式：" class="inline">
          <div class="radio-group">
            <el-radio-group v-model="radio">
              <el-radio :label="3">支付宝</el-radio>
              <el-radio :label="6">微信扫码</el-radio>
              <el-radio :label="9">网银在线</el-radio>
            </el-radio-group>
          </div>
        </el-form-item>
        <el-form-item align="left">
        <el-button type="success" size="medium" @click="onSubmit">确认添加</el-button>
      </el-form-item> 
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 3,
      form: {
        name: ''
      }
    }
  },

  created() {
    
  },


  methods:{
    onSubmit() {

    }
  }
}
</script>

<style lang="stylus" scoped>
.section {
  padding-top 35px
  margin-bottom 0 !important
}

.form-table {
  margin-left 90px
  .tips {
    text-align left 
  }
}
</style>