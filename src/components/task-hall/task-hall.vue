<template>
  <div class="wrap">
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
            <el-input v-model="keyword"></el-input>
          </el-col>
          <el-col :span="1">
            <el-button size="mini" type="primary" @click="onSearch">搜索</el-button>
          </el-col>
          <el-col :span="13" align="right">
            <el-checkbox></el-checkbox> <span class="text">自动刷新页面</span>
            <el-button class="margin-left" size="mini" type="primary">刷新</el-button>
          </el-col>
        </el-row>
      </div>

       <div class="filter-search flex" style="paddingTop: 10px">
        <el-row :gutter="20" class="flex">
          <el-col :span="2" class="text">
            任务类型 ：
          </el-col>
          <el-col :span="10" class="flex type">
            <div class="item" :class="{'active': active == type.id}" v-for="(type, index) in shopList" :key="index" @click="onSwitchShop(type.id)">
              {{type.title}}
            </div>
          </el-col>
        </el-row>
      </div>


      <div class="filter-tabs flex">
        <el-row :gutter="20" class="flex">
          <el-col style="width: 115px" class="text" align="left">
            任务区筛选 ：
          </el-col>
          <el-col :span="3">
            <el-select v-model="sortActive">
              <el-option
                v-for="item in sort"
                :key="item.key"
                :label="item.value"
                :value="item.key">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="20" align="right">
            <div class="classfiy-wrap flex">
              <div class="item" :class="{'active': filterActive == index}" align="center" v-for="(item, index) in stateList" :key="item.value" @click="onFilter(index, 'state')">{{item.value}}</div>
              <div class="item" :class="{'active': filterActive == index + 2}" align="center" v-for="(item, index) in typeList" :key="item.value" @click="onFilter(index, 'type')">{{item.value}}</div>
              <div class="item" :class="{'active': filterActive == index + 5}" align="center" v-for="(item, index) in timeList" :key="item.value"  @click="onFilter(index, 'time')">{{item.value}}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="wrap-content">
      <div class="item" align="left" v-for="(task, index) in list" :key="index">
        <div class="item-bar flex">
          <div class="bar-cell left" align="left">
            <img src="http://demo2.hsk.cc/style/images/website_ico1.png" alt="">
            <span>{{task.taskNo}}</span>
          </div>
          <div class="bar-cell right" align="right">
            {{task.addTime}}
          </div>
        </div>
        <div class="item-content">
          <el-row class="flex" :gutter="20">
            <el-col :span="3" align="center">
              <img width="80" height="80" src="http://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i3/2763096131/O1CN01Hso3tQ1vA2mSUH7Kw_!!2763096131.jpg_430x430q90.jpg" alt="">
            </el-col>
            <el-col :span="18">
              <div class="flex">
                <div class="flex-1">发布人：<font class="text-red">{{task.userName}}</font>
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/merchant_v2.png" alt="">
                  <img class="icon-small" src="http://demo2.hsk.cc/style/images/score_1.gif" alt="">
                </div>
                <div class="flex-1">任务金额：<font class="text-red">{{task.oneTaskAmount}}</font> 元 <font v-if="task.isModPrice" class="text-orange">需改价</font></div>
                <div class="flex-1">发布点：<font class="text-red">{{task.oneTaskPoint}}</font> 点 </div>
                <div class="flex-1">收货时限：
                  <font class="text-orange" v-if="task.haopingTime == 1">{{`物流显示签收好评`}}</font> 
                  <font class="text-orange" v-else>{{`${timeList[Number(task.haopingTime) - 1].value}后好评`}}</font>
                </div>
              </div>
              <div class="flex ask">
               
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
              </div>
              <div class="flex">
                <font>加我QQ聊，收货后，选好评，点亮全部星，不用写评语</font>
              </div>
            </el-col>
            <el-col :span="3" style="padding: 5px 0">
              <div class="action">
                <el-button size="mini" type="primary" @click.native="onPartake(task.taskNo)">参加活动</el-button>
              </div>
            </el-col>
          </el-row>
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
    </div>

    <div class="background-tips">
      <div>
        <div class="title">掌柜发布任务流程</div>
        <img src="http://demo2.hsk.cc/templates/main/images/ad/task_fabu.png" alt="">
      </div>
      <div>
        <div class="title">试客接手任务流程</div>
        <img src="http://demo2.hsk.cc/templates/main/images/ad/task_jie.png" alt="">
      </div>
    </div>
    <dialog-explain v-if="showExplain" :show-explain="showExplain" @close="onShowExplain"></dialog-explain>
    <dialog-desc v-if="showDesc" :show-desc="showDesc" @close="onShowDesc"></dialog-desc>
  </div> 
</template>

<script>
import taskConfig from "@common/js/getTaskConfig"
import dialogExplain from "@components/task-table/dialog-explain"
import dialogDesc from "@components/task-table/dialog-desc"
export default {
  data() {
    return {
      list: [],
      options: [{
        title: '任务编号',
        id: '0'
      },{
        title: '发布人',
        id: '1'
      }],
      value: '',
      keyword: '',
      shopList: [], //平台类型
      typeList: [{
        value: '【实物】',
      },{
        value: '【虚拟】',
      },{
        value: '【套餐】',
      }], //订单类型
      typeActive: null,
      typeIndex: 1,
      timeList: [{
        value: '立即'
      },{
        value: '30分'
      },{
        value: '1天'
      },{
        value: '2天'
      },{
        value: '3天'
      },{
        value: '4天'
      },{
        value: '5天'
      },{
        value: '6天'
      },{
        value: '7天'
      }], //好评时间
      timeActive: null,
      timeIndex: null,
      stateList: [{
        value: '待接手'
      },{
        value: '已接手'
      }], //状态列表
      stateActive: 1,
      stateIndex: 1,
      sort: [{
        value: '默认' ,
        key: 'default',
      },{
        value: '担保金额低到高' ,
        key: 'amountAsc',
      },{
        value: '担保金额高到低' ,
        key: 'amountDesc',
      },{
        value: '发布点低到高' ,
        key: 'pointAsc',
      },{
        value: '发布点高到低' ,
        key: 'pointDesc',
      },{
        value: '按最新发布时间排序' ,
        key: 'addTimeAsc',
      },{
        value: '发布时间倒序' ,
        key: 'addTimeDesc',
      }], //筛选
      sortActive: 'default',
      sortIndex: 0,
      active: 0,
      filterActive: 0,
      classfiy: [],
      showExplain: false,
      showDesc: false,
      limit: 15,
      page: 1,
      pageCount: 1,
      hasData: true,
      hasMore: true
    }
  },

  components: {
    dialogExplain,
    dialogDesc
  },

  async created() {
    await this.setType()
    await this.getData()
  },

  methods: {
    //设置商铺
    async setType() {
      let res = await taskConfig.getTaskType(this)
      if(!res.data.code) {
        this.shopList = res.data.shopSiteList
        this.active = res.data.shopSiteList[0].id
      }
    },

    //获取数据
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
        "sort": "addTimeDesc"
      }, this, { headers: {'token': this.$cookies.get('token')}})

      if(!res.data.code) {
        const data = res.data.taskHall
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

    //筛选
    async onFilter(index, type) {
      this.typeActive = null
      this.timeActive = null
      this.stateActive = null
      this.page = 1 
      this.pageCount = 1
      this.hasData = true
      this.hasMore = true
      switch(type) {
        case 'type':
          this.filterActive = index + 2
          this.typeActive = index + 1
          break;
        case 'time':
          this.filterActive = index + 5
          this.timeActive = index + 1
          break;
        default:
          this.filterActive = index 
          this.stateActive = index ? 0 : 1
          break; 
      }
      await this.getData()
    },

    async onSearch() {
      this.page = 1 
      this.pageCount = 1
      this.hasData = true
      this.hasMore = true
      await this.getData()
    },

    //选择类型
    async onSwitchShop(id) {
      this.active = id
      this.filterActive = 0
      this.typeActive = null
      this.timeActive = null
      this.stateActive = null
      this.page = 1 
      this.pageCount = 1
      this.hasData = true
      this.hasMore = true
      await this.getData()
    },

    /**翻页 */
    async changePage() {
      await this.getData()
    },

    /**参与活动 */
    async onPartake(key) {
      let res = await this.api.post(`${this.baseUrl}/brush/app/takeTask`, {
       taskNo: key
      }, this, { headers: {'token': this.$cookies.get('token')}})
      if(!res.data.code) {
        this.$alert('您已成功参与活动', '参与成功', {
          dangerouslyUseHTMLString: true,
          callback: action => {
            this.$router.push({
              path: '/taskHall?tab=1'
            })
          }
        });
      }else {
        this.$alert(res.data.msg, '参与活动失败', {
          dangerouslyUseHTMLString: true
        });
      }
    },

    onShowExplain() {
      this.showExplain = !this.showExplain
    },

    onShowDesc() {
      this.showDesc = !this.showDesc
    }
  }

}
</script>

<style lang="stylus" scoped>
.ask {
  margin 8px 0
}

.icon-small {
  width auto !important
  height auto !important
  margin 0 10px 0 0 !important
  display inline-block
}

.wrap-filter {
  border: 1px solid #ACDAFF;
  background-color: #eef9ff;
  padding 10px 0
}

.type {
  justify-content flex-start
  .item {
    width 100px
    padding 5px 0
    margin-right 15px
    border-radius 4px
    cursor pointer
    &.active, &:hover {
      color white
      background-color #ff6802
    }
  }
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
      flex 1
      color #406899
      &:hover {
        color #f00
      }
      &.active {
        font-weight bold
        position relative
        z-index 2
        color #f00
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

.text-red {
  &:hover {
    color #f60 !important
    cursor pointer
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
        width 70%
      }
    }
  }
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

.background-tips {
  margin-top 35px
  background-color white
  padding 20px
  border 1px dashed #acdaff
  .title {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    color: #666;
    text-align left
  }
  img {
    margin 0 auto
  }
}
</style>