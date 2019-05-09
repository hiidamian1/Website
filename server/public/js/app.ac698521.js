(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],f=0,p=[];f<o.length;f++)i=o[f],s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0173":function(t,e,a){},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"136b":function(t,e,a){"use strict";var n=a("6622"),s=a.n(n);s.a},2609:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i={name:"app"},o=i,c=(a("034f"),a("2877")),l=Object(c["a"])(o,s,r,!1,null,null,null),u=l.exports,f=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header",{attrs:{isMainPage:!0}}),a("HomeIntro"),a("About"),a("Projects"),a("Footer")],1)},d=[],v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("div",{staticClass:"home-intro-box"},[a("h1",[t._v("Damian Hii")]),a("h3",{attrs:{id:"mid"}},[t._v("UC Irvine Computer Science '19")])])])}],h={name:"HomeIntro"},b=h,_=(a("9f8e"),Object(c["a"])(b,v,m,!1,null,"b663ff9e",null)),g=_.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("a",{attrs:{id:"about"}}),a("div",{staticClass:"about-text"},[a("h1",[t._v("Hi there!")]),a("div",[t._v("\n\t\t\tI'm a recent Computer Science graduate from UC Irvine. I would love the opportunity to impact the lives of everyday individuals through my work, in an environment that allows me to contribute to the overall success of the team while also learning new things along the way. \n\t\t\t\n\t\t\t"),a("br"),a("br"),t._v("\n\t\t\t\n\t\t\tIn my free time, I ride bikes, play basketball, listen to lots of hip hop or electronic music, and spend (a little too much) time on Youtube and Reddit.\n\t\t\t\n\t\t\t"),a("br"),a("br"),t._v("\n\t\t\t\n\t\t\tIf you think we could be a good match, don't hesitate to reach out!\n\t\t")])]),a("div",{staticClass:"about-image"})])}],w={name:"About"},C=w,j=(a("9073"),Object(c["a"])(C,y,k,!1,null,"a5f8ccee",null)),x=j.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("a",{attrs:{id:"projects"}}),a("div",{staticClass:"projects-content"},[a("h1",[t._v("Projects")]),a("div",{staticClass:"projects-list"},[a("ul",[a("li",{staticClass:"project-item"},[t._v("\n\t  \t\t\t\tToDos App\n\t\t\t\t\t\t"),a("ul",{staticClass:"nested"},[a("li",[t._v("Simple todos app to help my sister keep track of schoolwork")]),a("li",[t._v("Vue.js, Node.js, Express.js, MongoDB, Passport.js for authentication, deployed on Heroku")]),a("li",[t._v("Stacked layout and media queries for a mobile-friendly experience")]),a("li",[a("a",{attrs:{href:"http://damians-todos.herokuapp.com",target:"_blank"}},[t._v("Deployed")]),t._v(", \n\t\t\t\t\t\t\t\t"),a("a",{attrs:{href:"https://github.com/hiidamian1/ToDo-App-FullStack",target:"_blank"}},[t._v("Github")])])])]),a("li",{staticClass:"project-item"},[t._v("\n\t\t\t\t\t\tBar Chart Webpage\n\t\t\t\t\t\t"),a("ul",{staticClass:"nested"},[a("li",[t._v("Stacked Bar Chart for visualizing data from Foodmart dataset")]),a("li",[t._v("D3.js, Node.js, Express.js, MySQL")]),a("li",[a("a",{attrs:{href:"https://github.com/hiidamian1/Bar-Chart-Webpage",target:"_blank"}},[t._v("Github")])])])]),a("li",{staticClass:"project-item"},[t._v("\n\t\t\t\t\t\tPortfolio Website\n\t  \t\t\t\t"),a("ul",{staticClass:"nested"},[a("li",[t._v("Showcasing my interests and who I am")]),a("li",[t._v("Vue.js, Node.js, Express.js, Bootstrap, deployed on Heroku")]),a("li",[t._v("Uses Spotify API to retrieve my most recently listened to songs")]),a("li",[t._v("Uses flexbox and media queries for a responsive and mobile-friendly design")]),a("li",[t._v("Would like to explore and integrate other APIs, such as Strava")]),a("li",[a("a",{attrs:{href:"https://github.com/hiidamian1/Website",target:"_blank"}},[t._v("Github")])])])])])])])])}],O={name:"Projects"},E=O,T=(a("d9fa"),Object(c["a"])(E,P,S,!1,null,"1137ca84",null)),$=T.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root",attrs:{id:"footer"}},[a("a",{attrs:{href:"https://www.linkedin.com/in/damian-hii",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})]),a("a",{attrs:{href:"https://github.com/hiidamian1/",target:"_blank"}},[a("i",{staticClass:"fab fa-github-square"})]),a("a",{attrs:{href:"./Resume 5_2_19.pdf",target:"_blank"}},[a("i",{staticClass:"far fa-address-card"})])])}],H={name:"Footer"},A=H,R=(a("9d36"),Object(c["a"])(A,M,I,!1,null,"43ff6641",null)),N=R.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-md navbar-dark sticky-top header"},[a("div",{staticClass:"container-fluid"},[t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponse"}},[a("ul",{staticClass:"navbar-nav ml-auto mr-auto"},[a("li",{directives:[{name:"show",rawName:"v-show",value:!t.isMainPage,expression:"!isMainPage"}],staticClass:"nav-item",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show"}},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"fas fa-home"}),t._v("\n\t\t\t\t\t\t\tHome\n\t\t\t\t\t\t")])],1),a("li",{directives:[{name:"show",rawName:"v-show",value:t.isMainPage,expression:"isMainPage"}],staticClass:"nav-item",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show"}},[t._m(1)]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.isMainPage,expression:"isMainPage"}],staticClass:"nav-item",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show"}},[t._m(2)]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.isMainPage,expression:"isMainPage"}],staticClass:"nav-item",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show"}},[t._m(3)]),a("li",{staticClass:"nav-item",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show"}},[a("router-link",{attrs:{to:"/personal"}},[a("i",{staticClass:"fas fa-music"}),t._v("\n\t\t\t\t\t\t\tMusic\n\t\t\t\t\t\t")])],1)])])])])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponse"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#app"}},[a("i",{staticClass:"fas fa-home"}),t._v("\n\t\t\t\t\t\t\tHome\n\t\t\t\t\t\t")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#about"}},[a("i",{staticClass:"fas fa-user"}),t._v("\n\t\t\t\t\t\t\tAbout\n\t\t\t\t\t\t")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#projects"}},[a("i",{staticClass:"fas fa-toolbox"}),t._v("\n\t\t\t\t\t\t\tProjects\n\t\t\t\t\t\t")])}],W={name:"Header",props:["isMainPage"]},F=W,U=(a("136b"),Object(c["a"])(F,B,D,!1,null,"3015d3e8",null)),q=U.exports,G={name:"home",components:{HomeIntro:g,About:x,Projects:$,Footer:N,Header:q}},z=G,J=Object(c["a"])(z,p,d,!1,null,null,null),L=J.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header",{attrs:{isMainPage:!1}}),a("div",{staticClass:"content"},[a("Spotify")],1)],1)},Q=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spotify-content"},[a("h1",[t._v("\n    What I've Been Listening To\n  ")]),a("SpotifyTracks",{attrs:{tracks:this.tracks}})],1)},K=[],X=(a("96cf"),a("3b8d")),Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tracks"},t._l(t.tracks,function(e){return a("div",{key:t.tracks.indexOf(e),staticClass:"root"},[a("SpotifyTrack",{attrs:{track:e.track}})],1)}),0)},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"track-content"},[a("div",{staticClass:"image",style:{backgroundImage:"url("+t.track.album.images[0].url+")"},on:{click:t.playState,mouseover:function(e){t.displayPlay=!0},mouseleave:function(e){t.displayPlay=!1}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.displayPlay,expression:"displayPlay"}],staticClass:"far fa-play-circle play-icon"})]),a("div",{staticClass:"description",on:{mouseover:function(e){t.displayTitleTooltip=!0},mouseleave:function(e){t.displayTitleTooltip=!1}}},[a("div",{staticClass:"title"},[t._v("\n      "+t._s(t.track.name)+"\n    ")]),a("div",{staticClass:"artist",on:{mouseover:function(e){t.displayArtistTooltip=!0},mouseleave:function(e){t.displayArtistTooltip=!1}}},[t._v("\n      "+t._s(t.track.artists[0].name)+"\n    ")])])])},at=[],nt={name:"SpotifyTrack",props:["track"],data:function(){return{song:new Audio(this.track.preview_url),playing:!1,displayPlay:!1,displayTitleTooltip:!1,displayArtistsTooltip:!1}},methods:{playState:function(){this.playing?(this.song.pause(),this.playing=!1):(this.song.play(),this.playing=!0)}}},st=nt,rt=(a("8a04"),Object(c["a"])(st,et,at,!1,null,"0340143c",null)),it=rt.exports,ot={name:"SpotifyTracks",components:{SpotifyTrack:it},props:["tracks"]},ct=ot,lt=(a("80df"),Object(c["a"])(ct,Z,tt,!1,null,"7cef2912",null)),ut=lt.exports,ft=a("795b"),pt=a.n(ft),dt=a("d225"),vt=a("b0b4"),mt=a("bc3a"),ht=a.n(mt),bt="/connectSpotify",_t=function(){function t(){Object(dt["a"])(this,t)}return Object(vt["a"])(t,null,[{key:"authorize",value:function(){window.location.href=bt}},{key:"getRecent",value:function(){return new pt.a(function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(e,a){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ht.a.get("".concat(bt,"/getRecent"));case 3:n=t.sent,e(n.data),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),a(t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e,a){return t.apply(this,arguments)}}())}}]),t}(),gt=_t,yt={name:"Spotify",components:{SpotifyTracks:ut},data:function(){return{tracks:[]}},created:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,gt.getRecent();case 3:e=t.sent,this.tracks=e,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.err=t.t0.message;case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}()},kt=yt,wt=(a("d70e"),Object(c["a"])(kt,Y,K,!1,null,"c174a1f4",null)),Ct=wt.exports,jt={name:"Personal",components:{Spotify:Ct,Header:q}},xt=jt,Pt=(a("d479"),Object(c["a"])(xt,V,Q,!1,null,"412fda4d",null)),St=Pt.exports;n["a"].use(f["a"]);var Ot=new f["a"]({routes:[{path:"*",name:"home",component:L},{path:"/personal",name:"personal",component:St}]});n["a"].config.productionTip=!1,new n["a"]({router:Ot,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,a){},6622:function(t,e,a){},"80df":function(t,e,a){"use strict";var n=a("2609"),s=a.n(n);s.a},"84c9":function(t,e,a){},"8a04":function(t,e,a){"use strict";var n=a("cd30"),s=a.n(n);s.a},9073:function(t,e,a){"use strict";var n=a("9c6a"),s=a.n(n);s.a},"9c6a":function(t,e,a){},"9d36":function(t,e,a){"use strict";var n=a("0173"),s=a.n(n);s.a},"9f8e":function(t,e,a){"use strict";var n=a("ce87"),s=a.n(n);s.a},bd7d:function(t,e,a){},cd30:function(t,e,a){},ce87:function(t,e,a){},d479:function(t,e,a){"use strict";var n=a("84c9"),s=a.n(n);s.a},d70e:function(t,e,a){"use strict";var n=a("bd7d"),s=a.n(n);s.a},d92d:function(t,e,a){},d9fa:function(t,e,a){"use strict";var n=a("d92d"),s=a.n(n);s.a}});
//# sourceMappingURL=app.ac698521.js.map