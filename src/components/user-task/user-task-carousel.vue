<template>
  <div class="section carousel-section">
    <div class="carousel-title">
      <span>推荐任务</span>
    </div>
    <el-carousel indicator-position="outside" arrow="never" height="260px" :interval="999999">
      <el-carousel-item v-for="item in 2" :key="item">
        <div class="carousel-group flex">
          <div class="item" v-for="item in 5" :key="item">
            <div class="pic"><img src="http://u.candou.com/s/500/2019/1016/1571206055766.jpeg" alt=""></div>
            <div class="content">
              <div class="desc flex">
                <img width="16" src="http://demo2.hsk.cc/style/images/website_ico5.png" alt="">
                <span>奖励发布点：<font class="text-bold">8.55</font></span>
              </div>
              <div class="cell flex">
                <span>￥1.00</span>
                <span>参与任务</span>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.carousel-title {
  text-align left
  margin-bottom 15px
  span {
    padding 0 20px
    height 40px
    line-height 40px
    display inline-block
    border-bottom 2px solid #e84c3d
  }
}
.section {
  margin-top 30px
}
.carousel-group {
  .item {
    flex 1
    padding 3px
    margin 0 10px
    background-color white
    border 1px solid #fbedeb
    border-radius 2px
    &:hover {
      transition all .15s linear
      box-shadow 0 2px 5px rgba(0, 0, 0, .35)
      border-color #FF4000
      >.content {
        .cell {
          span {
            &:nth-child(2) {
              border 1px solid #FF4000
              background #FF4000
              color #fff
            }
          }
        }
      }
    } 
    .content {
      font-size 13px
      .desc {
        padding 10px 5px
        justify-content space-between
        font {
          font-size 16px
          color #555
        }
      }
      .cell {
        padding 6px 5px
        align-items flex-end
        justify-content space-between
        span {
          &:nth-child(2) {
            font-size 12px
            background #FCE2E4
            border 1px solid #f9d7d9
            color #f63a00
            padding 3px 13px
            border-radius 20px
            transition all .15s linear
          }
        }
      }
    }
    .pic {
      img {
        width 160px
        height 160px
        object-fit cover
      }
    } 
    
  }
}
</style>