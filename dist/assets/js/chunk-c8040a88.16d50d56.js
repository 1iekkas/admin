(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8040a88"],{"1e01":function(t,e,r){var n=r("da0b"),a=r("ae6e").set;t.exports=function(t,e,r){var o,c=e.constructor;return c!==r&&"function"==typeof c&&(o=c.prototype)!==r.prototype&&n(o)&&a&&a(t,o),t}},"3a06":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"3c2d":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-section"},[r("el-tabs",{attrs:{lazy:"true"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"解绑客户端",name:"0"}},[0==t.activeName?r("div",{staticClass:"bg-white"},[r("remove-bind",{attrs:{name:"解绑客户端","user-info":t.userInfo}})],1):t._e()])],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section section-group"},[r("div",{staticClass:"title"},[r("span",[t._v(t._s(t.name))])]),r("div",{staticClass:"remove-bind-form"},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"auto"}},[r("el-form-item",{attrs:{label:"二级密码："}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-input",{model:{value:t.form.pwd,callback:function(e){t.$set(t.form,"pwd",e)},expression:"form.pwd"}})],1),r("el-col",{staticClass:"form-tips-gray",attrs:{span:13,align:"left"}},[t._v("请输入6-20位的二级密码")])],1)],1),r("el-form-item",{attrs:{label:" "}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8,align:"left"}},[r("el-button",{staticStyle:{width:"70%"},attrs:{type:"primary"}},[t._v("解除绑定")])],1)],1)],1)],1),t._m(0)],1)])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tips",attrs:{align:"left"}},[r("p",{staticClass:"tips-title text-red"},[t._v("温馨提示：")]),r("p",{staticClass:"tips-text"},[t._v("某某客网客户端优化助手软件在异地登录（不在同一台电脑）时才需要解除绑定，解除后才可以在其他电脑运行挂机，一般建议在原电脑登录软件后，在设置里面去掉绑定勾即可。")])])}],i=(r("8f42"),{props:{name:{type:String,default:""},id:{type:Number,default:0}},data:function(){return{form:{pwd:""}}},methods:{handleClose:function(){this.dialogVisible=!1},open:function(t){this.dialogVisible=!0},onCopy:function(t){var e=this,r=new this.clipboard(".copyButton");r.on("success",(function(t){e.$message({message:"已复制到剪贴板",type:"success"}),t.clearSelection()})),r.on("error",(function(t){e.$message.error("复制失败")}))}}}),s=i,f=(r("4395"),r("6691")),l=Object(f["a"])(s,o,c,!1,null,"01ac9d3b",null),u=l.exports,p={data:function(){return{activeName:"0",userInfo:this.Global.getCookieUserInfo("memberInfo")}},components:{removeBind:u},created:function(){},watch:{activeName:function(t,e){t!==e&&0!==t&&this.$router.push({path:"/userInfo?tab=".concat(t)})},$route:function(t,e){this.activeName=t.query.tab}},methods:{handleClick:function(t){}}},d=p,m=(r("c5ac"),Object(f["a"])(d,n,a,!1,null,"a628972a",null));e["default"]=m.exports},4395:function(t,e,r){"use strict";var n=r("8ccf"),a=r.n(n);a.a},"5cac":function(t,e,r){},7130:function(t,e,r){var n=r("2498"),a=r("3038"),o=r("0cc1"),c=r("3a06"),i="["+c+"]",s="​",f=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),u=function(t,e,r){var a={},i=o((function(){return!!c[t]()||s[t]()!=s})),f=a[t]=i?e(p):c[t];r&&(a[r]=f),n(n.P+n.F*i,"String",a)},p=u.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},"8ccf":function(t,e,r){},"8f42":function(t,e,r){"use strict";var n=r("3f8b"),a=r("549d"),o=r("6077"),c=r("1e01"),i=r("2ab1"),s=r("0cc1"),f=r("cb2e").f,l=r("e493").f,u=r("d3d8").f,p=r("7130").trim,d="Number",m=n[d],v=m,b=m.prototype,h=o(r("65c3")(b))==d,_="trim"in String.prototype,g=function(t){var e=i(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():p(e,3);var r,n,a,o=e.charCodeAt(0);if(43===o||45===o){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+e}for(var c,s=e.slice(2),f=0,l=s.length;f<l;f++)if(c=s.charCodeAt(f),c<48||c>a)return NaN;return parseInt(s,n)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof m&&(h?s((function(){b.valueOf.call(r)})):o(r)!=d)?c(new v(g(e)),r,m):g(e)};for(var y,N=r("f9a5")?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;N.length>I;I++)a(v,y=N[I])&&!a(m,y)&&u(m,y,l(v,y));m.prototype=b,b.constructor=m,r("a6d5")(n,d,m)}},ae6e:function(t,e,r){var n=r("da0b"),a=r("8cac"),o=function(t,e){if(a(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("e85e")(Function.call,r("e493").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,r){return o(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:o}},c5ac:function(t,e,r){"use strict";var n=r("5cac"),a=r.n(n);a.a},cb2e:function(t,e,r){var n=r("7afe"),a=r("d93f").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},e493:function(t,e,r){var n=r("c864"),a=r("0614"),o=r("6117"),c=r("2ab1"),i=r("549d"),s=r("25ae"),f=Object.getOwnPropertyDescriptor;e.f=r("f9a5")?f:function(t,e){if(t=o(t),e=c(e,!0),s)try{return f(t,e)}catch(r){}if(i(t,e))return a(!n.f.call(t,e),t[e])}}}]);
//# sourceMappingURL=chunk-c8040a88.16d50d56.js.map