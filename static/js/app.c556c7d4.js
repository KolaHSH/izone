(function(t){function e(e){for(var i,r,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)r=s[l],a[r]&&p.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("c21b"),a=n.n(i);a.a},"4dcb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"app"}},[n("Layout",[n("Header",[n("div",{staticClass:"layout-logo"},[t._v("Izone")]),n("div",{staticClass:"layout-nav"},[n("Nav")],1)]),n("router-view")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Menu",{attrs:{mode:"horizontal","active-name":"1",theme:"dark"}},[n("MenuItem",{attrs:{name:"1",to:"/"}},[n("Icon",{attrs:{type:"ios-paper"}}),t._v("\n        首页\n    ")],1),n("MenuItem",{attrs:{name:"2",to:"/img_category"}},[n("Icon",{attrs:{type:"ios-people"}}),t._v("\n        影集\n    ")],1),n("MenuItem",{attrs:{name:"3",to:"/video"}},[n("Icon",{attrs:{type:"ios-people"}}),t._v("\n        视频\n    ")],1),n("MenuItem",{attrs:{name:"4",to:"/about"}},[n("Icon",{attrs:{type:"ios-people"}}),t._v("\n        关于我的\n    ")],1),n("Submenu",{attrs:{name:"5"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-stats"}}),t._v("\n            主题\n        ")],1),n("MenuGroup",{attrs:{title:"使用"}},[n("MenuItem",{attrs:{name:"3-1"}},[t._v("新增和启动")]),n("MenuItem",{attrs:{name:"3-2"}},[t._v("活跃分析")]),n("MenuItem",{attrs:{name:"3-3"}},[t._v("时段分析")])],1),n("MenuGroup",{attrs:{title:"留存"}},[n("MenuItem",{attrs:{name:"3-4"}},[t._v("用户留存")]),n("MenuItem",{attrs:{name:"3-5"}},[t._v("流失用户")])],1)],2)],1)},s=[],c={name:"Nav",data:function(){return{}},created:function(){},methods:{}},u=c,d=n("2877"),l=Object(d["a"])(u,r,s,!1,null,null,null);l.options.__file="Nav.vue";var p=l.exports,h={name:"app",components:{Nav:p},data:function(){return{}},mounted:function(){}},m=h,f=(n("034f"),Object(d["a"])(m,a,o,!1,null,null,null));f.options.__file="App.vue";var v=f.exports,g=n("8c4f"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("canvas",{attrs:{id:"canvas"}}),n("footer",[t._v("\n    宅神个人网站 ©2018 陕ICP备18005197号-1\n  ")])])}],w=(n("4dcb"),n("a481"),n("28a5"),function(){var t=Date.now(),e=t,n=0,i=1/0,a=0,o=0,r=1/0,s=0,c=0,u=0,d=document.createElement("div");d.id="stats",d.addEventListener("mousedown",function(t){t.preventDefault(),y(++u%2)},!1),d.style.cssText="width:80px;opacity:0.9;cursor:pointer";var l=document.createElement("div");l.id="fps",l.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#002",d.appendChild(l);var p=document.createElement("div");p.id="fpsText",p.style.cssText="color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px",p.innerHTML="FPS",l.appendChild(p);var h=document.createElement("div");for(h.id="fpsGraph",h.style.cssText="position:relative;width:74px;height:30px;background-color:#0ff",l.appendChild(h);74>h.children.length;){var m=document.createElement("span");m.style.cssText="width:1px;height:30px;float:left;background-color:#113",h.appendChild(m)}var f=document.createElement("div");f.id="ms",f.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#020;display:none",d.appendChild(f);var v=document.createElement("div");v.id="msText",v.style.cssText="color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px",v.innerHTML="MS",f.appendChild(v);var g=document.createElement("div");for(g.id="msGraph",g.style.cssText="position:relative;width:74px;height:30px;background-color:#0f0",f.appendChild(g);74>g.children.length;){m=document.createElement("span");m.style.cssText="width:1px;height:30px;float:left;background-color:#131",g.appendChild(m)}var y=function(t){switch(u=t){case 0:l.style.display="block",f.style.display="none";break;case 1:l.style.display="none",f.style.display="block"}},x=function(t,e){var n=t.appendChild(t.firstChild);n.style.height=e+"px"};return{REVISION:11,domElement:d,setMode:y,begin:function(){t=Date.now()},end:function(){var u=Date.now();return n=u-t,i=Math.min(i,n),a=Math.max(a,n),v.textContent=n+" MS ("+i+"-"+a+")",x(g,Math.min(30,30-n/200*30)),c++,u>e+1e3&&(o=Math.round(1e3*c/(u-e)),r=Math.min(r,o),s=Math.max(s,o),p.textContent=o+" FPS ("+r+"-"+s+")",x(h,Math.min(30,30-o/100*30)),e=u,c=0),u},update:function(){t=this.end()}}}),b=function(){var t,e,n,i,a,o={},r=[],s={};function c(t){this.init(t||{})}function u(t){this.init(t||{})}function d(t){document.removeEventListener("mousemove",d),document.removeEventListener("touchstart",d),document.addEventListener("mousemove",v),document.addEventListener("touchmove",v),document.addEventListener("touchstart",g),v(t),l(),p()}function l(){r=[];for(var t=0;t<s.trails;t++)r.push(new u({spring:.45+t/s.trails*.025}))}function p(){if(t.running){t.globalCompositeOperation="source-over",t.fillStyle="rgba(8,5,16,0.4)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.globalCompositeOperation="lighter",t.strokeStyle="hsla("+Math.round(e.update())+",90%,50%,0.25)",t.lineWidth=1,t.frame%60==0&&console.log(e.update(),Math.round(e.update()),e.phase,e.offset,e.frequency,e.amplitude);for(var n,i=0;i<s.trails;i++)n=r[i],n.update(),n.draw();t.frame++,t.stats.update(),requestAnimFrame(p)}}function h(){t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight}function m(){t.running||(t.running=!0,p())}function f(){t.running=!1}function v(t){t.touches?(o.x=t.touches[0].pageX,o.y=t.touches[0].pageY):(o.x=t.clientX,o.y=t.clientY),t.preventDefault()}function g(t){1==t.touches.length&&(o.x=t.touches[0].pageX,o.y=t.touches[0].pageY)}function y(t){switch(t.keyCode){case 32:x();break;default:}}function x(){a||(a=document.createElement("canvas"),a.width=screen.availWidth,a.height=screen.availHeight,a.ctx=a.getContext("2d"),i=document.createElement("form"),i.method="post",i.input=document.createElement("input"),i.input.type="hidden",i.input.name="data",i.appendChild(i.input),document.body.appendChild(i)),a.ctx.fillStyle="rgba(8,5,16)",a.ctx.fillRect(0,0,a.width,a.height),a.ctx.drawImage(canvas,Math.round(a.width/2-canvas.width/2),Math.round(a.height/2-canvas.height/2)),a.ctx.drawImage(n,Math.round(a.width/2-n.width/4),Math.round(a.height/2-n.height/4),n.width/2,n.height/2),window.open(a.toDataURL(),"wallpaper","top=0,left=0,width="+a.width+",height="+a.height)}s.debug=!0,s.friction=.5,s.trails=20,s.size=50,s.dampening=.25,s.tension=.98,Math.TWO_PI=2*Math.PI,c.prototype=function(){var t=0;return{init:function(t){this.phase=t.phase||0,this.offset=t.offset||0,this.frequency=t.frequency||.001,this.amplitude=t.amplitude||1},update:function(){return this.phase+=this.frequency,t=this.offset+Math.sin(this.phase)*this.amplitude,t},value:function(){return t}}}(),u.prototype=function(){function e(){this.x=0,this.y=0,this.vy=0,this.vx=0}return{init:function(t){this.spring=t.spring+.1*Math.random()-.05,this.friction=s.friction+.01*Math.random()-.005,this.nodes=[];for(var n,i=0;i<s.size;i++)n=new e,n.x=o.x,n.y=o.y,this.nodes.push(n)},update:function(){var t=this.spring,e=this.nodes[0];e.vx+=(o.x-e.x)*t,e.vy+=(o.y-e.y)*t;for(var n,i=0,a=this.nodes.length;i<a;i++)e=this.nodes[i],i>0&&(n=this.nodes[i-1],e.vx+=(n.x-e.x)*t,e.vy+=(n.y-e.y)*t,e.vx+=n.vx*s.dampening,e.vy+=n.vy*s.dampening),e.vx*=this.friction,e.vy*=this.friction,e.x+=e.vx,e.y+=e.vy,t*=s.tension},draw:function(){var e,n,i=this.nodes[0].x,a=this.nodes[0].y;t.beginPath(),t.moveTo(i,a);for(var o=1,r=this.nodes.length-2;o<r;o++)e=this.nodes[o],n=this.nodes[o+1],i=.5*(e.x+n.x),a=.5*(e.y+n.y),t.quadraticCurveTo(e.x,e.y,i,a);e=this.nodes[o],n=this.nodes[o+1],t.quadraticCurveTo(e.x,e.y,n.x,n.y),t.stroke(),t.closePath()}}}(),window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),window.onload=function(){if(t=document.getElementById("canvas").getContext("2d"),t.stats=new w,t.running=!0,t.frame=1,e=new c({phase:Math.random()*Math.TWO_PI,amplitude:85,frequency:.0015,offset:285}),document.addEventListener("mousemove",d),document.addEventListener("touchstart",d),document.body.addEventListener("orientationchange",h),window.addEventListener("resize",h),window.addEventListener("keyup",y),window.addEventListener("focus",m),window.addEventListener("blur",f),h(),window.DEBUG){new dat.GUI;s.gui.add(s,"trails",1,30).onChange(l),s.gui.add(s,"size",25,75).onFinishChange(l),s.gui.add(s,"friction",.45,.55).onFinishChange(l),s.gui.add(s,"dampening",.01,.4).onFinishChange(l),s.gui.add(s,"tension",.95,.999).onFinishChange(l),document.body.appendChild(t.stats.domElement)}}},_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel1",controls:"",indicators:"",background:"#ababab",interval:4e3,"img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[n("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"http://qiniu.s001.xin/rg4bu.jpg/1024/480"}}),n("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[n("b-jumbotron",{attrs:{header:"年轻！就是要敢拼敢做",lead:"有梦想！就要勇于实现"}},[n("p",[t._v("For more information visit website")]),n("b-btn",{attrs:{variant:"primary",href:"#"}},[t._v("More Info")])],1)],1),n("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),n("b-carousel-slide",[n("img",{staticClass:"d-block img-fluid w-100",attrs:{slot:"img",width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"},slot:"img"})]),n("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[n("p",[t._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n                eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque\n                ut lacus vel interdum.\n            ")])])],1)],1)},E=[],C={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},S=C,M=Object(d["a"])(S,_,E,!1,null,null,null);M.options.__file="Banner.vue";var I=M.exports,k={name:"home",components:{Banner:I},mounted:function(){b()},created:function(){b()}},T=k,L=(n("cccb"),Object(d["a"])(T,y,x,!1,null,null,null));L.options.__file="Home.vue";var O=L.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("大家好，我是宅神👌")]),n("p",[t._v("此网站作为一个个人生活分享的平台，类似于朋友圈")]),n("p",[t._v("放置需要展示或者记录的一些图片，视频等")]),n("p",[t._v("同时也作为平时工作中的技术拓展，逐渐将网站完善。")]),n("h5",[t._v("— 2018.9.24")])])}],R={},q=Object(d["a"])(R,j,P,!1,null,null,null);q.options.__file="About.vue";var F=q.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{staticStyle:{background:"#eee"},attrs:{gutter:16}},t._l(t.cateList,function(e){return n("Col",{key:e.id,staticStyle:{padding:"20px"},attrs:{span:"8"}},[n("Card",[n("div",{staticStyle:{"text-align":"center",cursor:"pointer"},on:{click:function(n){t.Detail(e.id)}}},[n("img",{attrs:{src:"https://picsum.photos/600/300/?image=25",width:"100%"}}),n("h3",[t._v(t._s(e.title))])])])],1)}))},$=[],D=(n("ac6a"),n("bc3a")),U=n.n(D),A=n("4328"),z=n.n(A),H="https://oj.s001.xin/api",V={baseURL:H};function B(t,e,n,i,a){t=t.toUpperCase()||"GET";var o="",r={params:n};return o="msg"===a?V.onbaseURL:V.baseURL,U.a.defaults.baseURL=o,"POST"===t?(U.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",U.a.post(e,z.a.stringify(i))):"GET"===t?U.a.get(e,r):U.a.delete(e,z.a.stringify(i))}var N=function(t){return B("GET","/category/all/",t,"")},W=function(t){return B("GET","/video/all/",t,"")},X=function(t){return B("POST","/image/","",t)},Y={name:"ImgCategory",props:{msg:String},data:function(){return{cateList:[]}},created:function(){this.GetCate()},methods:{GetCate:function(){var t=this;N({}).then(function(e){var n=e.data;0==n.code&&n.data&&n.data.forEach(function(e){t.cateList.push({title:e.title,id:e.id})})})},Detail:function(t){this.$router.push("/photo?id="+t)}}},J=Y,K=(n("8aac"),Object(d["a"])(J,G,$,!1,null,null,null));K.options.__file="ImgCategory.vue";var Q=K.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{attrs:{gutter:16}},t._l(t.imgList,function(e){return n("Col",{key:e.id,staticStyle:{padding:"20px"},attrs:{span:"8"}},[n("viewer",{attrs:{images:t.imgList}},[n("img",{staticStyle:{width:"300px",height:"250px"},attrs:{src:e.url}})])],1)}))},tt=[],et=(n("386d"),n("0808"),n("6944")),nt=n.n(et);i["default"].use(nt.a);var it={name:"ImgDetail",props:{msg:String},data:function(){return{id:"",imgList:[]}},created:function(){this.ImgShow()},methods:{ImgShow:function(){var t=document.location.search;t&&(this.id=decodeURIComponent(t.split("=")[1]),this.GetAllImg(this.id))},GetAllImg:function(t){var e=this;X({id:t}).then(function(t){var n=t.data;0==n.code&&n.data&&n.data.forEach(function(t){e.imgList.push({desc:t.desc,id:t.id,url:t.image_url})})})}}},at=it,ot=Object(d["a"])(at,Z,tt,!1,null,null,null);ot.options.__file="ImgDetail.vue";var rt=ot.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{staticStyle:{background:"#eee"},attrs:{gutter:16}},t._l(t.video_list,function(e){return n("Col",{key:e.id,staticStyle:{padding:"20px"},attrs:{span:"8"}},[n("Card",[n("div",{staticStyle:{"text-align":"center",cursor:"pointer"},attrs:{id:e.id},on:{click:function(n){t.ImgShow(e.video_url)}}},[n("img",{attrs:{src:e.small_img,height:"150px"}}),n("h3",[t._v(t._s(e.desc))])])])],1)}))},ct=[],ut={name:"Video",props:{msg:String},data:function(){return{video_list:[]}},created:function(){this.getVideo()},methods:{getVideo:function(){var t=this;W({}).then(function(e){var n=e.data;n.code||n.data&&n.data.forEach(function(e){t.video_list.push({id:e.id,desc:"【"+e.desc+"】",time_long:e.time_long,video_url:e.video_url,small_img:e.small_img?e.small_img:"https://picsum.photos/1024/480/?image=54"})})})},ImgShow:function(t){this.$router.push("/iframe?url="+t)}}},dt=ut,lt=(n("8a44"),Object(d["a"])(dt,st,ct,!1,null,null,null));lt.options.__file="Video.vue";var pt=lt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",[n("md-card-media",[n("div",{staticClass:"item"},[n("div",{staticClass:"player"},[n("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:t.playerOptions,playsinline:!0}})],1)])])],1)},mt=[],ft=(n("71c2"),n("fda2"),n("d6d3")),vt={name:"VideoDetail",props:{msg:String},components:{videoPlayer:ft["videoPlayer"]},data:function(){return{url:"",playerOptions:{height:"360",autoplay:!0,muted:!1,language:"en",playbackRates:[.7,1,1.5,2],sources:[{type:"video/mp4",src:""}]}}},created:function(){this.ImgShow()},methods:{ImgShow:function(){var t=document.location.search;t&&(this.playerOptions.sources[0].src=decodeURIComponent(t.split("=")[1]))}}},gt=vt,yt=Object(d["a"])(gt,ht,mt,!1,null,null,null);yt.options.__file="VideoDetail.vue";var xt=yt.exports;i["default"].use(g["a"]);var wt=[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:F},{path:"/img_category",name:"category",component:Q},{path:"/photo",name:"photo",component:rt},{path:"/video",name:"video",component:pt},{path:"/iframe",name:"video_show",component:xt}],bt=new g["a"]({mode:"history",routes:wt}),_t=bt,Et=n("2f62");i["default"].use(Et["a"]);var Ct=new Et["a"].Store({state:{},mutations:{},actions:{}}),St=n("e069"),Mt=n.n(St);n("dcad"),n("a766");i["default"].use(Mt.a),i["default"].config.productionTip=!1,new i["default"]({router:_t,store:Ct,render:function(t){return t(v)}}).$mount("#app")},"71c2":function(t,e,n){},"8a44":function(t,e,n){"use strict";var i=n("b99c"),a=n.n(i);a.a},"8aac":function(t,e,n){"use strict";var i=n("b5b3"),a=n.n(i);a.a},"8f59":function(t,e,n){},9:function(t,e){},a766:function(t,e,n){},b5b3:function(t,e,n){},b99c:function(t,e,n){},c21b:function(t,e,n){},cccb:function(t,e,n){"use strict";var i=n("8f59"),a=n.n(i);a.a}});
//# sourceMappingURL=app.c556c7d4.js.map