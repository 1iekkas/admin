<template>
  <div class="wrap">
    <div class="wrap-tips">
      <div class="bg-white">
        <div class="tips-text" align="left">
          <p class="text-orange">已发任务</p>
          <p>1. 在已发布任务区，您可以查看和操作所有自己发布的任务及接手操作进度；</p>
          <p>2. 点击下面任务区筛选及链接【所有任务】【虚拟任务】【等待接手任务】【等待支付任务】等等，可以快速筛选出您想要查看的相应已发布任务。</p>
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
              <div class="item" :class="{'active': active == index}" align="center" v-for="(item, index) in 11" :key="item">{{item}}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="wrap-content">
      <div class="item" align="left" v-for="item in 10" :key="item">
        <div class="item-bar flex">
          <div class="bar-cell left" align="left">
            <img src="http://demo2.hsk.cc/style/images/website_ico1.png" alt="">
            <span>20191031154900145</span>
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
            <el-col :span="13">
              <div class="flex">
                <div class="flex-1">任务金额：90 <font class="text-orange">需改价</font></div>
                <div class="flex-1">发布点：12.3 点 <font class="text-red">+加点</font></div>
                <div class="flex-1">收货时限：物流显示签收好评</div>
              </div>
              <div class="flex">
                任务要求：<img class="icon-little" src="http://demo2.hsk.cc/style/images/huofan.png" width="15" alt=""> <span @click="onShowDesc">查看具体</span>
              </div>
              <div class="flex">
                <font class="text-orange">您的留言：加我QQ聊</font>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="state">
                <div class="text-red">任务已下架</div>
                <el-button size="mini" type="primary" @click="onShowExplain">查看进店设置</el-button>
              </div>
            </el-col>
            <el-col :span="3" style="padding: 5px 0">
              <div class="action">
                <el-button size="mini" type="danger">刷新</el-button>
                <el-button size="mini" type="warning">上架</el-button>
                <el-button size="mini" type="danger">删除</el-button>
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
    <div class="count">本页任务金额共计：<font class="text-orange">2311.00</font> 元，发布点共计：<font class="text-orange">2311.00</font> 点</div>
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
      options: [],
      value: '',
      active: 0,
      classfiy: [],
      showExplain: false,
      showDesc: false
    }
  },

  components: {
    dialogExplain,
    dialogDesc
  },

  async created() {
    await this.setType()
  },

  methods: {
    async setType() {
      let res = await taskConfig.getTaskType(this)
      if(!res.data.code) {
        this.options = res.data.shopSiteList
        this.value = res.data.shopSiteList[0].id
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
.wrap-tips {
  padding 10px 18px
  border: 1px solid #ACDAFF;
  background-color: #eef9ff;
  margin-bottom 20px
  .bg-white {
    border: 1px solid #ACDAFF;
  }
  .tips-text {
    background: url('http://demo2.hsk.cc/style/images/fa.gif') 20px center no-repeat;
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
      flex 1
      color #406899
      &:hover {
        color #f00
      }
      &.active {
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
      justify-content space-between
      button {
        margin 0
        width 70%
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
</style>