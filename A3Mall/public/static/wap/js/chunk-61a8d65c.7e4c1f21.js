(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61a8d65c"],{1148:function(t,e,s){"use strict";var i=s("a691"),n=s("1d80");t.exports="".repeat||function(t){var e=String(n(this)),s="",o=i(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(s+=e);return s}},3264:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.msTime.show?s("p",[t.tipShow?s("span",[t._v(t._s(t.tipText)+":")]):t._e(),t.tipShow?t._e():s("span",[t._v(t._s(t.tipTextEnd)+":")]),t.msTime.day>0?s("span",[s("span",[t._v(t._s(t.msTime.day))]),s("i",[t._v(t._s(t.dayTxt))])]):t._e(),s("span",[t._v(t._s(t.msTime.hour))]),s("i",[t._v(t._s(t.hourTxt))]),s("span",[t._v(t._s(t.msTime.minutes))]),s("i",[t._v(t._s(t.minutesTxt))]),s("span",[t._v(t._s(t.msTime.seconds))]),s("i",[t._v(t._s(t.secondsTxt))])]):t._e(),t.msTime.show?t._e():s("p",[t._v(t._s(t.endText))])])},n=[],o=(s("a9e3"),s("b680"),s("d3b7"),s("25f0"),{name:"CountDown",replace:!0,data:function(){return{tipShow:!0,msTime:{show:!1,day:"",hour:"",minutes:"",seconds:""},star:"",end:"",current:""}},watch:{currentTime:function(t,e){this.gogogo()}},props:{tipText:{type:String,default:"距离开始"},tipTextEnd:{type:String,default:"距离结束"},id:{type:String,default:"1"},currentTime:{type:Number},startTime:{type:Number},endTime:{type:Number},endText:{type:String,default:"已结束"},dayTxt:{type:String,default:":"},hourTxt:{type:String,default:":"},minutesTxt:{type:String,default:":"},secondsTxt:{type:String,default:":"},secondsFixed:{type:Boolean,default:!1}},mounted:function(){this.gogogo()},methods:{gogogo:function(){var t=this;10==this.startTime.toString().length?this.star=1e3*this.startTime:this.star=this.startTime,10==this.endTime.toString().length?this.end=1e3*this.endTime:this.end=this.endTime,this.currentTime?10==this.currentTime.toString().length?this.current=1e3*this.currentTime:this.current=this.currentTime:this.current=(new Date).getTime(),this.end<this.current?(this.msTime.show=!1,this.end_message()):this.current<this.star?(this.$set(this,"tipShow",!0),setTimeout((function(){t.runTime(t.star,t.current,t.start_message)}),1)):(this.end>this.current&&this.star<this.current||this.star==this.current)&&(this.$set(this,"tipShow",!1),this.msTime.show=!0,this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1))},runTime:function(t,e,s,i){var n=this,o=this.msTime,r=t-e;if(r>0){this.msTime.show=!0,o.day=Math.floor(r/864e5),r-=864e5*o.day,o.hour=Math.floor(r/36e5),r-=36e5*o.hour,o.minutes=Math.floor(r/6e4),r-=6e4*o.minutes,o.seconds=Math.floor(r/1e3).toFixed(0),r-=1e3*o.seconds,o.hour<10&&(o.hour="0"+o.hour),o.minutes<10&&(o.minutes="0"+o.minutes),o.seconds<10&&(o.seconds="0"+o.seconds);var a=Date.now(),c=Date.now(),u=c-a;setTimeout((function(){i?n.runTime(n.end,e+=1e3,s,!0):n.runTime(n.star,e+=1e3,s)}),1e3-u)}else s()},start_message:function(){var t=this;this.$set(this,"tipShow",!1),this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1)},end_message:function(){this.msTime.show=!1,this.currentTime<=0||this.$emit("end_callback",this.msTime.show)}}}),r=o,a=s("2877"),c=Object(a["a"])(r,i,n,!1,null,null,null);e["a"]=c.exports},"408a":function(t,e,s){var i=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"4a5a":function(t,e,s){"use strict";s.r(e);var i,n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-nav-bar",{attrs:{title:"商品详情","left-arrow":"",fixed:!0,placeholder:!0,"z-index":9999},on:{"click-left":t.prev}}),s("div",{style:"height:"+t.clientHeight+"px"},[s("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isRefresh,callback:function(e){t.isRefresh=e},expression:"isRefresh"}},[s("van-swipe",{staticClass:"swiper-box",attrs:{autoplay:3e3},on:{change:t.onChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[s("div",{staticClass:"custom-indicator"},[t._v(" "+t._s(t.current+1)+" / "+t._s(t.images.length)+" ")])]},proxy:!0}])},t._l(t.images,(function(t,e){return s("van-swipe-item",{key:e},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])})),1),s("div",{staticClass:"count-down-time"},[s("count-down",{attrs:{currentTime:t.products.now_time,startTime:t.products.start_time,endTime:t.products.end_time,tipText:"离秒杀开始:",tipTextEnd:"离秒杀结束",endText:"秒杀己结束",dayTxt:"天",hourTxt:"小时",minutesTxt:"分钟",secondsTxt:"秒"}})],1),s("div",{staticClass:"goods-info clear"},[s("div",{staticClass:"price"},[s("span",[t._v("￥"),s("i",[t._v(t._s(t.products.sell_price))]),s("strong",[t._v("秒杀价")])])]),s("div",{staticClass:"title"},[t._v(" "+t._s(t.products.title)+" ")]),s("div",{staticClass:"goods-info-box"},[s("span",[t._v("￥"),s("i",[t._v(t._s(t.products.market_price))])]),s("span",[t._v("库存: "+t._s(t.products.store_nums)+"件")]),s("span",[t._v("销量: "+t._s(t.products.sale)+"件")])])]),s("div",{staticClass:"goods-content clear"},[s("div",{staticClass:"title"},[t._v("图文详情")]),s("div",{staticClass:"clear",domProps:{innerHTML:t._s(t.products.content)}},[t._v(" "+t._s(t.products.content)+" ")])])],1)],1),s("van-sku",{attrs:{sku:t.sku,goods:t.goods,"goods-id":t.goodsId,quota:t.quota,"quota-used":t.quotaUsed,"hide-stock":t.sku.hide_stock,"show-add-cart-btn":!1},on:{"buy-clicked":t.onBuyClicked},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}}),s("van-goods-action",[s("van-goods-action-icon",{attrs:{replace:"",to:"/home",icon:"wap-home-o",text:"首页"}}),s("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.skuShow}})],1)],1)},o=[],r=(s("b0c0"),s("ade3")),a=(s("e415"),s("2b5e")),c=(s("ef6f"),s("82a8")),u=(s("591c"),s("7713")),d=(s("93ac"),s("bb33")),h=(s("4b0a"),s("2bb1")),l=(s("7844"),s("5596")),m=(s("5246"),s("6b41")),f=(s("ab71"),s("58e6")),p=(s("66cf"),s("343b")),v=(s("e7e5"),s("d399")),_=s("2b0e"),g=s("3264");v["a"].setDefaultOptions({duration:5e3}),_["a"].use(p["a"]);var T={name:"SecondView",components:(i={},Object(r["a"])(i,f["a"].name,f["a"]),Object(r["a"])(i,m["a"].name,m["a"]),Object(r["a"])(i,l["a"].name,l["a"]),Object(r["a"])(i,h["a"].name,h["a"]),Object(r["a"])(i,d["a"].name,d["a"]),Object(r["a"])(i,u["a"].name,u["a"]),Object(r["a"])(i,c["a"].name,c["a"]),Object(r["a"])(i,a["a"].name,a["a"]),Object(r["a"])(i,g["a"].name,g["a"]),i),data:function(){return{images:[],isShow:!1,collect:"#ccc",cartCount:0,goodsId:1,quota:0,quotaUsed:0,sku:{tree:[],list:[],price:"0.00",stock_num:0,collection_id:0,none_sku:!1,hide_stock:!1},goods:{picture:""},current:0,isRefresh:!1,activityId:0,products:{title:"",sell_price:"",market_price:"",store_nums:"",sale:"",content:"",start_time:0,end_time:0,now_time:0},clientHeight:window.outerHeight-50}},created:function(){var t=this.$storage.get("users",!0);this.cartCount=null!=t?t.shop_count:0,this.onLoad()},methods:{onLoad:function(){var t=this;this.$http.getSecondDetail({id:this.$route.params.id}).then((function(e){e.status&&(t.collect=e.data.collect?"#ff5000":"#ccc",t.products=e.data.goods,t.images=e.data.photo,t.goods.picture=e.data.goods.photo,t.goodsId=t.$route.params.id,t.sku=e.data.sku,t.activityId=e.data.activityId)}))},skuShow:function(){this.isShow=!0},onChange:function(t){this.current=t},onRefresh:function(){var t=this;setTimeout((function(){t.isRefresh=!1,t.onLoad()}),1500)},onBuyClicked:function(t){var e=this;this.$store.dispatch("isUsers").then((function(){e.$router.push({path:"/cart/confirm",query:{id:e.activityId,sku_id:t.selectedSkuComb.id,num:t.selectedNum,type:"second"}})})).catch((function(){e.$storage.set("VUE_REFERER","/second/view/"+e.activityId);e.$router.push("/public/login")}))},prev:function(){this.$tools.prev()}}},b=T,w=(s("5d49"),s("2877")),x=Object(w["a"])(b,n,o,!1,null,"8414be8c",null);e["default"]=x.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("1d80"),n=s("5899"),o="["+n+"]",r=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(t){return function(e){var s=String(i(e));return 1&t&&(s=s.replace(r,"")),2&t&&(s=s.replace(a,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5d49":function(t,e,s){"use strict";var i=s("8855"),n=s.n(i);n.a},7156:function(t,e,s){var i=s("861d"),n=s("d2bb");t.exports=function(t,e,s){var o,r;return n&&"function"==typeof(o=e.constructor)&&o!==s&&i(r=o.prototype)&&r!==s.prototype&&n(t,r),t}},8855:function(t,e,s){},a9e3:function(t,e,s){"use strict";var i=s("83ab"),n=s("da84"),o=s("94ca"),r=s("6eeb"),a=s("5135"),c=s("c6b6"),u=s("7156"),d=s("c04e"),h=s("d039"),l=s("7c73"),m=s("241c").f,f=s("06cf").f,p=s("9bf2").f,v=s("58a8").trim,_="Number",g=n[_],T=g.prototype,b=c(l(T))==_,w=function(t){var e,s,i,n,o,r,a,c,u=d(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(s=u.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+u}for(o=u.slice(2),r=o.length,a=0;a<r;a++)if(c=o.charCodeAt(a),c<48||c>n)return NaN;return parseInt(o,i)}return+u};if(o(_,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var x,y=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof y&&(b?h((function(){T.valueOf.call(s)})):c(s)!=_)?u(new g(w(e)),s,y):w(e)},S=i?m(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;S.length>k;k++)a(g,x=S[k])&&!a(y,x)&&p(y,x,f(g,x));y.prototype=T,T.constructor=y,r(n,_,y)}},b680:function(t,e,s){"use strict";var i=s("23e7"),n=s("a691"),o=s("408a"),r=s("1148"),a=s("d039"),c=1..toFixed,u=Math.floor,d=function(t,e,s){return 0===e?s:e%2===1?d(t,e-1,s*t):d(t*t,e/2,s)},h=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},l=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){c.call({})}));i({target:"Number",proto:!0,forced:l},{toFixed:function(t){var e,s,i,a,c=o(this),l=n(t),m=[0,0,0,0,0,0],f="",p="0",v=function(t,e){var s=-1,i=e;while(++s<6)i+=t*m[s],m[s]=i%1e7,i=u(i/1e7)},_=function(t){var e=6,s=0;while(--e>=0)s+=m[e],m[e]=u(s/t),s=s%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==m[t]){var s=String(m[t]);e=""===e?s:e+r.call("0",7-s.length)+s}return e};if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(f="-",c=-c),c>1e-21)if(e=h(c*d(2,69,1))-69,s=e<0?c*d(2,-e,1):c/d(2,e,1),s*=4503599627370496,e=52-e,e>0){v(0,s),i=l;while(i>=7)v(1e7,0),i-=7;v(d(10,i,1),0),i=e-1;while(i>=23)_(1<<23),i-=23;_(1<<i),v(1,1),_(2),p=g()}else v(0,s),v(1<<-e,0),p=g()+r.call("0",l);return l>0?(a=p.length,p=f+(a<=l?"0."+r.call("0",l-a)+p:p.slice(0,a-l)+"."+p.slice(a-l))):p=f+p,p}})}}]);