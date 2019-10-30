<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="info-form" v-if="userInfo">
      <form-tb :type-list="typeList" :type="type" v-if="type == 1" @set="set"></form-tb>
      <form-ali :type-list="typeList" :type="type" v-else-if="type == 2" @set="set"></form-ali>
      <form-jd :type-list="typeList" :type="type" v-else-if="type == 3" @set="set"></form-jd>
      <form-mgj :type-list="typeList" :type="type" v-else-if="type == 4" @set="set"></form-mgj>
      <form-pdd :type-list="typeList" :type="type" v-else-if="type == 5" @set="set"></form-pdd>
      <div class="tips"></div>
    </div>
  </div>  
</template>

<script>
import formTb from "@components/bind-shop-form/form-tb"
import formJd from "@components/bind-account-form/form-jd"
import formAli from "@components/bind-account-form/form-ali"
import formMgj from "@components/bind-account-form/form-mgj"
import formPdd from "@components/bind-account-form/form-pdd"
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
  },

  components:{
    formTb,
    formJd,
    formAli,
    formMgj,
    formPdd
  },

  data() {
    return {
      type: 1,
      typeList: [],
      userInfo: this.Global.getCookieUserInfo('memberInfo'),
    }
  },

  created() {
    
  },

  methods: {
    set(v) {
      this.type = v
    }
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