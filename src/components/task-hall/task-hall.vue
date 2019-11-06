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

       <div class="filter-search flex" style="paddingTop: 10px">
        <el-row :gutter="20" class="flex">
          <el-col :span="2" class="text">
            任务类型 ：
          </el-col>
          <el-col :span="10" class="flex type">
            <div class="item"  :class="{'active': active == index}" v-for="(type, index) in typeList" :key="index">
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
            2019-11-02 14:45
          </div>
        </div>
        <div class="item-content">
          <el-row class="flex" :gutter="20">
            <el-col :span="3" align="center">
              <img width="80" height="80" src="http://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i3/2763096131/O1CN01Hso3tQ1vA2mSUH7Kw_!!2763096131.jpg_430x430q90.jpg" alt="">
            </el-col>
            <el-col :span="18">
              <div class="flex">
                <div class="flex-1">发布人：<font class="text-orange">需改价</font></div>
                <div class="flex-1">任务金额：90 <font class="text-orange">需改价</font></div>
                <div class="flex-1">发布点：12.3 点 <font class="text-red">+加点</font></div>
                <div class="flex-1">收货时限：物流显示签收好评</div>
              </div>
              <div class="flex">
                <font>加我QQ聊</font>
              </div>
            </el-col>
            <el-col :span="3" style="padding: 5px 0">
              <div class="action">
                <el-button size="mini" type="primary">参加活动</el-button>
              </div>
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
      options: [{
        title: '任务编号',
        id: '0'
      },{
        title: '发布人',
        id: '1'
      }],
      value: '',
      typeList: [],
      active: 0,
      classfiy: [],
      showExplain: false,
      showDesc: false,
      active: 0
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
        this.typeList = res.data.shopSiteList
        //this.value = res.data.shopSiteList[0].id
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
</style>