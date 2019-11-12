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
            <el-select style="width: 100%" v-model="form.templateActive"  placeholder="请选择任务模板">
              <el-option v-for="(temp, index) in form.template" :key="index" :label="temp.name" :value="temp.id"></el-option>
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
            <el-radio-group v-model="form.orderActive">
              <el-radio class="radio-margin--right" :label="1" border size="medium">手机单</el-radio>
              <el-radio class="radio-margin--right" :label="2" border size="medium">电脑单</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="选择店铺掌柜名称：" prop="">
        <el-row :gutter="23">
          <el-col :span="23">
            <el-radio-group v-model="form.shopListActive">
              <el-radio class="text-bold radio-bottom" v-for="(item, index) in form.shopList" :key="index" :label="item" size="medium">{{item.shopName}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form-item>  

      <el-form-item label="商品链接地址：" prop="link">
        <el-row :gutter="23">
          <el-col :span="12">
            <el-input v-model="form.link"></el-input>
          </el-col>
          <el-col :span="11" class="form-tips-blue">
            <div>安全起见请尽量发布不同商品地址</div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="商品标题：" prop="title">
        <el-row :gutter="23">
          <el-col :span="12">
            <el-input v-model="form.title"></el-input>
          </el-col>
          <el-col :span="11" class="form-tips-blue">
            <div>方便接手人准确找到您商品<span class="text-red">（输入链接地址可自动获取）</span></div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="商品主图：">
        <el-row :gutter="23">
          <el-col :span="4">
            <img class="thumb" :src="form.thumb" alt="">
          </el-col>
          <el-col :span="13" class="form-tips-blue">
            <div>输入链接地址可自动获取，如果获取失败或手机端和pc端主图不一致可以
            </div>
          </el-col>
          <el-col :span="4">
            <el-upload
              class="upload-demo"
              action="string"
              :http-request="upload"
              :show-file-list="false"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="退款方式：" prop="">
        <el-row :gutter="20">
          <el-col :span="16">
            <el-radio-group v-model="form.refundActive" class="custom-radio-group">
              <el-radio class="radio-margin--right margin-bottom" style="marginLeft: 0" :label="0" border size="medium">平台担保押款（收货后返本佣）</el-radio>
              <el-radio class="radio-margin--right margin-bottom" style="marginLeft: 0" :label="1" border size="medium">平台担保押款（下单后立返本金）</el-radio>
              <el-radio class="radio-margin--right margin-bottom" style="marginLeft: 0" :label="2" border size="medium">商家自行返款（收货后返本佣）</el-radio>
              <el-radio class="radio-margin--right margin-bottom" style="marginLeft: 0" :label="3" border size="medium">商家自行返款（下单后立返本金）</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="实际下单价格：" prop="price">
        <el-row :gutter="23">
          <el-col :span="3" class="flex">
           <el-input v-model="form.price"></el-input><span>元</span>
          </el-col>
          <el-col :span="5" class="flex">
           <span class="text-bold">每单拍</span><el-input v-model="form.quantity"></el-input><span>件</span>
          </el-col>
          <el-col :span="15" class="form-tips-blue">
            <div> <span class="text-red text-bold">总计 {{form.countPrice ? form.countPrice : 0}} 元 </span> <span class="text-red">您账户余额：9759.45 元</span> 下单价格 = 商品价格(或改价后价格) + 邮费的总价</div>
          </el-col>
        </el-row>
      </el-form-item>
      
      <el-form-item label="搜索页面展示的价格：	" prop="">
        <el-row :gutter="23">
          <el-col :span="3" class="flex">
           <el-input  v-model="form.countPrice"></el-input><span>元</span>
          </el-col>
          <el-col :span="15" class="form-tips-blue">
            <div>如果与下单价格不同请自行修改（请务必亲自在手机端搜索下，确认展示的价格）</div>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="平台服务费：	" prop="">
        <el-row :gutter="23">
          <el-col :span="3" class="flex">
           <el-input disabled :value="countAmountFee"></el-input><span>元</span>
          </el-col>
          <el-col :span="15" class="form-tips-blue">
            <div>如果与下单价格不同请自行修改（请务必亲自在手机端搜索下，确认展示的价格）</div>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="基本发布点：	" prop="">
        <el-row :gutter="23">
          <el-col :span="3" class="flex">
           <el-input disabled :value="countAmountPoint"></el-input><span>点</span>
          </el-col>
          <el-col :span="15" class="form-tips-blue">
            <div class="text-red">您账户发布点：3502.28 点 </div>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="指定购买规格或属性：	" prop="">
        <el-row :gutter="23">
          <el-col :span="3" class="flex">
           <el-input v-model="form.assign"></el-input>
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
           <el-checkbox v-model="form.isModPrice"></el-checkbox>
          </el-col>
          <el-col :span="22" class="form-tips-blue">
            <div class=""> 如果买家拍下你商品后还需要修改宝贝价格，请勾上。（例如你改价后的商品价格+邮费=100元，商品下单价格必须也是100元）</div>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="任务大厅竞价排名追加发布点：	" prop="">
        <el-row :gutter="23">
          <el-col :span="3" class="flex">
           <el-input v-model="form.addPoint"></el-input><span>点</span>
          </el-col>
          <el-col :span="15" class="form-tips-blue">
            <div>追加发布点数越多，你的任务在大厅排名越靠前，越快被人接手，效率越高（可选项）</div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="任务类型：" prop="">
        <el-row :gutter="23">
          <el-col :span="23">
            <el-radio-group v-model="form.taskActive" class="inside-radio">
              <el-radio :label="1" size="medium"><span>实物商品</span><img src="http://demo2.hsk.cc/style/images/realobject.gif" alt="" srcset=""></el-radio>
              <el-radio :label="2" size="medium"><span>虚拟商品</span><img src="http://demo2.hsk.cc/style/images/virtual.gif" alt="" srcset=""></el-radio>
              <el-radio :label="3" size="medium"><span>套餐链接</span><img src="http://demo2.hsk.cc/style/images/dapei.gif" alt="" srcset=""></el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form-item>  

      <el-form-item label="收货好评时间：" prop="">
        <el-row :gutter="23">
          <el-col :span="14">
            <el-select style="width: 100%" v-model="form.haopingTimeActive" placeholder="请选择活动区域">
              <el-option v-for="(time, index) in form.haopingTime" :key="index" :label="`收货后${Number(index) + 1}天后好评(所需发布点=基本发布点 x 1)`" :value="index + 1"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-form-item> 

      <el-form-item label="快递签收方式：" class="red-title" prop="">
        <el-row :gutter="23">
          <el-col :span="23">
            <el-radio-group v-model="form.signActive" class="custom-radio-group">
              <el-radio :label="1" class="radio-margin--right" border size="medium">空包自动签收</el-radio>
              <el-radio :label="2" class="radio-margin--right" border size="medium">买家本人签收</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="指定好评内容：" prop="">
        <el-row :gutter="23">
          <el-col :span="10">
            <el-input type="textarea" v-model="form.haopingContent" :rows="6"></el-input>
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
            <el-input type="textarea" v-model="form.messageRemind" :rows="6"></el-input>
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
          <el-col :span="20">
            <el-radio-group v-model="form.searchActive">
              <el-radio class="margin-bottom" style="marginLeft: 0" :label="1" border>搜索宝贝进店</el-radio>
              <el-radio class="margin-bottom" style="marginLeft: 0" :label="2" border>搜索店铺进店</el-radio>
              <el-radio class="margin-bottom" style="marginLeft: 0" :label="3" border>直通车下单</el-radio>
              <el-radio class="margin-bottom" style="marginLeft: 0" :label="4" border>指定网络来路</el-radio>
              <el-radio class="margin-bottom" style="marginLeft: 0" :label="5" border>直接打开下单</el-radio>
              <el-radio class="margin-bottom" style="marginLeft: 0" :label="6" border>淘口令下单</el-radio>
              <el-radio class="margin-bottom" style="marginLeft: 0" :label="7" border>扫二维码下单</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form-item>

      <div class="item-block">
        <div class="flex flex-start">
          <el-form-item class="flex" prop="orderInfo[0].key_word">
            <span class="item-title text-bold">搜索宝贝关键词1：</span>
            <el-input v-model="form.orderInfo[0].key_word"></el-input> 
          </el-form-item> 
          <el-form-item class="flex" prop="orderInfo[0].key_word_tips">
            <span class="item-title">商品位置提示：</span>
            <el-input v-model="form.orderInfo[0].key_word_tips"></el-input>
          </el-form-item>
          <div class="add">
            +增加一个 
          </div>    
        </div>

        <div class="flex" style="marginLeft: 19px">
          <el-form-item class="flex date" prop="orderInfo[0].release_time">
            <span>开始发布时间：</span>
            <el-date-picker
              v-model="form.orderInfo[0].release_time"
              type="datetime"
              placeholder="选择发布日期">
            </el-date-picker>
          </el-form-item> 
          <el-form-item class="flex date" prop="orderInfo[0].end_time">
            <span>过期下架时间：</span>
            <el-date-picker
              v-model="form.orderInfo[0].end_time"
              type="datetime"
              placeholder="选择下架日期">
            </el-date-picker>
          </el-form-item>    
        </div>

        <div class="flex flex-start task-count" style="marginLeft: 135px">
          <el-form-item class="flex" prop="orderInfo[0].task_num">
            <span>发布：</span>
            <el-input type="number" v-model="form.orderInfo[0].task_num" style="width: 100px"></el-input>
            <span>条任务，</span>
          </el-form-item> 
          <el-form-item class="flex" prop="orderInfo[0].next_time" style="paddingLeft: 0">
            <span>间隔：</span>
            <el-input type="number" v-model="form.orderInfo[0].next_time" style="width: 100px"></el-input>
            <span>分钟自动发布下一条</span>
          </el-form-item>    
        </div>
        <div class="flex flex-start">
          <el-form-item class="flex upload" prop="orderInfo[0].key_word">
            <span class="text-bold">宝贝链接位置截图：</span>
            <el-input v-model="form.orderInfo[0].thumb" style="width: 350px"></el-input>
            <el-upload
              class="upload-demo"
              action="string"
              :http-request="uploadCapture"
              :show-file-list="false"
              style="margin-left: 15px">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>   
        </div>



      </div>  


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
            <el-checkbox v-model="form.compareNumCheck"></el-checkbox>
          </el-col>
          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.compareActive" placeholder="请选择对比数量">
              <el-option v-for="(item, index) in form.compare" :key="index" :label="`货比${item.key}家`" :value="item.key"></el-option>
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
            <el-checkbox v-model="form.viewCheck"></el-checkbox>
          </el-col>
          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.viewActive" placeholder="请选择额外浏览商品">
              <el-option v-for="(item, index) in form.view" :key="index" :label="item.value" :value="item.key"></el-option>
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
            <el-checkbox v-model="form.stopRadio"></el-checkbox>
          </el-col>
          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.stopActive" placeholder="请选择活动区域">
              <el-option v-for="(item, index) in form.stop" :key="index" :label="item.value" :value="item.key"></el-option>
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
            <el-checkbox v-model="form.isCompleteView"></el-checkbox>
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
            <div><el-checkbox v-model="form.isQuestion"></el-checkbox><span class="form-tips-blue"> 要求买家浏览宝贝详情页时找到设置的问题答案</span></div>
            <div class="flex" style="margin-bottom: 20px"><span>问题：</span><el-input v-model="form.question"></el-input></div>
            <div class="flex"><span>提示：</span><el-input  v-model="form.tips"></el-input><span>答案：</span><el-input  v-model="form.answer"></el-input></div>
          </el-col>
          
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/shaiTu.png" alt="">好评晒图：
        </div>
        <el-row :gutter="23">
          <el-col :span="18">
            <div><el-checkbox v-model="form.isShaitu"></el-checkbox><span class="form-tips-blue"> 要求买家好评时按照发布方提供的图片晒图，每多晒一张图需多支付<font class="text-red">0.8</font>个发布点奖励给买家</span></div>
            <div v-if="!showMoreShaitu">
              <div class="flex" style="margin-bottom: 20px">
                <span>要求晒图的图片1：</span>
                <el-input v-model="form.shaituPic[0]"></el-input>
                <el-upload
                  class="upload-demo"
                  action="string"
                  :http-request="uploadSharePic"
                  :show-file-list="false"
                  style="margin-left: 15px">
                  <el-button size="small" type="primary" @click="setIndex(0)">点击上传</el-button>
                </el-upload>
                <div class="text-green" style="marginLeft: 10px" @click="addShaitu">+增加</div>
              </div>
            </div>

            <div v-else>
              <div v-for="(item, index) in form.shaituPic" :key="index" class="flex" style="margin-bottom: 20px">
                <span>要求晒图的图片{{index + 1}}：</span>
                <el-input v-model="form.shaituPic[index]"></el-input>
                <el-upload
                  class="upload-demo"
                  action="string"
                  :http-request="uploadSharePic"
                  :show-file-list="false"
                  style="margin-left: 15px">
                  <el-button size="small" type="primary" @click="setIndex(index)">点击上传</el-button>
                </el-upload>
                <div class="text-green" style="marginLeft: 10px" v-if="index == 0" @click="addShaitu">+增加</div>
              </div>
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
            <el-checkbox v-model="form.isAddHaoping"></el-checkbox>
          </el-col>

          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.addHaopingActive" placeholder="请选择追加好评时间">
              <el-option v-for="(item, index) in form.addHaoping" :key="index" :label="`${item.value}(${item.key}个发布点)`" :value="item.index"></el-option>
            </el-select>
          </el-col>

          <el-col :span="12" class="flex">
            <span>追评的内容：</span>
            <el-input v-model="form.addHaopingContent"></el-input>
          </el-col>
          
        </el-row>
      </el-form-item>

      <el-form-item label="" class="red-title" prop="">
        <div slot="label" class="flex">
          <img class="label-icon" src="http://demo2.hsk.cc/style/images/afterSales.png" alt="">好评后删除订单：
        </div>
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox v-model="form.isDelete"></el-checkbox>
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
            <el-checkbox v-model="form.isCollect"></el-checkbox>
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
            <el-checkbox v-model="form.isShopCart"></el-checkbox>
          </el-col>

          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.shopCartActive" placeholder="请选择活动区域">
              <el-option v-for="(item, index) in form.shopCart" :key="index" :label="`${item.value}(${item.key}个发布点)`" :value="item.index"></el-option>
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
            <el-checkbox v-model="form.isAskEveryone"></el-checkbox>
          </el-col>

          <el-col :span="18" class="flex">
            <span>给大家提问的问题内容：</span>
            <el-input v-model="form.askEveryoneContent"></el-input>
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
            <el-checkbox v-model="form.isShare"></el-checkbox>
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
            <el-checkbox v-model="form.creditPayment"></el-checkbox>
          </el-col>

          <el-col :span="22" class="flex">
            <span>交易完成后从买家平台账户扣除</span>
            <el-input v-model="form.creditPoundage"></el-input>
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
            <el-checkbox v-model="form.isHuabei"></el-checkbox>
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
            <el-checkbox v-model="form.xinyuCheck"></el-checkbox>
          </el-col>

          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.xinyuActive" placeholder="请选择活动区域">
              <el-option v-for="(item, index) in form.xinyu" :key="index" :label="`${item.value}(${item.key}个发布点)`" :value="item.index"></el-option>
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
            <el-checkbox v-model="form.taoqiCheck"></el-checkbox>
          </el-col>

          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.taoqiActive" placeholder="请选择淘气值">
              <el-option v-for="(item, index) in form.taoqi" :key="index" :label="`${item.value}(${item.key}个发布点)`" :value="item.index"></el-option>
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
            <el-checkbox v-model="form.isChat"></el-checkbox>
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
            <el-checkbox v-model="form.isRealname"></el-checkbox>
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
            <el-checkbox v-model="form.isShangbao"></el-checkbox>
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
            <el-checkbox v-model="form.isVerify"></el-checkbox>
          </el-col>

          <el-col :span="18">
            买家接任务后，需上传买号近期交易评价截图(可查看周月交易量/好评率等)，您审核后才可以下单
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="限制用户接任务数量：" prop="">
        <el-row :gutter="23">
          <el-col :span="1">
            <el-checkbox v-model="form.limitMaihaoCheck"></el-checkbox>
          </el-col>

          <el-col :span="8">
            <el-select style="width: 100%" v-model="form.limitMaihaoActive" placeholder="请选择活动区域">
              <el-option v-for="(item, index) in form.limitMaihao" :key="index" :label="`${item.value}(${item.key}个发布点)`" :value="item.index"></el-option>
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

          <el-col :span="7">
            <el-cascader
              size="large"
              :options="options"
              v-model="selectedOptions"
              :props="props"
              @change="selectAddress"
              >
            </el-cascader>

          </el-col>

          <el-col :span="14">
            例如禁止北京和上海用户接手，可避免重复用户购买，需额外支付1个发布点
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="买家性别：" prop="">
        <el-row :gutter="23">
          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.sexActive" placeholder="请选择买家性别">
              <el-option v-for="(item, index) in form.sex" :label="item.value" :value="item.key" :key="index"></el-option>
            </el-select>
          </el-col>

          <el-col :span="14">
            指定男或女买号接手您的任务
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="买家年龄：" prop="">
        <el-row :gutter="23">
          <el-col :span="5">
            <el-select style="width: 100%" v-model="form.ageActive" placeholder="请选择买家性别">
              <el-option v-for="(item, index) in form.age" :label="item.value" :value="item.key" :key="index"></el-option>
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
              <el-radio-group v-model="form.jifen" class="form-tips-blue">
                <el-radio :label="50">50</el-radio>
                <el-radio :label="200">200</el-radio>
                <el-radio :label="400">400</el-radio>
              </el-radio-group>
            </div>
            <div>
              <el-checkbox></el-checkbox> <span class="form-tips-blue" style="margin-left: 15px">接手人信用满意度不低于： </span>
              <el-radio-group v-model="form.xinyong" class="form-tips-blue">
                <el-radio :label="100">100%</el-radio>
                <el-radio :label="95">95%</el-radio>
                <el-radio :label="90">90%</el-radio>
              </el-radio-group>
            </div>

            <div>
              <el-checkbox></el-checkbox> <span class="form-tips-blue" style="margin-left: 15px">接手人被拉黑名单数不大于： </span>
              <el-radio-group v-model="form.heimingdan" class="form-tips-blue">
                <el-radio :label="0">0</el-radio>
                <el-radio :label="3">3</el-radio>
                <el-radio :label="10">10</el-radio>
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
            <el-checkbox v-model="form.isAddTemplate"></el-checkbox>
          </el-col>
          
          <el-col :span="18" class="flex">
            <span>模板名称</span>
            <el-input v-model="form.templateName"></el-input>
            <span class="text-orange">发布任务同时将该任务保存到任务模板中，方便下次发同样任务</span>
          </el-col>

        </el-row>
      </el-form-item>

      <el-form-item label="" prop="">
        <el-row :gutter="23">
          <el-col :span="6">
            <el-button type="primary" style="width: 100%" @click.native="onSubmitForm">确认提交</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <transition name="el-fade-in-linear">
      <div class="count-section transition-box" v-show="showCount">
        <div class="count-content" v-if="userInfo">
          <el-row :gutter="24">
            <el-col :span="12" class="margin-bottom">
              账户余额：<font>{{userInfo.amount}}</font> 元 <a href="http://">[充值]</a>
            </el-col>
            <el-col :span="12" class="margin-bottom">
              本次任务所需金额：<font>{{form.price * form.quantity + countAmountFee ? (Number(form.price * form.quantity) + Number(countAmountFee)).toFixed(2) : 0.00}}</font> 元
            </el-col>
            <el-col :span="12">
              账户发布点：<font>{{userInfo.point}}</font> 元 <a href="http://">[购买]</a>
            </el-col>
            <el-col :span="12">
              本次任务所需发布点：<font>{{countPoint ? countPoint : '0.00'}}</font> 点
            </el-col>
          </el-row>  
        </div>
      </div>
    </transition>
    
  </div>
</template>

<script>
import taskConfig from "@common/js/getTaskConfig"
import { provinceAndCityData, CodeToText } from 'element-china-area-data'
export default {

  props: {

  },
  data() {
    return {
      userInfo: this.$cookies.get(''),
      options: provinceAndCityData,
      selectedOptions: [],
      props: { multiple: true },
      form: {
        name: 1,
        templateName: '',
        template: [], //
        taskType: [],
        taskTypeValue: '',
        shopList: [], //店铺列表
        shopListActive: 0, //店铺选中
        link: '', //商品链接地址
        title: '', //商品标题
        thumb: 'http://demo2.hsk.cc/style/images/noimg.png', //商品主图
        refundActive:0 , //退款方式
        orderActive: 1,
        assign: '', //指定规格属性
        addPoint: '', //追加发布点
        haopingTime: [], //好评时间
        haopingTimeActive: 1,
        compareNumCheck: false,
        compare: [ // 货比三家
          {value: '', key: 1},
          {value: '', key: 2},
          {value: '', key: 3}
        ], 
        compareActive: 3,
        view: [ //额外浏览
          {value: '额外浏览1个商品', key: 1},
          {value: '额外浏览2个商品', key: 2},
          {value: '额外浏览3个商品', key: 3}
        ],
        viewCheck: false,
        viewActive: 1,
        stop: [ //停留
          {value: '停留1分钟', key: 1},
          {value: '停留3分钟', key: 3},
          {value: '停留5分钟', key: 5}
        ],
        stopRadio: false,
        stopActive: 1,
        taoqiCheck: false,
        taoqi: [
          {value: '300以上' , key: 0},
          {value: '500以上' , key: 0},
          {value: '600以上' , key: 0},
          {value: '700以上' , key: 0},
          {value: '800以上' , key: 0},
          {value: '900以上' , key: 0},
          {value: '1000以上' , key: 0},
          {value: '1200以上' , key: 0},
          {value: '1500以上' , key: 0},
        ], //淘气值
        taoqiActive: 0,
        xinyuCheck: false,
        xinyu: [
          {value: '一心' , key: 0},
          {value: '二心' , key: 0},
          {value: '三心' , key: 0},
          {value: '四心' , key: 0},
          {value: '一钻' , key: 0},
          {value: '二钻' , key: 0}], //信誉等级
        xinyuActive: 0,
        limitMaihaoCheck: false,
        limitMaihao: [ //限制买号
          {value: '一天最多购买1个' , key: 0, index: 0},
          {value: '一天最多购买2个' , key: 0, index: 0},
          {value: '一天最多购买3个' , key: 0, index: 0},
          {value: '一周最多购买1个' , key: 0, index: 0},
          {value: '一周最多购买2个' , key: 0, index: 0},
          {value: '一周最多购买3个' , key: 0, index: 0},
          {value: '一月最多购买1个' , key: 0, index: 0},
          {value: '一月最多购买2个' , key: 0, index: 0},
          {value: '一月最多购买3个' , key: 0, index: 0},
        ],
        limitMaihaoActive: -1,
        shopCart: [
          {value: '延迟1天后购买' , key: 0},
          {value: '延迟2天后购买' , key: 0},
          {value: '延迟3天后购买' , key: 0},
          {value: '延迟4天后购买' , key: 0},
          {value: '延迟5天后购买' , key: 0},
        ], //购物车延购
        shopCartActive: 0,
        addHaoping: [
          {value: '2天后追加好评' , key: 0},
          {value: '3天后追加好评' , key: 0},
          {value: '4天后追加好评' , key: 0},
          {value: '5天后追加好评' , key: 0},
          {value: '6天后追加好评' , key: 0},
          {value: '7天后追加好评' , key: 0}
        ], //追加好评
        addHaopingActive: 0,
        sex: [
          {value: '不限' , key: -1},
          {value: '女' , key: 0},
          {value: '男' , key: 1}
        ], //买家性别
        sexActive: -1,
        age: [
          {value: '不限' , key: -1},
          {value: '20岁以下' , key: 0},
          {value: '21-25岁' , key: 1},
          {value: '26-32岁' , key: 2},
          {value: '33-40岁' , key: 3},
          {value: '40岁以上' , key: 4}
        ], //买家年龄
        ageActive: -1,
        radio1: 1,
        taskTypes: 1,
        templateActive: 0,
        price: '', //实际单价
        countPrice: '', //总价
        quantity: 1, //单拍数量
        amountFee: 0,  //平台服务费
        amountFeeList: [],
        amountFeePrice: [],
        amountPoint: 0, //基本发布点
        amountPointList: [],
        amountPointPrice: [],
        taskActive: 1, //任务类型
        rank: 0, //任务大厅竞价排名追加发布点
        signActive: 1,
        searchActive: 1, //进店下单方式
        orderInfo: [
          {
            key_word: '',
            key_word_tips: '',
            release_time: new Date(),
            next_time: 0,
            end_time: '', //开始发布时间
            task_num: 1,
            goodsUrl: '',
            thumb: ''
          }
        ],
        isModPrice: false, //是否需要改价
        //基础过滤
        jifen: 50,
        xinyong: 90,
        heimingdan: 3,
        haopingContent: '', //指定好评内容
        messageRemind: '', //平台留言提醒
        isCompleteView: false, //浏览到底
        isQuestion: false, //设置问题
        question: '',
        tips: '',
        answer: '',
        isShaitu: false,
        shaituPic: [''],
        isAddHaoping: false,
        addHaopingContent: '',
        isDelete: false,
        isCollect: false,
        isShopCart: false,
        isAskEveryone: false,
        askEveryoneContent: '',
        isShare: false,
        creditPayment: false,
        creditPoundage: '',
        isHuabei: false,
        isAddTemplate: false,
        isShangbao: false,
        province: '',
        city: ''
      },
      rules: {
        link:[
          { required: true, message: '请输入商品链接地址', trigger: 'blur' }
        ],
        title:[
          { required: true, message: '请输入商品标题', trigger: 'blur' }
        ],
        price:[
          { required: true, message: '请输入单拍价格', trigger: 'blur' }
        ],
        quantity: [
          { required: true, message: '请输入单拍数量', trigger: 'blur' }
        ],
        'orderInfo[0].key_word': [
          { required: true, message: '请填写宝贝关键词', trigger: 'blur' }
        ],
        'orderInfo[0].key_word_tips': [
          { required: true, message: '请填写商品位置提示', trigger: 'blur' }
        ],
        'orderInfo[0].release_time': [
          { required: true, message: '请填写发布时间', trigger: 'blur' }
        ],
        'orderInfo[0].end_time': [
          { required: true, message: '请填写下架时间', trigger: 'blur' }
        ],
        'orderInfo[0].next_time': [
          { required: true, message: '请填写间隔时间', trigger: 'blur' }
        ],
        'orderInfo[0].task_num': [
          { required: true, message: '请填写发布数量', trigger: 'blur' }
        ]
      },
      showCount: false,
      showMoreShaitu: false
    }
  },

  computed: {
    countAmountFee() {
      if(this.form.price) {
        let arr = [], pos = 0, value = 0, nPos = 0;
        arr = arr.concat(this.form.amountFeePrice)
        arr.push(this.form.price)
        let sortArr = arr.sort((a,b) => {return a-b;});

        //
        pos = sortArr.findIndex(e => {
          return e == this.form.price
        })
        if(!pos) {
          value = this.form.amountFeePrice[0]
        }else {
          value = this.form.price == sortArr[pos + 1] ? this.form.amountFeePrice[pos] : this.form.amountFeePrice[pos - 1]
        }

        //
        nPos = this.form.amountFeePrice.findIndex(e => {
          return e == value
        })
        return this.form.amountFeeList[nPos].replace(/\[|\]/g,"").split(',')[1]
      }
      //return this.form.amountFeeList[nPos].replace(/\[|\]/g,"").split(',')[1]
    },

    countAmountPoint() {
      if(this.form.price) {
        let arr = [], pos = 0, value = 0, nPos = 0;
        arr = arr.concat(this.form.amountPointPrice)
        arr.push(this.form.price)
        let sortArr = arr.sort((a,b) => {return a-b;});

        //
        pos = sortArr.findIndex(e => {
          return e == this.form.price
        })
        if(!pos) {
          value = this.form.amountPointPrice[0]
        }else {
          value = this.form.price == sortArr[pos + 1] ? this.form.amountPointPrice[pos] : this.form.amountPointPrice[pos - 1]
        }

        //
        nPos = this.form.amountPointPrice.findIndex(e => {
          return e == value
        })
        return this.form.amountPointList[nPos].replace(/\[|\]/g,"").split(',')[1]
      }
      
    },

    countPoint() {
      let haopingPoint = this.form.isAddHaoping ? Number(this.form.addHaoping[this.form.addHaopingActive - 1].key) : 0,
      shopCartPoint = this.form.isShopCart ? Number(this.form.shopCart[this.form.shopCartActive - 1].key) : 0,
      xinyuPoint = this.form.xinyuCheck ? Number(this.form.xinyu[this.form.xinyuActive - 1].key) : 0,     
      taoqiPoint = this.form.taoqiCheck ? Number(this.form.taoqi[this.form.taoqiActive - 1].key) : 0,   
      limitPoint = this.form.limitMaihaoCheck ? Number(this.form.limitMaihao[this.form.limitMaihaoActive -1].key) : 0,
      ActivePoint = this.countAmountPoint ? Number(this.countAmountPoint) : 0;
      //console.log(ActivePoint , haopingPoint , shopCartPoint , xinyuPoint , taoqiPoint , limitPoint)
      return (ActivePoint + haopingPoint + shopCartPoint + xinyuPoint + taoqiPoint +limitPoint).toFixed(2)
    },
  },

  watch: {
    'form.price'(n) {
      this.form.countPrice = 0
      if(n) {
        this.form.countPrice = (this.form.price ? this.form.price : 0) * this.form.quantity
      }else {
        this.form.countPrice = 0
      }
    },

    'form.quantity'(n) {
      if(n == 0) {
        this.form.quantity = 1
      }
      this.form.countPrice = 0
      if(n) {
        this.form.countPrice = (this.form.price ? this.form.price : 0) * n
      }else {
        this.form.countPrice = 0
      }
    }
  },

  async created() {
    //console.log(taskConfig)
    await this.setTaskType()
    await this.setTaskConfig(this.form['taskTypeValue'])

    this.userInfo = this.Global.getCookieUserInfo('memberInfo')

    window.addEventListener('scroll', (e) => {
      let h = document.documentElement.scrollTop;
      this.showCount = h > 100 ? true : false
    })
  },

  methods: {
    /**设置 */
    async setTaskType() {
      
      let res = await taskConfig.getTaskType(this)
      if(!res.data.code) {
        this.form['taskType'] = res.data.shopSiteList
        this.form['taskTypeValue'] = res.data.shopSiteList[0].id
      }
    },

    /** */
    async setTaskConfig(type) {
      let res = await taskConfig.getTaskConfig(this, type)
      if(!res.data.code) {
        
        const params = res.data.beforeReleaseInfo;
        const paramsConfig = res.data.beforeReleaseInfo.releaseTaskCostConfig;

        //店铺列表
        this.form.shopList = params.bsShopSiteAccountList
        this.form.shopListActive = params.bsShopSiteAccountList[0]

        this.form.template = params.bsTaskTemplateList
        this.form.haopingTime = paramsConfig.haopingTime.split(',')
        //淘气值
        paramsConfig.taoqi.split(',').forEach((element,i) => {
          this.form.taoqi[i].key = element
           this.form.taoqi[i].index = i + 1
        });
        this.form.taoqiActive = this.form.taoqi[0].index
        //信誉等级
        paramsConfig.xinyu.split(',').forEach((element,i) => {
          this.form.xinyu[i].key = element
          this.form.xinyu[i].index = i + 1
        });
        this.form.xinyuActive = this.form.xinyu[0].index
        //买号限制
        this.form.limitMaihaoActive = this.form.taoqi[0].key
        paramsConfig.limitMaihao.split(',').forEach((element,i) => {
          this.form.limitMaihao[i].key = element
          this.form.limitMaihao[i].index = i + 1
        });
        this.form.limitMaihaoActive = this.form.limitMaihao[0].index
        //追加好评
        paramsConfig.addHaoping.split(',').forEach((element,i) => {
          this.form.addHaoping[i].key = element
          this.form.addHaoping[i].index = i + 1
        });
        this.form.addHaopingActive = this.form.addHaoping[0].index
        /* console.log(this.form.addHaoping) */
        //延购
        paramsConfig.shopCart.split(',').forEach((element,i) => {
          this.form.shopCart[i].key = element
          this.form.shopCart[i].index = i + 1
        });
        this.form.shopCartActive = this.form.shopCart[0].index


        this.form.amountPoint = paramsConfig.amountPoint
        this.form.amountFee = paramsConfig.amountFee

        //基本发布点
        paramsConfig.amountFee.split('-').forEach(e => {
          this.form.amountFeeList = this.form.amountFeeList.concat(e)
          this.form.amountFeePrice = this.form.amountFeePrice.concat(e.replace(/\[|\]/g,"").split(',')[0]) //格式化价格数组
        });

        
        paramsConfig.amountPoint.split('-').forEach(e => {
          this.form.amountPointList = this.form.amountPointList.concat(e)
          this.form.amountPointPrice = this.form.amountPointPrice.concat(e.replace(/\[|\]/g,"").split(',')[0]) //格式化价格数组
        });
        /* console.log(this.form.amountPointPrice) */

      }
    },

    /** */
    async upload(param) {
      let res = await this.Global.uploadImage(this, param.file)
      if(!res.data.code) {
        this.form.thumb = res.data.imgUrl
      }
    },

    async uploadCapture(param) {
      let res = await this.Global.uploadImage(this, param.file)
      if(!res.data.code) {
        this.form.orderInfo[0].thumb = res.data.imgUrl
      }
    },

    selectAddress(params) {
      params.forEach((e, i) => {
        this.form.province = this.form.province + CodeToText[e[0]]
        this.form.city = this.form.city + CodeToText[e[1]]
      })
    },

    addShaitu() {
      this.showMoreShaitu = !this.showMoreShaitu
      if(this.showMoreShaitu) {
        for(let i = 0 ; i< 4 ; i++) {
          this.form.shaituPic = this.form.shaituPic.concat('')
        }
      }else {
        this.form.shaituPic = this.form.shaituPic[0] !== '' ? this.form.shaituPic[0] : ['']
      }
    },

    setIndex(index) {
      this.shaituPicIndex = index
    },

    async uploadSharePic(param) {
      let res = await this.Global.uploadImage(this, param.file)
      if(!res.data.code) {
        
        //console.log(this.form.shaituPic, this.shaituPicIndex)
        this.$set(this.form.shaituPic,this.shaituPicIndex, res.data.imgUrl)
      }
    },

    /**验证表单 */
    async checkForm() {

    },

    /**提交表单 */
    async onSubmitForm() {
      let res = await this.api.post(`${this.baseUrl}/brush/app/releaseTask`,
        {
          shopSiteId: this.form.taskTypeValue, //任务区ID
          shopId: this.form.shopListActive.id, //店铺id	
          shopName: this.form.shopListActive.shopName, //店铺名	
          shopUrl: this.form.link, //商品链接地址	
          imgUrl: this.form.thumb, //商品主图	
          title: this.form.title, //标题
          price: this.form.price, //下单价格,小数点后2位	
          item: this.form.quantity, //下单件数	
          searchPrice: this.form.countPrice, //搜索页面展示的价格	
          xushiType: this.form.taskActive, //任务类型
          haopingTime: this.form.haopingTime[this.form.haopingTimeActive-1], //收货好评时间	
          orderType: this.form.searchActive, //下单方式
          orderInfo: JSON.stringify(this.form.orderInfo), //任务详情list	
          expressType: this.form.signActive, //签收方式
          isModPrice: this.form.isModPrice ? 1 : null, //商品是否需要改价 
          addPoint: this.form.addPoint,//追加发布点
          assign: this.form.assign, //指定规格属性
          haopingContent: this.form.haopingContent, //指定好评内容
          messageRemind: this.form.messageRemind, //平台留言提醒
          compareNumCheck: this.form.compareNumCheck ? this.form.compare[this.form.compareActive-1].index : '', //货比三家
          viewNum: this.form.viewCheck ? this.form.viewActive : '', //浏览数量
          stopTime: this.form.stopRadio ?this.form.stopActive : '', //停留时间
          isCompleteView: this.form.isCompleteView ? 1 : null, //浏览到底
          isQuestion: this.form.isQuestion ? 1 : null, //
          question: this.form.isQuestion ? this.form.question : '',
          tips: this.form.isQuestion ?this.form.tips:  '',
          answer: this.form.isQuestion ? this.form.answer: '',
          limitSex: (this.form.sexActive).toString(),
          limitAge: this.form.ageActive,
          limitMaihao: this.form.limitMaihaoCheck ? this.form.limitMaihao[this.form.limitMaihaoActive-1].index : null,
          buyType: this.form.orderActive, //
          isAddTemplate: this.form.isAddTemplate ? 1 : 0,
          isShangbao: this.form.isShangbao ? 1 : null,
          isRealname: this.form.isRealname ? 1 : null,
          isChat: this.form.isChat ? 1 : null,
          isHuabei: this.form.isHuabei ? 1 : null,
          creditPayment: this.form.creditPayment ? 1 : null,
          creditPoundage: this.form.creditPayment ? this.form.creditPoundage : null,
          isShare: this.form.isShare ? 1 : null,
          isDelete: this.form.isDelete ? 1 : null,
          isCollect: this.form.isCollect ? 1 : null,
          isShopCart: this.form.isShopCart ? 1 : null,
          delayBuyDay: this.form.isShopCart ? this.form.shopCartActive : null,
          isAddHaoping: this.form.isAddHaoping ? 1: null,
          addHaopingDay: this.form.isAddHaoping ? this.form.addHaopingActive : null,
          addHaopingContent: this.form.isAddHaoping ? this.form.addHaopingContent : '',
          xinyu: this.form.xinyuCheck ? this.form.xinyuActive : '',
          taoqi: this.form.taoqiCheck ? this.form.taoqiActive : '',
          province: this.form.province,
          city: this.form.city
        },
        this,
        {
          headers: {
            token: this.$cookies.get('token')
          }
        }
      )
      /* console.log(res) */
      if(!res.data.code) {
        this.$alert('任务已经成功发布', '发布成功', {
          dangerouslyUseHTMLString: true
        });
        this.Global.getUserInfo(this, this.$cookies.get('token')).then((result) => {
          /**设置cookie */
          this.$cookies.set('userInfo', result.Index, res.data.loginInfo.expire / 86400)
        })
      }else {
        this.$alert(res.data.msg, '发布失败', {
          dangerouslyUseHTMLString: true
        });
      }
    },


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
    //padding-left 0 !important
    border 1px #bcdfff solid
    padding 20px 80px 0 80px
    background-color #f4fbff
    >>>.item-title {
      width 130px
      text-align right
    }
    .flex-start {
      justify-content: flex-start;
      >>>.el-form-item__error {
        left 130px
      }
      .add {
        color green
        margin 0 0 30px 30px
        &:hover {
          color #f60
        }
      }
    }
    .task-count {
      >>>.el-form-item__error {
        left 52px
      }
    }
    >>>.el-form-item {
      margin-bottom 30px
    }
    >>>.el-form-item__content {
      display flex
      margin-left 0 !important
    }
    .date {
      >>>.el-form-item__error {
        left 108px
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

.custom-radio-group {
  >>>.is-checked {
    border-color #FF6701
    background-color #FFFFD0
    .el-radio__inner {
      border-color #FF6701
      background #FF6701
    }
    .el-radio__label {
      color #FF6701
    }
  } 
}

.inside-radio {
  img {
    margin-left 5px
    display inline-block
    vertical-align middle
  }
}

.count-section {
  position fixed
  bottom 0
  left 0
  width 100%
  z-index 3
  background-color rgba(0, 0, 0, .75)
  padding 15px 0
  color: #ffff00;
  font-size: 18px;
  font-weight: bold;

  .count-content {
    width 800px
    margin 0 auto
    text-align left
    a {
      color #0076FC
      font-size 15px
      &:hover {
        color: #F60;
      }
    }
    font {
      color #FF5500
      padding 0 8px
      &:hover {
        color #f00
      }
    }
  }
}

</style>