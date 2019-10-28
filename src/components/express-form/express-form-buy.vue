<template>
  <div class="section express-section">
    <div class="title">
      <span>订购空包快递</span>
    </div>
    <div class="tips">
      <div align="center">
        <img src="http://demo2.hsk.cc/templates/main/images/zhiding.gif" alt="">
      </div>
      <div>推荐使用 增益、优速、龙邦、天天、 京东全峰、京东国通、京东龙邦（不可用于诈骗行为，否则后果自负）</div>
      <div>【派单时间】晚上19点之前订购的空包，第二天白天出物流，19点以后订购的空包，后天出物流！</div>
    </div>

    <div class="section">
      <div class="flex tab">
        <div class="tab-title">选择订购方式</div>
        <div class="tab-cell flex">
          <div class="tab-item" :class="{'tab-active': active == 0}" @click="changeForm(0)">我要单独购买</div>
          <div class="tab-item" :class="{'tab-active': active == 1}" @click="changeForm(1)">我有任务编号购买</div>
        </div>
      </div>
      <!---->
      <buy-form-single v-if="active == 0"></buy-form-single>
      <buy-form-code v-if="active == 1"></buy-form-code>
    </div>
    <!---->
    <div class="section">
      <div class="margin-bottom tips-title">Tips：在哪里找到收货地址？如果是淘宝可参考下图复制买家收货地址，其他阿里京东也类似</div>
      <div><img class="margin-auto" src="http://demo2.hsk.cc/templates/main/images/view_wuliu.gif" alt=""></div>
    </div>
    <!---->
    <div class="section table-section">
      <div class="table-title flex padding text-bold">
        <div>【空包价格表】</div>
        <div>推荐加入VIP或更高级别，价格更优惠，推广还有佣金哦！   购买会员卡>></div>
      </div>
      <div class="express-table">
        <el-table
          align="center"
          :data="tableData"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="express"
            label="快递名称"
            width="200">
            <template slot-scope="scope">
              <div class="name text-bold">{{scope.row.express}}</div>
            </template>  
          </el-table-column>
          <el-table-column
            align="center"
            prop="default"
            label="普通商家"
            width="">
          </el-table-column>
          <el-table-column
            align="center"  
            prop="vip"
            label="VIP商家"
            width="">
          </el-table-column>
          <el-table-column
            align="center"
            prop="diamond"
            label="钻石商家"
            width="">
          </el-table-column>
          <el-table-column
            align="center"
            prop="crown"
            label="皇冠商家"
            width="">
          </el-table-column>
        </el-table>
      </div>  
    </div>
  </div>
</template>

<script>
import BuyFormSingle from "@components/express-form/buy-form-single"
import BuyFormCode from "@components/express-form/buy-form-code"
export default {
  data() {
    return {
      active: 0,
      tableData: [{  //表格数据
        express: '顺丰速递',
        default: '5.00元',
        vip: '5.00元',
        diamond: '5.00元',
        crown: '5.00元',
      }]
    }
  },

  components: {
    BuyFormSingle,
    BuyFormCode
  },

  methods: {
    changeForm(key) {
      if(this.active !== key) {
        this.active = key
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.express-section {
  .title {
    position relative
    text-align left
    margin-bottom 20px
    color #666
    span {
      display inline-block
    }
    &:after {
      content ''
      position absolute
      left 120px
      right 10px
      top 10px
      border-bottom 1px solid #ececec
    } 
  }
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
}

.tab {
  padding-right 16px
  margin 40px 0 30px 50px
  align-items center
  justify-content flex-start
  font-size 14px
  .tab-title {
    padding-right: 16px;
    width 100px
    margin-right 20px
  }
  .tab-cell {
    width 400px
    align-items center
    justify-content center
    border 1px solid #f39970
    .tab-item {
      flex 1
      padding 11px 25px
      &.tab-active {
        color white
        background #ff5000
      }
    }  
  }
}

.tips-title {
  color #555
}

.table-section {
  margin-top 30px
  .table-title {
    background-color #f1f1f1
    align-items center
    justify-content center
    margin 0 15px
    div {
      color #f00
      font-size 13px
      text-align left
      &:first-child {
        width 250px
      }
      &:nth-child(2) {
        flex 1
      }
      &:hover {
        color #F60
      }
    }
  }
  .name {
    color #0078e4
    &:hover {
      color #f60
    }
  }
}


</style>