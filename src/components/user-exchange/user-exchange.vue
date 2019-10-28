<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="exchange-form">
      <div class="cell">
        <div class="cell-title">用户名：</div>
        <div class="cell-value">test</div>
      </div>
      <div class="cell">
        <div class="cell-title">账户余额：</div>
        <div class="cell-value">
          <span>4003.58 元</span>
          <span>发布点：2213.38 点</span>
          <span>流量点：40.200 点</span>
          <span>收藏点：630.76 点</span>
          <span>积分：459 分</span>
        </div>
      </div>
      <div class="cell">
        <div class="cell-title">兑换类型：</div>
        <div class="cell-value flex">
          <el-radio-group v-model="active" fill="#ff5000" text-color="#ffffff">
            <el-radio-button v-for="(item , index) in typeList" :key="index" :label="item.id">{{item.name}}</el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="cell">
        <div class="cell-title">兑换点数：</div>
        <div class="cell-value flex">
          <el-input></el-input>
          <span class="type-tips">sdasdad</span>
        </div>
      </div>
      <div class="cell">
        <el-button type="primary">执行兑换</el-button>
      </div>
    </div>
    <div class="tips-table" align="left">
      <div class="tips-table-title">兑换比率：</div>
      <el-table
        align="center"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          align="center"
          prop="express"
          label="123"
          width="130">
        </el-table-column>
        <el-table-column
          align="center"
          prop="code"
          label="发布点"
          width="185">
          <template slot-scope="scope">
            <div class="text-red">{{scope.row.code}}</div>
          </template>  
        </el-table-column>
        <el-table-column
          align="center"  
          prop="start"
          label="流量点"
          width="185">
        </el-table-column>
        <el-table-column
          align="center"
          prop="end"
          label="收藏点"
          show-overflow-tooltip
          width="185">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="积分"
          width="185">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>   

<script>

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      checked: false,
      active: 0,
      typeList: [{
        id: 0,
        name: '发布点'
      },{
        id: 1,
        name: '流量点'
      },{
        id: 2,
        name: '收藏点'
      },{
        id: 3,
        name: '积分'
      }],
      tableData: []
    }
  },

  methods: {
    switchType(id) {
      if(this.active !== id) {
        this.active = id
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
>>>.el-radio-button__inner:hover {
  color #ff5000
}
.section {
  margin-bottom 60px
  .tips {
    border 1px #A7DDFE solid
    width auto
    height auto
    line-height 30px
    padding 4px
    margin 35px 10px 20px 10px
    background url('http://demo2.hsk.cc/style/images/xiaobao-img.gif') #ECF8FF no-repeat 15px center
    padding-left: 90px
    color #666
    text-align left 
    font-size 14px
  }
}

.exchange-form {
  margin-top 35px
  width 750px
  margin 0 auto
  .cell {
    display flex
    padding 10px 0
    font-size 14px
    align-items center
    color #555
    .cell-title {
      width 100px
      text-align right 
      margin-right 10px
    }
    .cell-value {
      span {
        margin-right 18px
        &.type-tips {
          margin 0 15px
        }
      }
    }
    >>>.el-button {
      margin-left 110px
    }
  }
}

.tips-table {
  margin 45px 30px 0
  .tips-table-title {
    color #555
    padding 10px 0
    font-size 15px
  }
}


</style>