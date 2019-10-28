<template>
  <div class="section section-group">
    <get-sms v-if="step == 1"></get-sms>
    <set-qu v-else></set-qu>
    
  </div>  
</template>

<script>
import getSms from "@components/find-question/get-sms";
import setQu from "@components/find-question/set-question";
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
    setQu
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