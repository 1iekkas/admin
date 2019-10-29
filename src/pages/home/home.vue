<template>
  <div class="container" :class="[ userType == 1 ? '' : 'base-blue']">
    <top-bar></top-bar>
    <main-nav></main-nav>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import TopBar from "@components/top-bar/top-bar"
import MainNav from "@components/main-nav/main-nav"
import Foot from "@components/footer/footer"
export default {
  data() {
    return {
      userType: this.Global.getCookieUserInfo('memberInfo')['groupId']
    }
  },

  components: {
    TopBar,
    MainNav,
    Foot
  }
}
</script>

<style lang="stylus" scoped>
.container {
  background-color #f4f4f4;
}

</style>