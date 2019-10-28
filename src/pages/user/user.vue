<template>
  <div class="section user-section">
    <sider-bar></sider-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import siderBar from "@components/sider-bar/sider-bar"
export default {
  data() {
    return {

    }
  },  

  created() {},

  mounted() {},

  methods: {},

  components: {
    siderBar
  }

}
</script>

<style lang="stylus" scoped>
.user-section {
  width 1200px
  margin 30px auto
  display flex 
  align-items flex-start
}
</style>