module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1732806945109, function(require, module, exports) {
!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.cncharVoice=e():n.cncharVoice=e()}(this,(function(){return function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){t.r(e);var o=function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;var o=Array(n),r=0;for(e=0;e<t;e++)for(var u=arguments[e],i=0,c=u.length;i<c;i++,r++)o[r]=u[i];return o};var r;var u,i,c,a,s=(i="https://unpkg.com/cnchar-data@latest/"+(u="voice")+"/",c=function(){return i},a="",(r={setResourceBase:function(n){a=n},getResourceBase:function(){return a||c()||i},initResourceFromCnchar:function(n){var e=n._.getResourceBase();e&&(c=function(){return""+e+u+"/"})}}).getResourceBase),f=r.setResourceBase,l=r.initResourceFromCnchar,p="object"==typeof wx&&"object"==typeof __wxConfig?"miniapp":"object"==typeof window?"web":"node",d=function(n,e,t,o){return new(t||(t=Promise))((function(r,u){function i(n){try{a(o.next(n))}catch(n){u(n)}}function c(n){try{a(o.throw(n))}catch(n){u(n)}}function a(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,c)}a((o=o.apply(n,e||[])).next())}))},v=function(n,e){var t,o,r,u,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,o&&(r=2&u[0]?o.return:u[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,u[1])).done)return r;switch(o=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,o=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){i.label=u[1];break}if(6===u[0]&&i.label<r[1]){i.label=r[1],r=u;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(u);break}r[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(n,i)}catch(n){u=[6,n],o=0}finally{t=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}},h=function(){if("miniapp"===p)return wx.createWebAudioContext?wx.createWebAudioContext():(console.log("wx.createWebAudioContext not found"),null);if("web"===p){var n=window,e=n.AudioContext||n.webkitAudioContext||n.mozAudioContext;return e?new e:(console.log("当前环境不支持web audio"),null)}return null}(),w=function(n){return Promise.all(n.map((function(n){return b(n)})))},b=function(){if(!h)return function(){return Promise.resolve(null)};var n=function(n,e){h.decodeAudioData(n,(function(n){e(n)}),(function(n){console.error("decodeAudioData fail",n),e(null)}))};return"miniapp"===p?function(e){return new Promise((function(t){wx.request({url:e,responseType:"arraybuffer",success:function(e){n(e.data,t)},fail:function(n){console.error("request fail",n),t(null)}})}))}:"web"===p?function(e){return new Promise((function(t){var o=new window.XMLHttpRequest;o.open("GET",e,!0),o.responseType="arraybuffer",o.onreadystatechange=function(){200===o.status?4===o.readyState&&n(o.response,t):t(null)},o.onerror=function(){t(null)},o.ontimeout=function(){t(null)},o.send()}))}:function(n){return console.log("node 环境暂时不支持voice",n),Promise.resolve(null)}}();var m=0;function y(n){var e=this,t=n.buffer,o=n.rate,r=void 0===o?1:o,u=n.volume,i=void 0===u?1:u,c=n.offset,a=void 0===c?0:c,s=n.oninit;return h?new Promise((function(n){return d(e,void 0,void 0,(function(){var e,o;return v(this,(function(u){return(e=h.createBufferSource()).playbackRate.value=r,e.buffer=t,h.createGain?((o=h.createGain()).gain.value=i,e.connect(o),o.connect(h.destination)):e.connect(h.destination),m=h.currentTime,e.start(0,a),e.onended=function(){n(!0),e.disconnect()},s&&s({getDuration:function(){return t.duration},getCurrentTime:function(){return h.currentTime-m},stop:function(){e.stop()}}),[2]}))}))})):Promise.resolve(!1)}var g={loop:!1,rate:1,volume:1,autoStart:!0,onSingleComplete:function(){},onComplete:function(){},onAudioLoaded:function(){}};var x,C=function(){return(C=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},S=function(n,e,t,o){return new(t||(t=Promise))((function(r,u){function i(n){try{a(o.next(n))}catch(n){u(n)}}function c(n){try{a(o.throw(n))}catch(n){u(n)}}function a(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,c)}a((o=o.apply(n,e||[])).next())}))},P=function(n,e){var t,o,r,u,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,o&&(r=2&u[0]?o.return:u[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,u[1])).done)return r;switch(o=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,o=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){i.label=u[1];break}if(6===u[0]&&i.label<r[1]){i.label=r[1],r=u;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(u);break}r[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(n,i)}catch(n){u=[6,n],o=0}finally{t=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}},j={};function T(n,e){var t=0,o=!1,r=!1,u={stop:function(){},getCurrentTime:function(){return 0},getDuration:function(){return 0}},i=0,c=0,a=null,s=!0,f=e.onSingleComplete,l=e.onComplete;e.onSingleComplete=function(n){o||(f&&f(n),n.success||(s=!1),c+=u.getDuration())},e.onComplete=function(){o||(p(),l&&l({duration:c,success:s}))};var p=function(){s=!0,t=0,r=!1,o=!1,c=0},d=function(n,r){a?function n(e){var t=e.audioList,o=e.index,r=void 0===o?0:o,u=e.offset,i=void 0===u?0:u,c=e.isPaused,a=e.onNext,s=e.loop,f=e.volume,l=e.rate,p=e.oninit,d=e.onComplete,v=e.onSingleComplete;return S(this,void 0,void 0,(function(){var e,o,u,h;return P(this,(function(w){switch(w.label){case 0:return console.log(r),(e=t[r])?[4,y({buffer:e,volume:f,rate:l,offset:i,oninit:p})]:[3,2];case 1:return u=w.sent(),[3,3];case 2:u=!1,w.label=3;case 3:return o=u,c()?[2]:(h=e?e.duration:0,v&&v({index:r,duration:h,success:o}),(r+=1)>=t.length&&(r=s?0:-1,d&&d({})),r>=0&&(n({audioList:t,isPaused:c,onNext:a,index:r,loop:s,volume:f,rate:l,onComplete:d,onSingleComplete:v}),a&&a(r)),[2])}}))}))}(C({audioList:a,index:n,onNext:function(n){t=n},offset:r,oninit:function(n){u=n},isPaused:function(){return o}},e)):console.warn("音频未加载完成")},v={getDurations:function(){return a?a.map((function(n){return n?n.duration:0})):(console.warn("音频未加载完成"),[])},getTotalDuration:function(){var n=this.getDurations(),e=0;return n.forEach((function(n){e+=n})),e},getCurrentDuration:function(){return u.getDuration()},getCurrentTime:function(){return u.getCurrentTime()},getPlayTime:function(){return c+u.getCurrentTime()},start:function(){this.stop(),r=!0,d()},stop:function(){p(),u.stop()},pause:function(){o||(o=!0,i=this.getCurrentTime(),u.stop())},resume:function(){o&&(o=!1,d(t,i))},isPaused:function(){return o},isPlaying:function(){return r},getCurrentIndex:function(){return t}};return w(n).then((function(n){a=n,e.autoStart&&v.start(),e.onAudioLoaded&&e.onAudioLoaded(a)})),v}var k=function(n,e){if(!x)return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];console.warn.apply(console,o(["CnChar Warning:"],n))}("使用voice前请先安装cnchar"),{};var t=function(n){return Object.assign({},g,n)}(e);return T(R(n),t)};function R(n){return j[n]?[j[n]]:x.spell(n,"tone","flat","array","low").map((function(n){return""+s()+n+".mp3"}))}function A(){var n=function(n){return void 0===n&&(n={}),console.warn("当前浏览器暂不支持",n),{}};return n.stop=function(){console.warn("当前浏览器暂不支持")},n.supported=!1,n}k.addVoice=function(n,e){!function(n,e,t){if("object"!=typeof n)t(n,e);else for(var o in n)t(o,n[o])}(n,e,(function(n,e){j[n]=e}))},k.getVoiceList=R;var O=function(){if("web"!==p)return A();var n=window,e=n.SpeechRecognition||n.webkitSpeechRecognition;if(!e)return A();var t,o,r=null,u="",i=function(n){var i=void 0===n?{}:n,c=i.onstart,a=i.onaudiostart,s=i.onspeechstart,f=i.onspeechend,l=i.onaudioend,p=i.onend;return r||e&&((r=new e).continuous=!1,r.interimResults=!1,r.maxAlternatives=1,r.lang="zh-CN",r.onresult=function(n){if(n.results&&n.results[0][0]){var e=n.results[0][0].transcript;u+=e,n.results[0].isFinal&&(r.stop(),t&&t(u),u="")}},r.onspeechend=function(n){r.stop(),o&&o(n)}),r?(c&&c(),p&&(t=p),a&&(r.onaudiostart=a),s&&(r.onspeechstart=s),f&&(o=f),l&&(r.onaudioend=l),r.start(),r):(console.warn("当前浏览器暂不支持"),!1)};return i.stop=function(){r.stop()},i.supported=!0,i}();function D(){var n=function(n){return console.warn("当前浏览器暂不支持",n),{}};return n.cancel=n.pause=n.resume=function(){console.warn("当前浏览器暂不支持")},n.supported=!1,n}var _=function(){if("web"!==p)return D();var n=window.SpeechSynthesisUtterance;if(!n||!window.speechSynthesis)return D();var e=function(e,t){var o=void 0===t?{}:t,r=o.lang,u=void 0===r?"zh-CN":r,i=o.volume,c=void 0===i?1:i,a=o.rate,s=void 0===a?1:a,f=o.pitch,l=void 0===f?1:f,p=o.onstart,d=o.onpause,v=o.onresume,h=o.onend,w=o.onerror,b=new n;return b.lang=u,b.volume=c,b.rate=s,b.pitch=l,b.text=e,w&&(b.onerror=w),p&&(b.onstart=p),d&&(b.onpause=d),v&&(b.onresume=v),h&&(b.onend=h),window.speechSynthesis.speak(b),b};return e.cancel=window.speechSynthesis.cancel,e.pause=window.speechSynthesis.pause,e.resume=window.speechSynthesis.resume,e.supported=!0,e}(),L=Object.assign(k,{pluginName:"voice",install:function(n){!function(n){x=n}(n),l(n)},speak:_,recognize:O,setResourceBase:f,_refreshResource:l,dict:{temp:j}});"object"==typeof window&&(window.CncharVoice=L,window.CnChar&&window.CnChar.use(L));e.default=L}]).default}));
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1732806945109);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map