(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)a=s[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);h&&h(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3f6fddba"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"2c802e3c"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete a[t],h.parentNode.removeChild(h),n(i)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t),c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[t]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"0430":function(t,e,n){"use strict";var r=n("6a2b"),a=n.n(r);a.a},1787:function(t,e,n){},"23a1":function(t,e,n){},"28e3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("a",{attrs:{href:"#home"}},[t._v("Home")]),t._v("|\n     \t"),n("a",{attrs:{href:"#about"}},[t._v("About")]),t._v("|\n     \t"),n("a",{attrs:{href:"#projects"}},[t._v("Projects")]),t._v("|\n     \t"),n("a",{attrs:{href:"#contact"}},[t._v("Contact")])])}],u={name:"Header"},c=u,l=(n("ee35"),n("2877")),f=Object(l["a"])(c,i,s,!1,null,"4e5047c1",null),h=f.exports,d={name:"app",components:{Header:h}},p=d,m=(n("034f"),Object(l["a"])(p,a,o,!1,null,null,null)),v=m.exports,b=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("HomeIntro"),n("HomeContent"),n("Projects"),n("Contact")],1)},g=[],y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-intro"},[n("h1",[t._v("Damian Hii")]),n("h3",[t._v("UC Irvine Computer Science '19. Hoping to impact the lives of everyday people through the software I create, with interest in full stack web development.")])])}],w={name:"HomeIntro"},C=w,E=(n("8692"),Object(l["a"])(C,y,j,!1,null,"fb61fce0",null)),k=E.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root",attrs:{id:"about"}},[n("div",{staticClass:"home-text"},[n("h1",[t._v("Hi there!")]),t._v(" \n\t\t\tI'm a fourth year undergraduate student at UC Irvine, graduating in Spring 2019 with a B.S. in Computer Science. I would love to impact the lives of everyday individuals through my work, while working in an evironment that emphasizes team success that also fosters my individual growth. If you'd like to chat more, don't hesitate to reach out. \n\t\t")]),n("div",{staticClass:"home-image"})])}],S={name:"HomeContent"},P=S,H=(n("0430"),Object(l["a"])(P,x,O,!1,null,"6603ad96",null)),$=H.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root",attrs:{id:"projects"}},[n("div",{staticClass:"projects-content"},[n("h1",[t._v("Projects")]),n("div",{staticClass:"projects-list"},[n("ul",[n("li",[t._v("\n\t  \t\t\t\tToDos App\n\t\t\t\t\t"),n("ul",{staticClass:"nested"},[n("li",[t._v("Simple todos app")]),n("li",[t._v("Vue.js, Node.js, Express.js, MongoDB/Couchbase, deployed on Heroku")]),n("li",[n("a",{attrs:{href:"http://damians-todos.herokuapp.com"}},[t._v("Deployed")]),t._v(", \n\t\t\t\t\t\t\t"),n("a",{attrs:{href:"https://github.com/hiidamian1/ToDo-App-FullStack"}},[t._v("Github")])])])]),n("li",[t._v("Bar Chart Webpage\n\t\t\t\t\t"),n("ul",{staticClass:"nested"},[n("li",[t._v("Stacked Bar Chart for visualizing data from Foodmart dataset")]),n("li",[t._v("D3.js, Node.js, Express.js, MySQL")]),n("li",[n("a",{attrs:{href:"https://github.com/hiidamian1/Bar-Chart-Webpage"}},[t._v("Github")])])])]),n("li",[t._v("Portfolio Website\n\t  \t\t\t\t"),n("ul",{staticClass:"nested"},[n("li",[t._v("Showcasing my interests and who I am")]),n("li",[t._v("Vue.js, deployed on Netlify, Node.js(planned), Express.js(planned)")]),n("li",[n("a",{attrs:{href:"https://github.com/hiidamian1/Website"}},[t._v("Github")])])])])])])])])}],B={name:"Projects"},N=B,A=(n("ff2c"),Object(l["a"])(N,I,T,!1,null,"b29fe09e",null)),D=A.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root",attrs:{id:"contact"}},[n("a",{attrs:{href:"https://www.linkedin.com/in/damian-hii",target:"_blank"}},[t._v("Linkedin")]),t._v(" |\n\t"),n("a",{attrs:{href:"https://github.com/hiidamian1/",target:"_blank"}},[t._v("Github")]),t._v(" |\n\t"),n("a",{attrs:{href:"https://www.dropbox.com/s/v4q1g9sywm6xqn1/Resume%202_3_19.pdf?dl=0",target:"_blank"}},[t._v("Resume")])])}],G={name:"Contact"},L=G,W=(n("7588"),Object(l["a"])(L,M,q,!1,null,"5f16ba26",null)),z=W.exports,F={name:"home",components:{HomeIntro:k,HomeContent:$,Projects:D,Contact:z}},J=F,R=Object(l["a"])(J,_,g,!1,null,null,null),U=R.exports;r["a"].use(b["a"]);var V=new b["a"]({routes:[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/contact",name:"contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/projects",name:"projects",component:function(){return n.e("about").then(n.bind(null,"acca"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:V,render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,e,n){},"6a2b":function(t,e,n){},7588:function(t,e,n){"use strict";var r=n("23a1"),a=n.n(r);a.a},8692:function(t,e,n){"use strict";var r=n("ba3f"),a=n.n(r);a.a},ba3f:function(t,e,n){},ee35:function(t,e,n){"use strict";var r=n("28e3"),a=n.n(r);a.a},ff2c:function(t,e,n){"use strict";var r=n("1787"),a=n.n(r);a.a}});
//# sourceMappingURL=app.7d70d93d.js.map