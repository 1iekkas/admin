<template>
  <el-form class="form" ref="form" :model="form" label-width="auto">
    <el-form-item label="平台任务编号" class="inline">
      <el-input v-model="form.name"></el-input>
      <div class="text-red">注：一个编号只能购买一次</div>
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
    </el-form-item>
    <el-form-item label="发货地" class="inline inline--large">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="收货地" class="inline inline--large">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="收货人" class="inline">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="收货人电话" class="inline">
      <el-input v-model="form.name"></el-input>
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
</style>