<template>
  <div class="wrap">
    <div class="wrap-tips">
      <div class="bg-white">
        <div class="tips-text" align="left">
          <p class="text-orange">已接任务：</p>
          <p>1. 在已接手任务区，您可以查看和操作所有自己接手的任务和操作进度；</p>
          <p>2. 点击下面任务区筛选及链接【所有任务】【虚拟任务】【等待支付任务】【等待发货任务】等等，可以快速筛选出您想要查看的相应已接手任务。</p>
        </div>
      </div>
    </div>
    <div class="wrap-filter">
      <div class="filter-search flex">
        <el-row :gutter="20" class="flex">
          <el-col :span="2" class="text">
            任务搜索 ：
          </el-col>
          <el-col :span="4">
            <el-select v-model="value">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.title"
                :value="item.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-input></el-input>
          </el-col>
          <el-col :span="1">
            <el-button size="mini" type="primary">搜索</el-button>
          </el-col>
          <el-col :span="13" align="right">
            <el-checkbox></el-checkbox> <span class="text">自动刷新页面</span>
            <el-button class="margin-left" size="mini" type="primary">刷新</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="filter-tabs flex">
        <el-row :gutter="20" class="flex">
          <el-col style="width: 115px" class="text" align="left">
            任务区筛选 ：
          </el-col>
          <el-col :span="3">
            <el-select v-model="value">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.title"
                :value="item.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="20" align="right">
            <div class="classfiy-wrap flex">
              <div class="item" :class="{'active': filterActive == index}" align="center" v-for="(item, index) in typeList" :key="item.value" @click="onFilter(index, 'state')">{{item.value}}</div>
              <div class="item" :class="{'active': filterActive == index + 2}" align="center" v-for="(item, index) in stateList" :key="item.value" @click="onFilter(index, 'type')">{{item.value}}</div>            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="wrap-content">
      <div class="item" align="left"  v-for="(task, index) in list" :key="index">
        <div class="item-bar flex">
          <div class="bar-cell left" align="left">
            <img src="http://demo2.hsk.cc/style/images/website_ico1.png" alt="">
            <span>{{task.taskNo}}</span>
          </div>
          <div class="bar-cell">
            <span>发布人：<font class="text-red">{{task.userName}}</font></span>
            <span style="marginLeft: 30px">买号：永红煤矿</span>
          </div>
          <div class="bar-cell right" align="right">
            <img src="http://demo2.hsk.cc/style/images/website_ico1.png" alt="">
          </div>
        </div>
        <div class="item-content">
          <el-row class="flex" :gutter="20">
            <el-col :span="2" align="center">
              <img width="80" height="80" src="http://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i3/2763096131/O1CN01Hso3tQ1vA2mSUH7Kw_!!2763096131.jpg_430x430q90.jpg" alt="">
            </el-col>
            <el-col :span="3" style="padding-left: 0 " align="left">
              <div class="item-info">
                <div class="text" align="left">
                  <p class="line-1">misscandy糖果小姐旗舰店</p>
                  <p class="line-2 text-orange">misscandy糖果小姐旗舰店</p>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="flex">
                <div class="flex-1">任务金额：<font class="text-red">{{task.oneTaskAmount}}</font> 元 <font v-if="task.isModPrice" class="text-orange">需改价</font></div>
                <div class="flex-1">发布点：<font class="text-red">{{task.oneTaskPoint}}</font> 点 </div>
                <div class="flex-1">收货时限：
                  <font class="text-orange" v-if="task.haopingTime == 1">{{`物流显示签收好评`}}</font> 
                  <font class="text-orange" v-else>{{`${timeList[Number(task.haopingTime) - 1].value}后好评`}}</font>
                </div>
              </div>
              <div class="flex ask">
                 任务要求：
                <el-tooltip class="item" v-if="!task.isRealname" effect="dark" content="要求买家实名认证" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/shiming.gif" alt="">
                </el-tooltip>
                <el-tooltip class="item" effect="dark" v-if="!task.compareNum" content="要求页面停留5分钟再下单" placement="top">
                  <img class="icon-small"  src="http://demo2.hsk.cc/style/images/pageStay5.png" alt="">
                </el-tooltip>
                <el-tooltip class="item" effect="dark" v-if="!task.compareNum" content="要求进店后随便浏览两个商品再下单" placement="top">
                  <img class="icon-small"  src="http://demo2.hsk.cc/style/images/viewproduct2.png" alt="">
                </el-tooltip>
                <el-tooltip class="item" effect="dark" v-if="!task.compareNum" content="要求浏览至少3家同类商品再下单" placement="top">
                  <img class="icon-small"  src="http://demo2.hsk.cc/style/images/hbsj3.png" alt="">
                </el-tooltip>
                <el-tooltip class="item" effect="dark" v-if="task.payType" content="下单立返本金" placement="top">
                  <img class="icon-small"  src="http://demo2.hsk.cc/style/images/lifan.png" alt="">
                </el-tooltip>
                <el-tooltip class="item" effect="dark" v-if="!task.isCollect" content="要求收藏宝贝" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/ShouCang.gif" alt="">
                </el-tooltip>
                <el-tooltip class="item" effect="dark" v-if="!task.isCompleteView" content="要求浏览到底" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/viewPage.png" alt="">
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="要求搜索商品下单" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/SouSuo.gif" alt="">
                </el-tooltip>
                <el-tooltip class="item"  v-if="task.buyType == 1" effect="dark" content="要求手机下单" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/ipad.png" alt="">
                </el-tooltip>
                <el-tooltip class="item"  v-if="task.buyType == 2" effect="dark" content="要求电脑下单" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/ipad.png" alt="">
                </el-tooltip>
                <el-tooltip class="item" v-if="!task.isShare" effect="dark" content="要求分享商品" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/share.png" alt="">
                </el-tooltip>
                <el-tooltip class="item"  v-if="task.limitSex == 1" effect="dark" content="要求买家性别为男" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/man.png" alt="">
                </el-tooltip>
                <el-tooltip class="item"  v-if="task.limitSex == 2" effect="dark" content="要求买家性别为女" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/girl.png" alt="">
                </el-tooltip>
                <el-tooltip class="item" v-if="!task.isChat" effect="dark" content="要求拍前聊天" placement="top">
                  <img class="icon-small"  src="http://demo2.hsk.cc/style/images/WangLiao.gif">
                </el-tooltip>
                <el-tooltip class="item" v-if="!task.question" effect="dark" content="要求买家找答案" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/find_answer.png" alt="" srcset="">
                </el-tooltip>
                <el-tooltip class="item" v-if="!task.isShopCart" effect="dark" content="延期购买" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/delay_buy.png" alt="" srcset="">
                </el-tooltip>
                <el-tooltip class="item" v-if="!task.isShangbao" effect="dark" content="要求买家加入商保" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/ShangBao.gif" alt="" srcset="">
                </el-tooltip>
                <el-tooltip class="item" v-if="task.taoqi" effect="dark" content="要求买家淘气值" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/taoqizhi.png" alt="" srcset="">
                </el-tooltip>
                <el-tooltip class="item" v-if="task.taoqi" effect="dark" content="要求买家好评后删除订单" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/afterSales.png" alt="" srcset="">
                </el-tooltip>
                <el-tooltip class="item" v-if="!task.isVerify" effect="dark" content="要求买家上传近期交易好评截图" placement="top">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/ShenHe.gif" alt="" srcset="">
                </el-tooltip>
                <span @click="onShowDesc">查看具体</span>
              </div>
              <div class="flex">
                <font class="text-orange">卖家留言：加我QQ聊</font>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="state">
                <div class="text-red">已绑定买号，等待您购买并支付</div>
                <div>剩余34分10秒可支付</div>
              </div>
            </el-col>
            <el-col :span="2" style="padding: 5px 0">
              <div class="action">
                <el-button size="mini" type="primary" @click.native="onShowBind">绑定买号</el-button>
                <!-- <el-button size="mini" type="primary" @click.native="onShowFlow">下单流程</el-button>
                <el-button size="mini" type="success" @click.native="onShowAddress">填写地址</el-button> -->
                <el-button size="mini" type="danger">取消任务</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="borderTop: 1px solid #ACDAFF">
            <el-col :span="7" class="flex">
              <span class="text-green" style="width: 100px">订单号：</span><el-input class="flex-1"></el-input>
            </el-col>
            <el-col :span="5" class="flex">
              <span class="text-green" style="width: 100px">实付金额：</span><el-input class="flex-1"></el-input><span style="margin-left: 5px" class="text-green">元</span>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <el-pagination
      style="marginTop: 20px"
      align="right"
      background
      layout="prev, pager, next"
      :page-size="limit"
      :page-count="pageCount"
      @current-change="changePage">
    </el-pagination>

    <div class="count">本页任务金额共计：<font class="text-orange">2311.00</font> 元，发布点共计：<font class="text-orange">2311.00</font> 点</div>
    <dialog-flow v-if="showFlow" :show-flow="showFlow" @close="onShowFlow"></dialog-flow>
    <dialog-address v-if="showAddress" :show-address="showAddress" @close="onShowAddress"></dialog-address>
    <dialog-desc v-if="showDesc" :show-desc="showDesc" @close="onShowDesc"></dialog-desc>
    <dialog-bind v-if="showBind" :show-bind="showBind" @close="onShowBind"></dialog-bind>
  </div> 
</template>

<script>
import taskConfig from "@common/js/getTaskConfig"
import dialogFlow from "@components/task-hall/dialog-flow"
import dialogAddress from "@components/task-hall/dialog-address"
import dialogDesc from "@components/task-table/dialog-desc"
import dialogBind from "@components/task-hall/dialog-bindAccount"
export default {
  data() {
    return {
      list: [],
      options: [],
      value: '',
      active: 0,
      typeList: [{
        value: '所有任务',
      },{
        value: '实物',
      },{
        value: '虚拟',
      },{
        value: '套餐',
      }], //订单类型
      typeActive: null,
      typeIndex: 1,
      stateList: [{
        value: '等待支付'
      },{
        value: '等待发货'
      },{
        value: '等待收货'
      },{
        value: '等待审核返款'
      },{
        value: '已完成'
      },{
        value: '等待追加好评'
      },{
        value: '等待追评审核'
      }], //好评时间
      stateActive: null,
      stateIndex: null,
      filterActive: 0,
      classfiy: [],
      showFlow: false,
      showAddress: false,
      showDesc: false,
      showBind: false,
      limit: 15,
      page: 1,
      pageCount: 1
    }
  },

  components: {
    dialogFlow,
    dialogAddress,
    dialogDesc,
    dialogBind
  },

  async created() {
    await this.setType()
    await this.getData()
  },

  methods: {
    async setType() {
      let res = await taskConfig.getTaskType(this)
      if(!res.data.code) {
        this.options = res.data.shopSiteList
        this.value = res.data.shopSiteList[0].id
      }
    },

    async getData() {
      let res = await this.api.post(`${this.baseUrl}/brush/app/taskHall`, {
        /* taskNo: this.keyword,
        shopSiteId: this.shopList[this.active].id,
        isTake: this.stateActive,
        xushiType: this.typeActive,
        haopingTime: this.timeActive,
        page: this.page,
        limit: 5,
        sort: this.sortActive */
        "taskNo": null,
        "shopSiteId": 1,
        "isTake": null,
        "xushiType": 1,
        "haopingTime": 1,
        "page": this.page,
        "limit": 15,
        "sort": "addTimeDesc",
        "isMyTask": 1
      }, this, { headers: {'token': this.$cookies.get('token')}})

      if(!res.data.code) {
        const data = res.data.taskHall
        console.log(data)
        if(data.list.length) {
          this.list = this.list.concat(data.list)
          this.page = this.page + 1
          this.pageCount = data.totalPage
          console.log(this.page)
        }else {
          this.hasData = false
        }

      }else {
        this.$alert(res.data.msg, '获取数据失败', {
          dangerouslyUseHTMLString: true
        });
      }
    },

    onShowFlow() {
      this.showFlow = !this.showFlow
    },

    onShowAddress() {
      this.showAddress = !this.showAddress
    },

    onShowDesc() {
      this.showDesc = !this.showDesc
    },

    onShowBind() {
      this.showBind = !this.showBind
    },

    onFilter() {

    },

    /**翻页 */
    async changePage() {
      await this.getData()
    },
  }

}
</script>

<style lang="stylus" scoped>
.wrap-tips {
  padding 10px 18px
  border: 1px solid #ACDAFF;
  background-color: #eef9ff;
  margin-bottom 20px
  .bg-white {
    border: 1px solid #ACDAFF;
  }
  .tips-text {
    background: url('http://demo2.hsk.cc/style/images/jie.gif') 20px center no-repeat;
    line-height 25px
    font-size 14px
    padding-left 105px
    color #406899
  }
}

.wrap-filter {
  border: 1px solid #ACDAFF;
  background-color: #eef9ff;
  padding 10px 0
}

.filter-search {
  width 100%
  align-items center
  padding-bottom 10px
  border-bottom 1px dashed #adcaff
  >>>.el-row {
    width 100%
    align-items center
    justify-content flex-start
  }
  .text {
    color #406899
  }
}

.filter-tabs {
  width 100%
  align-items center
  padding-top 10px
  >>>.el-row {
    width 100%
    align-items center
    justify-content flex-start
  }
  .text {
    color #406899
  }
  .classfiy-wrap {
    justify-content flex-start
    .item {
      padding 0 10px
      color #406899
      cursor pointer
      &:hover {
        color #f00
      }
      &.active {
        color #f00
        font-weight bold
        position relative
        z-index 2
        &:after {
          content ''
         /*  width 100%
          height 40px
          background-color white
          position absolute
          top 0 
          left 0
          z-index -1 */
        }
      }
    }
  }
}

.wrap-content {
  .item {
    border: 1px solid #ACDAFF;
    margin-top 20px
  }
  .item-bar {
    padding 5px 10px
    background-color #eef9ff
    align-items center
    color #187DFF
    border-bottom 1px solid #ACDAFF
    &:hover {
      color #f00
    }
    .bar-cell {
      flex 1
      display flex
      &.left {
        justify-content flex-start
      }
      &.right {
        justify-content flex-end
      }
      img {
        margin-right 5px
      }
    }
  }
  .item-content {
    background-color white
    >>>.el-row {
      margin-left 0 !important
      margin-right 0 !important
      color #406899
      &.flex {
        align-items initial
      }
    }
    >>>.el-col {
      text-align center
      padding 15px 0
      + .el-col {
        border-left 1px dashed #ACDAFF
      }
      &:nth-child(2) {
        border-left 0
      }
      .flex {
        margin-top 6px
        text-align left 
        justify-content flex-start 
      }
    }
    img {
      width 80px
      height 80px
      margin 0 auto
      &.icon-little {
        width auto
        height auto
        margin 0 8px 0 0
      }
    }
    .item-info {
      display flex
      justify-content center
      .text {
        font-size 15px
      }
      p {
        &:first-child {
          margin-bottom 5px
        }
      }
    }
    .state {
      div {
        margin-bottom 15px
      }
    }
    .action {
      display flex
      flex-direction column
      align-items center
      height 100%
      justify-content center
      button {
        margin 0
        + button {
          margin-top 8px
        }
      }
    }
  }
}

.count {
  padding 30px 0
  color #406899
  font-size 15px
  font-weight 600
}

.line-1 {
  overflow: hidden;
  text-overflow: ellipsis;
  display:-webkit-box; //作为弹性伸缩盒子模型显示。
  -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
  -webkit-line-clamp:1; //显示的行
}

.margin-left {
  margin-left 20px
}

.ask {
  margin 8px 0
  flex-wrap wrap
}

.icon-small {
  width auto !important
  height auto !important
  margin 0 10px 0 0 !important
  display inline-block
}
</style>