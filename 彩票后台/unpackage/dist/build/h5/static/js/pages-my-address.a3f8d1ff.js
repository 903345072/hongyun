(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-address"],{"21f7":function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return c})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"zaiui-bar-title-box"},[a("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),a("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),a("v-uni-view",{staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?a("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},c=[]},2935:function(t,i,a){"use strict";var e=a("8b10"),n=a.n(e);n.a},"3a46":function(t,i,a){"use strict";a.r(i);var e=a("c6b69"),n=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(i,t,(function(){return e[t]}))}(c);i["default"]=n.a},4608:function(t,i,a){"use strict";a.r(i);var e=a("21f7"),n=a("3a46");for(var c in n)"default"!==c&&function(t){a.d(i,t,(function(){return n[t]}))}(c);a("2935");var s,u=a("f0c5"),o=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"07a26db6",null,!1,e["a"],s);i["default"]=o.exports},"737e":function(t,i,a){"use strict";a.r(i);var e=a("f185"),n=a("e7ce");for(var c in n)"default"!==c&&function(t){a.d(i,t,(function(){return n[t]}))}(c);a("c603");var s,u=a("f0c5"),o=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"ffac6290",null,!1,e["a"],s);i["default"]=o.exports},"8b10":function(t,i,a){var e=a("c838");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("d807e8fe",e,!0,{sourceMap:!1,shadowMode:!1})},a289:function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("4608")),c=e(a("1753")),s={components:{barTitle:n.default},data:function(){return{}},onLoad:function(){},onReady:function(){c.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{editAddressTap:function(){uni.navigateTo({url:"/pages/my/edit-address"})},AddAddressTap:function(){uni.navigateTo({url:"/pages/my/add-address"})}}};i.default=s},c603:function(t,i,a){"use strict";var e=a("fda6"),n=a.n(e);n.a},c6b69:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};i.default=e},c838:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-07a26db6]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-07a26db6]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-07a26db6]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-07a26db6]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-07a26db6]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-07a26db6]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-07a26db6]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=i},e7ce:function(t,i,a){"use strict";a.r(i);var e=a("a289"),n=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(i,t,(function(){return e[t]}))}(c);i["default"]=n.a},f185:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return c})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[a("template",{attrs:{slot:"content"},slot:"content"},[t._v("我的地址")])],2),a("v-uni-view",{staticClass:"bg-white zaiui-address-card-view"},[a("v-uni-view",{staticClass:"flex text-black text-lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddressTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"flex-sub text-left"},[t._v("仔仔")]),a("v-uni-view",{staticClass:"flex-sub text-right"},[t._v("138****8000")])],1),a("v-uni-view",{staticClass:"margin-tb-sm text-gray",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddressTap.apply(void 0,arguments)}}},[t._v("重庆是 渝北区 网络购买专用虚拟地址")]),a("v-uni-view",{staticClass:"zaiui-line-view"}),a("v-uni-view",{staticClass:"zaiui-right-view"},[a("v-uni-text",{staticClass:"cuIcon-write",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddressTap.apply(void 0,arguments)}}},[t._v("编辑")]),a("v-uni-text",{staticClass:"cuIcon-delete"},[t._v("删除")])],1)],1),a("v-uni-view",{staticClass:"bg-white zaiui-address-card-view"},[a("v-uni-view",{staticClass:"flex text-black text-lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddressTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"flex-sub text-left"},[t._v("仔仔1")]),a("v-uni-view",{staticClass:"flex-sub text-right"},[t._v("138****8000")])],1),a("v-uni-view",{staticClass:"margin-tb-sm text-gray",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddressTap.apply(void 0,arguments)}}},[t._v("重庆是 渝北区 网络购买专用虚拟地址1")]),a("v-uni-view",{staticClass:"zaiui-line-view"}),a("v-uni-view",{staticClass:"zaiui-right-view"},[a("v-uni-text",{staticClass:"cuIcon-write",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddressTap.apply(void 0,arguments)}}},[t._v("编辑")]),a("v-uni-text",{staticClass:"cuIcon-delete"},[t._v("删除")])],1)],1),a("v-uni-view",{staticClass:"bg-white wecanui-footer-fixed foot-pb"},[a("v-uni-view",{staticClass:"flex flex-direction"},[a("v-uni-button",{staticClass:"cu-btn bg-red",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.AddAddressTap.apply(void 0,arguments)}}},[t._v("添加新地址")])],1)],1)],1)},c=[]},f8ad1:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".zaiui-address-card-view[data-v-ffac6290]{position:relative;margin:%?36.36?% %?27.27?%;border-radius:%?10.9?%;padding:%?18.18?%}.zaiui-address-card-view .zaiui-line-view[data-v-ffac6290]{position:relative;background:#f9f9f9;margin-bottom:%?20?%;height:%?2?%}.zaiui-address-card-view .zaiui-right-view[data-v-ffac6290]{position:relative;text-align:right}.zaiui-address-card-view .zaiui-right-view uni-text[data-v-ffac6290]:before{margin-right:5px}.zaiui-address-card-view .zaiui-right-view uni-text + uni-text[data-v-ffac6290]{margin-left:20px}.wecanui-footer-fixed .flex-direction[data-v-ffac6290]{padding:%?18.18?%}",""]),t.exports=i},fda6:function(t,i,a){var e=a("f8ad1");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("4b33060c",e,!0,{sourceMap:!1,shadowMode:!1})}}]);