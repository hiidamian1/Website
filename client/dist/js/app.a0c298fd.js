(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],f=0,d=[];f<s.length;f++)i=s[f],a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"1ae7":function(t,e,n){"use strict";var r=n("5f32"),a=n.n(r);a.a},"38db":function(t,e,n){},"39ca":function(t,e,n){},"4e77":function(t,e,n){"use strict";var r=n("8162"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("a",{attrs:{href:"#home"}},[t._v("Home")]),t._v("|\n     \t"),n("a",{attrs:{href:"#about"}},[t._v("About")]),t._v("|\n     \t"),n("a",{attrs:{href:"#projects"}},[t._v("Projects")]),t._v("|\n     \t"),n("a",{attrs:{href:"#contact"}},[t._v("Contact")])])}],c={name:"Header"},u=c,l=(n("7731"),n("2877")),f=Object(l["a"])(u,i,s,!1,null,"1cf132ec",null),d=f.exports,h={name:"app",components:{Header:d}},p=h,v=(n("034f"),Object(l["a"])(p,a,o,!1,null,null,null)),m=v.exports,_=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("HomeIntro"),n("HomeContent"),n("Projects"),n("Contact")],1)},g=[],j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("div",{staticClass:"home-intro-box"},[n("h1",[t._v("Damian Hii")]),n("h3",[t._v("UC Irvine Computer Science '19. Hoping to impact the lives of everyday people through the software I create, with interest in full stack web development.")])])])}],y={name:"HomeIntro"},C=y,x=(n("c229"),Object(l["a"])(C,j,w,!1,null,"e1c5b69a",null)),k=x.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root",attrs:{id:"about"}},[n("div",{staticClass:"home-text"},[n("h1",[t._v("Hi there!")]),t._v(" \n\t\t\tI'm a fourth year undergraduate student at UC Irvine, graduating in Spring 2019 with a B.S. in Computer Science. I would love to impact the lives of everyday individuals through my work, while working in an evironment that emphasizes team success that also fosters my individual growth. If you'd like to chat more, don't hesitate to reach out. \n\t\t")]),n("div",{staticClass:"home-image"})])}],H={name:"HomeContent"},S=H,$=(n("4e77"),Object(l["a"])(S,O,E,!1,null,"8d7fb372",null)),P=$.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root",attrs:{id:"projects"}},[n("div",{staticClass:"projects-content"},[n("h1",[t._v("Projects")]),n("div",{staticClass:"projects-list"},[n("ul",[n("li",[t._v("\n\t  \t\t\t\tToDos App\n\t\t\t\t\t"),n("ul",{staticClass:"nested"},[n("li",[t._v("Simple todos app")]),n("li",[t._v("Vue.js, Node.js, Express.js, MongoDB/Couchbase, deployed on Heroku")]),n("li",[n("a",{attrs:{href:"http://damians-todos.herokuapp.com"}},[t._v("Deployed")]),t._v(", \n\t\t\t\t\t\t\t"),n("a",{attrs:{href:"https://github.com/hiidamian1/ToDo-App-FullStack"}},[t._v("Github")])])])]),n("li",[t._v("Bar Chart Webpage\n\t\t\t\t\t"),n("ul",{staticClass:"nested"},[n("li",[t._v("Stacked Bar Chart for visualizing data from Foodmart dataset")]),n("li",[t._v("D3.js, Node.js, Express.js, MySQL")]),n("li",[n("a",{attrs:{href:"https://github.com/hiidamian1/Bar-Chart-Webpage"}},[t._v("Github")])])])]),n("li",[t._v("Portfolio Website\n\t  \t\t\t\t"),n("ul",{staticClass:"nested"},[n("li",[t._v("Showcasing my interests and who I am")]),n("li",[t._v("Vue.js, deployed on Netlify, Node.js(planned), Express.js(planned)")]),n("li",[n("a",{attrs:{href:"https://github.com/hiidamian1/Website"}},[t._v("Github")])])])])])])])])}],M={name:"Projects"},B=M,T=(n("7c03"),Object(l["a"])(B,I,D,!1,null,"3fdadfd3",null)),G=T.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root",attrs:{id:"contact"}},[n("a",{attrs:{href:"https://www.linkedin.com/in/damian-hii",target:"_blank"}},[t._v("Linkedin")]),t._v(" |\n\t"),n("a",{attrs:{href:"https://github.com/hiidamian1/",target:"_blank"}},[t._v("Github")]),t._v(" |\n\t"),n("a",{attrs:{href:"https://www.dropbox.com/s/v4q1g9sywm6xqn1/Resume%202_3_19.pdf?dl=0",target:"_blank"}},[t._v("Resume")])])}],A={name:"Contact"},q=A,z=(n("1ae7"),Object(l["a"])(q,N,W,!1,null,"2ddd7452",null)),F=z.exports,J={name:"home",components:{HomeIntro:k,HomeContent:P,Projects:G,Contact:F}},L=J,R=Object(l["a"])(L,b,g,!1,null,null,null),U=R.exports;r["a"].use(_["a"]);var V=new _["a"]({routes:[{path:"/",name:"home",component:U}]});r["a"].config.productionTip=!1,new r["a"]({router:V,render:function(t){return t(m)}}).$mount("#app")},"5f32":function(t,e,n){},"64a9":function(t,e,n){},7731:function(t,e,n){"use strict";var r=n("85e4"),a=n.n(r);a.a},"7c03":function(t,e,n){"use strict";var r=n("39ca"),a=n.n(r);a.a},8162:function(t,e,n){},"85e4":function(t,e,n){},c229:function(t,e,n){"use strict";var r=n("38db"),a=n.n(r);a.a}});
//# sourceMappingURL=app.a0c298fd.js.map