(function(n){function o(o){for(var e,l,s=o[0],c=o[1],i=o[2],d=0,k=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(t,l)&&t[l]&&k.push(t[l][0]),t[l]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(n[e]=c[e]);u&&u(o);while(k.length)k.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var n,o=0;o<a.length;o++){for(var r=a[o],e=!0,s=1;s<r.length;s++){var c=r[s];0!==t[c]&&(e=!1)}e&&(a.splice(o--,1),n=l(l.s=r[0]))}return n}var e={},t={app:0},a=[];function l(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=n,l.c=e,l.d=function(n,o,r){l.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:r})},l.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,o){if(1&o&&(n=l(n)),8&o)return n;if(4&o&&"object"===typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&o&&"string"!=typeof n)for(var e in n)l.d(r,e,function(o){return n[o]}.bind(null,e));return r},l.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return l.d(o,"a",o),o},l.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},l.p="/vue-navbar/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=o,s=s.slice();for(var i=0;i<s.length;i++)o(s[i]);var u=c;a.push(["8c94","chunk-vendors"]),r()})({"1b0c":function(n,o,r){"use strict";var e=r("c8f8"),t=r.n(e);t.a},"42df":function(n,o,r){},"8c94":function(n,o,r){"use strict";r.r(o);var e=r("2b0e"),t=function(){var n=this,o=n.$createElement,r=n._self._c||o;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"content"},[r("div",[r("vue-navbar",{staticClass:"navbar",attrs:{logo:n.logo,links:n.links,darkBackground:!0,logoTextClass:"logo-text",logoImgClass:"logo-img",linkClass:"navbar-link",dropdownBackgroundColor:"rgba(0, 0, 0, 0.4)",onHover:"slide"}})],1),n._m(0)])])},a=[function(){var n=this,o=n.$createElement,r=n._self._c||o;return r("div",{staticClass:"footer"},[r("p",[n._v("Photo by "),r("a",{attrs:{href:"https://unsplash.com/@sotti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[n._v("Shifaaz shamoon")]),n._v(" on "),r("a",{attrs:{href:"https://unsplash.com/s/photos/model?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[n._v("Unsplash")])])])}],l=function(){var n=this,o=n.$createElement,r=n._self._c||o;return r("nav",{staticClass:"vue-navbar-container",on:{click:n.focusNavbar}},[r("div",{staticClass:"vue-navbar"},[r("div",{staticClass:"vue-navbar-logo-container"},[r("div",{staticClass:"vue-navbar-logo",class:[{clickable:n.logo.click},n.darkBackground?"light-text":"dark-text"],on:{click:n.logoClick}},[n.logo.img?r("img",{staticClass:"vue-navbar-logo-img",class:n.logoImgClass,attrs:{src:n.logo.img}}):n._e(),n.logo.text?r("h2",{class:n.logoTextClass},[n._v(" "+n._s(n.logo.text)+" ")]):n._e()])]),r("LinksContainer",{staticClass:"normal-view-links",attrs:{links:n.links,collapsed:!1,darkBackground:n.darkBackground,onHover:n.onHover,linkClass:n.linkClass,dropdownBackgroundColor:n.dropdownBackgroundColor}}),r("LinksContainer",{staticClass:"collapse-view-links",attrs:{links:n.links,collapsed:!0,darkBackground:n.darkBackground,onHover:n.onHover,linkClass:n.linkClass,dropdownBackgroundColor:n.dropdownBackgroundColor}})],1)])},s=[],c=function(){var n=this,o=n.$createElement,r=n._self._c||o;return r("div",{staticClass:"vue-navbar-links-container"},[n.collapsed?r("div",{staticClass:"toggle-collapse",on:{click:function(o){n.expanded=!n.expanded}}},n._l(3,(function(o){return r("div",{key:o,staticClass:"line",class:[n.darkBackground?"light-background":"dark-background"]})})),0):n._e(),r("Links",{class:{"overflow-hidden":n.collapsed&&!n.expanded},style:{height:n.height},attrs:{links:n.links,collapsed:n.collapsed,onHover:n.onHover,darkBackground:n.darkBackground,dropdownBackgroundColor:n.dropdownBackgroundColor,linkClass:n.linkClass}}),r("Links",{ref:"ghostLinks",staticClass:"ghost",attrs:{links:n.links,collapsed:!0,onHover:n.onHover,darkBackground:n.darkBackground,dropdownBackgroundColor:n.dropdownBackgroundColor,linkClass:n.linkClass}})],1)},i=[],u=function(){var n=this,o=n.$createElement,r=n._self._c||o;return r("div",{staticClass:"vue-navbar-links",class:[n.collapsed?"vue-navbar-links-collapse-view":"vue-navbar-links-normal-view"]},n._l(n.links,(function(o,e){return r("div",{key:e,staticClass:"vue-navbar-link-container"},[r("Link",{attrs:{link:o,darkBackground:n.darkBackground,linkClass:n.linkClass,onHover:n.onHover}}),o.dropdown?r("div",{staticClass:"vue-navbar-dropdown-container"},[r("div",{staticClass:"vue-navbar-dropdown box-shadow",class:[n.darkBackground?"dark-background":"light-background"],style:{"background-color":n.dropdownBackground}},n._l(o.dropdown,(function(o,e){return r("Link",{key:e,attrs:{link:o,linkClass:n.linkClass,onHover:n.onHover,darkBackground:n.darkBackground}})})),1)]):n._e()],1)})),0)},d=[],k=function(){var n=this,o=n.$createElement,r=n._self._c||o;return r("div",{staticClass:"vue-navbar-link"},[r("button",{staticClass:"vue-navbar-button",class:[n.linkClass,{clickable:n.link.click,"with-background":n.link.click&&("slide"===n.onHover||"fade"===n.onHover)},n.darkBackground?"light-text":"dark-text"],on:{click:function(o){return n.buttonClick(n.link)}}},[n._v(" "+n._s(n.link.name)+" ")]),n.link.click?r("div",{staticClass:"vue-navbar-button-background",class:[n.darkBackground?"light-background":"dark-background",{"vue-navbar-button-underline":"slide-underline"===n.onHover||"fade-underline"===n.onHover,"slide-background":"slide"===n.onHover||"slide-underline"===n.onHover,"fade-background":"fade"===n.onHover||"fade-underline"===n.onHover}]}):n._e()])},g=[],v={props:["link","dark-background","linkClass","onHover"],methods:{buttonClick:function(n){n.click&&n.click()}}},f=v,p=(r("ff1b"),r("2877")),b=Object(p["a"])(f,k,g,!1,null,"5b8c2196",null),h=b.exports,C="#fefefe",m="#262626",w={components:{Link:h},props:["links","collapsed","darkBackground","onHover","linkClass","dropdownBackgroundColor"],computed:{dropdownBackground:function(){return this.dropdownBackgroundColor?this.dropdownBackgroundColor:this.darkBackground?m:C}}},_=w,B=(r("fef0"),Object(p["a"])(_,u,d,!1,null,"139c469a",null)),y=B.exports,x={components:{Links:y},props:["links","collapsed","darkBackground","onHover","linkClass","dropdownBackgroundColor"],data:function(){return{expanded:!1}},computed:{height:function(){return this.collapsed?this.expanded?this.collapseViewHeight()+"px":"0px":"auto"}},methods:{collapseViewHeight:function(){return this.$refs.ghostLinks.$el.offsetHeight}},mounted:function(){}},H=x,O=(r("ff15"),Object(p["a"])(H,c,i,!1,null,"00791f74",null)),j=O.exports,S={name:"VueNavbar",components:{LinksContainer:j},props:{logo:{type:Object,default:{}},links:{type:Array,default:[]},darkBackground:{type:Boolean,default:!0},onHover:{type:String,default:"slide"},logoTextClass:[String,Array,Object],logoImgClass:[String,Array,Object],linkClass:[String,Array,Object],dropdownBackgroundColor:String},methods:{logoClick:function(){this.logo.click&&this.logo.click()},focusNavbar:function(){this.$el.focus()}}},L=S,$=(r("b1b5"),Object(p["a"])(L,l,s,!1,null,"379aac3f",null)),P=$.exports,T=[{name:"Store",click:function(){return console.log("store clicked")}},{name:"Gallery",click:function(){return console.log("gallery clicked")}},{name:"About",dropdown:[{name:"Our story",click:function(){return console.log("our story clicked")}},{name:"Contact",click:function(){return console.log("contact clicked")}}]}],E=e["a"].extend({name:"ServeDev",components:{VueNavbar:P},data:function(){return{logo:{img:r("cf05"),click:function(){return console.log("logo clicked")}},links:T}}}),A=E,M=(r("1b0c"),Object(p["a"])(A,t,a,!1,null,null,null)),N=M.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(n){return n(N)}}).$mount("#app")},"8dca":function(n,o,r){},b1b5:function(n,o,r){"use strict";var e=r("de08"),t=r.n(e);t.a},c4b5:function(n,o,r){},c8f8:function(n,o,r){},cf05:function(n,o,r){n.exports=r.p+"img/logo.9b15a20d.png"},de08:function(n,o,r){},fef0:function(n,o,r){"use strict";var e=r("c4b5"),t=r.n(e);t.a},ff15:function(n,o,r){"use strict";var e=r("8dca"),t=r.n(e);t.a},ff1b:function(n,o,r){"use strict";var e=r("42df"),t=r.n(e);t.a}});
//# sourceMappingURL=app.3cf2fb11.js.map