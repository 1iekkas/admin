<template>
  <div class="form-section">
    <div class="bg-white margin-bottom">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>设置发货地址</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="bg-white">
      <address-form></address-form>
    </div>
  </div>
</template>

<script>
import addressForm from "@components/address-form/address-form"
export default {
  components: {
    addressForm
  }
}
</script>

<style lang="stylus" scoped>

</style>