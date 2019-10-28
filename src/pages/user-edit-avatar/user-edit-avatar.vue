<template>
  <div class="form-section">
    <div class="bg-white">
      <user-edit-avatar name="头像设置"></user-edit-avatar>
    </div>
  </div>
</template>

<script>
import userEditAvatar from "@components/user-edit-avatar/user-edit-avatar"
export default {
  data() {
    return {
      activeName: '0'
    }
  },
  components: {
     userEditAvatar
  },

  created() {
    this.activeName = this.$route.query.tab
  },

  watch: {
   
  },

  methods: {
    handleClick(e) {
      
    },
  }
}
</script>

<style lang="stylus" scoped>
>>>.el-tabs__header {
  background-color white
  padding 0 20px
}

>>>.el-tabs__active-bar {
  background-color #ff5000
}

>>>.el-tabs__item {
  &.is-active, &:hover {
    color #ff5000
  }
}
</style>