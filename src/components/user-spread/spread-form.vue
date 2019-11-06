<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="banner">
      <img src="http://demo2.hsk.cc/templates/main/images/spread.png" alt="">
    </div> 

    <div style="marginTop: 35px">
      <el-row class="flex">
        <el-col :span="6">
          您的推广专属原地址：
        </el-col>
        <el-col :span="12">
          <el-input value='111111111'></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">复 制 链 接</el-button>
        </el-col>
      </el-row>
      <el-row class="flex" style="marginTop: 35px">
        <el-col :span="6">
          您的推广专属短地址：
        </el-col>
        <el-col :span="12">
          <el-input value='111111111'></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">复 制 链 接</el-button>
        </el-col>
      </el-row>
    </div>

    <div class="detail">
      <p>推广说明</p>
      <p>您可以通过QQ群发，站内信，店铺留言，QQ空间，各大论坛等做推广平台广告，主要点击一次您的推广链接进来，一周内注册的会员都是您推荐的会员，只需推荐一次，你终身受益，往后日子真金白银等你拿。</p>
      <p>推广奖励1：每推荐一个会员都即时获得20 个积分；</p>
      <p>推广奖励2：被推荐人发布任务数量累计10次(支持倍增)后，推荐人将获得1个发布点，同时您的上级推荐人也奖励0.5个发布点，支持5级提成，举例：被推荐人如果发布1000个任务，您获得100个发布点 × 您总推荐了500人 × 0.5元 = 25000 人民币</p>
      <p>而你的上级推荐人同时也获得：12500 人民币</p>
      <p class="text-red">更精彩：当被推荐人发布任务数量累计达到20次或30次等倍增数值时，再次获得上面相同人民币。</p>
      <p class="text-blue">朋友，您赚钱的机会来了，心动不如行动！GO。。。</p>
      <p class="text-red">声明：我们鼓励会员积极推广，但严禁通过恶意推广赚积分和发布点，一经发现，封号处理，发布点及存款做没收处理，请各会员不要拿自己的金钱赌博！</p>
      <p class="text-blue">另：所有赚得的积分和发布点都可以兑换成资金，再申请提现。</p>
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
      dialogVisible: false,
      tableData: [{  //表格数据
        express: '顺丰速递',
        code: '55da*********',
        start: '广东省 广州市 广州市',
        pass: '已扫描',
        time: '2019-10-17 16:35',
      }]
    }
  },

  methods: {
    handleClose() {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.section {
  margin-bottom 60px
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
  .action {
    &:hover {
      color #0089CD
    }
  }  
}

>>>.el-dialog__body {
  padding 5px 20px 30px
}
.dialog-section {
  padding-top 15px
  border-top 1px solid #ccc
  .cell {
    text-align left
    padding 10px 0
    .cell-title {
      width 120px
    }
    .cell-value {
      flex 1
      color #0078e4
      &:hover {
        color #f60
      }
    }
  }
}

.detail {
  margin-top 45px
  font-size 14px
  text-align left
  p {
    line-height 30px
    &:first-child {
      font-size 15px
      font-weight 600
    }
  }
  
}

</style>