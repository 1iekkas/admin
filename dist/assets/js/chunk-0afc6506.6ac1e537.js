(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0afc6506"],{"1e01":function(t,e,a){var n=a("da0b"),i=a("ae6e").set;t.exports=function(t,e,a){var r,o=e.constructor;return o!==a&&"function"==typeof o&&(r=o.prototype)!==a.prototype&&n(r)&&i&&i(t,r),t}},"3a06":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"3eee":function(t,e,a){"use strict";var n=a("86e4"),i=a.n(n);i.a},7130:function(t,e,a){var n=a("2498"),i=a("3038"),r=a("0cc1"),o=a("3a06"),c="["+o+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t,e,a){var i={},c=r((function(){return!!o[t]()||s[t]()!=s})),l=i[t]=c?e(p):o[t];a&&(i[a]=l),n(n.P+n.F*c,"String",i)},p=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},7365:function(t,e,a){"use strict";var n=a("ccba"),i=a.n(n);i.a},"86e4":function(t,e,a){},"8f42":function(t,e,a){"use strict";var n=a("3f8b"),i=a("549d"),r=a("6077"),o=a("1e01"),c=a("2ab1"),s=a("0cc1"),l=a("cb2e").f,u=a("e493").f,f=a("d3d8").f,p=a("7130").trim,d="Number",b=n[d],v=b,h=b.prototype,g=r(a("65c3")(h))==d,m="trim"in String.prototype,_=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():p(e,3);var a,n,i,r=e.charCodeAt(0);if(43===r||45===r){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var o,s=e.slice(2),l=0,u=s.length;l<u;l++)if(o=s.charCodeAt(l),o<48||o>i)return NaN;return parseInt(s,n)}}return+e};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof b&&(g?s((function(){h.valueOf.call(a)})):r(a)!=d)?o(new v(_(e)),a,b):_(e)};for(var y,w=a("f9a5")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)i(v,y=w[N])&&!i(b,y)&&f(b,y,u(v,y));b.prototype=h,h.constructor=b,a("a6d5")(n,d,b)}},ac88:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-section"},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"软件卡密中心",name:"0"}},[a("div",{staticClass:"bg-white"},[a("soft-ware-table",{attrs:{name:"软件卡密中心",id:0}})],1)]),a("el-tab-pane",{attrs:{label:"我购买的卡密",name:"1"}},[a("div",{staticClass:"bg-white"},[a("soft-ware-table",{attrs:{name:"我购买的卡密",id:1}})],1)])],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section section-group"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.name))])]),t.id?t._e():a("div",{staticClass:"tips"},[a("div",[t._v("好消息！需要代理IP软件的朋友请直接购买即可！")]),a("div",[t._v("软件绿色多线程，快速更换IP，刷钻必备工具，欢迎选购及代理！")])]),a("div",{staticClass:"my-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{align:"center",data:t.tableData}},[a("el-table-column",{attrs:{align:"center",prop:"code",label:"软件名称",width:"150"}}),a("el-table-column",{attrs:{align:"center",prop:"type",label:"卡密类型",width:"150"}}),a("el-table-column",{attrs:{align:"center",prop:"time",label:"卡号",width:""}}),a("el-table-column",{attrs:{align:"center",prop:"pass",label:"卡密","show-overflow-tooltip":"",width:"100"}}),a("el-table-column",{attrs:{align:"center",prop:"price",label:"价格",width:"100"}}),a("el-table-column",{attrs:{align:"center",prop:"time",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.id?a("div",{staticClass:"action",on:{click:function(a){return t.open(e.row)}}},[t._v("查看详情")]):a("div",[t._v("已被购买")])]}}])})],1)],1),a("el-dialog",{attrs:{title:"我购买的小号信息",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{ref:"dialog",staticClass:"dialog-section",attrs:{id:"dialog"}},t._l(8,(function(e){return a("div",{key:e,staticClass:"cell flex"},[a("div",{staticClass:"cell-title"},[t._v("选购的快递公司：")]),a("div",{staticClass:"cell-value"},[t._v("申通快递(拼多多-专用)")])])})),0),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"copyButton",attrs:{"data-clipboard-target":"#dialog"},on:{click:t.onCopy}},[t._v("复 制")]),a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("关 闭")])],1)])],1)},o=[],c=(a("8f42"),{props:{name:{type:String,default:""},id:{type:Number,default:0}},data:function(){return{dialogVisible:!1,tableData:[{type:"半月卡",code:"55da*********",number:"0",pass:"*****",time:"55da*********",price:"20.00元"}]}},methods:{handleClose:function(){this.dialogVisible=!1},open:function(t){this.dialogVisible=!0},onCopy:function(t){var e=this,a=new this.clipboard(".copyButton");a.on("success",(function(t){e.$message({message:"已复制到剪贴板",type:"success"}),t.clearSelection()})),a.on("error",(function(t){e.$message.error("复制失败")}))}}}),s=c,l=(a("7365"),a("6691")),u=Object(l["a"])(s,r,o,!1,null,"2274f0d4",null),f=u.exports,p={data:function(){return{activeName:"0"}},components:{softWareTable:f},created:function(){this.activeName=this.$route.query.tab},watch:{activeName:function(t,e){t!==e&&0!==t&&this.$router.push({path:"/softwarebuy?tab=".concat(t)})},$route:function(t,e){this.activeName=t.query.tab}},methods:{handleClick:function(t){}}},d=p,b=(a("3eee"),Object(l["a"])(d,n,i,!1,null,"2475efd6",null));e["default"]=b.exports},ae6e:function(t,e,a){var n=a("da0b"),i=a("8cac"),r=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("e85e")(Function.call,a("e493").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,a){return r(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:r}},cb2e:function(t,e,a){var n=a("7afe"),i=a("d93f").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},ccba:function(t,e,a){},e493:function(t,e,a){var n=a("c864"),i=a("0614"),r=a("6117"),o=a("2ab1"),c=a("549d"),s=a("25ae"),l=Object.getOwnPropertyDescriptor;e.f=a("f9a5")?l:function(t,e){if(t=r(t),e=o(e,!0),s)try{return l(t,e)}catch(a){}if(c(t,e))return i(!n.f.call(t,e),t[e])}}}]);
//# sourceMappingURL=chunk-0afc6506.6ac1e537.js.map