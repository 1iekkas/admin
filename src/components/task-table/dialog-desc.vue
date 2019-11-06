<template>
  <el-dialog
    title="任务具体要求"
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
        <div class="cell-title text-red">
          <img src="http://demo2.hsk.cc/style/images/ShouCang.gif" alt="">
          店铺和宝贝双收藏：
        </div>
        <div class="cell-value">要求收藏卖家的店铺和宝贝（进到卖家宝贝详情页点击收藏）</div>
      </div>
      <div class="cell flex">
        <div class="cell-title text-red">
          <img src="http://demo2.hsk.cc/style/images/kuaiyun.gif" alt="">
          空包自动签收：
        </div>
        <div class="cell-value">要求收藏卖家的店铺和宝贝（进到卖家宝贝详情页点击收藏）</div>
      </div>
      <div class="cell flex">
        <div class="cell-title text-red">
          <img src="http://demo2.hsk.cc/style/images/ipad.png" alt="">
          手机单：
        </div>
        <div class="cell-value">要求收藏卖家的店铺和宝贝（进到卖家宝贝详情页点击收藏）</div>
      </div>
      <div class="cell flex">
        <div class="cell-title text-red">
          <img src="http://demo2.hsk.cc/style/images/hbsj.png" alt="">
          货比三家：
        </div>
        <div class="cell-value">要求收藏卖家的店铺和宝贝（进到卖家宝贝详情页点击收藏）</div>
      </div>
      <div class="cell flex">
        <div class="cell-title text-red">
          <img src="http://demo2.hsk.cc/style/images/viewproduct.png" alt="">
          店内浏览商品：
        </div>
        <div class="cell-value">要求收藏卖家的店铺和宝贝（进到卖家宝贝详情页点击收藏）</div>
      </div>

      <div class="cell flex">
        <div class="cell-title text-red">
          <img src="http://demo2.hsk.cc/style/images/pageStay.png" alt="">
          购买前页面停留：
        </div>
        <div class="cell-value">进入宝贝页后多停留 3 分钟再拍</div>
      </div>

      <div class="cell flex">
        <div class="cell-title text-red">
          <img src="http://demo2.hsk.cc/style/images/viewPage.png" alt="">
          完整浏览到底：
        </div>
        <div class="cell-value">要求收藏卖家的店铺和宝贝（进到卖家宝贝详情页点击收藏）</div>
      </div>

      <div class="cell flex">
        <div class="cell-title text-red">
          <img src="http://demo2.hsk.cc/style/images/find_answer.png" alt="">
          浏览找问题答案：
        </div>
        <div class="cell-value">要求收藏卖家的店铺和宝贝（进到卖家宝贝详情页点击收藏）</div>
      </div>

      <div class="cell flex">
        <div class="cell-title text-red">
          <img src="http://demo2.hsk.cc/style/images/WangLiao.gif" alt="">
          拍前需要旺旺聊天：
        </div>
        <div class="cell-value">要求收藏卖家的店铺和宝贝（进到卖家宝贝详情页点击收藏）</div>
      </div>

      <div class="cell flex">
        <div class="cell-title text-red">
          <img src="http://demo2.hsk.cc/style/images/find_answer.png" alt="">
          买号信誉等级要求：
        </div>
        <div class="cell-value">要求收藏卖家的店铺和宝贝（进到卖家宝贝详情页点击收藏）</div>
      </div>

      <div class="cell flex">
        <div class="cell-title text-red">
          <img src="http://demo2.hsk.cc/style/images/delay_buy.png" alt="">
          加购延迟购买：
        </div>
        <div class="cell-value">要求收藏卖家的店铺和宝贝（进到卖家宝贝详情页点击收藏）</div>
      </div>

      <div class="cell flex">
        <div class="cell-title text-red">
          <img src="http://demo2.hsk.cc/style/images/ask.png" alt="">
          问大家：
        </div>
        <div class="cell-value">要求收藏卖家的店铺和宝贝（进到卖家宝贝详情页点击收藏）</div>
      </div>

      <div class="cell flex">
        <div class="cell-title text-red">
          <img src="http://demo2.hsk.cc/style/images/share.png" alt="">
          分享宝贝：
        </div>
        <div class="cell-value">要求收藏卖家的店铺和宝贝（进到卖家宝贝详情页点击收藏）</div>
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
    showDesc: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      showDialog: this.showDesc
    }
  },

  created() {
    
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
  max-height 500px
  overflow-y scroll
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
    width 250px
    text-align right 
    display flex
    align-items center
    justify-content flex-end 
    img {
      margin-right 20px
    }
  }
  .cell-value {
    flex 1
    text-align left
    margin-left 20px
  }
}
</style>