<template>
  <div class="wrap">
    <div class="wrap-tips">
      <div class="bg-white">
        <div class="tips-text" align="left">
          <p class="text-orange">任务模板流程：发布任务时保存为模板 >> 下次发同样或类似的任务 >> 选择【从任务模板中创建】快速创建！</p>
          <p>1.平台的任务模板是为了方便试客们发布重复的任务而设计的一项实用功能；</p>
          <p>2.在发布任务时，可以选择是否将该次发布的任务保存为任务模板；</p>
          <p>3.如果您已经保存了任务模板，这次发布相同的任务就可以选择“从任务模板中创建”，为您省时省力，方便快捷！</p>
        </div>
      </div>
    </div>

    <div class="table-wrapp">
      <div class="action-list">
        <el-row :gutter="20" class="flex">
          <el-col style="width: 120px" class="text" align="left">
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
          <el-col :span="15" align="right">
            <div class="classfiy-wrap flex">
              <div class="item" :class="{'active': active == index}" align="center" v-for="(item, index) in 11" :key="item">{{item}}</div>
            </div>
          </el-col>
          <el-col :span="6" class="flex">
            <el-input></el-input>
            <el-button style="marginLeft: 15px" type="primary">搜索</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="content-wrapp">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="序号"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="任务区"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="主图">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="模板名称">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="掌柜名">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="商品网址">
            <template>
              <el-input value="https://mobile.yangkeduo.com/goods2.html?goods_id=5818609398&page_from=23&share_uin=LB6UO3PUTHNEWJR2QBAQWIWWLA_GEXDA&_wv=1&refer_share_id=590c1b25f75246d7a3881c4083fa1b39&refer_share_uid=2339209053&re"></el-input>  
            </template> 
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="价格">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="好评时限">
          </el-table-column>

          <el-table-column
            prop="date"
            align="center"
            label="添加时间">
          </el-table-column>
          <el-table-column
            prop="address"
            width="180"
            label="操作">
            <template>
              <el-button type="primary" size="mini">发布任务</el-button>
              <el-button type="danger" size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import taskConfig from "@common/js/getTaskConfig"
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '1.00'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '2.00'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '99.00'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '6.00'
      }],
      options: [],
      value: '',
      active: 0
    }
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
    background: url('http://demo2.hsk.cc/style/images/kuai.gif') 20px center no-repeat;
    line-height 25px
    font-size 14px
    padding-left 105px
    color #406899
  }
}

.table-wrapp {
  border 1px solid #acdaff 
  color #406899
  .action-list {
    padding 15px
    background-color #EBF5FF
    border-bottom 1px solid #acdaff
  }
}

.classfiy-wrap {
  .item {
    flex 1
    &.active {
      color #f00
      font-weight bold
    }
  }
}
</style>