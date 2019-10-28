<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="info-form">
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="标题：">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.name"></el-input></el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="被申诉的用户：">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.name"></el-input></el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="订单编号：">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="form.name"></el-input></el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="是否锁定：">
          <el-row :gutter="20">
            <el-col :span="23" class="form-tips-gray">
              <el-checkbox v-model="checked">
                违规试用或有违规行为可锁定便于客服介入处理；注：待发货、待交报告、待审核返款申诉请别锁定，以免对方无法操作
              </el-checkbox>
            </el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="申诉内容：">
          <el-row :gutter="20">
            <el-col :span="20">
              <div class="editor" ref="editorElem" style="text-align:left"></div>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="期望解决方案：">
          <el-row :gutter="20">
            <el-col :span="20">
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                v-model="form.textarea">
              </el-input>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label=" ">
          <el-row :gutter="20">
            <el-col :span="8"><el-button type="success" @click="onSubmit">确认修改</el-button></el-col>
          </el-row>
        </el-form-item>
      </el-form>  
    </div>
  </div>  
</template>

<script>
import E from 'wangeditor'
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    checked: false
  },

  data() {
    return {
      form : {
        name: '',
        textarea: ''
      },
      editor: null,
      editorContent: ''
    }
  },

  created() {
    
  },

  mounted() {
    /**富文本编辑器 */
    this.editor = new E(this.$refs.editorElem)
    
    /**赋值 */
    this.editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }

    /**配置 */
    this.editor.customConfig.menus = [// 菜单配置
      'head',  // 标题
      'bold',  // 粗体
      'fontSize',  // 字号
      'fontName',  // 字体
      'italic',  // 斜体
      'underline',  // 下划线
      'strikeThrough',  // 删除线
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      'link',  // 插入链接
      'list',  // 列表
      'quote',  // 引用
      'emoticon',  // 表情
      'image',  // 插入图片
      'table',  // 表格
      'code',  // 插入代码
    ]

    /**创建 */
    this.editor.create()
  },

  methods: {
    onSubmit() {

    }
  }

}
</script>

<style lang="stylus" scoped>
.info-form {
  width 850px
  margin 0 auto
  text-align left 
  .code {
    display flex
    align-items center
    justify-content center
    border 1px solid #DCDFE6
    border-radius 4px
    height 40px
    padding 0 10px
    max-width 100px
  }
  a {
    font-size 13px
    color #f60
  }
}

>>>.el-checkbox__label {
  font-size 13px
}
</style>