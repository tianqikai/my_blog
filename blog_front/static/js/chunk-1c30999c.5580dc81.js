(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c30999c","chunk-1ad64508"],{"093a":function(t,e,a){"use strict";var o=a("b775"),s="video";e["a"]={save:function(t){return Object(o["a"])({url:"/".concat(s,"/save"),method:"post",data:t})},update:function(t){return Object(o["a"])({url:"/".concat(s,"/update"),method:"put",data:t})},deleteById:function(t){return Object(o["a"])({url:"/".concat(s,"/delete/").concat(t),method:"delete"})},get:function(t){return Object(o["a"])({url:"/".concat(s,"/get/").concat(t),method:"get"})},enableById:function(t){return Object(o["a"])({url:"/".concat(s,"/enable/").concat(t),method:"put"})},getByPage:function(t){return Object(o["a"])({url:"/".concat(s,"/getByPage"),method:"post",data:t})},disableById:function(t){return Object(o["a"])({url:"/".concat(s,"/disable/").concat(t),method:"put"})}}},"182b":function(t,e,a){},"3d68":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-list-container"},t._l(t.blogList,(function(e){return a("a-card",{key:e.blogId,staticClass:"blog-card",attrs:{"body-style":t.blogBodyStyle}},[a("div",{staticClass:"blog-main"},[e.blogImage?a("div",{staticClass:"blog-image"},[a("img",{staticClass:"blog-cover",attrs:{src:e.blogImage}})]):t._e(),a("router-link",{class:e.blogImage?"image-blog":"blog-container",attrs:{to:"/info/"+e.blogId}},[a("div",{staticClass:"blog-title"},[t._v(t._s(e.blogTitle))]),a("div",{staticClass:"blog-comment"},[t._v(t._s(e.blogRemark))]),a("div",{staticClass:"blog-bottom"},[a("div",{staticClass:"blog-type"},[t._v(" 分类："),a("a-tag",{attrs:{color:"green"}},[t._v(t._s(e.typeName))])],1),a("div",{staticClass:"blog-meta"},[a("div",{staticClass:"blog-time"},[t._v(t._s(t._f("formatDate")(e.createdTime)))]),a("div",{staticClass:"blog-other"},[a("a-icon",{attrs:{type:"eye"}}),t._v(" "+t._s(e.blogRead)+" "),a("a-icon",{attrs:{type:"heart"}}),t._v(" "+t._s(e.blogCollection)+" "),a("a-icon",{attrs:{type:"like"}}),t._v(" "+t._s(e.blogGoods)+" "),a("a-icon",{attrs:{type:"message"}}),t._v(" "+t._s(e.blogComment)+" ")],1)])])])],1)])})),1)},s=[],n={props:["blogList","flag"],data:function(){return{blogBodyStyle:{padding:"18px"}}},created:function(){console.log("created flag :"+this.flag)},mounted:function(){this.setCss()},methods:{setCss:function(){var t=this,e=t.flag;a(1===e?"6605":"8214")}}},i=n,l=(a("e130"),a("2877")),r=Object(l["a"])(i,o,s,!1,null,"fecb5104",null);e["a"]=r.exports},"42d5":function(t,e,a){"use strict";a("8e3e")},"626c":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"button-container"},[a("div",{staticClass:"button-text"},[t._v(t._s(t.name))]),a("div",{staticClass:"button-menu"},[a("a-menu",{attrs:{mode:"horizontal"},on:{click:t.changeSort},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},[a("a-menu-item",{key:"createdTime"},[t._v(" 最新 ")]),a("a-menu-item",{key:"blogGoods"},[t._v(" 点赞最多 ")]),a("a-menu-item",{key:"blogComment"},[t._v(" 评论最多 ")]),a("a-menu-item",{key:"blogRead"},[t._v(" 阅读最多 ")]),a("a-menu-item",{key:"blogCollection"},[t._v(" 收藏最多 ")])],1)],1)]),a("div",{staticClass:"TypeBlogList"},[a("blog",{attrs:{"blog-list":t.blogList,flag:1}})],1),a("div",{staticClass:"blog-pagination"},[a("a-pagination",{attrs:{"show-total":function(t){return"共 "+t+" 条"},"show-quick-jumper":"","default-current":1,total:t.page.totalCount},on:{change:t.pageChange}})],1)])},s=[],n=a("864d"),i=a("3d68"),l={components:{Blog:i["a"]},props:{name:{type:String,default:"博客"}},data:function(){return{current:["createdTime"],blogBodyStyle:{padding:"18px"},page:{currentPage:1,pageSize:10,totalCount:0,totalPage:0,params:{},sortColumn:"createdTime",sortMethod:"desc",list:[]},blogList:[]}},created:function(){this.$route.params.type&&(this.page.params.typeId=this.$route.params.type),this.getByPage()},methods:{pageChange:function(t){this.page.currentPage=t,this.getByPage()},getByPage:function(){var t=this;n["a"].getByPage(this.page).then((function(e){t.page=e.data,t.blogList=t.page.list}))},changeSort:function(t){this.page.sortColumn=t.key,this.getByPage()}}},r=l,c=(a("42d5"),a("2877")),u=Object(c["a"])(r,o,s,!1,null,"9af26422",null);e["default"]=u.exports},6605:function(t,e,a){},"76c8":function(t,e,a){},8184:function(t,e,a){"use strict";a("182b")},8214:function(t,e,a){},"8e3e":function(t,e,a){},bd72:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"contain-title"},[o("div",{staticClass:"swiper"},[o("swiper",{attrs:{options:t.swiperOption}},[o("swiper-slide",[o("img",{attrs:{src:a("ffd4")}})]),o("swiper-slide",[o("img",{attrs:{src:a("ffd4")}})]),o("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),o("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),o("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}),o("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"})],1)],1),o("div",{staticClass:"video-Player"},[o("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:t.playerOptions},on:{play:function(e){return t.onPlayerPlay(e)},pause:function(e){return t.onPlayerPause(e)}}})],1)]),o("div",[o("blog",{attrs:{"component-name":"博客"}})],1)])},s=[],n=a("626c"),i=a("093a"),l={components:{Blog:n["default"]},data:function(){return{playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"4:3",fluid:!0,sources:[{type:"video/mp4",src:"http://49.232.21.151/group1/M00/00/00/rBUAEGBWBMmASf67ADfppletxbE074.mp4"}],hls:!0,poster:"http://49.232.21.151/group1/M00/00/00/rBUAEGBWBL-AZky_AACIH9Hg8Us464.jpg",width:document.documentElement.clientWidth,notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,progressControl:!0,fullscreenToggle:!0}},swiperOption:{pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,hideOnClick:!0},speed:2e3,autoplay:2e3,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},created:function(){this.getVideoByID()},methods:{getVideoByID:function(){var t=this;i["a"].get(1).then((function(e){t.playerOptions.sources[0].src=e.data.url,t.playerOptions.poster=e.data.cover}))}}},r=l,c=(a("8184"),a("2877")),u=Object(c["a"])(r,o,s,!1,null,"2baf653e",null);e["default"]=u.exports},e130:function(t,e,a){"use strict";a("76c8")},ffd4:function(t,e,a){t.exports=a.p+"static/img/carousel.8ff235aa.gif"}}]);