<template>
  <div class="task-table release">
    <div class="release-task-tips">
      <div class="tips-text">
        <p>1、欢迎选择【某某客网】平台发布任务！ 平台最常见问题与解答（新手必看）</p>
        <p>2、近期根据淘宝系统调整，请商家控制关键词转化在10%以下，避免稽查风险；</p>
        <p>3、买家付款后请在24小时内完成发货，如果超时平台会自动设为发货状态（立返单会返款给买家），没有审核带来的后果由商家您承担。</p>
      </div>
    </div>

    <div class="title">
      填 写 任 务 基 本 信 息
    </div>  
    <!---->
    <el-form ref="form" :rules="rules" :model="form" label-width="auto">
      <el-form-item label="从任务模板中创建：" prop="">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col :span="14" class="form-tips-blue">
            <div>你可以选择已存在的任务模板，一键快速创建任务。</div>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="任务区：" prop="">
        <el-row :gutter="20">
          <el-col :span="4">
            <el-select style="width: 100%" v-model="form.taskTypeValue" placeholder="请选择活动区域">
              <el-option v-for="(type, index) in form.taskType" :key="index" :label="type.title" :value="type.id"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="订单类型：" prop="">
        <el-row :gutter="20">
          <el-col :span="10">
            <el-radio-group v-model="form.radio">
              <el-radio class="radio-margin--right" :label="1" border size="medium">备选项1</el-radio>
              <el-radio class="radio-margin--right" :label="2" border size="medium">备选项2</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="选择店铺掌柜名称：" prop="">
        <el-row :gutter="23">
          <el-col :span="23">
            <el-radio-group v-model="form.radio1">
              <el-radio v-for="item in 20" class="radio-bottom" :key="item" :label="item" size="medium">备radio-bottom</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form-item>  

      <el-form-item label="商品链接地址：">
        <el-row :gutter="23">
          <el-col :span="12">
            <el-input></el-input>
          </el-col>
          <el-col :span="11" class="form-tips-blue">
            <div>安全起见请尽量发布不同商品地址</div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="商品标题：">
        <el-row :gutter="23">
          <el-col :span="12">
            <el-input></el-input>
          </el-col>
          <el-col :span="11" class="form-tips-blue">
            <div>方便接手人准确找到您商品<span class="text-red">（输入链接地址可自动获取）</span></div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="商品主图：">
        <el-row :gutter="23">
          <el-col :span="4">
            <img class="thumb" src="http://img.alicdn.com/imgextra/i1/2528566607/O1CN01Yd2lTL1yg3JCQozB6_!!2528566607.jpg_430x430q90.jpg" alt="">
          </el-col>
          <el-col :span="17" class="form-tips-blue">
            <div>输入链接地址可自动获取，如果获取失败或手机端和pc端主图不一致可以 <span class="text-red">点我上传</span></div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="退款方式：" prop="">
        <el-row :gutter="20">
          <el-col :span="10">
            <el-radio-group v-model="form.radio">
              <el-radio class="radio-margin--right" :label="1" border size="medium">备选项1</el-radio>
              <el-radio class="radio-margin--right" :label="2" border size="medium">备选项2</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="实际下单价格：" prop="">
        <el-row :gutter="23">
          <el-col :span="3" class="flex">
           <el-input></el-input><span>元</span>
          </el-col>
          <el-col :span="5" class="flex">
           <span class="text-bold">每单拍</span><el-input></el-input><span>元</span>
          </el-col>
          <el-col :span="15" class="form-tips-blue">
            <div> <span class="text-red text-bold">总计 666 元 </span> <span class="text-red">您账户余额：9759.45 元</span> 下单价格 = 商品价格(或改价后价格) + 邮费的总价</div>
          </el-col>
        </el-row>
      </el-form-item>
      
      <el-form-item label="搜索页面展示的价格：	" prop="">
        <el-row :gutter="23">
          <el-col :span="3" class="flex">
           <el-input></el-input><span>元</span>
          </el-col>
          <el-col :span="15" class="form-tips-blue">
            <div>如果与下单价格不同请自行修改（请务必亲自在手机端搜索下，确认展示的价格）</div>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="平台服务费：	" prop="">
        <el-row :gutter="23">
          <el-col :span="3" class="flex">
           <el-input disabled :value="3.5"></el-input><span>元</span>
          </el-col>
          <el-col :span="15" class="form-tips-blue">
            <div>如果与下单价格不同请自行修改（请务必亲自在手机端搜索下，确认展示的价格）</div>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="基本发布点：	" prop="">
        <el-row :gutter="23">
          <el-col :span="3" class="flex">
           <el-input disabled :value="13.00"></el-input><span>点</span>
          </el-col>
          <el-col :span="15" class="form-tips-blue">
            <div class="text-red">您账户发布点：3502.28 点 </div>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="指定购买规格或属性：	" prop="">
        <el-row :gutter="23">
          <el-col :span="3" class="flex">
           <el-input disabled :value="13.00"></el-input>
          </el-col>
          <el-col :span="15" class="form-tips-blue">
            <div class="text-red">例如要求买某颜色或某尺寸等</div>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="搜索页面展示的已付款人数： " prop="">
        <el-row :gutter="23">
          <el-col :span="3" class="flex">
           <el-input disabled :value="13.00"></el-input>
          </el-col>
          <el-col :span="15" class="form-tips-blue">
            <div class="text-red">例如要求买某颜色或某尺寸等</div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="是否需要改价： " prop="">
        <el-row :gutter="23">
          <el-col :span="1" class="flex">
           <el-checkbox></el-checkbox>
          </el-col>
          <el-col :span="22" class="form-tips-blue">
            <div class=""> 如果买家拍下你商品后还需要修改宝贝价格，请勾上。（例如你改价后的商品价格+邮费=100元，商品下单价格必须也是100元）</div>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="任务大厅竞价排名追加发布点：	" prop="">
        <el-row :gutter="23">
          <el-col :span="3" class="flex">
           <el-input></el-input><span>点</span>
          </el-col>
          <el-col :span="15" class="form-tips-blue">
            <div>追加发布点数越多，你的任务在大厅排名越靠前，越快被人接手，效率越高（可选项）</div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="任务类型：" prop="">
        <el-row :gutter="23">
          <el-col :span="23">
            <el-radio-group v-model="form.taskType">
              <el-radio :label="1" size="medium">实物</el-radio>
              <el-radio :label="2" size="medium">虚拟</el-radio>
              <el-radio :label="3" size="medium">套餐</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form-item>  

      <el-form-item label="收货好评时间：" prop="">
        <el-row :gutter="23">
          <el-col :span="14">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="快递签收方式：" class="red-title" prop="">
        <el-row :gutter="23">
          <el-col :span="23">
            <el-radio-group v-model="form.taskType">
              <el-radio :label="1" class="radio-margin--right" border size="medium">空包自动签收</el-radio>
              <el-radio :label="2" class="radio-margin--right" border size="medium">买家本人签收</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="指定好评内容：" prop="">
        <el-row :gutter="23">
          <el-col :span="10">
            <el-input type="textarea" :rows="6"></el-input>
          </el-col>
          <el-col :span="13">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <div class="form-tips-blue">设置买家好评时填写的指定内容,留空默认会提示买家自由发挥写30字以上评语。</div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="平台留言提醒：" prop="">
        <el-row :gutter="23">
          <el-col :span="10">
            <el-input type="textarea" :rows="6"></el-input>
          </el-col>
          <el-col :span="13">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <div class="form-tips-blue">您可以在此给买家留言提醒，比如简单地描述下接手任务的要求或条件等。</div>
          </el-col>
        </el-row>
      </el-form-item>

      <!--step 2-->
      <div class="title form-inline-title">
        第二步：设置下单方式及关键词
      </div>

      <el-form-item label="进店下单方式：" class="red-orange" prop="">
        <el-row :gutter="23">
          <el-col :span="23">
            <el-radio-group v-model="form.taskType">
              <el-radio :label="1">空包自动签收</el-radio>
              <el-radio :label="2">买家本人签收</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item class="item-block" prop="">
        <el-row :gutter="23">
          <el-col :span="10">
            开始发布时间：
            <el-date-picker
              v-model="form.value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-col>
          <el-col :span="10">
            过期下架时间：
            <el-date-picker
              v-model="form.value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-col>
        </el-row>

        <el-row :gutter="23">
          <el-col :span="5" class="flex">
            <span>发布：</span>
            <el-input></el-input>
            <span>条任务，</span>
          </el-col>
          <el-col :span="7" class="flex">
            <span>间隔：</span>
            <el-input></el-input>
            <span>分钟自动发布下一条</span>
          </el-col>
        </el-row>

      </el-form-item>
      <!--step 2 end-->

      <!--step 3-->
      <div class="title form-inline-title">
        第三步：选择任务要求 <span class="text-red">以下增值功能需额外支付发布点，请根据需求选择！</span>
      </div>

      <el-form-item label="货比三家：" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/hbsj.png" alt="">货比三家：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>
          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col :span="10" class="form-tips-blue">
            <div>建议配合【搜索宝贝进店】方式使用</div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/viewproduct.png" alt="">店内浏览商品：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>
          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/pageStay.png" alt="">购买前页面停留：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>
          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/viewPage.png" alt="">完整浏览到底部：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>
          <el-col :span="10" class="form-tips-blue">
            <div>要求买家上传任务商品的完整浏览截图</div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/find_answer.png" alt="">浏览找问题答案：
        </div>
        <el-row :gutter="23">
          <el-col :span="18">
            <div><el-checkbox></el-checkbox><span class="form-tips-blue"> 要求买家浏览宝贝详情页时找到设置的问题答案</span></div>
            <div class="flex" style="margin-bottom: 20px"><span>问题：</span><el-input></el-input></div>
            <div class="flex"><span>提示：</span><el-input></el-input><span>答案：</span><el-input></el-input></div>
          </el-col>
          
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/shaiTu.png" alt="">好评晒图：
        </div>
        <el-row :gutter="23">
          <el-col :span="18">
            <div><el-checkbox></el-checkbox><span class="form-tips-blue"> 要求买家好评时按照发布方提供的图片晒图，每多晒一张图需多支付<font class="text-red">0.8</font>个发布点奖励给买家</span></div>
            <div class="flex" style="margin-bottom: 20px">
              <span>要求晒图的图片1：</span>
              <el-input></el-input>
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                  style="margin-left: 15px">
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </div>
          </el-col>
          
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/addHaoping.png" alt="">追加好评：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>

          <el-col :span="12" class="flex">
            <span>追评的内容：</span>
            <el-input></el-input>
          </el-col>
          
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/afterSales.png" alt="">好评后追求订单：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>
          <el-col :span="18" class="form-tips-blue">
            <div>要求买家好评后删除该订单，从此终止售后和差评，需额外支付<font class="text-red">1</font>个发布点奖励给买家</div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/ShouCang.gif" alt="">店铺和宝贝双收藏：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>
          <el-col :span="10" class="form-tips-blue">
            <div>要求买家收藏您店铺和宝贝</div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/delay_buy.png" alt="">加购物车隔天购买：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>

          <el-col :span="12" class="form-tips-blue">
            要求买家先收藏宝贝和加入购物车，间隔N天后再正式购买
          </el-col>
          
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/ask.png" alt="">问大家：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="18" class="flex">
            <span>给大家提问的问题内容：</span>
            <el-input></el-input>
            <span> (可留空，让买家自由发挥)</span>
          </el-col>

          <el-col :span="18" class="form-tips-blue">
            要求买家拍下宝贝前先提问问大家再拍下，需额外支付<font class="text-red">2</font>个发布点奖励给买家
          </el-col>
          
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/share.png" alt="">分享宝贝：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="18">
            要求买家分享您的宝贝，需额外支付<font class="text-red">1</font>个发布点奖励给买家
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/credit_payment.png" alt="">可花呗或信用卡支付：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="22" class="flex">
            <span>交易完成后从买家平台账户扣除</span>
            <el-input></el-input>
            <span>元手续费返还给卖家  一般不建议扣买家手续费，除非是针对特殊需求用户</span>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/huabei.png" alt="">要求买号开通花呗：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="22">
             要求接手买号必须是开通花呗才可以接手此任务，需额外支付<font class="text-red">0.5</font>个发布点奖励给买家
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/score_1.gif" alt="">买号信誉等级要求：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>

          <el-col :span="10">
            只有所选级别买号(或更高)才可以接手你的任务
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/huabei.png" alt="">淘气值：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>

          <el-col :span="10">
            只有所选淘气值(或更高)才可以接手你的任务
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/WangLiao.gif" alt="">拍前需要旺旺聊天：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="18">
            要求买家先在旺旺(手机订单则要求点击客服)聊几句再下单
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/ShiMing.gif" alt="">实名认证买号：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="18">
            要求接手买号必须是通过支付宝实名认证才可以接手此任务
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/ShangBao.gif" alt="">商家保障服务：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="18">
            要求接手人缴纳保证金加入平台商保服务的用户才可以接手此任务
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/ShenHe.gif" alt="">审核买号近期评价截图：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="18">
            买家接任务后，需上传买号近期交易评价截图(可查看周月交易量/好评率等)，您审核后才可以下单
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="限制用户接任务数量：" prop="">
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="8">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>

          <el-col :span="12">
            要求同一用户购买我店铺的宝贝不能超过指定数量
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="禁止某地区接手：" prop="">
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>

          <el-col :span="14">
            例如禁止北京和上海用户接手，可避免重复用户购买，需额外支付1个发布点
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="买家性别：" prop="">
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>

          <el-col :span="14">
            指定男或女买号接手您的任务
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="买家年龄：" prop="">
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>

          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>

          <el-col :span="14">
            指定年龄段买号接手您的任务
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="基础过滤" prop="">
        <el-row :gutter="23">
          <el-col :span="23">
            <div>
              <el-checkbox></el-checkbox> <span class="form-tips-blue" style="margin-left: 15px">接手人经验积分不低于： </span>
              <el-radio-group v-model="form.taskType" class="form-tips-blue">
                <el-radio :label="1">空包自动签收</el-radio>
                <el-radio :label="2">买家本人签收</el-radio>
              </el-radio-group>
            </div>
            <div>
              <el-checkbox></el-checkbox> <span class="form-tips-blue" style="margin-left: 15px">接手人信用满意度不低于： </span>
              <el-radio-group v-model="form.taskType" class="form-tips-blue">
                <el-radio :label="1">空包自动签收</el-radio>
                <el-radio :label="2">买家本人签收</el-radio>
              </el-radio-group>
            </div>

            <div>
              <el-checkbox></el-checkbox> <span class="form-tips-blue" style="margin-left: 15px">接手人被拉黑名单数不大于： </span>
              <el-radio-group v-model="form.taskType" class="form-tips-blue">
                <el-radio :label="1">空包自动签收</el-radio>
                <el-radio :label="2">买家本人签收</el-radio>
              </el-radio-group>
            </div>
            <div>您可以根据自己需求设置接手条件，系统将自动为您过滤掉不符合条件的接手人。</div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="" prop="">
        <div slot="label"  style="color: #FF00FF">将本次任务保存为模板：</div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>
          
          <el-col :span="18" class="flex">
            <span>模板名称</span>
            <el-input></el-input>
            <span class="text-orange">发布任务同时将该任务保存到任务模板中，方便下次发同样任务</span>
          </el-col>

        </el-row>
      </el-form-item>

      <el-form-item label="" prop="">
        <el-row :gutter="23">
          <el-col :span="6">
            <el-button type="primary" style="width: 100%">确认提交</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import taskConfig from "@common/js/getTaskConfig"
export default {

  props: {

  },
  data() {
    return {
      form: {
        name: 1,
        taskType: [],
        taskTypeValue: '',
        radio: '1',
        radio1: 1,
        taskTypes: 1,
        value1: '',
        
      },
      rules: {}
    }
  },

  async created() {
    //console.log(taskConfig)
    await this.setTaskType()
    await this.setTaskConfig(this.form['taskTypeValue'])
  },

  methods: {
    async setTaskType() {
      let res = await taskConfig.getTaskType(this)
      if(!res.data.code) {
        this.form['taskType'] = res.data.shopSiteList
        this.form['taskTypeValue'] = res.data.shopSiteList[0].id
      }
    },

    async setTaskConfig(type) {
      let res = await taskConfig.getTaskConfig(this, type)
      console.log(res)
      /* if(!res.data.code) {
        this.form['taskType'] = res.data.shopSiteList
        this.form['taskTypeValue'] = res.data.shopSiteList[0].id
      } */
    }
  }

}
</script>

<style lang="stylus" scoped>
.task-table {
  text-align left
}

.release-task-tips {
  background: url('http://demo2.hsk.cc/style/images/loudspeaker.gif') 20px center no-repeat;
  padding 10px 0
  .tips-text {
    line-height 25px
    font-size 15px
    padding-left 105px
    color #106899
  }
}

.release {
  .title {
    padding 5px 0
    text-align center
    background url('http://demo2.hsk.cc/style/images/w_b.gif')
    background-size 100% 100%
    height 52px !important
    line-height 42px !important
    color #F60
    font-weight bold
    font-size 18px
  }
  .radio-margin--right {
    margin-right 15px
  }
  .radio-bottom {
    margin-bottom 20px
    color #106899
  }
  .thumb {
    width 100%
    height 100%
  }
  .flex {
    .el-input {
      flex 1
    }
    span {
      color #106899
      padding 0 5px
    }
  }

  .red-title {
    >>>.el-form-item__label {
      color #f00 !important
    }
  }

  .red-orange {
    >>>.el-form-item__label {
      color #FF6600 !important
    }
  }

  .form-inline-title {
    text-align left
    padding-left 20px
    color #0076FC
    position relative
    margin-bottom 20px
    &:after {
      content ''
      position absolute
      top 17px 
      left 0px
      width 5px
      height 20px
      background-color #006ef6
    }
    span {
      padding-left 60px 
    }
  }

  .item-block {
    padding-left 0 !important
    border 1px #bcdfff solid
    padding 20px 0
    background-color #f4fbff
    .el-row {
      + .el-row {
        margin-top 20px
      }
    }
  }

  .label-icon {
    padding-right 50px
  }
}

>>>.el-input {
  &.is-disabled {
    .el-input__inner {
      color #555
    }
  }
}

</style>