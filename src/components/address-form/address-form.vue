<template>
  <div class="section address-section">
    <div class="title">
      <span>添加发货地址</span>
    </div>
    <div class="tips">
      友情提醒：请正确的填写发货信息，若因为发货信息错误而导致空包出问题，后果自负哦。
    </div>
    <el-form class="form" label-position="left" ref="form" :model="form" label-width="auto">
      <el-form-item label="发货人姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="发货人电话">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="发货城市">
        <el-cascader
          size="large"
          :options="options"
          v-model="selectedOptions"
          @change="handleChange">
        </el-cascader>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="寄件包裹名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="默认发货快递公司">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in selectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item align="left">
        <el-button type="success" size="medium" @click="onSubmit">确认添加</el-button>
      </el-form-item>  
    </el-form>  

    <div class="address-table">
      <el-table
        align="center"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          align="center"
          prop="name"
          label="发货人姓名"
          width="100">
        </el-table-column>
        <el-table-column
          align="center"
          prop="phone"
          label="发货人电话"
          width="125">
        </el-table-column>
        <el-table-column
          align="center"  
          prop="address"
          label="收货地址"
          width="280">
        </el-table-column>
        <el-table-column
          align="center"
          prop="weight"
          label="包裹名称/重量"
          width="125">
        </el-table-column>
        <el-table-column
          align="center"
          prop="express"
          label="默认快递"
          width="100">
        </el-table-column>
        <el-table-column
          align="center"
          prop="status"
          label="状态"
          width="100">
          <template slot-scope="scope">
            <div class="status">{{scope.row.status}}</div>
          </template>  
        </el-table-column>
        <el-table-column
          align="center"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <div class="delete">删除</div>
          </template>  
        </el-table-column>
      </el-table>
    </div>  
  </div>
</template>

<script>
import { regionDataPlus } from 'element-china-area-data'
export default {
  data() {
    return {
      form: {
        name
      },
      options: regionDataPlus,
      selectedOptions: [],
      selectOptions: [{
          value: '选项1',
          label: '黄金糕'
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
      value: '',
      tableData: [{  //表格数据
        phone: '13512358777',
        name: '王小虎',
        address: '广东省 广州市 越秀区 体育馆四路',
        weight: '鞋子 / 1.10千克',
        express: '申通快递',
        status: '默认',

      }]
    }
  },

  methods: {
    handleChange() {},
    
    onSubmit() {},
  }
}
</script>

<style lang="stylus" scoped>
.address-section {
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

.form {
  width 350px
  margin 40px 0 50px 50px
  >>>.el-form-item__content {
    max-width 300px
  }
  .el-cascader, .el-select {
    width 100%
  }
}

.address-table {
  margin-bottom 30px
  .status {
    color red
  }
  .delete {
    &:hover {
      color #1989fa
    }
  }
}
</style>