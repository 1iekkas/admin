(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b48c52b"],{"0e2d":function(t,e,a){"use strict";var n=a("f505"),r=a.n(n);r.a},"1dcd":function(t,e,a){},"1e01":function(t,e,a){var n=a("da0b"),r=a("ae6e").set;t.exports=function(t,e,a){var i,s=e.constructor;return s!==a&&"function"==typeof s&&(i=s.prototype)!==a.prototype&&n(i)&&r&&r(t,i),t}},"3a06":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},4634:function(t,e,a){for(var n=a("96dd"),r=a("7d56"),i=a("a6d5"),s=a("3f8b"),o=a("b8ea"),c=a("e3b3"),l=a("1277"),u=l("iterator"),p=l("toStringTag"),f=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=r(d),h=0;h<m.length;h++){var g,b=m[h],v=d[b],w=s[b],k=w&&w.prototype;if(k&&(k[u]||o(k,u,f),k[p]||o(k,p,b),c[b]=f,v))for(g in n)k[g]||i(k,g,n[g],!0)}},"523c":function(t,e,a){},5595:function(t,e,a){"use strict";var n=a("523c"),r=a.n(n);r.a},"5c83":function(t,e,a){"use strict";var n=a("1dcd"),r=a.n(n);r.a},6728:function(t,e,a){"use strict";var n=a("686f"),r=a.n(n);r.a},"686f":function(t,e,a){},7130:function(t,e,a){var n=a("2498"),r=a("3038"),i=a("0cc1"),s=a("3a06"),o="["+s+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),p=function(t,e,a){var r={},o=i((function(){return!!s[t]()||c[t]()!=c})),l=r[t]=o?e(f):s[t];a&&(r[a]=l),n(n.P+n.F*o,"String",r)},f=p.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=p},"8f42":function(t,e,a){"use strict";var n=a("3f8b"),r=a("549d"),i=a("6077"),s=a("1e01"),o=a("2ab1"),c=a("0cc1"),l=a("cb2e").f,u=a("e493").f,p=a("d3d8").f,f=a("7130").trim,d="Number",m=n[d],h=m,g=m.prototype,b=i(a("65c3")(g))==d,v="trim"in String.prototype,w=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():f(e,3);var a,n,r,i=e.charCodeAt(0);if(43===i||45===i){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var s,c=e.slice(2),l=0,u=c.length;l<u;l++)if(s=c.charCodeAt(l),s<48||s>r)return NaN;return parseInt(c,n)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(b?c((function(){g.valueOf.call(a)})):i(a)!=d)?s(new h(w(e)),a,m):w(e)};for(var k,y=a("f9a5")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)r(h,k=y[x])&&!r(m,k)&&p(m,k,u(h,k));m.prototype=g,g.constructor=m,a("a6d5")(n,d,m)}},"9f7e":function(t,e,a){a("f9a5")&&"g"!=/./g.flags&&a("d3d8").f(RegExp.prototype,"flags",{configurable:!0,get:a("e7a1")})},a422:function(t,e,a){"use strict";var n=a("b274"),r=a.n(n);r.a},ae6e:function(t,e,a){var n=a("da0b"),r=a("8cac"),i=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("e85e")(Function.call,a("e493").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,a){return i(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:i}},b274:function(t,e,a){},b8b8:function(t,e,a){"use strict";var n=a("cc16"),r=a.n(n);r.a},cb2e:function(t,e,a){var n=a("7afe"),r=a("d93f").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},cc16:function(t,e,a){},cc1d:function(t,e,a){"use strict";a("9f7e");var n=a("8cac"),r=a("e7a1"),i=a("f9a5"),s="toString",o=/./[s],c=function(t){a("a6d5")(RegExp.prototype,s,t,!0)};a("0cc1")((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?c((function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?r.call(t):void 0)})):o.name!=s&&c((function(){return o.call(this)}))},e493:function(t,e,a){var n=a("c864"),r=a("0614"),i=a("6117"),s=a("2ab1"),o=a("549d"),c=a("25ae"),l=Object.getOwnPropertyDescriptor;e.f=a("f9a5")?l:function(t,e){if(t=i(t),e=s(e,!0),c)try{return l(t,e)}catch(a){}if(o(t,e))return r(!n.f.call(t,e),t[e])}},edff:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-section"},[a("el-tabs",{attrs:{lazy:"true"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"系统消息",name:"0"}},[0==t.activeName?a("div",{staticClass:"bg-white"},[a("system-mail",{attrs:{name:"系统消息",id:1}})],1):t._e()]),a("el-tab-pane",{attrs:{label:"收件箱",name:"1"}},[1==t.activeName?a("div",{staticClass:"bg-white"},[a("in-box",{attrs:{name:"收件箱",id:2}})],1):t._e()]),a("el-tab-pane",{attrs:{label:"发件箱",name:"2"}},[2==t.activeName?a("div",{staticClass:"bg-white"},[a("out-box",{attrs:{name:"发件箱",id:3}})],1):t._e()]),a("el-tab-pane",{attrs:{label:"写新消息",name:"3"}},[3==t.activeName?a("div",{staticClass:"bg-white"},[a("create-mail",{attrs:{name:"发短消息"}})],1):t._e()])],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section section-group"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.name))])]),a("div",{staticClass:"system-mail-table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"title",label:"标题",width:"400"}}),a("el-table-column",{attrs:{prop:"isRead",label:"状态","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"postTime",label:"时间","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"name",label:"状态","show-overflow-tooltip":""}},[[t._v("\n          删除\n        ")]],2)],1)],1),a("div",{staticClass:"pagination-section"},[a("el-button",{attrs:{size:"medium",type:"danger"}},[t._v("删除")]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.pageCount}})],1),a("div",{staticClass:"action"})])},s=[],o=(a("63ff"),a("f8f9")),c=(a("8f42"),{props:{name:{type:String,default:""},id:{type:Number,default:0}},data:function(){return{dialogVisible:!1,tableData:[],multipleSelection:[],page:1,pageCount:1}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getSystemMail();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getSystemMail:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post("".concat(this.baseUrl,"/brush/app/messageList"),{type:this.id,page:this.page,limit:10},this,{headers:{token:this.$cookies.get("token")}});case 2:e=t.sent,e.data.code?this.$message.error({message:e.data.msg,offset:200,duration:1500}):(this.tableData=this.tableData.concat(e.data.messageList.list),this.pageCount=e.data.messageList.totalPage);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleSelectionChange:function(t){this.multipleSelection=t}}}),l=c,u=(a("b8b8"),a("6691")),p=Object(u["a"])(l,i,s,!1,null,"3186755e",null),f=p.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section section-group"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.name))])]),a("div",{staticClass:"create-mail-form"},[a("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"auto"}},[a("el-form-item",{attrs:{label:"收件人：",prop:"acceptUserName"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-input",{model:{value:t.form.acceptUserName,callback:function(e){t.$set(t.form,"acceptUserName",e)},expression:"form.acceptUserName"}})],1)],1)],1),a("el-form-item",{attrs:{label:"标题：",prop:"title"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1)],1),a("el-form-item",{attrs:{label:"内容：",prop:"content"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{type:"textarea",rows:4},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1)],1),a("el-form-item",{attrs:{label:" "}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:20}},[a("el-checkbox",{model:{value:t.form.checked,callback:function(e){t.$set(t.form,"checked",e)},expression:"form.checked"}},[t._v("保存到发件箱")])],1)],1)],1),a("el-form-item",{attrs:{label:"验证码：",prop:"code"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-input",{model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),a("el-col",{attrs:{span:13}},[a("div",{staticClass:"code",on:{click:t.changeCode}},[a("img",{attrs:{src:t.codeSrc,alt:""}})])])],1)],1),a("el-form-item",{attrs:{label:" "}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-button",{attrs:{type:"success"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("发 送")])],1)],1)],1)],1)],1)])},m=[],h={props:{name:{type:String,default:""}},data:function(){return{rules:{acceptUserName:[{required:!0,message:"请输入收件人",trigger:"blur"}],title:[{required:!0,message:"请输入邮件标题",trigger:"blur"}],content:[{required:!0,message:"请输入邮件内容",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},form:{title:"",acceptUserName:"",content:"",checked:!1,code:""},codeSrc:"",codeId:""}},created:function(){this.changeCode()},methods:{onSubmit:function(t){var e=this;this.$refs[t].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,e.api.post("".concat(e.baseUrl,"/brush/app/sendMessage"),{type:e.form.checked?3:0,title:e.form.title,content:e.form.content,acceptUserName:e.form.acceptUserName,uuId:e.codeId,captcha:e.form.code},e,{headers:{token:e.$cookies.get("token")}});case 3:n=t.sent,n.data.code?e.$message.error({message:n.data.msg,offset:200,duration:1500}):e.$message.success({message:"发送成功",offset:200,duration:1500}),t.next=8;break;case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},changeCode:function(){this.Global.getCode(this)}}},g=h,b=(a("6728"),Object(u["a"])(g,d,m,!1,null,"128a7f88",null)),v=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section section-group"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.name))])]),a("div",{staticClass:"system-mail-table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"title",label:"内容",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"column-title"},[t._v(t._s(e.row.title))]),a("div",{staticClass:"column-content"},[t._v(t._s(e.row.content))])]}}])}),a("el-table-column",{attrs:{prop:"isRead",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{class:{"text-red":e.row.isRead}},[t._v(t._s(e.row.isRead?"已读":"未读"))])]}}])}),a("el-table-column",{attrs:{prop:"postTime",label:"时间",width:"180","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{align:"center",prop:"name",label:"状态","show-overflow-tooltip":""}},[[t._v("\n          删除\n        ")]],2)],1)],1),a("div",{staticClass:"pagination-section"},[a("el-button",{attrs:{size:"medium",type:"danger"}},[t._v("删除")]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.limit,"page-count":t.pageCount},on:{"current-change":t.changePage}})],1),a("div",{staticClass:"action"})])},k=[],y=(a("cc1d"),{props:{name:{type:String,default:""},id:{type:Number,default:0}},data:function(){return{dialogVisible:!1,tableData:[],multipleSelection:[],limit:10,page:1,pageCount:20}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getInMail();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getInMail:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post("".concat(this.baseUrl,"/brush/app/messageList"),{type:this.id.toString(),page:this.page.toString(),limit:this.limit.toString()},this,{headers:{token:this.$cookies.get("token")}});case 2:e=t.sent,e.data.code?this.$message.error({message:e.data.msg,offset:200,duration:1500}):(this.tableData=this.tableData.concat(e.data.messageList.list),this.pageCount=e.data.messageList.totalPage);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),changePage:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.page=e,this.tableData=[],t.next=4,this.getOutMail();case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleSelectionChange:function(t){this.multipleSelection=t}}}),x=y,_=(a("5595"),Object(u["a"])(x,w,k,!1,null,"f7959d5c",null)),C=_.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section section-group"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.name))])]),a("div",{staticClass:"system-mail-table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"title",label:"内容",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"column-title"},[t._v(t._s(e.row.title))]),a("div",{staticClass:"column-content",on:{click:function(a){return t.checkMail(e.row.id)}}},[t._v(t._s(e.row.content))])]}}])}),a("el-table-column",{attrs:{prop:"isRead",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{class:{"text-red":1==e.row.isRead}},[t._v(t._s(1==e.row.isRead?"已读":"未读"))])]}}])}),a("el-table-column",{attrs:{prop:"postTime",label:"时间",width:"180","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{align:"center",prop:"name",label:"状态","show-overflow-tooltip":""}},[[a("div",{staticClass:"delete-btn",on:{click:t.onDelete}},[t._v("删除")])]],2)],1)],1),a("div",{staticClass:"pagination-section"},[a("el-button",{attrs:{size:"medium",type:"danger",disabled:!t.multipleSelection.length},on:{click:t.onDelete}},[t._v("删除")]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.limit,"page-count":t.pageCount},on:{"current-change":t.changePage}})],1),t.showCheckBox?a("check-mail-box",{attrs:{"show-check-box":t.showCheckBox,id:t.checkId},on:{close:t.checkMail}}):t._e()],1)},N=[],R=(a("4634"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("el-dialog",{attrs:{title:"查看短消息",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.closeDialog}},[t.messageInfo?a("div",{staticClass:"mail-info-wrap"},[a("div",{staticClass:"cell text-black"},[t._v(t._s(t.messageInfo.postUserName))]),a("div",{staticClass:"cell"},[t._v(t._s(t.messageInfo.postTime)+" "),a("span",[t._v("收件人："+t._s(t.messageInfo.acceptUserName))])]),a("div",{staticClass:"cell"},[t._v(t._s(t.messageInfo.content))])]):t._e()])],1)}),L=[],O={props:{showCheckBox:{type:Boolean,default:!1},id:{type:Number,default:""}},data:function(){return{dialogVisible:this.showCheckBox,messageInfo:null}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getMailDetail();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getMailDetail:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post("".concat(this.baseUrl,"/brush/app/messageInfo"),{id:this.id},this,{headers:{token:this.$cookies.get("token")}});case 2:e=t.sent,e.data.code?this.$message.error({message:e.data.msg,offset:200,duration:1500}):this.messageInfo=e.data.messageInfo;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),closeDialog:function(){this.dialogVisible=!1,this.$emit("close")}}},I=O,M=(a("0e2d"),Object(u["a"])(I,R,L,!1,null,"ad413e44",null)),T=M.exports,$={props:{name:{type:String,default:""},id:{type:Number,default:0}},data:function(){return{dialogVisible:!1,tableData:[],multipleSelection:[],limit:10,page:1,pageCount:20,checkId:"",showCheckBox:!1}},components:{checkMailBox:T},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getOutMail();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getOutMail:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post("".concat(this.baseUrl,"/brush/app/messageList"),{type:this.id.toString(),page:this.page.toString(),limit:this.limit.toString()},this,{headers:{token:this.$cookies.get("token")}});case 2:e=t.sent,e.data.code?this.$message.error({message:e.data.msg,offset:200,duration:1500}):(this.tableData=this.tableData.concat(e.data.messageList.list),this.pageCount=e.data.messageList.totalPage);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),changePage:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.page=e,this.tableData=[],t.next=4,this.getOutMail();case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleSelectionChange:function(t){this.multipleSelection=t},onDelete:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=[],this.multipleSelection.forEach((function(t){e=e.concat(t.id)})),this.$confirm("被删除的邮件将不可恢复, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.postDelete(e);case 2:case"end":return t.stop()}}),t)}))));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),postDelete:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post("".concat(this.baseUrl,"/brush/app/deleteMessage"),{ids:e},this,{headers:{token:this.$cookies.get("token")}});case 2:a=t.sent,a.data.code?this.$message.error({message:a.data.msg,offset:200,duration:1500}):(this.$message({type:"success",message:"删除成功!"}),this.restTable());case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),restTable:function(){this.tableData=[],this.getOutMail()},checkMail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.checkId=t,this.showCheckBox=!this.showCheckBox,console.log(this.showCheckBox)}}},D=$,E=(a("a422"),Object(u["a"])(D,S,N,!1,null,"7eb55e9e",null)),j=E.exports,P={data:function(){return{activeName:"0"}},components:{systemMail:f,createMail:v,inBox:C,outBox:j},created:function(){this.activeName=this.$route.query.tab},watch:{activeName:function(t,e){t!==e&&0!==t&&this.$router.push({path:"/userMail?tab=".concat(t)})},$route:function(t,e){this.activeName=t.query.tab}},methods:{handleClick:function(t){}}},U=P,V=(a("5c83"),Object(u["a"])(U,n,r,!1,null,"2ede3ea5",null));e["default"]=V.exports},f505:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4b48c52b.71b29b8c.js.map