<template>
  <div class="advert">
    <div class="item">
      <span class="item-1"></span>
      不用花钱，诚信担保
    </div>
    <div class="item">
      <span class="item-2"></span>
      不用花钱，诚信担保
    </div>
    <div class="item">
      <span class="item-3"></span>
      不用花钱，诚信担保
    </div>
    <div class="item">
      <span class="item-4"></span>
      不用花钱，诚信担保
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.advert {
  width 1200px
  margin 0 auto
  display flex
  align-items center
  padding 20px 0
  color #555
  font-size 15px
  .item {
    flex 1
    border-left: 1px solid #CACACA;
    &:first-child {
      border-left 0
    }
    span {
      background: url('http://demo2.hsk.cc/templates/main/css/image/footer.png') no-repeat;
      width: 47px;
      height: 50px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
      &.item-2 {
        background-position -59px 0
      }
      &.item-3 {
         background-position -118px 0
      }
      &.item-4 {
         background-position -177px 0
      }
    }
  }
}

</style>