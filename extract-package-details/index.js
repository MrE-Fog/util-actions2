"use strict";var Xe=Object.create;var pe=Object.defineProperty;var Ze=Object.getOwnPropertyDescriptor;var et=Object.getOwnPropertyNames;var tt=Object.getPrototypeOf,rt=Object.prototype.hasOwnProperty;var v=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var nt=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of et(e))!rt.call(t,i)&&i!==r&&pe(t,i,{get:()=>e[i],enumerable:!(n=Ze(e,i))||n.enumerable});return t};var K=(t,e,r)=>(r=t!=null?Xe(tt(t)):{},nt(e||!t||!t.__esModule?pe(r,"default",{value:t,enumerable:!0}):r,t));var ge=v(ve=>{"use strict";Object.defineProperty(ve,"__esModule",{value:!0})});var I=v(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});M.toCommandProperties=M.toCommandValue=void 0;function it(t){return t==null?"":typeof t=="string"||t instanceof String?t:JSON.stringify(t)}M.toCommandValue=it;function st(t){return Object.keys(t).length?{title:t.title,file:t.file,line:t.startLine,endLine:t.endLine,col:t.startColumn,endColumn:t.endColumn}:{}}M.toCommandProperties=st});var Oe=v(w=>{"use strict";var ot=w&&w.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),ut=w&&w.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),at=w&&w.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.hasOwnProperty.call(t,r)&&ot(e,t,r);return ut(e,t),e};Object.defineProperty(w,"__esModule",{value:!0});w.issue=w.issueCommand=void 0;var ct=at(require("os")),we=I();function ye(t,e,r){let n=new Q(t,e,r);process.stdout.write(n.toString()+ct.EOL)}w.issueCommand=ye;function lt(t,e=""){ye(t,{},e)}w.issue=lt;var _e="::",Q=class{constructor(e,r,n){e||(e="missing.command"),this.command=e,this.properties=r,this.message=n}toString(){let e=_e+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let r=!0;for(let n in this.properties)if(this.properties.hasOwnProperty(n)){let i=this.properties[n];i&&(r?r=!1:e+=",",e+=`${n}=${dt(i)}`)}}return e+=`${_e}${ft(this.message)}`,e}};function ft(t){return we.toCommandValue(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function dt(t){return we.toCommandValue(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}});var Re=v(b=>{"use strict";var ht=b&&b.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),pt=b&&b.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Ee=b&&b.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.hasOwnProperty.call(t,r)&&ht(e,t,r);return pt(e,t),e};Object.defineProperty(b,"__esModule",{value:!0});b.issueCommand=void 0;var be=Ee(require("fs")),mt=Ee(require("os")),vt=I();function gt(t,e){let r=process.env[`GITHUB_${t}`];if(!r)throw new Error(`Unable to find environment variable for file command ${t}`);if(!be.existsSync(r))throw new Error(`Missing file at path: ${r}`);be.appendFileSync(r,`${vt.toCommandValue(e)}${mt.EOL}`,{encoding:"utf8"})}b.issueCommand=gt});var Ae=v(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.checkBypass=U.getProxyUrl=void 0;function _t(t){let e=t.protocol==="https:";if(Se(t))return;let r=(()=>e?process.env.https_proxy||process.env.HTTPS_PROXY:process.env.http_proxy||process.env.HTTP_PROXY)();if(r)return new URL(r)}U.getProxyUrl=_t;function Se(t){if(!t.hostname)return!1;let e=process.env.no_proxy||process.env.NO_PROXY||"";if(!e)return!1;let r;t.port?r=Number(t.port):t.protocol==="http:"?r=80:t.protocol==="https:"&&(r=443);let n=[t.hostname.toUpperCase()];typeof r=="number"&&n.push(`${n[0]}:${r}`);for(let i of e.split(",").map(s=>s.trim().toUpperCase()).filter(s=>s))if(n.some(s=>s===i))return!0;return!1}U.checkBypass=Se});var Me=v(C=>{"use strict";var _r=require("net"),wt=require("tls"),W=require("http"),Te=require("https"),yt=require("events"),wr=require("assert"),Ot=require("util");C.httpOverHttp=bt;C.httpsOverHttp=Et;C.httpOverHttps=Rt;C.httpsOverHttps=St;function bt(t){var e=new R(t);return e.request=W.request,e}function Et(t){var e=new R(t);return e.request=W.request,e.createSocket=qe,e.defaultPort=443,e}function Rt(t){var e=new R(t);return e.request=Te.request,e}function St(t){var e=new R(t);return e.request=Te.request,e.createSocket=qe,e.defaultPort=443,e}function R(t){var e=this;e.options=t||{},e.proxyOptions=e.options.proxy||{},e.maxSockets=e.options.maxSockets||W.Agent.defaultMaxSockets,e.requests=[],e.sockets=[],e.on("free",function(n,i,s,o){for(var l=Pe(i,s,o),d=0,u=e.requests.length;d<u;++d){var a=e.requests[d];if(a.host===l.host&&a.port===l.port){e.requests.splice(d,1),a.request.onSocket(n);return}}n.destroy(),e.removeSocket(n)})}Ot.inherits(R,yt.EventEmitter);R.prototype.addRequest=function(e,r,n,i){var s=this,o=X({request:e},s.options,Pe(r,n,i));if(s.sockets.length>=this.maxSockets){s.requests.push(o);return}s.createSocket(o,function(l){l.on("free",d),l.on("close",u),l.on("agentRemove",u),e.onSocket(l);function d(){s.emit("free",l,o)}function u(a){s.removeSocket(l),l.removeListener("free",d),l.removeListener("close",u),l.removeListener("agentRemove",u)}})};R.prototype.createSocket=function(e,r){var n=this,i={};n.sockets.push(i);var s=X({},n.proxyOptions,{method:"CONNECT",path:e.host+":"+e.port,agent:!1,headers:{host:e.host+":"+e.port}});e.localAddress&&(s.localAddress=e.localAddress),s.proxyAuth&&(s.headers=s.headers||{},s.headers["Proxy-Authorization"]="Basic "+new Buffer(s.proxyAuth).toString("base64")),A("making CONNECT request");var o=n.request(s);o.useChunkedEncodingByDefault=!1,o.once("response",l),o.once("upgrade",d),o.once("connect",u),o.once("error",a),o.end();function l(f){f.upgrade=!0}function d(f,p,P){process.nextTick(function(){u(f,p,P)})}function u(f,p,P){if(o.removeAllListeners(),p.removeAllListeners(),f.statusCode!==200){A("tunneling socket could not be established, statusCode=%d",f.statusCode),p.destroy();var k=new Error("tunneling socket could not be established, statusCode="+f.statusCode);k.code="ECONNRESET",e.request.emit("error",k),n.removeSocket(i);return}if(P.length>0){A("got illegal response body from proxy"),p.destroy();var k=new Error("got illegal response body from proxy");k.code="ECONNRESET",e.request.emit("error",k),n.removeSocket(i);return}return A("tunneling connection has established"),n.sockets[n.sockets.indexOf(i)]=p,r(p)}function a(f){o.removeAllListeners(),A(`tunneling socket could not be established, cause=%s
`,f.message,f.stack);var p=new Error("tunneling socket could not be established, cause="+f.message);p.code="ECONNRESET",e.request.emit("error",p),n.removeSocket(i)}};R.prototype.removeSocket=function(e){var r=this.sockets.indexOf(e);if(r!==-1){this.sockets.splice(r,1);var n=this.requests.shift();n&&this.createSocket(n,function(i){n.request.onSocket(i)})}};function qe(t,e){var r=this;R.prototype.createSocket.call(r,t,function(n){var i=t.request.getHeader("host"),s=X({},r.options,{socket:n,servername:i?i.replace(/:.*$/,""):t.host}),o=wt.connect(0,s);r.sockets[r.sockets.indexOf(n)]=o,e(o)})}function Pe(t,e,r){return typeof t=="string"?{host:t,port:e,localAddress:r}:t}function X(t){for(var e=1,r=arguments.length;e<r;++e){var n=arguments[e];if(typeof n=="object")for(var i=Object.keys(n),s=0,o=i.length;s<o;++s){var l=i[s];n[l]!==void 0&&(t[l]=n[l])}}return t}var A;process.env.NODE_DEBUG&&/\btunnel\b/.test(process.env.NODE_DEBUG)?A=function(){var t=Array.prototype.slice.call(arguments);typeof t[0]=="string"?t[0]="TUNNEL: "+t[0]:t.unshift("TUNNEL:"),console.error.apply(console,t)}:A=function(){};C.debug=A});var Ce=v((Or,Ue)=>{Ue.exports=Me()});var De=v(h=>{"use strict";var At=h&&h.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Tt=h&&h.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),F=h&&h.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.hasOwnProperty.call(t,r)&&At(e,t,r);return Tt(e,t),e},m=h&&h.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function l(a){try{u(n.next(a))}catch(f){o(f)}}function d(a){try{u(n.throw(a))}catch(f){o(f)}}function u(a){a.done?s(a.value):i(a.value).then(l,d)}u((n=n.apply(t,e||[])).next())})};Object.defineProperty(h,"__esModule",{value:!0});h.HttpClient=h.isHttps=h.HttpClientResponse=h.HttpClientError=h.getProxyUrl=h.MediaTypes=h.Headers=h.HttpCodes=void 0;var N=F(require("http")),Z=F(require("https")),je=F(Ae()),B=F(Ce()),O;(function(t){t[t.OK=200]="OK",t[t.MultipleChoices=300]="MultipleChoices",t[t.MovedPermanently=301]="MovedPermanently",t[t.ResourceMoved=302]="ResourceMoved",t[t.SeeOther=303]="SeeOther",t[t.NotModified=304]="NotModified",t[t.UseProxy=305]="UseProxy",t[t.SwitchProxy=306]="SwitchProxy",t[t.TemporaryRedirect=307]="TemporaryRedirect",t[t.PermanentRedirect=308]="PermanentRedirect",t[t.BadRequest=400]="BadRequest",t[t.Unauthorized=401]="Unauthorized",t[t.PaymentRequired=402]="PaymentRequired",t[t.Forbidden=403]="Forbidden",t[t.NotFound=404]="NotFound",t[t.MethodNotAllowed=405]="MethodNotAllowed",t[t.NotAcceptable=406]="NotAcceptable",t[t.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",t[t.RequestTimeout=408]="RequestTimeout",t[t.Conflict=409]="Conflict",t[t.Gone=410]="Gone",t[t.TooManyRequests=429]="TooManyRequests",t[t.InternalServerError=500]="InternalServerError",t[t.NotImplemented=501]="NotImplemented",t[t.BadGateway=502]="BadGateway",t[t.ServiceUnavailable=503]="ServiceUnavailable",t[t.GatewayTimeout=504]="GatewayTimeout"})(O=h.HttpCodes||(h.HttpCodes={}));var g;(function(t){t.Accept="accept",t.ContentType="content-type"})(g=h.Headers||(h.Headers={}));var T;(function(t){t.ApplicationJson="application/json"})(T=h.MediaTypes||(h.MediaTypes={}));function qt(t){let e=je.getProxyUrl(new URL(t));return e?e.href:""}h.getProxyUrl=qt;var Pt=[O.MovedPermanently,O.ResourceMoved,O.SeeOther,O.TemporaryRedirect,O.PermanentRedirect],Mt=[O.BadGateway,O.ServiceUnavailable,O.GatewayTimeout],Ut=["OPTIONS","GET","DELETE","HEAD"],Ct=10,jt=5,j=class extends Error{constructor(e,r){super(e),this.name="HttpClientError",this.statusCode=r,Object.setPrototypeOf(this,j.prototype)}};h.HttpClientError=j;var L=class{constructor(e){this.message=e}readBody(){return m(this,void 0,void 0,function*(){return new Promise(e=>m(this,void 0,void 0,function*(){let r=Buffer.alloc(0);this.message.on("data",n=>{r=Buffer.concat([r,n])}),this.message.on("end",()=>{e(r.toString())})}))})}};h.HttpClientResponse=L;function Dt(t){return new URL(t).protocol==="https:"}h.isHttps=Dt;var ee=class{constructor(e,r,n){this._ignoreSslError=!1,this._allowRedirects=!0,this._allowRedirectDowngrade=!1,this._maxRedirects=50,this._allowRetries=!1,this._maxRetries=1,this._keepAlive=!1,this._disposed=!1,this.userAgent=e,this.handlers=r||[],this.requestOptions=n,n&&(n.ignoreSslError!=null&&(this._ignoreSslError=n.ignoreSslError),this._socketTimeout=n.socketTimeout,n.allowRedirects!=null&&(this._allowRedirects=n.allowRedirects),n.allowRedirectDowngrade!=null&&(this._allowRedirectDowngrade=n.allowRedirectDowngrade),n.maxRedirects!=null&&(this._maxRedirects=Math.max(n.maxRedirects,0)),n.keepAlive!=null&&(this._keepAlive=n.keepAlive),n.allowRetries!=null&&(this._allowRetries=n.allowRetries),n.maxRetries!=null&&(this._maxRetries=n.maxRetries))}options(e,r){return m(this,void 0,void 0,function*(){return this.request("OPTIONS",e,null,r||{})})}get(e,r){return m(this,void 0,void 0,function*(){return this.request("GET",e,null,r||{})})}del(e,r){return m(this,void 0,void 0,function*(){return this.request("DELETE",e,null,r||{})})}post(e,r,n){return m(this,void 0,void 0,function*(){return this.request("POST",e,r,n||{})})}patch(e,r,n){return m(this,void 0,void 0,function*(){return this.request("PATCH",e,r,n||{})})}put(e,r,n){return m(this,void 0,void 0,function*(){return this.request("PUT",e,r,n||{})})}head(e,r){return m(this,void 0,void 0,function*(){return this.request("HEAD",e,null,r||{})})}sendStream(e,r,n,i){return m(this,void 0,void 0,function*(){return this.request(e,r,n,i)})}getJson(e,r={}){return m(this,void 0,void 0,function*(){r[g.Accept]=this._getExistingOrDefaultHeader(r,g.Accept,T.ApplicationJson);let n=yield this.get(e,r);return this._processResponse(n,this.requestOptions)})}postJson(e,r,n={}){return m(this,void 0,void 0,function*(){let i=JSON.stringify(r,null,2);n[g.Accept]=this._getExistingOrDefaultHeader(n,g.Accept,T.ApplicationJson),n[g.ContentType]=this._getExistingOrDefaultHeader(n,g.ContentType,T.ApplicationJson);let s=yield this.post(e,i,n);return this._processResponse(s,this.requestOptions)})}putJson(e,r,n={}){return m(this,void 0,void 0,function*(){let i=JSON.stringify(r,null,2);n[g.Accept]=this._getExistingOrDefaultHeader(n,g.Accept,T.ApplicationJson),n[g.ContentType]=this._getExistingOrDefaultHeader(n,g.ContentType,T.ApplicationJson);let s=yield this.put(e,i,n);return this._processResponse(s,this.requestOptions)})}patchJson(e,r,n={}){return m(this,void 0,void 0,function*(){let i=JSON.stringify(r,null,2);n[g.Accept]=this._getExistingOrDefaultHeader(n,g.Accept,T.ApplicationJson),n[g.ContentType]=this._getExistingOrDefaultHeader(n,g.ContentType,T.ApplicationJson);let s=yield this.patch(e,i,n);return this._processResponse(s,this.requestOptions)})}request(e,r,n,i){return m(this,void 0,void 0,function*(){if(this._disposed)throw new Error("Client has already been disposed.");let s=new URL(r),o=this._prepareRequest(e,s,i),l=this._allowRetries&&Ut.includes(e)?this._maxRetries+1:1,d=0,u;do{if(u=yield this.requestRaw(o,n),u&&u.message&&u.message.statusCode===O.Unauthorized){let f;for(let p of this.handlers)if(p.canHandleAuthentication(u)){f=p;break}return f?f.handleAuthentication(this,o,n):u}let a=this._maxRedirects;for(;u.message.statusCode&&Pt.includes(u.message.statusCode)&&this._allowRedirects&&a>0;){let f=u.message.headers.location;if(!f)break;let p=new URL(f);if(s.protocol==="https:"&&s.protocol!==p.protocol&&!this._allowRedirectDowngrade)throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");if(yield u.readBody(),p.hostname!==s.hostname)for(let P in i)P.toLowerCase()==="authorization"&&delete i[P];o=this._prepareRequest(e,p,i),u=yield this.requestRaw(o,n),a--}if(!u.message.statusCode||!Mt.includes(u.message.statusCode))return u;d+=1,d<l&&(yield u.readBody(),yield this._performExponentialBackoff(d))}while(d<l);return u})}dispose(){this._agent&&this._agent.destroy(),this._disposed=!0}requestRaw(e,r){return m(this,void 0,void 0,function*(){return new Promise((n,i)=>{function s(o,l){o?i(o):l?n(l):i(new Error("Unknown error"))}this.requestRawWithCallback(e,r,s)})})}requestRawWithCallback(e,r,n){typeof r=="string"&&(e.options.headers||(e.options.headers={}),e.options.headers["Content-Length"]=Buffer.byteLength(r,"utf8"));let i=!1;function s(d,u){i||(i=!0,n(d,u))}let o=e.httpModule.request(e.options,d=>{let u=new L(d);s(void 0,u)}),l;o.on("socket",d=>{l=d}),o.setTimeout(this._socketTimeout||3*6e4,()=>{l&&l.end(),s(new Error(`Request timeout: ${e.options.path}`))}),o.on("error",function(d){s(d)}),r&&typeof r=="string"&&o.write(r,"utf8"),r&&typeof r!="string"?(r.on("close",function(){o.end()}),r.pipe(o)):o.end()}getAgent(e){let r=new URL(e);return this._getAgent(r)}_prepareRequest(e,r,n){let i={};i.parsedUrl=r;let s=i.parsedUrl.protocol==="https:";i.httpModule=s?Z:N;let o=s?443:80;if(i.options={},i.options.host=i.parsedUrl.hostname,i.options.port=i.parsedUrl.port?parseInt(i.parsedUrl.port):o,i.options.path=(i.parsedUrl.pathname||"")+(i.parsedUrl.search||""),i.options.method=e,i.options.headers=this._mergeHeaders(n),this.userAgent!=null&&(i.options.headers["user-agent"]=this.userAgent),i.options.agent=this._getAgent(i.parsedUrl),this.handlers)for(let l of this.handlers)l.prepareRequest(i.options);return i}_mergeHeaders(e){return this.requestOptions&&this.requestOptions.headers?Object.assign({},$(this.requestOptions.headers),$(e||{})):$(e||{})}_getExistingOrDefaultHeader(e,r,n){let i;return this.requestOptions&&this.requestOptions.headers&&(i=$(this.requestOptions.headers)[r]),e[r]||i||n}_getAgent(e){let r,n=je.getProxyUrl(e),i=n&&n.hostname;if(this._keepAlive&&i&&(r=this._proxyAgent),this._keepAlive&&!i&&(r=this._agent),r)return r;let s=e.protocol==="https:",o=100;if(this.requestOptions&&(o=this.requestOptions.maxSockets||N.globalAgent.maxSockets),n&&n.hostname){let l={maxSockets:o,keepAlive:this._keepAlive,proxy:Object.assign(Object.assign({},(n.username||n.password)&&{proxyAuth:`${n.username}:${n.password}`}),{host:n.hostname,port:n.port})},d,u=n.protocol==="https:";s?d=u?B.httpsOverHttps:B.httpsOverHttp:d=u?B.httpOverHttps:B.httpOverHttp,r=d(l),this._proxyAgent=r}if(this._keepAlive&&!r){let l={keepAlive:this._keepAlive,maxSockets:o};r=s?new Z.Agent(l):new N.Agent(l),this._agent=r}return r||(r=s?Z.globalAgent:N.globalAgent),s&&this._ignoreSslError&&(r.options=Object.assign(r.options||{},{rejectUnauthorized:!1})),r}_performExponentialBackoff(e){return m(this,void 0,void 0,function*(){e=Math.min(Ct,e);let r=jt*Math.pow(2,e);return new Promise(n=>setTimeout(()=>n(),r))})}_processResponse(e,r){return m(this,void 0,void 0,function*(){return new Promise((n,i)=>m(this,void 0,void 0,function*(){let s=e.message.statusCode||0,o={statusCode:s,result:null,headers:{}};s===O.NotFound&&n(o);function l(a,f){if(typeof f=="string"){let p=new Date(f);if(!isNaN(p.valueOf()))return p}return f}let d,u;try{u=yield e.readBody(),u&&u.length>0&&(r&&r.deserializeDates?d=JSON.parse(u,l):d=JSON.parse(u),o.result=d),o.headers=e.message.headers}catch{}if(s>299){let a;d&&d.message?a=d.message:u&&u.length>0?a=u:a=`Failed request: (${s})`;let f=new j(a,s);f.result=o.result,i(f)}else n(o)}))})}};h.HttpClient=ee;var $=t=>Object.keys(t).reduce((e,r)=>(e[r.toLowerCase()]=t[r],e),{})});var ke=v(E=>{"use strict";var ie=E&&E.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function l(a){try{u(n.next(a))}catch(f){o(f)}}function d(a){try{u(n.throw(a))}catch(f){o(f)}}function u(a){a.done?s(a.value):i(a.value).then(l,d)}u((n=n.apply(t,e||[])).next())})};Object.defineProperty(E,"__esModule",{value:!0});E.PersonalAccessTokenCredentialHandler=E.BearerCredentialHandler=E.BasicCredentialHandler=void 0;var te=class{constructor(e,r){this.username=e,this.password=r}prepareRequest(e){if(!e.headers)throw Error("The request has no headers");e.headers.Authorization=`Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`}canHandleAuthentication(){return!1}handleAuthentication(){return ie(this,void 0,void 0,function*(){throw new Error("not implemented")})}};E.BasicCredentialHandler=te;var re=class{constructor(e){this.token=e}prepareRequest(e){if(!e.headers)throw Error("The request has no headers");e.headers.Authorization=`Bearer ${this.token}`}canHandleAuthentication(){return!1}handleAuthentication(){return ie(this,void 0,void 0,function*(){throw new Error("not implemented")})}};E.BearerCredentialHandler=re;var ne=class{constructor(e){this.token=e}prepareRequest(e){if(!e.headers)throw Error("The request has no headers");e.headers.Authorization=`Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`}canHandleAuthentication(){return!1}handleAuthentication(){return ie(this,void 0,void 0,function*(){throw new Error("not implemented")})}};E.PersonalAccessTokenCredentialHandler=ne});var Ne=v(D=>{"use strict";var xe=D&&D.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function l(a){try{u(n.next(a))}catch(f){o(f)}}function d(a){try{u(n.throw(a))}catch(f){o(f)}}function u(a){a.done?s(a.value):i(a.value).then(l,d)}u((n=n.apply(t,e||[])).next())})};Object.defineProperty(D,"__esModule",{value:!0});D.OidcClient=void 0;var kt=De(),xt=ke(),Ie=se(),q=class{static createHttpClient(e=!0,r=10){let n={allowRetries:e,maxRetries:r};return new kt.HttpClient("actions/oidc-client",[new xt.BearerCredentialHandler(q.getRequestToken())],n)}static getRequestToken(){let e=process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;if(!e)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");return e}static getIDTokenUrl(){let e=process.env.ACTIONS_ID_TOKEN_REQUEST_URL;if(!e)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");return e}static getCall(e){var r;return xe(this,void 0,void 0,function*(){let s=(r=(yield q.createHttpClient().getJson(e).catch(o=>{throw new Error(`Failed to get ID Token. 
 
        Error Code : ${o.statusCode}
 
        Error Message: ${o.result.message}`)})).result)===null||r===void 0?void 0:r.value;if(!s)throw new Error("Response json body do not have ID Token field");return s})}static getIDToken(e){return xe(this,void 0,void 0,function*(){try{let r=q.getIDTokenUrl();if(e){let i=encodeURIComponent(e);r=`${r}&audience=${i}`}Ie.debug(`ID token url is ${r}`);let n=yield q.getCall(r);return Ie.setSecret(n),n}catch(r){throw new Error(`Error message: ${r.message}`)}})}};D.OidcClient=q});var ce=v(_=>{"use strict";var oe=_&&_.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function l(a){try{u(n.next(a))}catch(f){o(f)}}function d(a){try{u(n.throw(a))}catch(f){o(f)}}function u(a){a.done?s(a.value):i(a.value).then(l,d)}u((n=n.apply(t,e||[])).next())})};Object.defineProperty(_,"__esModule",{value:!0});_.summary=_.markdownSummary=_.SUMMARY_DOCS_URL=_.SUMMARY_ENV_VAR=void 0;var It=require("os"),ue=require("fs"),{access:Nt,appendFile:Bt,writeFile:$t}=ue.promises;_.SUMMARY_ENV_VAR="GITHUB_STEP_SUMMARY";_.SUMMARY_DOCS_URL="https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";var ae=class{constructor(){this._buffer=""}filePath(){return oe(this,void 0,void 0,function*(){if(this._filePath)return this._filePath;let e=process.env[_.SUMMARY_ENV_VAR];if(!e)throw new Error(`Unable to find environment variable for $${_.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);try{yield Nt(e,ue.constants.R_OK|ue.constants.W_OK)}catch{throw new Error(`Unable to access summary file: '${e}'. Check if the file has correct read/write permissions.`)}return this._filePath=e,this._filePath})}wrap(e,r,n={}){let i=Object.entries(n).map(([s,o])=>` ${s}="${o}"`).join("");return r?`<${e}${i}>${r}</${e}>`:`<${e}${i}>`}write(e){return oe(this,void 0,void 0,function*(){let r=!!(e!=null&&e.overwrite),n=yield this.filePath();return yield(r?$t:Bt)(n,this._buffer,{encoding:"utf8"}),this.emptyBuffer()})}clear(){return oe(this,void 0,void 0,function*(){return this.emptyBuffer().write({overwrite:!0})})}stringify(){return this._buffer}isEmptyBuffer(){return this._buffer.length===0}emptyBuffer(){return this._buffer="",this}addRaw(e,r=!1){return this._buffer+=e,r?this.addEOL():this}addEOL(){return this.addRaw(It.EOL)}addCodeBlock(e,r){let n=Object.assign({},r&&{lang:r}),i=this.wrap("pre",this.wrap("code",e),n);return this.addRaw(i).addEOL()}addList(e,r=!1){let n=r?"ol":"ul",i=e.map(o=>this.wrap("li",o)).join(""),s=this.wrap(n,i);return this.addRaw(s).addEOL()}addTable(e){let r=e.map(i=>{let s=i.map(o=>{if(typeof o=="string")return this.wrap("td",o);let{header:l,data:d,colspan:u,rowspan:a}=o,f=l?"th":"td",p=Object.assign(Object.assign({},u&&{colspan:u}),a&&{rowspan:a});return this.wrap(f,d,p)}).join("");return this.wrap("tr",s)}).join(""),n=this.wrap("table",r);return this.addRaw(n).addEOL()}addDetails(e,r){let n=this.wrap("details",this.wrap("summary",e)+r);return this.addRaw(n).addEOL()}addImage(e,r,n){let{width:i,height:s}=n||{},o=Object.assign(Object.assign({},i&&{width:i}),s&&{height:s}),l=this.wrap("img",null,Object.assign({src:e,alt:r},o));return this.addRaw(l).addEOL()}addHeading(e,r){let n=`h${r}`,i=["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h1",s=this.wrap(i,e);return this.addRaw(s).addEOL()}addSeparator(){let e=this.wrap("hr",null);return this.addRaw(e).addEOL()}addBreak(){let e=this.wrap("br",null);return this.addRaw(e).addEOL()}addQuote(e,r){let n=Object.assign({},r&&{cite:r}),i=this.wrap("blockquote",e,n);return this.addRaw(i).addEOL()}addLink(e,r){let n=this.wrap("a",e,{href:r});return this.addRaw(n).addEOL()}},Be=new ae;_.markdownSummary=Be;_.summary=Be});var se=v(c=>{"use strict";var Lt=c&&c.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Ft=c&&c.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),$e=c&&c.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.hasOwnProperty.call(t,r)&&Lt(e,t,r);return Ft(e,t),e},Le=c&&c.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function l(a){try{u(n.next(a))}catch(f){o(f)}}function d(a){try{u(n.throw(a))}catch(f){o(f)}}function u(a){a.done?s(a.value):i(a.value).then(l,d)}u((n=n.apply(t,e||[])).next())})};Object.defineProperty(c,"__esModule",{value:!0});c.getIDToken=c.getState=c.saveState=c.group=c.endGroup=c.startGroup=c.info=c.notice=c.warning=c.error=c.debug=c.isDebug=c.setFailed=c.setCommandEcho=c.setOutput=c.getBooleanInput=c.getMultilineInput=c.getInput=c.addPath=c.setSecret=c.exportVariable=c.ExitCode=void 0;var y=Oe(),Fe=Re(),V=I(),G=$e(require("os")),Gt=$e(require("path")),Vt=Ne(),Ge;(function(t){t[t.Success=0]="Success",t[t.Failure=1]="Failure"})(Ge=c.ExitCode||(c.ExitCode={}));function Jt(t,e){let r=V.toCommandValue(e);if(process.env[t]=r,process.env.GITHUB_ENV||""){let i="_GitHubActionsFileCommandDelimeter_",s=`${t}<<${i}${G.EOL}${r}${G.EOL}${i}`;Fe.issueCommand("ENV",s)}else y.issueCommand("set-env",{name:t},r)}c.exportVariable=Jt;function zt(t){y.issueCommand("add-mask",{},t)}c.setSecret=zt;function Kt(t){process.env.GITHUB_PATH||""?Fe.issueCommand("PATH",t):y.issueCommand("add-path",{},t),process.env.PATH=`${t}${Gt.delimiter}${process.env.PATH}`}c.addPath=Kt;function le(t,e){let r=process.env[`INPUT_${t.replace(/ /g,"_").toUpperCase()}`]||"";if(e&&e.required&&!r)throw new Error(`Input required and not supplied: ${t}`);return e&&e.trimWhitespace===!1?r:r.trim()}c.getInput=le;function Yt(t,e){return le(t,e).split(`
`).filter(n=>n!=="")}c.getMultilineInput=Yt;function Ht(t,e){let r=["true","True","TRUE"],n=["false","False","FALSE"],i=le(t,e);if(r.includes(i))return!0;if(n.includes(i))return!1;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${t}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}c.getBooleanInput=Ht;function Qt(t,e){process.stdout.write(G.EOL),y.issueCommand("set-output",{name:t},e)}c.setOutput=Qt;function Wt(t){y.issue("echo",t?"on":"off")}c.setCommandEcho=Wt;function Xt(t){process.exitCode=Ge.Failure,Ve(t)}c.setFailed=Xt;function Zt(){return process.env.RUNNER_DEBUG==="1"}c.isDebug=Zt;function er(t){y.issueCommand("debug",{},t)}c.debug=er;function Ve(t,e={}){y.issueCommand("error",V.toCommandProperties(e),t instanceof Error?t.toString():t)}c.error=Ve;function tr(t,e={}){y.issueCommand("warning",V.toCommandProperties(e),t instanceof Error?t.toString():t)}c.warning=tr;function rr(t,e={}){y.issueCommand("notice",V.toCommandProperties(e),t instanceof Error?t.toString():t)}c.notice=rr;function nr(t){process.stdout.write(t+G.EOL)}c.info=nr;function Je(t){y.issue("group",t)}c.startGroup=Je;function ze(){y.issue("endgroup")}c.endGroup=ze;function ir(t,e){return Le(this,void 0,void 0,function*(){Je(t);let r;try{r=yield e()}finally{ze()}return r})}c.group=ir;function sr(t,e){y.issueCommand("save-state",{name:t},e)}c.saveState=sr;function or(t){return process.env[`STATE_${t}`]||""}c.getState=or;function ur(t){return Le(this,void 0,void 0,function*(){return yield Vt.OidcClient.getIDToken(t)})}c.getIDToken=ur;var ar=ce();Object.defineProperty(c,"summary",{enumerable:!0,get:function(){return ar.summary}});var cr=ce();Object.defineProperty(c,"markdownSummary",{enumerable:!0,get:function(){return cr.markdownSummary}})});var Ke=v(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});J.GitHubActionsContextImpl=void 0;var x=se(),fe=class{getInput(e,r){return(0,x.getInput)(e,r)}getMultilineInput(e,r){return(0,x.getMultilineInput)(e,r)}setOutput(e,r){return(0,x.setOutput)(e,r)}setFailed(e){return(0,x.setFailed)(e)}info(e){return(0,x.info)(e)}};J.GitHubActionsContextImpl=fe});var He=v(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.TestGitHubActionContext=void 0;var Ye=require("os"),de=class{constructor(){this.inputs={},this.outputs={}}addInput(e,r){this.inputs[e]=r}addMultilineInput(e,r){let n="";for(let i of r)n!==""&&(n+=Ye.EOL),n+=i;this.inputs[e]=n}getOutputs(){return this.outputs}getFailureMessage(){return this.failureMessage}getInput(e,r){let n=this.inputs[e];if(n===void 0&&(r==null?void 0:r.required)===!0)throw new Error(`Input required and not supplied: ${e}`);return n||""}getMultilineInput(e,r){let n=this.getInput(e,r);return n===""?[]:n.split(Ye.EOL)}setOutput(e,r){this.outputs[e]=r}setFailed(e){this.failureMessage=e}info(e){console.log(e)}};z.TestGitHubActionContext=de});var Qe=v(S=>{"use strict";var lr=S&&S.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),he=S&&S.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&lr(e,t,r)};Object.defineProperty(S,"__esModule",{value:!0});he(ge(),S);he(Ke(),S);he(He(),S)});var Y=K(require("path")),H=K(require("fs"));function me(t){try{let e=t.getInput("path");if(e==="")throw new Error("Path must be provided");if(e=Y.default.resolve(e),!H.default.existsSync(e))throw new Error(`Folder at '${e}' does not exist.`);let r=Y.default.join(e,"package.json");if(!H.default.existsSync(r))throw new Error(`File at '${r}' does not exist.`);let n=require(r),i=n.name.toString(),s=n.version.toString();t.setOutput("name",i),t.setOutput("version",s)}catch(e){t.setFailed(e.message)}}var We=K(Qe());me(new We.GitHubActionsContextImpl);
