(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7f265ec"],{"0f4e":function(t,e,i){"use strict";i.r(e);var r,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-nav-bar",{attrs:{title:"商品列表","left-arrow":"",fixed:!0,placeholder:!0},on:{"click-left":t.prev}}),i("div",{staticClass:"navbar"},[i("div",{staticClass:"nav-item",class:{current:0===t.filterIndex},on:{click:function(e){return t.tabClick(0)}}},[t._v(" 综合排序 ")]),i("div",{staticClass:"nav-item",class:{current:1===t.filterIndex},on:{click:function(e){return t.tabClick(1)}}},[t._v(" 销量优先 ")]),i("div",{staticClass:"nav-item",class:{current:2===t.filterIndex},on:{click:function(e){return t.tabClick(2)}}},[i("span",[t._v("价格")]),i("div",{staticClass:"arrow-box"},[i("span",{staticClass:"icon icon-arrow-up",class:{active:1===t.priceOrder&&2===t.filterIndex,"icon-arrow-up-active":1===t.priceOrder&&2===t.filterIndex}}),i("span",{staticClass:"icon icon-arrow-down",class:{active:2===t.priceOrder&&2===t.filterIndex,"icon-arrow-down-active":2===t.priceOrder&&2===t.filterIndex}})])])]),i("div",{staticStyle:{width:"100%",height:"50px"}}),i("div",{staticClass:"pull-refresh-box"},[t.isEmpty?i("van-empty",{attrs:{image:t.emptyImage,description:t.emptyDescription}}):t._e(),t.isEmpty?t._e():i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.loadGoods},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("div",{staticClass:"goods-list-box"},t._l(t.list,(function(e,r){return i("div",{key:r,staticClass:"goods-list-item-box",on:{click:function(i){return t.$router.push({path:"/goods/view/"+e.id})}}},[i("div",{staticClass:"goods-list-item-wrap"},[i("span",[i("img",{attrs:{src:e.photo}})]),i("span",[t._v(t._s(e.title))]),i("span",[t._v("￥"+t._s(e.price))])])])})),0)])],1)],1)],1)},s=[],n=(i("99af"),i("b0c0"),i("ade3")),o=(i("91d5"),i("f0ca")),l=(i("2994"),i("2bdd")),c=(i("ab71"),i("58e6")),d=(i("5246"),i("6b41")),h={name:"GoodsList",components:(r={},Object(n["a"])(r,d["a"].name,d["a"]),Object(n["a"])(r,c["a"].name,c["a"]),Object(n["a"])(r,l["a"].name,l["a"]),Object(n["a"])(r,o["a"].name,o["a"]),r),data:function(){return{isEmpty:!1,emptyImage:"search",emptyDescription:"您搜索的关键字暂无内容",filterIndex:0,priceOrder:1,list:[],loading:!1,finished:!1,refreshing:!1,page:1,cat_id:0}},created:function(){this.cat_id=this.$route.params.id,""==this.cat_id&&this.prev()},methods:{tabClick:function(t){this.filterIndex===t&&2!==t||(this.filterIndex=t,this.priceOrder=2===t?1===this.priceOrder?2:1:0,this.finished=!1,this.refreshing=!0,this.loading=!0,this.loadGoods())},loadGoods:function(){var t=this;this.isEmpty=!1,this.refreshing&&(this.list=[],this.refreshing=!1,this.page=1),this.$http.getGoodsList({page:this.page,id:this.cat_id,type:this.filterIndex,sort:this.priceOrder}).then((function(e){void 0==e.data.list&&1==t.page?(t.isEmpty=!0,t.emptyImage="search",t.emptyDescription="该分类下暂无内容"):1==e.status?(t.list=t.list.concat(e.data.list),t.loading=!1,t.page++):-1==e.status&&(void 0==e.data&&1==t.page?(t.isEmpty=!0,t.emptyImage="search",t.emptyDescription="该分类下暂无内容"):(t.loading=!1,t.finished=!0))})).catch((function(e){t.isEmpty=!0,t.emptyImage="network",t.emptyDescription="网络出错，请检查网络是否连接"}))},onRefresh:function(){var t=this;this.finished=!1,this.loading=!0,setTimeout((function(){t.loadGoods()}),1e3)},prev:function(){this.$tools.prev()}}},f=h,p=(i("7009"),i("2877")),u=Object(p["a"])(f,a,s,!1,null,"5434989b",null);e["default"]=u.exports},5246:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("8a0b")},"5e44":function(t,e,i){},"6b41":function(t,e,i){"use strict";var r=i("d282"),a=i("b1d2"),s=i("ad06"),n=Object(r["a"])("nav-bar"),o=n[0],l=n[1];e["a"]=o({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(s["a"],{class:l("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:l("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:l("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[l({fixed:this.fixed}),(t={},t[a["b"]]=this.border,t)]},[e("div",{class:l("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[l("title"),"van-ellipsis"]},[this.slots("title")||this.title]),e("div",{class:l("right"),on:{click:this.onClickRight}},[this.genRight()])])},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:l("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}})},7009:function(t,e,i){"use strict";var r=i("5e44"),a=i.n(r);a.a},"72cf":function(t,e,i){},"8a0b":function(t,e,i){},"91d5":function(t,e,i){"use strict";i("68ef"),i("72cf")},f0ca:function(t,e,i){"use strict";var r=i("d282"),a={render:function(){var t=arguments[0],e=function(e,i,r){return t("stop",{attrs:{"stop-color":e,offset:i+"%","stop-opacity":r}})};return t("svg",{attrs:{viewBox:"0 0 160 160",xmlns:"http://www.w3.org/2000/svg"}},[t("defs",[t("linearGradient",{attrs:{id:"c",x1:"64.022%",y1:"100%",x2:"64.022%",y2:"0%"}},[e("#FFF",0,.5),e("#F2F3F5",100)]),t("linearGradient",{attrs:{id:"d",x1:"64.022%",y1:"96.956%",x2:"64.022%",y2:"0%"}},[e("#F2F3F5",0,.3),e("#F2F3F5",100)]),t("linearGradient",{attrs:{id:"h",x1:"50%",y1:"0%",x2:"50%",y2:"84.459%"}},[e("#EBEDF0",0),e("#DCDEE0",100,0)]),t("linearGradient",{attrs:{id:"i",x1:"100%",y1:"0%",x2:"100%",y2:"100%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:"k",x1:"100%",y1:"100%",x2:"100%",y2:"0%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:"m",x1:"0%",y1:"43.982%",x2:"100%",y2:"54.703%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:"n",x1:"94.535%",y1:"43.837%",x2:"5.465%",y2:"54.948%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("radialGradient",{attrs:{id:"g",cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54835 0 .5 -.5)"}},[e("#EBEDF0",0),e("#FFF",100,0)])]),t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{opacity:".8"}},[t("path",{attrs:{d:"M0 124V46h20v20h14v58H0z",fill:"url(#c)",transform:"matrix(-1 0 0 1 36 7)"}}),t("path",{attrs:{d:"M40.5 5a8.504 8.504 0 018.13 6.009l.12-.005L49 11a8 8 0 11-1 15.938V27H34v-.174a6.5 6.5 0 11-1.985-12.808A8.5 8.5 0 0140.5 5z",fill:"url(#d)",transform:"translate(2 7)"}}),t("path",{attrs:{d:"M96.016 0a4.108 4.108 0 013.934 2.868l.179-.004c2.138 0 3.871 1.71 3.871 3.818 0 2.109-1.733 3.818-3.871 3.818-.164 0-.325-.01-.484-.03v.03h-6.774v-.083a3.196 3.196 0 01-.726.083C90.408 10.5 89 9.111 89 7.398c0-1.636 1.284-2.976 2.911-3.094a3.555 3.555 0 01-.008-.247c0-2.24 1.842-4.057 4.113-4.057z",fill:"url(#d)",transform:"translate(2 7)"}}),t("path",{attrs:{d:"M121 8h22.231v14H152v77.37h-31V8z",fill:"url(#c)",transform:"translate(2 7)"}})]),t("path",{attrs:{fill:"url(#g)",d:"M0 139h160v21H0z"}}),t("path",{attrs:{d:"M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z",fill:"url(#h)","fill-rule":"nonzero",transform:"translate(43 36)"}}),t("g",{attrs:{opacity:".6","stroke-linecap":"round","stroke-width":"7"}},[t("path",{attrs:{d:"M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#i)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#i)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#k)",transform:"rotate(-180 76.483 42.257)"}}),t("path",{attrs:{d:"M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#k)",transform:"rotate(-180 89.791 42.146)"}})]),t("g",{attrs:{transform:"translate(31 105)","fill-rule":"nonzero"}},[t("rect",{attrs:{fill:"url(#m)",width:"98",height:"34",rx:"2"}}),t("rect",{attrs:{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.114"}}),t("rect",{attrs:{fill:"url(#n)",x:"15",y:"12",width:"18",height:"6",rx:"1.114"}})])])])}},s=Object(r["a"])("empty"),n=s[0],o=s[1],l=["error","search","default"];e["a"]=n({props:{description:String,image:{type:String,default:"default"}},methods:{genImageContent:function(){var t=this.$createElement,e=this.slots("image");if(e)return e;if("network"===this.image)return t(a);var i=this.image;return-1!==l.indexOf(i)&&(i="https://img.yzcdn.cn/vant/empty-image-"+i+".png"),t("img",{attrs:{src:i}})},genImage:function(){var t=this.$createElement;return t("div",{class:o("image")},[this.genImageContent()])},genDescription:function(){var t=this.$createElement,e=this.slots("description")||this.description;if(e)return t("p",{class:o("description")},[e])},genBottom:function(){var t=this.$createElement,e=this.slots();if(e)return t("div",{class:o("bottom")},[e])}},render:function(){var t=arguments[0];return t("div",{class:o()},[this.genImage(),this.genDescription(),this.genBottom()])}})}}]);