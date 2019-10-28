<template>
  <el-form class="form" ref="form" :model="form" label-width="auto">
    <el-form-item label="平台任务编号" class="inline">
      <el-input v-model="form.name"></el-input>
      <div class="text-red">注：一个编号只能购买一次</div>
    </el-form-item>
    <el-form-item label="发货地址">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="快递公司" class="inline">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="success" @click="onSubmit">设为默认</el-button>
    </el-form-item>
    <el-form-item label="收货地址信息">
      <div class="tips" align="left">
        收货地址格式：姓名，手机号，省 市 区/县 详细地址，邮编 例如：<br />
        李小白，13800138000，广东省 广州市 天河区 天河北路时代广场888号，510620
        可批量下单，每行一个地址，一次最多100个地址
      </div>
      <el-input
        type="textarea"
        :rows="5"
        placeholder="请输入内容"
        v-model="form.textarea">
      </el-input>
    </el-form-item>
    <el-form-item align="left">
      凭任务编号购买价格是： <span class="text-red text-bold">12.00元</span>
    </el-form-item>
    <el-form-item align="left">
      <el-button type="success" @click="onSubmit">立即创建</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        textarea: '',
      },
      
      selectedOptions: [],
      selectOptions: [
        {
          value: '支持：淘宝、天猫、京东买家收货地址excel表格一键导入） 导入操作教程',
          label: '支持：淘宝、天猫、京东买家收货地址excel表格一键导入） 导入操作教程'
        }
      ],
      value: '',
    }
  },

  methods: {
    onSubmit() {}
  }
}
</script>

<style lang="stylus" scoped>
.form {
  width 600px
  margin 40px 0 50px 50px
  .tips {
    line-height 28px
    padding 6px 0
  }
}

.inline {
  >>>.el-form-item__content {
    display flex
    .el-select, .el-input {
      width 200px
      margin-right 15px
    }
  }
}
</style>