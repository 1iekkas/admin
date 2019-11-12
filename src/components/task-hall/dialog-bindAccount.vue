<template>
  <el-dialog
    title="绑定买号"
    :visible.sync="showDialog"
    width="60%"
    :before-close="handleClose"
    >
    <div class="dialog-tips">
      <p align="left" class="text-orange">请选择你购买此商品的淘宝买号：</p>
      <div class="text-blue flex" align="center">
        <img src="http://demo2.hsk.cc/style/Images/horn.gif" alt="">
        <p class=" flex">该任务为【实名买号】任务，只有通过实名认证的买号，并且买号等级是一心<img src="http://demo2.hsk.cc/style/images/score_1.gif" />或更高才可以接手</p>
      </div>
    </div>
    <div class="dialog-content">
      <el-table
        :data="tableData"
        @current-change="handleCurrentChange"
        style="width: 100%;marginTop: -50px">
        <el-table-column
          type="index"
          width="50">
          <template slot-scope="scope">
            <el-radio v-model="radio" :label="scope.$index"></el-radio>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label=""
          width="250"
          show-overflow-tooltip	
        >
          <template slot-scope="scope">
            {{scope.row.account}} <font class="text-red" v-if="scope.row.isHuabei">[花呗]</font><font class="text-green"> 淘气值{{scope.row.taoqi}}</font>
          </template>
        </el-table-column>

        <el-table-column
          prop="name"
          label=""
        >
          <template slot-scope="scope">
            <div class="flex">
              <font class="text-red">{{scope.row.sex ? '男': '女'}}</font> <font class="text-green">{{scope.row.age}}</font>
              <img v-if="scope.row.isRealname" src="http://demo2.hsk.cc/style/images/ShiMing.gif" alt="">
            </div>
             
             
          </template>
        </el-table-column>

        <el-table-column
          prop="name"
          label=""
        >
          <template slot-scope="scope">
            <div class="flex">
              信誉值：<font class="text-orange text-bold">{{scope.row.xinyu ? scope.row.xinyu : 0}}</font> <img src="http://demo2.hsk.cc/style/images/score_1.gif" alt="">
            </div>
          </template>
        </el-table-column>

        <el-table-column
          prop="name"
          label=""
          width="150"
        >
          <template slot-scope="scope">
            今日已接手：<font class="text-orange text-bold">{{scope.row.todayNum ? scope.row.todayNum : 0}}</font> 条
          </template>
        </el-table-column>

        <el-table-column
          prop="name"
          label=""
          width="80"
        >
          <template slot-scope="scope">
            月：<font class="text-orange text-bold">{{scope.row.monthNum ? scope.row.monthNum : 0}}</font>条
          </template>
        </el-table-column>

        <el-table-column
          prop="name"
          label=""
          width="80"
        >
          <template slot-scope="scope">
            周：<font class="text-orange text-bold">{{scope.row.weekNum ? scope.row.weekNum : 0}}</font>条
          </template>
        </el-table-column>
  
      </el-table>
      <div align="center" style="marginTop: 35px">
        <el-button type="primary">确 认 提 交</el-button>
      </div>
      <div class="tips">
        <p>温馨提示：</p>
        <p>1. 选择哪个小号作为买号，必需用该小号登录淘宝购买对方宝贝，乱购买者或随便退款者，一经发现严惩；</p>
        <p>2. 为了保障您买号及发布方店铺安全，建议您多准备几个买号，轮流替换使用；</p>
        <p>3. 买号资料要完善，可登录淘宝修改个人资料补充完整，不全者一律冻结账户！拍下宝贝前请清除浏览器Cookie，如更换小号请更换IP再拍。</p>
        <p class="text-red">注：如果在自动收藏流量客户端软件上已设为收藏小号的买号不可以接手红包任务，需要恢复为普通买号才可以接手！</p>
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
    showBind: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      radio: -1,
      showDialog: this.showBind,
      tableData: [{
        id: 0,
        name: ''
      }]
    }
  },

  async created() {
    await this.getData()
  },

  methods: {
    async getData() {
      let res = await this.api.post(`${this.baseUrl}/brush/app/taskBindAccountList`
      , {}, this, { headers: {'token': this.$cookies.get('token')}})
      if(!res.data.code) {
        console.log(res.data.taskBindAccountList)
        this.tableData = res.data.taskBindAccountList
      }else {
        this.$alert(res.data.msg, '获取买号列表失败', {
          dangerouslyUseHTMLString: true
        });
      }
    },

    onClose() {
      this.$emit('close')
    },

    handleClose() {
      this.$emit('close')
    },
    
    handleCurrentChange(val) {
      console.log(val)
      this.currentRow = val;
      this.radio = this.tableData.findIndex(item => {
        return item.accountId == val.accountId
      })
      console.log(this.radio)
    }
  }
}
</script>

<style lang="stylus" scoped>
>>>.el-radio__label {
  display none
}
.dialog-tips {
  background: #ffffff url('http://demo2.hsk.cc/style/images/body_bg.gif') repeat-x 0 0;
  padding 15px
  .text-orange {
    color: #FF5500;
    font-size: 15px;
    line-height: 30px;
    font-weight: bold;
    margin-bottom 20px
  }
  .text-blue {
    color blue
    font-weight bold
    margin-bottom 20px
    img {
      margin 0 8px
    }
  }
}

.dialog-content {
  font-size 15px
  color #406899
  margin-top 15px
  /* max-height 500px
  overflow-y scroll */
  font {
    margin-right 5px
  }
  .tips {
    color #20537A
    text-align left
    line-height 30px
    margin-top 35px
    font-size 14px
    p {
      &:first-child {
        font-weight bold
      }
    }
  }
}
</style>
