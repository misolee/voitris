!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}([function(e,t,n){"use strict";var o=n(3),i=n(9),r=Object.prototype.toString;function s(e){return"[object Array]"===r.call(e)}function c(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===r.call(e)}function a(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:i,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:u,isStream:function(e){return c(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:a,merge:function e(){var t={};function n(n,o){"object"==typeof t[o]&&"object"==typeof n?t[o]=e(t[o],n):t[o]=n}for(var o=0,i=arguments.length;o<i;o++)a(arguments[o],n);return t},extend:function(e,t,n){return a(t,function(t,i){e[i]=n&&"function"==typeof t?o(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";(function(t){var o=n(0),i=n(12),r={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,u={adapter:("undefined"!=typeof XMLHttpRequest?c=n(4):void 0!==t&&(c=n(4)),c),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){u.headers[e]={}}),o.forEach(["post","put","patch"],function(e){u.headers[e]=o.merge(r)}),e.exports=u}).call(this,n(11))},function(e,t,n){e.exports=n(8)},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return e.apply(t,n)}}},function(e,t,n){"use strict";var o=n(0),i=n(13),r=n(15),s=n(16),c=n(17),u=n(5),a="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(18);e.exports=function(e){return new Promise(function(t,l){var d=e.data,f=e.headers;o.isFormData(d)&&delete f["Content-Type"];var m=new XMLHttpRequest,p="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in m||c(e.url)||(m=new window.XDomainRequest,p="onload",h=!0,m.onprogress=function(){},m.ontimeout=function(){}),e.auth){var y=e.auth.username||"",v=e.auth.password||"";f.Authorization="Basic "+a(y+":"+v)}if(m.open(e.method.toUpperCase(),r(e.url,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,m[p]=function(){if(m&&(4===m.readyState||h)&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in m?s(m.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?m.response:m.responseText,status:1223===m.status?204:m.status,statusText:1223===m.status?"No Content":m.statusText,headers:n,config:e,request:m};i(t,l,o),m=null}},m.onerror=function(){l(u("Network Error",e,null,m)),m=null},m.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",m)),m=null},o.isStandardBrowserEnv()){var g=n(19),w=(e.withCredentials||c(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;w&&(f[e.xsrfHeaderName]=w)}if("setRequestHeader"in m&&o.forEach(f,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:m.setRequestHeader(t,e)}),e.withCredentials&&(m.withCredentials=!0),e.responseType)try{m.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){m&&(m.abort(),l(e),m=null)}),void 0===d&&(d=null),m.send(d)})}},function(e,t,n){"use strict";var o=n(14);e.exports=function(e,t,n,i,r){var s=new Error(e);return o(s,t,n,i,r)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function o(e){this.message=e}o.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},o.prototype.__CANCEL__=!0,e.exports=o},function(e,t,n){"use strict";var o=n(0),i=n(3),r=n(10),s=n(1);function c(e){var t=new r(e),n=i(r.prototype.request,t);return o.extend(n,r.prototype,t),o.extend(n,t),n}var u=c(s);u.Axios=r,u.create=function(e){return c(o.merge(s,e))},u.Cancel=n(7),u.CancelToken=n(25),u.isCancel=n(6),u.all=function(e){return Promise.all(e)},u.spread=n(26),e.exports=u,e.exports.default=u},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,n){"use strict";var o=n(1),i=n(0),r=n(20),s=n(21);function c(e){this.defaults=e,this.interceptors={request:new r,response:new r}}c.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),(e=i.merge(o,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){c.prototype[e]=function(t,n,o){return this.request(i.merge(o||{},{method:e,url:t,data:n}))}}),e.exports=c},function(e,t){var n,o,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{o="function"==typeof clearTimeout?clearTimeout:s}catch(e){o=s}}();var u,a=[],l=!1,d=-1;function f(){l&&u&&(l=!1,u.length?a=u.concat(a):d=-1,a.length&&m())}function m(){if(!l){var e=c(f);l=!0;for(var t=a.length;t;){for(u=a,a=[];++d<t;)u&&u[d].run();d=-1,t=a.length}u=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===s||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new p(e,t)),1!==a.length||l||c(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";var o=n(0);e.exports=function(e,t){o.forEach(e,function(n,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[o])})}},function(e,t,n){"use strict";var o=n(5);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,o,i){return e.config=t,n&&(e.code=n),e.request=o,e.response=i,e}},function(e,t,n){"use strict";var o=n(0);function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(o.isURLSearchParams(t))r=t.toString();else{var s=[];o.forEach(t,function(e,t){null!=e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(i(t)+"="+i(e))}))}),r=s.join("&")}return r&&(e+=(-1===e.indexOf("?")?"?":"&")+r),e}},function(e,t,n){"use strict";var o=n(0),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,r,s={};return e?(o.forEach(e.split("\n"),function(e){if(r=e.indexOf(":"),t=o.trim(e.substr(0,r)).toLowerCase(),n=o.trim(e.substr(r+1)),t){if(s[t]&&i.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}}),s):s}},function(e,t,n){"use strict";var o=n(0);e.exports=o.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var o=e;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=o.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function i(){this.message="String contains an invalid character"}i.prototype=new Error,i.prototype.code=5,i.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,r=String(e),s="",c=0,u=o;r.charAt(0|c)||(u="=",c%1);s+=u.charAt(63&t>>8-c%1*8)){if((n=r.charCodeAt(c+=.75))>255)throw new i;t=t<<8|n}return s}},function(e,t,n){"use strict";var o=n(0);e.exports=o.isStandardBrowserEnv()?{write:function(e,t,n,i,r,s){var c=[];c.push(e+"="+encodeURIComponent(t)),o.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),o.isString(i)&&c.push("path="+i),o.isString(r)&&c.push("domain="+r),!0===s&&c.push("secure"),document.cookie=c.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var o=n(0);function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=i},function(e,t,n){"use strict";var o=n(0),i=n(22),r=n(6),s=n(1),c=n(23),u=n(24);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.baseURL&&!c(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return a(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return r(t)||(a(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var o=n(0);e.exports=function(e,t,n){return o.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var o=n(7);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i(function(t){e=t}),cancel:e}},e.exports=i},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o);const r=e=>{i.a.post("/addscore",e)},s=[[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]]],c=[[[1,0,0],[1,1,1],[0,0,0]],[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]],[[0,1,0],[0,1,0],[1,1,0]]],u=[[[0,0,1],[1,1,1],[0,0,0]],[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]],[[1,1,0],[0,1,0],[0,1,0]]],a=[[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]],l=[[[0,1,1],[1,1,0],[0,0,0]],[[0,1,0],[0,1,1],[0,0,1]],[[0,0,0],[0,1,1],[1,1,0]],[[1,0,0],[1,1,0],[0,1,0]]],d=[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]],f=[[[1,1,0],[0,1,1],[0,0,0]],[[0,0,1],[0,1,1],[0,1,0]],[[0,0,0],[1,1,0],[0,1,1]],[[0,1,0],[1,1,0],[1,0,0]]],m=[[[0,0,0],[1,0,1],[1,1,1]],[[1,1,0],[1,0,0],[1,1,0]],[[1,1,1],[1,0,1],[0,0,0]],[[0,1,1],[0,0,1],[0,1,1]]],p=[[[1,1,0],[0,1,1],[0,0,1]],[[0,0,1],[0,1,1],[1,1,0]],[[1,0,0],[1,1,0],[0,1,1]],[[0,1,1],[1,1,0],[1,0,0]]],h=[[[0,1,0],[1,1,1],[0,1,0]]],y=[[[1,0,0],[0,1,0],[0,0,1]],[[0,0,1],[0,1,0],[1,0,0]]],v=[[[1]]];i.a.get("/getAllScores").then(e=>{e.data.forEach((e,t)=>{document.getElementById(`top-score-name-${t}`).innerHTML=e.name.toUpperCase(),document.getElementById(`top-score-score-${t}`).innerHTML=e.score})});let g=["./favicon/blue-favicon.png","./favicon/yellow-favicon.png","./favicon/green-favicon.png","./favicon/red-favicon.png"],w=0;function E(e){this.sound=document.createElement("audio"),this.sound.src=e,this.sound.setAttribute("preload","auto"),this.sound.setAttribute("controls","none"),"./sound/Tetris.mp3"===e&&this.sound.setAttribute("loop","true"),this.sound.style.display="none",document.body.appendChild(this.sound),this.play=function(){this.sound.play()},this.stop=function(){this.sound.pause()}}setInterval(function(){document.getElementById("favicon-link").href=g[w],w==g.length-1?w=0:w++},100);const b=new E("./sound/Tetris.mp3");b.sound.volume=.3;const x=new E("./sound/control.wav");x.sound.volume=.4;const B=new E("./sound/drop.wav");B.sound.volume=.4;const T=new E("./sound/game-over.wav"),I=new E("./sound/game-over2.wav"),L=new E("./sound/level-up.wav"),C=new E("./sound/level-up2.wav");C.sound.volume=.4;const k=new E("./sound/count-beep.wav"),D=new E("./sound/count-beep.wav"),S=new E("./sound/count-beep.wav"),A=new E("./sound/go.wav"),R=new E("./sound/ready.wav");let N=!1;function j(e){N?e.stop():e.play()}const O=document.getElementById("voistris").getContext("2d"),H=document.getElementById("score"),M=document.getElementById("level"),P=20,U=10,q=30,V="black";let F,_=!0,$=!1;function X(e,t,n,o){O.fillStyle=n,O.fillRect(e*q,t*q,q,q),O.strokeStyle=o,O.strokeRect(e*q,t*q,q,q)}let z=[];for(let e=0;e<P;e++){z[e]=[];for(let t=0;t<U;t++)z[e][t]=V}function J(){for(let e=0;e<P;e++)for(let t=0;t<U;t++)X(t,e,z[e][t],"#333232")}J();let W=null;document.getElementById("game-end").style.display="none",document.getElementById("paused").style.display="none",document.getElementById("restart").addEventListener("click",()=>window.location.reload()),document.getElementById("keyboard").addEventListener("click",()=>{Y.style.visibility="visible",document.getElementById("choose-option").style.visibility="hidden"});const G=document.getElementById("voice-option");document.getElementById("voice").addEventListener("click",()=>{G.style.visibility="visible",document.getElementById("choose-option").style.visibility="hidden"});let K=document.getElementById("volume-icon");K.addEventListener("click",()=>{N?(N=!1,b.play(),K.className="fas fa-volume-up"):(N=!0,b.stop(),K.className="fas fa-volume-mute")});const Y=document.getElementById("playbutton");function Q(){let e=document.getElementById("countdown");setTimeout(()=>{b.stop(),j(k),e.innerHTML=3,e.className="count",Y.style.backgroundColor="transparent",Y.removeEventListener("click",Z)},0),setTimeout(()=>{j(D),e.innerHTML=2,e.className="count"},800),setTimeout(()=>{j(S),j(R),e.innerHTML=1,e.className="count"},1600),setTimeout(()=>{if(j(A),e.innerHTML="GO!",e.className="go","keyboard"===W)document.getElementById("commands").style.visibility="visible",document.getElementById("commands").style.animation="commands 0.7s";else if("voice"===W){const e=document.getElementById("voice-commands-left").value,t=document.getElementById("voice-commands-right").value,n=document.getElementById("voice-commands-down").value,o=document.getElementById("voice-commands-rotate").value,i=document.getElementById("voice-commands-hold").value,r=document.getElementById("voice-commands-drop").value;document.getElementById("command-outline-hold").innerHTML="HOLD",document.getElementById("command-outline-drop").innerHTML="DROP",document.getElementById("command-outline-pause").style.display="none",document.getElementById("command-outline-mute").style.display="none",document.getElementById("command-outline-mute").style.display="none",document.getElementById("voice-control-right").innerHTML=t,document.getElementById("voice-control-left").innerHTML=e,document.getElementById("voice-control-rotate").innerHTML=o,document.getElementById("voice-control-down").innerHTML=n,document.getElementById("voice-control-hold").innerHTML=i,document.getElementById("voice-control-drop").innerHTML=r,document.getElementById("voice-control-mute").innerHTML="RESTART",document.getElementById("voice-control-pause").innerHTML="PAUSE / PLAY",document.getElementById("commands").style.visibility="visible",document.getElementById("commands").style.animation="commands 0.7s"}document.getElementById("scoreboard").style.visibility="visible",document.getElementById("scoreboard").style.animation="commands 0.7s",document.getElementById("score-level").style.visibility="visible",document.getElementById("score-level").style.animation="score-level 0.7s",document.getElementById("restart-volume").style.visibility="visible",document.getElementById("restart-volume").style.animation="restart-volume 5s"},2400),setTimeout(()=>Y.style.display="none",3200),setTimeout(()=>{!function(){const e=[[f,"#ff0000","./voistrimino-colors/next-red.png"],[l,"#00ff00","./voistrimino-colors/next-green.png"],[d,"#cc00ff","./voistrimino-colors/next-purple.png"],[a,"#ffff00","./voistrimino-colors/next-yellow.png"],[s,"#66ffff","./voistrimino-colors/next-light-blue.png"],[c,"#ff6500","./voistrimino-colors/next-orange.png"],[u,"#00ffcc","./voistrimino-colors/next-mint.png"],[m,"#ffcccc","./voistrimino-colors/next-pink.png"],[p,"#ff1cd0","./voistrimino-colors/next-dark-pink.png"],[h,"#6300d9","./voistrimino-colors/next-light-purple.png"],[y,"#ffffff","./voistrimino-colors/next-white.png"],[v,"#226f35","./voistrimino-colors/next-forest-green.png"]];let t=i(),n=i(),o=n.picture;function i(){let t=Math.floor(Math.random()*e.length);return new g(e[t][0],e[t][1],e[t][2])}function g(e,t,n){this.voistrimino=e,this.color=t,this.outlineColor="white",this.picture=n,this.holdTime=1,this.voistriminoN=0,this.activeVoistrimino=this.voistrimino[this.voistriminoN],this.x=3,this.y=-2}document.getElementById("next-piece-image").src=o,g.prototype.fill=function(e){for(let t=0;t<this.activeVoistrimino.length;t++)for(let n=0;n<this.activeVoistrimino.length;n++)this.activeVoistrimino[t][n]&&X(this.x+n,this.y+t,e)},g.prototype.draw=function(){this.fill(this.color,"white")},g.prototype.unDraw=function(){this.fill(V,"white")},g.prototype.moveDown=function(){this.collision(0,1,this.activeVoistrimino)?(this.lock(),_=!0,t=n,n=i(),o=n.picture,document.getElementById("next-piece-image").src=o):(this.unDraw(),this.y++,this.draw())},g.prototype.moveRight=function(){this.collision(1,0,this.activeVoistrimino)||(this.unDraw(),this.x++,this.draw())},g.prototype.moveLeft=function(){this.collision(-1,0,this.activeVoistrimino)||(this.unDraw(),this.x--,this.draw())},g.prototype.moveAllTheWayDown=function(){for(;!this.collision(0,1,this.activeVoistrimino);)this.moveDown()},g.prototype.holdPiece=function(){F?_&&(this.unDraw(),(t=F).x=this.x,t.y=this.y,"#66ffff"===t.color&&t.x>6&&(t.x=6),t.x>7&&(t.x=7),this.x<0&&(t.x=0),F=this,t.draw(),_=!1):(F=this,t=n,n=i(),document.getElementById("next-piece-image").src=n.picture,this.unDraw()),document.getElementById("hold-piece-image").src=F.picture},g.prototype.rotate=function(){let e=this.voistrimino[(this.voistriminoN+1)%this.voistrimino.length],t=0;this.collision(0,0,e)&&(t=this.x>U/2?-1:1),this.collision(t,0,e)||(this.unDraw(),this.x+=t,this.voistriminoN=(this.voistriminoN+1)%this.voistrimino.length,this.activeVoistrimino=this.voistrimino[this.voistriminoN],this.draw())};let w=0,E=800,k=0;if(g.prototype.lock=function(){for(let e=0;e<this.activeVoistrimino.length;e++)for(let t=0;t<this.activeVoistrimino.length;t++)this.activeVoistrimino[e][t]&&(this.y+e<0&&(A=!0,b.sound.volume=0,j(T),document.getElementById("gameover-score").innerHTML=w,document.getElementById("game-end").style.display="block",document.getElementById("game-end").addEventListener("click",()=>{window.location.reload()}),document.getElementById("submit-score").addEventListener("click",()=>{const e=document.getElementById("score-name").value;r({name:e,score:w}),window.location.reload()}),j(I)),z[this.y+e][this.x+t]=this.color,_=!0);for(let e=0;e<P;e++){let t=!0;for(let n=0;n<U;n++)t=t&&z[e][n]!=V;if(t){for(let t=e;t>1;t--)for(let e=0;e<U;e++)z[t][e]=z[t-1][e];for(let e=0;e<U;e++)z[0][e]=V;j(C),(w+=10)%30||(E*=.8,k+=1,j(L),j(C))}}J(),H.innerHTML=w,M.innerHTML=k},g.prototype.collision=function(e,t,n){for(let o=0;o<n.length;o++)for(let i=0;i<n.length;i++){if(!n[o][i])continue;let r=this.x+i+e,s=this.y+o+t;if(r<0||r>=U||s>=P)return!0;if(!(s<0)&&z[s][r]!=V)return!0}return!1},"keyboard"===W)document.addEventListener("keydown",function(e){37==e.keyCode?(t.moveLeft(),S=Date.now(),j(x)):38==e.keyCode?(t.rotate(),S=Date.now(),j(x)):39==e.keyCode?(t.moveRight(),S=Date.now(),j(x)):40==e.keyCode?(t.moveDown(),j(x)):32==e.keyCode?(t.moveAllTheWayDown(),j(B)):16==e.keyCode?(t.holdPiece(),j(x)):80==e.keyCode?O():77==e.keyCode&&(N?(N=!1,b.play(),K.className="fas fa-volume-up"):(N=!0,b.stop(),K.className="fas fa-volume-mute"))});else if("voice"===W){var D=new anycontrol;const e=document.getElementById("voice-commands-left").value,n=document.getElementById("voice-commands-right").value,o=document.getElementById("voice-commands-down").value,i=document.getElementById("voice-commands-rotate").value,r=document.getElementById("voice-commands-hold").value,s=document.getElementById("voice-commands-drop").value;D.addCommand(`${e}`,function(){t.moveLeft(),S=Date.now()}),D.addCommand(`${n}`,function(){t.moveRight(),S=Date.now()}),D.addCommand(`${o}`,function(){t.moveDown(),S=Date.now()}),D.addCommand(`${i}`,function(){t.rotate(),S=Date.now()}),D.addCommand(`${s}`,function(){t.moveAllTheWayDown(),S=Date.now()}),D.addCommand(`${r}`,function(){t.holdPiece(),S=Date.now()}),D.addCommand("restart",function(){window.location.reload()}),D.addCommand("pause",function(){O()}),D.addCommand("play",function(){O()}),D.start()}let S=Date.now(),A=!1;function R(){if(Date.now()-S>E&&(t.moveDown(),S=Date.now()),!A){if($)return;requestAnimationFrame(R)}}function O(){($=!$)?(b.stop(),document.getElementById("paused").style.display="block"):(R(),j(b),document.getElementById("paused").style.display="none")}R()}(),N?(document.getElementById("volume-icon").className="fas fa-volume-mute",b.stop()):b.play()},3200)}function Z(){W="keyboard",Q()}Y.addEventListener("click",Z),document.getElementById("choose-voice-play").addEventListener("click",()=>{document.getElementById("voice-option").style.visibility="hidden",document.getElementById("countdown").style.visibility="visible",W="voice",N=!0,Q()})}]);