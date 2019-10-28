<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div> 
  </div>
</template>   

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      dialogVisible: false,
      tableData: [{  //表格数据
        express: '顺丰速递',
        code: '55da*********',
        start: '广东省 广州市 广州市',
        pass: '已扫描',
        time: '2019-10-17 16:35',
      }]
    }
  },

  methods: {
    handleClose() {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.section {
  margin-bottom 60px
  .tips {
    line-height 30px
    text-align center
    color red
    font-size 15px
    padding 10px
    font-weight bold
    border 1px solid #FC3
    background-color #FFFEDF
    margin-bottom 20px
  }
  .action {
    &:hover {
      color #0089CD
    }
  }  
}

>>>.el-dialog__body {
  padding 5px 20px 30px
}
.dialog-section {
  padding-top 15px
  border-top 1px solid #ccc
  .cell {
    text-align left
    padding 10px 0
    .cell-title {
      width 120px
    }
    .cell-value {
      flex 1
      color #0078e4
      &:hover {
        color #f60
      }
    }
  }
}

</style>