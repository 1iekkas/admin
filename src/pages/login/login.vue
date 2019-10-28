<template>
  <div class="container">
    <login-header></login-header>
    <login-main></login-main>
    <footer-advert></footer-advert>
    <footer>
      <foot></foot>
    </footer>
  </div>
</template>

<script>
import LoginHeader from "@/components/login-header/login-header";
import LoginMain from "@/components/login-main/login-main";
import footerAdvert from "@components/footer/footer-advert"
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
    LoginMain,
    footerAdvert,
    Foot
  }

}
</script>

<style lang="stylus" scoped>

</style>