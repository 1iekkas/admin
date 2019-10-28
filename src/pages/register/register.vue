<template>
  <div class="container">
    <login-header></login-header>
    <router-view></router-view>
    <footer>
      <foot></foot>
    </footer>
  </div>
</template>

<script>
import LoginHeader from "@/components/login-header/login-header";
import Foot from "@/components/footer/footer";
export default {
  name: 'login',
  data() {
    return {

    }
  },

  created() {},

  mounted() {},

  methods: {

  },

  components: {
    LoginHeader,
    Foot
  }

}
</script>

<style lang="stylus" scoped>

</style>