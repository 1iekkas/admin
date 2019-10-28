<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="tips">
      1、缴纳保证金后即成为商家保障(商保)会员，保障发布人权益同时你可以赚取更多发布点；<br>
      2、接手方才需要交纳商保金，发布方可以不加入商保服务；<br>
      3、加入商保的会员，将遵守“不维权，不差评，不用信用卡，不用淘宝客”的基本准则；<br>
      <strong class="text-orange">4、您的 2000.00 元商保金，在所有任务完成后30天，可退出商保并返还金额。</strong>
    </div>
    <div class="line">请先阅读并同意协议，然后只需要交纳保证金即完成加入</div>
    <div class="safe-form">
      <div class="cell safe-form-title"><img src="http://demo2.hsk.cc/templates/main/images/money_img.png" alt=""><strong class="text-orange">缴纳保证金</strong></div>
      <div class="cell">
        <div class="cell-title">您当前账户余额： </div>
        <div><span class="text-orange">4003.58</span> 元   <router-link class="a" to="">我要充值>></router-link></div>
      </div>
      <div class="cell">
        <div class="cell-title text-bold">您已经缴纳了： </div>
        <div class="flex"><span class="text-bold"><font class="text-orange">4003.58</font> 元保证金</span>    已经享用<img class="icon" src="http://demo2.hsk.cc/templates/main/images/ShangBao.gif"/>商保服务特权</div>
      </div>
      <div class="cell">
        <div class="cell-title cell-tips">Tips：已加入商保的会员还可以在下面选择更高等级保证金补差价升级 </div>
      </div>
      <div class="cell">
        <div class="cell-title text-bold">本次加入商保服务需要缴纳：</div>
        <div class=" text-bold"><span class="text-orange">1</span> 元保证金</div>
      </div>
      <div class="cell">
        <div class="cell-title text-bold">选择加入商保等级：</div>
        <div>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="cell cell--margin-top">
        <span class="text-bold"><el-checkbox v-model="checked"></el-checkbox>  同意并接受</span>
        <span class="notes">《某某客商家保障基础协议》</span>
      </div>

      <div class="cell">
        <div class="cell-title">二级密码：</div>
        <el-input></el-input>
        <router-link class="a text-light-black" to="">（忘记？点我找回）</router-link>
      </div>

      <div class="cell cell--margin">
        <el-button type="primary">确定缴纳</el-button>
        <el-button type="danger">退出商保服务</el-button>
      </div>

      <div class="cell">
        <img class="tips-img" src="http://demo2.hsk.cc/templates/main/images/shangbao-banner.jpg" alt="">
      </div>
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
      options: [{
          value: '选项1',
          label: '黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  },

  methods: {
    
  }
}
</script>

<style lang="stylus" scoped>
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
  .action {
    &:hover {
      color #0089CD
    }
  }  
  .line {
    font-size 14px
    color #333
    font-weight bold
    margin-bottom 30px
  }
  .safe-form {
    width 680px
    margin 0 auto
    font-size 14px
    .cell {
      display flex
      align-items center
      justify-content flex-start
      padding 10px
      &.cell--margin-top {
        margin-top 15px
        border-top 1px dashed #ccc
      }
      &.cell--margin {
        margin-left 62px
        margin-top 10px
        >>>.el-button {
          margin 0 15px
        }
      }
      .tips-img {
        margin 0 auto
        width 100%
      } 
      .cell-title {
        padding-right 8px
      }
      .notes {
        color #777
        &:hover {
          color blue
        }
      }
      .flex {
        span {
          padding-right 10px
        }
      }
      .icon {
        margin 0
      }
      .a {
        color green
        padding-left 10px
      }
      .el-input {
        width 200px
      }
    }
    .cell-tips {
      color blue
    }
    img {
      margin-right 15px
    }
  }
  >>>.el-select {
    width 400px
  }
}


</style>