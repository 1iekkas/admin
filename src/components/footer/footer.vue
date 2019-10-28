<template>
  <div class="footer">
    <div class="footer-cell"><router-link v-for="(r, index) in list" :key="index" to="/">{{r.name}}</router-link></div>
    <div class="footer-cell">
      <p>Copyright © 2011-2019 广东茂名博思网络科技有限公司 HSK.cc</p>
      <p>工业和信息化部备案号：粤ICP备16017258号</p>
      <p>Powered By 好刷客任务管理系统 V3.8.3  </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {name: '关于我们'},
        {name: '帮助中心'},
        {name: '留言反馈'},
        {name: '友情链接'},
        {name: '联系我们'},
      ]
    }
  }  
}
</script>

<style lang="stylus" scoped>
.footer {
  a {
    color
  }
}
</style>