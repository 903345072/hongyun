(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-finace-matchdetail","components-zaiui-common-basics-orderdetail"],{"1ac9":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"zaiui-news-box",class:t.show?"show":""},[i("bar-title",{attrs:{bgColor:"bg-white"},on:{rightTap:function(a){arguments[0]=a=t.$handleEvent(a),t.barTitleRightTap.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("比分中心")])],2),i("v-uni-view",[i("v-uni-web-view",{staticStyle:{top:"26rpx"},attrs:{src:t.geturl()}})],1),i("v-uni-view",{staticStyle:{"background-color":"white",left:"0",right:"0",bottom:"0",position:"fixed","z-index":"9999",height:"186rpx"}}),i("v-uni-view",{staticClass:"cu-tabbar-height"})],1)},o=[]},"1af4":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-news-box[data-v-08c786ba]{width:100%;display:none}.zaiui-news-box .zaiui-follow-box .action-text-cut[data-v-08c786ba]{width:70%}.zaiui-news-box .zaiui-grid-menu .cu-list.grid.no-border > .cu-item .cu-avatar[data-v-08c786ba]{margin:0 auto}.zaiui-news-box .zaiui-news-list-box[data-v-08c786ba]{padding:0 %?9.09?%}.zaiui-news-box .zaiui-news-list-box .cu-list.menu-avatar > .cu-item > .cu-avatar[data-v-08c786ba]{width:%?81.81?%;height:%?81.81?%}.zaiui-news-box .zaiui-news-list-box .cu-list.menu-avatar > .cu-item[data-v-08c786ba]{height:%?163.63?%;align-items:inherit}.zaiui-news-box .zaiui-news-list-box .cu-list.menu-avatar > .cu-item .cu-avatar[data-v-08c786ba]{margin-top:%?25.45?%}.zaiui-news-box .zaiui-news-list-box .cu-list.menu-avatar > .cu-item .cu-avatar .cu-tag.badge[data-v-08c786ba]{width:%?21.81?%;height:%?21.81?%;top:0;right:0;border:%?1.81?% solid #fff}.zaiui-news-box .zaiui-news-list-box .cu-list.menu-avatar > .cu-item .content[data-v-08c786ba]{left:%?136.36?%;margin-top:%?18.18?%;width:calc(100% - %?90.9?% - %?54.54?% - %?18.18?%);line-height:1.7em}.zaiui-news-box .zaiui-news-list-box .cu-list.menu-avatar > .cu-item .content .cu-tag[data-v-08c786ba]{padding:0 %?3.63?%}.zaiui-news-box .zaiui-news-list-box .cu-list.menu-avatar > .cu-item .content .cu-tag uni-text[data-v-08c786ba]{position:relative;top:%?-2?%}.zaiui-news-box .zaiui-news-list-box .cu-list.menu-avatar > .cu-item[data-v-08c786ba]:after{width:0;height:0;border-bottom:0}.zaiui-news-box .zaiui-news-list-box .cu-list.menu-avatar > .cu-item.goods .content[data-v-08c786ba]{width:calc(100% - %?309.09?%)}.zaiui-news-box .zaiui-news-list-box .cu-list.menu-avatar > .cu-item.goods .action[data-v-08c786ba]{position:absolute;right:%?23.63?%;width:%?127.27?%}.zaiui-news-box .zaiui-news-list-box .cu-list.menu-avatar > .cu-item.goods .action .cu-avatar[data-v-08c786ba]{width:%?127.27?%;height:%?127.27?%;margin-top:%?18.18?%}.zaiui-news-box.show[data-v-08c786ba]{display:block}",""]),t.exports=a},"2a13":function(t,a,i){"use strict";i.r(a);var e=i("383b"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"2bfd":function(t,a,i){"use strict";i.r(a);var e=i("1ac9"),n=i("5c31");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("9ffe");var c,u=i("f0c5"),s=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"08c786ba",null,!1,e["a"],c);a["default"]=s.exports},"383b":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=e},"3a0b":function(t,a,i){var e=i("1af4");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("b3846452",e,!0,{sourceMap:!1,shadowMode:!1})},"5c31":function(t,a,i){"use strict";i.r(a);var e=i("b897"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"6f6c":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-7f1a2e51]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-7f1a2e51]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-7f1a2e51]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-7f1a2e51]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-7f1a2e51]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-7f1a2e51]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-7f1a2e51]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},"9ffe":function(t,a,i){"use strict";var e=i("3a0b"),n=i.n(e);n.a},a199:function(t,a,i){"use strict";i.r(a);var e=i("e534"),n=i("2a13");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("f8ab");var c,u=i("f0c5"),s=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"7f1a2e51",null,!1,e["a"],c);a["default"]=s.exports},b897:function(t,a,i){"use strict";var e=i("4ea4");i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("a199")),o=e(i("dd8a")),c={name:"news",components:{barTitle:n.default},data:function(){return{modalName:null,listTouchStart:0,listTouchDirection:null,id:"",type:1,state:1}},onLoad:function(t){this.id=t.id,this.type=t.type,this.state=t.state},props:{show:{type:Boolean,default:!0},scrollY:{type:Number,default:0},scrollBottom:{type:Number,default:0}},watch:{scrollY:function(){this.setPageScroll(this.scrollY)},scrollBottom:function(){0!=this.scrollBottom&&this.setReachBottom()}},created:function(){},mounted:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{geturl:function(){return 1==this.state?1==this.type?"http://m.titan007.com/Analy/Analysis/"+this.id+".htm":"http://m.titan007.com/AnalyLq/Analysis/"+this.id+".htm":1==this.type?"http://m.titan007.com/":"http://m.titan007.com/basketball.shtml"},setPageScroll:function(t){},setReachBottom:function(){console.log("触底了")},barTitleRightTap:function(){console.log("标题栏右边被点击")},ListTouchStart:function(t){this.listTouchStart=t.touches[0].pageX},ListTouchMove:function(t){this.listTouchDirection=t.touches[0].pageX-this.listTouchStart>0?"right":"left"},ListTouchEnd:function(t){"left"==this.listTouchDirection?this.modalName=t.currentTarget.dataset.target:this.modalName=null,this.listTouchDirection=null},tapNews:function(t){console.log(t),0==t?uni.navigateTo({url:"/pages/news/notice"}):1==t&&uni.navigateTo({url:"/pages/news/chat"})}}};a.default=c},c20d1:function(t,a,i){var e=i("6f6c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("2b926d22",e,!0,{sourceMap:!1,shadowMode:!1})},e534:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},o=[]},f8ab:function(t,a,i){"use strict";var e=i("c20d1"),n=i.n(e);n.a}}]);