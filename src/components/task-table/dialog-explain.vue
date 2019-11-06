<template>
  <el-dialog
    title="搜索进店方式说明"
    :visible.sync="showDialog"
    width="50%"
    :before-close="handleClose"
    >
    <div class="dialog-tips flex">
      <img src="http://demo2.hsk.cc/style/images/ipad.png" alt="">
      <span class="text-red">该任务为手机单，接手方会按要求在手机上用淘宝APP下单</span>
    </div>
    <div class="dialog-content">
      <div class="cell flex">
        <div class="cell-title">商品名称：</div>
        <div class="cell-value">MissCandy健康甲油猫眼指甲油免烤网红可剥无毒撕拉持久 欢享M82</div>
      </div>
      <div class="cell flex">
        <div class="cell-title">商品网址：</div>
        <div class="cell-value"><el-input value="https://detail.tmall.com/item.htm?id=552224337433"></el-input></div>
      </div>
      <div class="cell flex">
        <div class="cell-title">下单价格(含邮费)：</div>
        <div class="cell-value text-red">99.00(包含邮费)</div>
      </div>
      <div class="cell flex">
        <div class="cell-title">进店下单方式：</div>
        <div class="cell-value text-red">搜索宝贝方式进店</div>
      </div>
      <div class="cell flex">
        <div class="cell-title">搜索宝贝关键字：</div>
        <div class="cell-value text-orange">MissCandy健康甲油猫眼指甲油免烤网红可剥无毒撕拉持久 欢享M82</div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="onClose">我知道了</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    param: {
      type: Object,
      default: () => {
        return null
      }
    },
    showExplain: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      showDialog: this.showExplain
    }
  },

  created() {
    console.log(this.showExplain)
  },

  methods: {
    onClose() {
      this.$emit('close')
    },

    handleClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.dialog-tips {
  align-items center
  padding 10px 0;
  background-color #ffff77
  font-weight bold
  margin 0 50px
  img {
    margin-right 15px
  }
}

.dialog-content {
  font-size 15px
  color #406899
  margin-top 15px
  .cell {
    padding 20px 15px
    width 100%
    border-top 1px dashed #93c4ff
    &:last-child {
      border-bottom 1px dashed #93c4ff
    }
  }
  .cell-title {
    font-weight bold
    width 200px
    text-align right  
  }
  .cell-value {
    flex 1
    text-align left
    margin-left 20px
  }
}
</style>