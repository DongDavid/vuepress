(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{55:function(e,a,l){"use strict";l.r(a);var n=l(0),t=Object(n.a)({},function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"flex布局"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#flex布局","aria-hidden":"true"}},[e._v("#")]),e._v(" flex布局")]),e._v(" "),l("blockquote",[l("p",[e._v("css属性flex的应用")])]),e._v(" "),l("h2",{attrs:{id:"目录"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[e._v("#")]),e._v(" 目录")]),e._v(" "),l("h2",{attrs:{id:"flex布局是一个很好用的布局-这里放上一些代码例子。"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#flex布局是一个很好用的布局-这里放上一些代码例子。","aria-hidden":"true"}},[e._v("#")]),e._v(" flex布局是一个很好用的布局,这里放上一些代码例子。")]),e._v(" "),l("pre",[l("code",[e._v('.box { display: flex; } \n.box { display: flex; justify-content: center; } \n\n.box { display: flex; justify-content: flex-end; } \n\n.box { display: flex; align-items: center; } \n\n.box { display: flex; justify-content: center; align-items: center; } \n\n.box { display: flex; justify-content: center; align-items: flex-end; } \n\n.box { display: flex; justify-content: flex-end; align-items: flex-end; } \n\n.box { display: flex; justify-content: space-between; } \n\n.box { display: flex; flex-direction: column; justify-content: space-between; } \n\n.box { display: flex; flex-direction: column; justify-content: space-between; align-items: center; } \n\n.box { display: flex; flex-direction: column; justify-content: space-between; align-items: flex-end; } \n\n.box { display: flex; } .item:nth-child(2) { align-self: center; } \n\n.box { display: flex; justify-content: space-between; } .item:nth-child(2) { align-self: flex-end; } \n\n.box { display: flex; } .item:nth-child(2) { align-self: center; } .item:nth-child(3) { align-self: flex-end; } \n\n.box { display: flex; flex-wrap: wrap; justify-content: flex-end; align-content: space-between; } \n\n<div class="box"> <div class="column"> <span class="item"></span> <span class="item"></span> </div> <div class="column"> <span class="item"></span> <span class="item"></span> </div> </div> \n.box { display: flex; flex-wrap: wrap; align-content: space-between; } .column { flex-basis: 100%; display: flex; justify-content: space-between; } \n\n.box { display: flex; flex-wrap: wrap; align-content: space-between; } \n\n.box { display: flex; flex-direction: column; flex-wrap: wrap; align-content: space-between; } \n\n<div class="box"> <div class="row"> <span class="item"></span> <span class="item"></span> <span class="item"></span> </div> <div class="row"> <span class="item"></span> </div> <div class="row"> <span class="item"></span> <span class="item"></span> </div> </div> \n.box { display: flex; flex-wrap: wrap; } .row{ flex-basis: 100%; display:flex; } .row:nth-child(2){ justify-content: center; } .row:nth-child(3){ justify-content: space-between; } \n\n.box { display: flex; flex-wrap: wrap; } \n')])]),e._v(" "),l("h2",{attrs:{id:"基本网格布局"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#基本网格布局","aria-hidden":"true"}},[e._v("#")]),e._v(" 基本网格布局")]),e._v(" "),l("pre",[l("code",[e._v('<div class="Grid"> <div class="Grid-cell">...</div> <div class="Grid-cell">...</div> <div class="Grid-cell">...</div> </div> \n.Grid { display: flex; } .Grid-cell { flex: 1; }  \n')])]),e._v(" "),l("h2",{attrs:{id:"百分比布局"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#百分比布局","aria-hidden":"true"}},[e._v("#")]),e._v(" 百分比布局")]),e._v(" "),l("pre",[l("code",[e._v('<div class="Grid"> <div class="Grid-cell u-1of4">...</div> <div class="Grid-cell">...</div> <div class="Grid-cell u-1of3">...</div> </div> \n.Grid { display: flex; } .Grid-cell { flex: 1; } .Grid-cell.u-full { flex: 0 0 100%; } .Grid-cell.u-1of2 { flex: 0 0 50%; } .Grid-cell.u-1of3 { flex: 0 0 33.3333%; } .Grid-cell.u-1of4 { flex: 0 0 25%; } \n')])]),e._v(" "),l("h2",{attrs:{id:"圣杯布局"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#圣杯布局","aria-hidden":"true"}},[e._v("#")]),e._v(" 圣杯布局")]),e._v(" "),l("p",[e._v("圣杯布局（Holy Grail Layout）指的是一种最常见的网站布局。页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）。其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏。")]),e._v(" "),l("pre",[l("code",[e._v('<body class="HolyGrail"> <header>...</header> <div class="HolyGrail-body"> <main class="HolyGrail-content">...</main> <nav class="HolyGrail-nav">...</nav> <aside class="HolyGrail-ads">...</aside> </div> <footer>...</footer> </body> \n.HolyGrail { display: flex; min-height: 100vh; flex-direction: column; } header, footer { flex: 1; } .HolyGrail-body { display: flex; flex: 1; } .HolyGrail-content { flex: 1; } .HolyGrail-nav, .HolyGrail-ads { /* 两个边栏的宽度设为12em */ flex: 0 0 12em; } .HolyGrail-nav { /* 导航放到最左边 */ order: -1; } \n')])]),e._v(" "),l("h2",{attrs:{id:"悬挂式布局"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#悬挂式布局","aria-hidden":"true"}},[e._v("#")]),e._v(" 悬挂式布局")]),e._v(" "),l("pre",[l("code",[e._v('<div class="Media"> <img class="Media-figure" src="" alt=""> <p class="Media-body">...</p> </div> \n.Media { display: flex; align-items: flex-start; } .Media-figure { margin-right: 1em; } .Media-body { flex: 1; } \n')])]),e._v(" "),l("h2",{attrs:{id:"固定底栏"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#固定底栏","aria-hidden":"true"}},[e._v("#")]),e._v(" 固定底栏")]),e._v(" "),l("pre",[l("code",[e._v('<body class="Site"> <header>...</header> <main class="Site-content">...</main> <footer>...</footer> </body> \n.Site { display: flex; min-height: 100vh; flex-direction: column; } .Site-content { flex: 1; } \n')])]),e._v(" "),l("h2",{attrs:{id:"参考资料"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),l("p",[l("a",{attrs:{href:"http://makaidong.com/fan-fan/122_2461324.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考站点1"),l("OutboundLink")],1)]),e._v(" "),l("p",[l("a",{attrs:{href:"http://www.runoob.com/w3cnote/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考站点2"),l("OutboundLink")],1)]),e._v(" "),l("p",[l("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考站点3"),l("OutboundLink")],1)])])},[],!1,null,null,null);a.default=t.exports}}]);