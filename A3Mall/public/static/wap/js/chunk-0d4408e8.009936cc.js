(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d4408e8"],{5246:function(t,i,e){"use strict";e("68ef"),e("9d70"),e("3743"),e("8a0b")},"6b41":function(t,i,e){"use strict";var n=e("d282"),s=e("b1d2"),a=e("ad06"),o=Object(n["a"])("nav-bar"),l=o[0],r=o[1];i["a"]=l({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,i=this.slots("left");return i||[this.leftArrow&&t(a["a"],{class:r("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:r("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,i=this.slots("right");return i||(this.rightText?t("span",{class:r("text")},[this.rightText]):void 0)},genNavBar:function(){var t,i=this.$createElement;return i("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[r({fixed:this.fixed}),(t={},t[s["b"]]=this.border,t)]},[i("div",{class:r("left"),on:{click:this.onClickLeft}},[this.genLeft()]),i("div",{class:[r("title"),"van-ellipsis"]},[this.slots("title")||this.title]),i("div",{class:r("right"),on:{click:this.onClickRight}},[this.genRight()])])},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:r("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}})},"8a0b":function(t,i,e){},a24e:function(t,i,e){},c818:function(t,i,e){"use strict";e.r(i);var n,s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("van-nav-bar",{attrs:{title:"我的积分","left-arrow":"",fixed:!0,placeholder:!0},on:{"click-left":t.prev}}),e("div",{staticClass:"top"},[e("div",{staticClass:"top-box"},[e("span",[t._v("可用积分")]),e("span",[t._v(t._s(t.point))])])]),e("div",{staticClass:"list-wrap"},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},[e("div",{staticClass:"point-list"},t._l(t.list,(function(i,n){return e("div",{key:n,staticClass:"point-item clear"},[e("div",{staticClass:"t"},[e("span",[t._v(t._s(i.time))]),e("span",[t._v("类型："+t._s(i.operation))])]),e("div",{staticClass:"m"},[t._v(" "+t._s(i.description)+" ")]),e("div",{staticClass:"b"},[e("span",[t._v(t._s(i.point))])])])})),0)])],1)],1)},a=[],o=(e("99af"),e("b0c0"),e("ade3")),l=(e("c194"),e("7744")),r=(e("2994"),e("2bdd")),c=(e("5246"),e("6b41")),d={name:"Point",components:(n={},Object(o["a"])(n,c["a"].name,c["a"]),Object(o["a"])(n,r["a"].name,r["a"]),Object(o["a"])(n,l["a"].name,l["a"]),n),data:function(){return{list:[],loading:!1,finished:!1,point:0,page:1}},created:function(){this.point=this.$storage.get("users.point",!0,0)},methods:{prev:function(){this.$tools.prev()},onLoad:function(){var t=this;this.$http.getUcenterPointList({page:this.page}).then((function(i){t.loading=!1,void 0==i.data.list&&1==t.page?t.finished=!0:1==i.status?(t.list=t.list.concat(i.data.list),t.page++,t.point=i.data.point):-1==i.status&&(t.finished=!0)})).catch((function(i){t.loading=!1,t.finished=!0}))}}},h=d,f=(e("d903"),e("2877")),u=Object(f["a"])(h,s,a,!1,null,"63adceb2",null);i["default"]=u.exports},d903:function(t,i,e){"use strict";var n=e("a24e"),s=e.n(n);s.a}}]);