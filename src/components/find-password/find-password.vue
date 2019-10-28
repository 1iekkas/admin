<template>
  <div class="section section-group">
    <get-sms v-if="step == 1"></get-sms>
    <set-pwd v-else></set-pwd>
    
  </div>  
</template>

<script>
import getSms from "@components/find-password/get-sms";
import setPwd from "@components/find-password/set-password";
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      step: this.$route.query.step
    }
  },

  components: {
    getSms,
    setPwd
  },

  watch: {
    '$route' (to, from) {
      this.step = to.query.step 
    }
  },

  created() {},

  methods: {

  }
}
</script>

<style lang="stylus" scoped>

</style>