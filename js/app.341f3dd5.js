(function(e){function t(t){for(var o,c,a=t[0],i=t[1],l=t[2],p=0,b=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(b.length)b.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},u=[];function c(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"65720653","chunk-2d0d6d35":"002ee0d1","chunk-2d2086b7":"447402cb","chunk-2d20e846":"32d891b4","chunk-7c2d38fe":"3b939106"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=c(e);var l=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+u+")",l.name="ChunkLoadError",l.type=o,l.request=u,n[1](l)}r[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var s=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,u,c){var a=Object(o["u"])("router-view");return Object(o["o"])(),Object(o["c"])(a)}n("ac1f"),n("5319");var u=n("6c02"),c=n("264a"),a={setup:function(){var e=Object(u["d"])(),t=Object(u["c"])();Object(o["l"])((function(){c["a"].auth().onAuthStateChanged((function(n){n?"/login"!=t.path&&"/register"!=t.path||e.replace("/"):e.replace("/login")}))}))}};n("a7ab");a.render=r;var i=a,l=(n("d3b7"),n("b0c0"),{class:"home"}),p=Object(o["d"])("About"),s=Object(o["e"])("br",null,null,-1),b=Object(o["d"])("Nearby Compost Locations"),f=Object(o["e"])("br",null,null,-1);function d(e,t,n,r,u,c){var a=Object(o["u"])("router-link");return Object(o["o"])(),Object(o["c"])("div",l,[Object(o["e"])("h1",null,"Welcome "+Object(o["w"])(r.name)+"!",1),Object(o["e"])(a,{to:"/about"},{default:Object(o["A"])((function(){return[p]})),_:1}),s,Object(o["e"])(a,{to:"/composting"},{default:Object(o["A"])((function(){return[b]})),_:1}),f,Object(o["e"])("button",{class:"logout",onClick:t[1]||(t[1]=function(){return r.Logout&&r.Logout.apply(r,arguments)})},"Logout")])}n("1276");var h={setup:function(){var e=c["a"].auth().currentUser,t=Object(o["t"])("");Object(o["l"])((function(){e&&(t.value=e.email.split("@")[0])}));var n=function(){c["a"].auth().signOut()};return{name:t,Logout:n}}};h.render=d;var m=h,v=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}},{path:"/composting",name:"Composting",component:function(){return n.e("chunk-7c2d38fe").then(n.bind(null,"f123"))}},{path:"/importance",name:"Importance",component:function(){return n.e("chunk-2d20e846").then(n.bind(null,"b068"))}}],g=Object(u["a"])({history:Object(u["b"])(),routes:v}),j=g,O={apiKey:"AIzaSyAE5a8qCyl2AGNmt2KhqasRqSJ1XulGbKM",authDomain:"vancouver-compost.firebaseapp.com",projectId:"vancouver-compost",storageBucket:"vancouver-compost.appspot.com",messagingSenderId:"651151227737",appId:"1:651151227737:web:c91f0e78f652a5ed0daa48",measurementId:"G-V8D4JJMRJT"};c["a"].initializeApp(O),Object(o["b"])(i).use(j).mount("#app")},6291:function(e,t,n){},a7ab:function(e,t,n){"use strict";n("6291")}});
//# sourceMappingURL=app.341f3dd5.js.map