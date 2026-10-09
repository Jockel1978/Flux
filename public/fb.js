(()=>{var kf=()=>{};var Vf=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},tv=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{let s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4,_=(c&15)<<2|h>>6,S=h&63;u||(S=64,o||(_=64)),r.push(t[f],t[m],t[_],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let h=i<n.length?t[n.charAt(i)]:64;++i;let m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new Cc;let _=s<<2|c>>4;if(r.push(_),h!==64){let S=c<<4&240|h>>2;if(r.push(S),m!==64){let C=h<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Cc=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},nv=function(n){let e=Vf(n);return xf.encodeByteArray(e,!0)},kc=function(n){return nv(n).replace(/\./g,"")},Us=function(n){try{return xf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Nc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var rv=()=>Nc().__FIREBASE_DEFAULTS__,iv=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Us(n[1]);return e&&JSON.parse(e)},Bs=()=>{try{return kf()||rv()||iv()||sv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Lf=n=>{var e,t;return(t=(e=Bs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]};var Oc=()=>{var n;return(n=Bs())===null||n===void 0?void 0:n.config},Vc=n=>{var e;return(e=Bs())===null||e===void 0?void 0:e[`_${n}`]};var Fs=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function Dt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qs(n){return(await fetch(n,{credentials:"include"})).ok}var gi={};function ov(){let n={prod:[],emulator:[]};for(let e of Object.keys(gi))gi[e]?n.emulator.push(e):n.prod.push(e);return n}function av(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}var Nf=!1;function xc(n,e){if(typeof window>"u"||typeof document>"u"||!Dt(window.location.host)||gi[n]===e||gi[n]||Nf)return;gi[n]=e;function t(_){return`__firebase__banner__${_}`}let r="__firebase__banner",s=ov().prod.length>0;function o(){let _=document.getElementById(r);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,S){_.setAttribute("width","24"),_.setAttribute("id",S),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){let _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Nf=!0,o()},_}function f(_,S){_.setAttribute("id",S),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function m(){let _=av(r),S=t("text"),C=document.getElementById(S)||document.createElement("span"),N=t("learnmore"),k=document.getElementById(N)||document.createElement("a"),G=t("preprendIcon"),B=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){let F=_.element;c(F),f(k,N);let W=h();u(B,G),F.append(B,C,k,W),document.body.appendChild(F)}s?(C.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function Ff(){var n;let e=(n=Bs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Uf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bf(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jf(){let n=ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Lc(){return!Ff()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mc(){return!Ff()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function js(){try{return typeof indexedDB=="object"}catch{return!1}}function zf(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var cv="FirebaseError",Ue=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=cv,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pt.prototype.create)}},pt=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uv(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Ue(i,c,r)}};function uv(n,e){return n.replace(lv,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var lv=/\{\$([^}]+)}/g;function Gf(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $e(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],o=e[i];if(Of(s)&&Of(o)){if(!$e(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Of(n){return n!==null&&typeof n=="object"}function Yn(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xn(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zn(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function $f(n,e){let t=new Dc(n,e);return t.subscribe.bind(t)}var Dc=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");hv(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Pc),i.error===void 0&&(i.error=Pc),i.complete===void 0&&(i.complete=Pc);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function hv(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Pc(){}var Sb=4*60*60*1e3;function ue(n){return n&&n._delegate?n._delegate:n}var We=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var hn="[DEFAULT]";var Fc=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new Fs;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fv(e))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hn){return this.instances.has(e)}getOptions(e=hn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,o]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hn){return this.component?this.component.multipleInstances?e:hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function dv(n){return n===hn?void 0:n}function fv(n){return n.instantiationMode==="EAGER"}var zs=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Fc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var pv=[],H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));var mv={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},gv=H.INFO,_v={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},yv=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=_v[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},kt=class{constructor(e){this.name=e,this._logLevel=gv,this._logHandler=yv,this._userLogHandler=null,pv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}};var vv=(n,e)=>e.some(t=>n instanceof t),Wf,Kf;function Iv(){return Wf||(Wf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wv(){return Kf||(Kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Hf=new WeakMap,Bc=new WeakMap,Qf=new WeakMap,Uc=new WeakMap,jc=new WeakMap;function Ev(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(nt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Hf.set(t,n)}).catch(()=>{}),jc.set(e,n),e}function Tv(n){if(Bc.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Bc.set(n,e)}var qc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Qf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Jf(n){qc=n(qc)}function bv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(Gs(this),e,...t);return Qf.set(r,e.sort?e.sort():[e]),nt(r)}:wv().includes(n)?function(...e){return n.apply(Gs(this),e),nt(Hf.get(this))}:function(...e){return nt(n.apply(Gs(this),e))}}function Av(n){return typeof n=="function"?bv(n):(n instanceof IDBTransaction&&Tv(n),vv(n,Iv())?new Proxy(n,qc):n)}function nt(n){if(n instanceof IDBRequest)return Ev(n);if(Uc.has(n))return Uc.get(n);let e=Av(n);return e!==n&&(Uc.set(n,e),jc.set(e,n)),e}var Gs=n=>jc.get(n);function Xf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(n,e),c=nt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(nt(o.result),u.oldVersion,u.newVersion,nt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}var Sv=["get","getKey","getAll","getAllKeys","count"],Rv=["put","add","delete","clear"],zc=new Map;function Yf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(zc.get(e))return zc.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=Rv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sv.includes(t)))return;let s=async function(o,...c){let u=this.transaction(o,i?"readwrite":"readonly"),h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return zc.set(e,s),s}Jf(n=>({...n,get:(e,t,r)=>Yf(e,t)||n.get(e,t,r),has:(e,t)=>!!Yf(e,t)||n.has(e,t)}));var $c=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Pv(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Pv(n){let e=n.getComponent();return e?.type==="VERSION"}var Wc="@firebase/app",Zf="0.13.2";var mt=new kt("@firebase/app"),Cv="@firebase/app-compat",Dv="@firebase/analytics-compat",kv="@firebase/analytics",Nv="@firebase/app-check-compat",Ov="@firebase/app-check",Vv="@firebase/auth",xv="@firebase/auth-compat",Lv="@firebase/database",Mv="@firebase/data-connect",Fv="@firebase/database-compat",Uv="@firebase/functions",Bv="@firebase/functions-compat",qv="@firebase/installations",jv="@firebase/installations-compat",zv="@firebase/messaging",Gv="@firebase/messaging-compat",$v="@firebase/performance",Wv="@firebase/performance-compat",Kv="@firebase/remote-config",Hv="@firebase/remote-config-compat",Qv="@firebase/storage",Jv="@firebase/storage-compat",Yv="@firebase/firestore",Xv="@firebase/ai",Zv="@firebase/firestore-compat",eI="firebase",tI="11.10.0";var Kc="[DEFAULT]",nI={[Wc]:"fire-core",[Cv]:"fire-core-compat",[kv]:"fire-analytics",[Dv]:"fire-analytics-compat",[Ov]:"fire-app-check",[Nv]:"fire-app-check-compat",[Vv]:"fire-auth",[xv]:"fire-auth-compat",[Lv]:"fire-rtdb",[Mv]:"fire-data-connect",[Fv]:"fire-rtdb-compat",[Uv]:"fire-fn",[Bv]:"fire-fn-compat",[qv]:"fire-iid",[jv]:"fire-iid-compat",[zv]:"fire-fcm",[Gv]:"fire-fcm-compat",[$v]:"fire-perf",[Wv]:"fire-perf-compat",[Kv]:"fire-rc",[Hv]:"fire-rc-compat",[Qv]:"fire-gcs",[Jv]:"fire-gcs-compat",[Yv]:"fire-fst",[Zv]:"fire-fst-compat",[Xv]:"fire-vertex","fire-js":"fire-js",[eI]:"fire-js-all"};var $s=new Map,rI=new Map,Hc=new Map;function ep(n,e){try{n.container.addComponent(e)}catch(t){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ot(n){let e=n.name;if(Hc.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,n);for(let t of $s.values())ep(t,n);for(let t of rI.values())ep(t,n);return!0}function yi(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Oe(n){return n==null?!1:n.settings!==void 0}var iI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new pt("app","Firebase",iI);var Qc=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}};var Vt=tI;function Xc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:Kc,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(t||(t=Oc()),!t)throw Nt.create("no-options");let s=$s.get(i);if(s){if($e(t,s.options)&&$e(r,s.config))return s;throw Nt.create("duplicate-app",{appName:i})}let o=new zs(i);for(let u of Hc.values())o.addComponent(u);let c=new Qc(t,r,o);return $s.set(i,c),c}function Zc(n=Kc){let e=$s.get(n);if(!e&&n===Kc&&Oc())return Xc();if(!e)throw Nt.create("no-app",{appName:n});return e}function Je(n,e,t){var r;let i=(r=nI[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){let c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(c.join(" "));return}Ot(new We(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var sI="firebase-heartbeat-database",oI=1,_i="firebase-heartbeat-store",Gc=null;function ip(){return Gc||(Gc=Xf(sI,oI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_i)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nt.create("idb-open",{originalErrorMessage:n.message})})),Gc}async function aI(n){try{let t=(await ip()).transaction(_i),r=await t.objectStore(_i).get(sp(n));return await t.done,r}catch(e){if(e instanceof Ue)mt.warn(e.message);else{let t=Nt.create("idb-get",{originalErrorMessage:e?.message});mt.warn(t.message)}}}async function tp(n,e){try{let r=(await ip()).transaction(_i,"readwrite");await r.objectStore(_i).put(e,sp(n)),await r.done}catch(t){if(t instanceof Ue)mt.warn(t.message);else{let r=Nt.create("idb-set",{originalErrorMessage:t?.message});mt.warn(r.message)}}}function sp(n){return`${n.name}!${n.options.appId}`}var cI=1024,uI=30,Jc=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Yc(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=np();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>uI){let o=hI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=np(),{heartbeatsToSend:r,unsentEntries:i}=lI(this._heartbeatsCache.heartbeats),s=kc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return mt.warn(t),""}}};function np(){return new Date().toISOString().substring(0,10)}function lI(n,e=cI){let t=[],r=n.slice();for(let i of n){let s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rp(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),rp(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var Yc=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return js()?zf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await aI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return tp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return tp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function rp(n){return kc(JSON.stringify({version:2,heartbeats:n})).length}function hI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}function dI(n){Ot(new We("platform-logger",e=>new $c(e),"PRIVATE")),Ot(new We("heartbeat",e=>new Jc(e),"PRIVATE")),Je(Wc,Zf,n),Je(Wc,Zf,"esm2017"),Je("fire-js","")}dI("");var fI="firebase",pI="11.10.0";Je(fI,pI,"app");function Ws(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function bp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Ap=bp,Sp=new pt("auth","Firebase",bp());var Zs=new kt("@firebase/auth");function mI(n,...e){Zs.logLevel<=H.WARN&&Zs.warn(`Auth (${Vt}): ${n}`,...e)}function Hs(n,...e){Zs.logLevel<=H.ERROR&&Zs.error(`Auth (${Vt}): ${n}`,...e)}function Ke(n,...e){throw bu(n,...e)}function Ye(n,...e){return bu(n,...e)}function Tu(n,e,t){let r=Object.assign(Object.assign({},Ap()),{[e]:t});return new pt("auth","Firebase",r).create(e,{appName:n.name})}function _t(n){return Tu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gI(n,e,t){let r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ke(n,"argument-error"),Tu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bu(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Sp.create(n,...e)}function M(n,e,...t){if(!n)throw bu(e,...t)}function rt(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Hs(e),new Error(e)}function yt(n,e){n||rt(e)}function su(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function _I(){return op()==="http:"||op()==="https:"}function op(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function yI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_I()||Bf()||"connection"in navigator)?navigator.onLine:!0}function vI(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var fn=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,yt(t>e,"Short delay should be less than long delay!"),this.isMobile=Mf()||qf()}get(){return yI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Au(n,e){yt(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var eo=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var II={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var wI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],EI=new fn(3e4,6e4);function he(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function we(n,e,t,r,i={}){return Rp(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});let c=Yn(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);let h=Object.assign({method:e,headers:u},s);return Uf()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Dt(n.emulatorConfig.host)&&(h.credentials="include"),eo.fetch()(await Pp(n,n.config.apiHost,t,c),h)})}async function Rp(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},II),e);try{let i=new ou(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw Ii(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ii(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ii(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ii(n,"user-disabled",o);let f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Tu(n,f,h);Ke(n,f)}}catch(i){if(i instanceof Ue)throw i;Ke(n,"network-request-failed",{message:String(i)})}}async function Mt(n,e,t,r,i={}){let s=await we(n,e,t,r,i);return"mfaPendingCredential"in s&&Ke(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Pp(n,e,t,r){let i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Au(n.config,i):`${n.config.apiScheme}://${i}`;return wI.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function TI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var ou=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),EI.get())})}};function Ii(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=Ye(n,e,r);return i.customData._tokenResponse=t,i}function ap(n){return n!==void 0&&n.enterprise!==void 0}var to=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return TI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function Cp(n,e){return we(n,"GET","/v2/recaptchaConfig",he(n,e))}async function bI(n,e){return we(n,"POST","/v1/accounts:delete",e)}async function no(n,e){return we(n,"POST","/v1/accounts:lookup",e)}function wi(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dp(n,e=!1){let t=ue(n),r=await t.getIdToken(e),i=Su(r);M(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:wi(eu(i.auth_time)),issuedAtTime:wi(eu(i.iat)),expirationTime:wi(eu(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function eu(n){return Number(n)*1e3}function Su(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Hs("JWT malformed, contained fewer than 3 sections"),null;try{let i=Us(t);return i?JSON.parse(i):(Hs("Failed to decode base64 JWT payload"),null)}catch(i){return Hs("Caught error parsing JWT payload as JSON",i?.toString()),null}}function cp(n){let e=Su(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function bi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ue&&AI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function AI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var au=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var Ai=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function ro(n){var e;let t=n.auth,r=await n.getIdToken(),i=await bi(n,no(t,{idToken:r}));M(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Np(s.providerUserInfo):[],c=SI(n.providerData,o),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!c?.length,f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Ai(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function kp(n){let e=ue(n);await ro(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SI(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Np(n){return n.map(e=>{var{providerId:t}=e,r=Ws(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function RI(n,e){let t=await Rp(n,{},async()=>{let r=Yn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await Pp(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";let u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Dt(n.emulatorConfig.host)&&(u.credentials="include"),eo.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function PI(n,e){return we(n,"POST","/v2/accounts:revokeToken",he(n,e))}var Ei=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");let t=cp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await RI(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new n;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return rt("not implemented")}};function xt(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var Lt=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ws(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new au(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ai(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await bi(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Dp(this,e)}reload(){return kp(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ro(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(_t(this.auth));let e=await this.getIdToken();return await bi(this,bI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,u,h,f;let m=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,S=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=t.photoURL)!==null&&o!==void 0?o:void 0,N=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,G=(h=t.createdAt)!==null&&h!==void 0?h:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:W,isAnonymous:Y,providerData:$,stsTokenManager:I}=t;M(F&&I,e,"internal-error");let g=Ei.fromJSON(this.name,I);M(typeof F=="string",e,"internal-error"),xt(m,e.name),xt(_,e.name),M(typeof W=="boolean",e,"internal-error"),M(typeof Y=="boolean",e,"internal-error"),xt(S,e.name),xt(C,e.name),xt(N,e.name),xt(k,e.name),xt(G,e.name),xt(B,e.name);let v=new n({uid:F,auth:e,email:_,emailVerified:W,displayName:m,isAnonymous:Y,photoURL:C,phoneNumber:S,tenantId:N,stsTokenManager:g,createdAt:G,lastLoginAt:B});return $&&Array.isArray($)&&(v.providerData=$.map(w=>Object.assign({},w))),k&&(v._redirectEventId=k),v}static async _fromIdTokenResponse(e,t,r=!1){let i=new Ei;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ro(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];M(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Np(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,c=new Ei;c.updateFromIdToken(r);let u=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ai(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,h),u}};var up=new Map;function gt(n){yt(n instanceof Function,"Expected a class definition");let e=up.get(n);return e?(yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,up.set(n,e),e)}var io=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};io.type="NONE";var cu=io;function Qs(n,e,t){return`firebase:${n}:${e}:${t}`}var so=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Qs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await no(this.auth,{idToken:e}).catch(()=>{});return t?Lt._fromGetAccountInfoResponse(this.auth,t,e):null}return Lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(gt(cu),e,r);let i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h),s=i[0]||gt(cu),o=Qs(r,e.config.apiKey,e.name),c=null;for(let h of t)try{let f=await h._get(o);if(f){let m;if(typeof f=="string"){let _=await no(e,{idToken:f}).catch(()=>{});if(!_)break;m=await Lt._fromGetAccountInfoResponse(e,_,f)}else m=Lt._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch{}let u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new n(s,e,r):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new n(s,e,r))}};function lp(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Op(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fp(e))return"Blackberry";if(Up(e))return"Webos";if(Vp(e))return"Safari";if((e.includes("chrome/")||xp(e))&&!e.includes("edge/"))return"Chrome";if(Mp(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Op(n=ce()){return/firefox\//i.test(n)}function Vp(n=ce()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xp(n=ce()){return/crios\//i.test(n)}function Lp(n=ce()){return/iemobile/i.test(n)}function Mp(n=ce()){return/android/i.test(n)}function Fp(n=ce()){return/blackberry/i.test(n)}function Up(n=ce()){return/webos/i.test(n)}function Ru(n=ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function CI(n=ce()){var e;return Ru(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DI(){return jf()&&document.documentMode===10}function Bp(n=ce()){return Ru(n)||Mp(n)||Up(n)||Fp(n)||/windows phone/i.test(n)||Lp(n)}function qp(n,e=[]){let t;switch(n){case"Browser":t=lp(ce());break;case"Worker":t=`${lp(ce())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vt}/${r}`}var uu=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((o,c)=>{try{let u=e(s);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function kI(n,e={}){return we(n,"GET","/v2/passwordPolicy",he(n,e))}var NI=6,lu=class{constructor(e){var t,r,i,s;let o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:NI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;let u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var hu=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oo(this),this.idTokenSubscription=new oo(this),this.beforeStateQueue=new uu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gt(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await no(this,{idToken:e}),r=await Lt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Oe(this.app)){let o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ro(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(_t(this));let t=e?ue(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(_t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(_t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await kI(this),t=new lu(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new pt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await PI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&gt(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),o=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){let u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{let u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&mI(`Error while retrieving App Check token: ${t.error}`),t?.token}};function Xe(n){return ue(n)}var oo=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=$f(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Ao={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OI(n){Ao=n}function jp(n){return Ao.loadJS(n)}function VI(){return Ao.recaptchaEnterpriseScript}function xI(){return Ao.gapiScript}function zp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var du=class{constructor(){this.enterprise=new fu}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},fu=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var LI="recaptcha-enterprise",Ti="NO_RECAPTCHA",ao=class{constructor(e){this.type=LI,this.auth=Xe(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{Cp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let h=new to(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){let u=window.grecaptcha;ap(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(Ti)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new du().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&ap(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=VI();u.length!==0&&(u+=c),jp(u).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}};async function vi(n,e,t,r=!1,i=!1){let s=new ao(n),o;if(i)o=Ti;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}let c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){let u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){let u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function dn(n,e,t,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let c=await vi(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let u=await vi(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(c)});else if(i==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){let c=await vi(n,e,t);return r(n,c).catch(async u=>{var h;if(((h=n._getRecaptchaConfig())===null||h===void 0?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let f=await vi(n,e,t,!1,!0);return r(n,f)}return Promise.reject(u)})}else{let c=await vi(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(i+" provider is not supported.")}async function MI(n){let e=Xe(n),t=await Cp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new to(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new ao(e).verify()}function Gp(n,e){let t=yi(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if($e(s,e??{}))return i;Ke(i,"already-initialized")}return t.initialize({options:e})}function FI(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(gt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function $p(n,e,t){let r=Xe(n);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=Wp(e),{host:o,port:c}=UI(e),u=c===null?"":`:${c}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M($e(h,r.config.emulator)&&$e(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Dt(o)?(qs(`${s}//${o}${u}`),xc("Auth",!0)):i||BI()}function Wp(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function UI(n){let e=Wp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:hp(r.substr(s.length+1))}}else{let[s,o]=r.split(":");return{host:s,port:hp(o)}}}function hp(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function BI(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var pn=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,t){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}};async function qI(n,e){return we(n,"POST","/v1/accounts:signUp",e)}async function jI(n,e){return Mt(n,"POST","/v1/accounts:signInWithPassword",he(n,e))}async function zI(n,e){return we(n,"POST","/v1/accounts:sendOobCode",he(n,e))}async function GI(n,e){return zI(n,e)}async function $I(n,e){return Mt(n,"POST","/v1/accounts:signInWithEmailLink",he(n,e))}async function WI(n,e){return Mt(n,"POST","/v1/accounts:signInWithEmailLink",he(n,e))}var Si=class n extends pn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dn(e,t,"signInWithPassword",jI,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return $I(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dn(e,r,"signUpPassword",qI,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return WI(e,{idToken:t,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function er(n,e){return Mt(n,"POST","/v1/accounts:signInWithIdp",he(n,e))}var KI="http://localhost",mn=class n extends pn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ws(t,["providerId","signInMethod"]);if(!r||!i)return null;let o=new n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return er(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,er(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,er(e,t)}buildRequest(){let e={requestUri:KI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yn(t)}return e}};async function dp(n,e){return we(n,"POST","/v1/accounts:sendVerificationCode",he(n,e))}async function HI(n,e){return Mt(n,"POST","/v1/accounts:signInWithPhoneNumber",he(n,e))}async function QI(n,e){let t=await Mt(n,"POST","/v1/accounts:signInWithPhoneNumber",he(n,e));if(t.temporaryProof)throw Ii(n,"account-exists-with-different-credential",t);return t}var JI={USER_NOT_FOUND:"user-not-found"};async function YI(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Mt(n,"POST","/v1/accounts:signInWithPhoneNumber",he(n,t),JI)}var Ri=class n extends pn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return HI(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return QI(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return YI(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function XI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZI(n){let e=Xn(Zn(n)).link,t=e?Xn(Zn(e)).deep_link_id:null,r=Xn(Zn(n)).deep_link_id;return(r?Xn(Zn(r)).link:null)||r||t||e||n}var co=class n{constructor(e){var t,r,i,s,o,c;let u=Xn(Zn(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=XI((i=u.mode)!==null&&i!==void 0?i:null);M(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=ZI(e);try{return new n(t)}catch{return null}}};var gn=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return Si._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=co.parseLink(t);return M(r,"argument-error"),Si._fromEmailAndCode(e,r.code,r.tenantId)}};gn.PROVIDER_ID="password";gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Pi=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var _n=class extends Pi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var Ci=class n extends _n{constructor(){super("facebook.com")}static credential(e){return mn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ci.PROVIDER_ID="facebook.com";var yn=class n extends _n{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";var Di=class n extends _n{constructor(){super("github.com")}static credential(e){return mn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Di.GITHUB_SIGN_IN_METHOD="github.com";Di.PROVIDER_ID="github.com";var ki=class n extends _n{constructor(){super("twitter.com")}static credential(e,t){return mn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};ki.TWITTER_SIGN_IN_METHOD="twitter.com";ki.PROVIDER_ID="twitter.com";async function ew(n,e){return Mt(n,"POST","/v1/accounts:signUp",he(n,e))}var tr=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await Lt._fromIdTokenResponse(e,r,i),o=fp(r);return new n({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=fp(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function fp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var pu=class n extends Ue{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function Kp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pu._fromErrorAndOperation(n,s,e,r):s})}async function tw(n,e,t=!1){let r=await bi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return tr._forOperation(n,"link",r)}async function nw(n,e,t=!1){let{auth:r}=n;if(Oe(r.app))return Promise.reject(_t(r));let i="reauthenticate";try{let s=await bi(n,Kp(r,i,e,n),t);M(s.idToken,r,"internal-error");let o=Su(s.idToken);M(o,r,"internal-error");let{sub:c}=o;return M(n.uid===c,r,"user-mismatch"),tr._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Ke(r,"user-mismatch"),s}}async function Hp(n,e,t=!1){if(Oe(n.app))return Promise.reject(_t(n));let r="signIn",i=await Kp(n,r,e),s=await tr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Qp(n,e){return Hp(Xe(n),e)}function rw(n,e,t){var r;M(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),M(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),M(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(M(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(M(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}async function Jp(n){let e=Xe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Pu(n,e,t){let r=Xe(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&rw(r,i,t),await dn(r,i,"getOobCode",GI,"EMAIL_PASSWORD_PROVIDER")}async function Cu(n,e,t){if(Oe(n.app))return Promise.reject(_t(n));let r=Xe(n),o=await dn(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ew,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Jp(n),u}),c=await tr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Du(n,e,t){return Oe(n.app)?Promise.reject(_t(n)):Qp(ue(n),gn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jp(n),r})}function Yp(n,e,t,r){return ue(n).onIdTokenChanged(e,t,r)}function Xp(n,e,t){return ue(n).beforeAuthStateChanged(e,t)}function ku(n,e,t,r){return ue(n).onAuthStateChanged(e,t,r)}function Nu(n){return ue(n).signOut()}function pp(n,e){return we(n,"POST","/v2/accounts/mfaEnrollment:start",he(n,e))}function iw(n,e){return we(n,"POST","/v2/accounts/mfaEnrollment:finalize",he(n,e))}function sw(n,e){return we(n,"POST","/v2/accounts/mfaEnrollment:start",he(n,e))}function ow(n,e){return we(n,"POST","/v2/accounts/mfaEnrollment:finalize",he(n,e))}var uo="__sak";var lo=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uo,"1"),this.storage.removeItem(uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var aw=1e3,cw=10,ho=class extends lo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);DI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cw):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};ho.type="LOCAL";var Zp=ho;var uw=1e3;function tu(n){var e,t;let r=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),i=RegExp(`${r}=([^;]+)`);return(t=(e=document.cookie.match(i))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}function nu(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var mu=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(e=navigator.cookieEnabled)!==null&&e!==void 0?e:!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=nu(e);if(window.cookieStore){let r=await window.cookieStore.get(t);return r?.value}return tu(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let r=nu(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let r=nu(e);if(window.cookieStore){let c=h=>{let f=h.changed.find(_=>_.name===r);f&&t(f.value),h.deleted.find(_=>_.name===r)&&t(null)},u=()=>window.cookieStore.removeEventListener("change",c);return this.listenerUnsubscribes.set(t,u),window.cookieStore.addEventListener("change",c)}let i=tu(r),s=setInterval(()=>{let c=tu(r);c!==i&&(t(c),i=c)},uw),o=()=>clearInterval(s);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){let r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}};mu.type="COOKIE";var fo=class extends lo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};fo.type="SESSION";var Ou=fo;function lw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var po=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let c=Array.from(o).map(async h=>h(t.origin,s)),u=await lw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};po.receivers=[];function Vu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var gu=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{let h=Vu("",20);i.port1.start();let f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){let _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(_.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function it(){return window}function hw(n){it().location.href=n}function em(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function dw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fw(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function pw(){return em()?self:null}var tm="firebaseLocalStorageDb",mw=1,mo="firebaseLocalStorage",nm="fbase_key",vn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function So(n,e){return n.transaction([mo],e?"readwrite":"readonly").objectStore(mo)}function gw(){let n=indexedDB.deleteDatabase(tm);return new vn(n).toPromise()}function _u(){let n=indexedDB.open(tm,mw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(mo,{keyPath:nm})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(mo)?e(r):(r.close(),await gw(),e(await _u()))})})}async function mp(n,e,t){let r=So(n,!0).put({[nm]:e,value:t});return new vn(r).toPromise()}async function _w(n,e){let t=So(n,!1).get(e),r=await new vn(t).toPromise();return r===void 0?null:r.value}function gp(n,e){let t=So(n,!0).delete(e);return new vn(t).toPromise()}var yw=800,vw=3,go=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _u(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>vw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return em()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=po._getInstance(pw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dw(),!this.activeServiceWorker)return;this.sender=new gu(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await _u();return await mp(e,uo,"1"),await gp(e,uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>mp(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>_w(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>gp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=So(i,!1).getAll();return new vn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};go.type="LOCAL";var rm=go;function _p(n,e){return we(n,"POST","/v2/accounts/mfaSignIn:start",he(n,e))}function Iw(n,e){return we(n,"POST","/v2/accounts/mfaSignIn:finalize",he(n,e))}function ww(n,e){return we(n,"POST","/v2/accounts/mfaSignIn:finalize",he(n,e))}var eA=zp("rcb"),tA=new fn(3e4,6e4);var Js="recaptcha";async function Ew(n,e,t){var r;if(!n._getRecaptchaConfig())try{await MI(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){M(s.type==="enroll",n,"internal-error");let o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await dn(n,o,"mfaSmsEnrollment",async(f,m)=>{if(m.phoneEnrollmentInfo.captchaResponse===Ti){M(t?.type===Js,f,"argument-error");let _=await ru(f,m,t);return pp(f,_)}return pp(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{M(s.type==="signin",n,"internal-error");let o=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;M(o,n,"missing-multi-factor-info");let c={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await dn(n,c,"mfaSmsSignIn",async(m,_)=>{if(_.phoneSignInInfo.captchaResponse===Ti){M(t?.type===Js,m,"argument-error");let S=await ru(m,_,t);return _p(m,S)}return _p(m,_)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await dn(n,s,"sendVerificationCode",async(h,f)=>{if(f.captchaResponse===Ti){M(t?.type===Js,h,"argument-error");let m=await ru(h,f,t);return dp(h,m)}return dp(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).sessionInfo}}finally{t?._reset()}}async function ru(n,e,t){M(t.type===Js,n,"argument-error");let r=await t.verify();M(typeof r=="string",n,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:c,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var Ni=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=Xe(e)}verifyPhoneNumber(e,t){return Ew(this.auth,e,ue(t))}static credential(e,t){return Ri._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?Ri._fromTokenResponse(t,r):null}};Ni.PROVIDER_ID="phone";Ni.PHONE_SIGN_IN_METHOD="phone";function im(n,e){return e?gt(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var Oi=class extends pn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,t){return er(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Tw(n){return Hp(n.auth,new Oi(n),n.bypassAuthState)}function bw(n){let{auth:e,user:t}=n;return M(t,e,"internal-error"),nw(t,new Oi(n),n.bypassAuthState)}async function Aw(n){let{auth:e,user:t}=n;return M(t,e,"internal-error"),tw(t,new Oi(n),n.bypassAuthState)}var _o=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}let u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tw;case"linkViaPopup":case"linkViaRedirect":return Aw;case"reauthViaPopup":case"reauthViaRedirect":return bw;default:Ke(this.auth,"internal-error")}}resolve(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Sw=new fn(2e3,1e4);async function xu(n,e,t){if(Oe(n.app))return Promise.reject(Ye(n,"operation-not-supported-in-this-environment"));let r=Xe(n);gI(n,e,Pi);let i=im(r,t);return new yo(r,"signInViaPopup",e,i).executeNotNull()}var yo=class n extends _o{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){yt(this.filter.length===1,"Popup operations only handle one event");let e=Vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sw.get())};e()}};yo.currentPopupAction=null;var Rw="pendingRedirect",Ys=new Map,yu=class extends _o{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ys.get(this.auth._key());if(!e){try{let r=await Pw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ys.set(this.auth._key(),e)}return this.bypassAuthState||Ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Pw(n,e){let t=kw(e),r=Dw(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function Cw(n,e){Ys.set(n._key(),e)}function Dw(n){return gt(n._redirectPersistence)}function kw(n){return Qs(Rw,n.config.apiKey,n.name)}async function Nw(n,e,t=!1){if(Oe(n.app))return Promise.reject(_t(n));let r=Xe(n),i=im(r,e),o=await new yu(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}var Ow=10*60*1e3,vu=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!sm(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ye(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ow&&this.cachedEventUids.clear(),this.cachedEventUids.has(yp(e))}saveEventToCache(e){this.cachedEventUids.add(yp(e)),this.lastProcessedEventTime=Date.now()}};function yp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function sm({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Vw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sm(n);default:return!1}}async function xw(n,e={}){return we(n,"GET","/v1/projects",e)}var Lw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mw=/^https?/;async function Fw(n){if(n.config.emulator)return;let{authorizedDomains:e}=await xw(n);for(let t of e)try{if(Uw(t))return}catch{}Ke(n,"unauthorized-domain")}function Uw(n){let e=su(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Mw.test(t))return!1;if(Lw.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var Bw=new fn(3e4,6e4);function vp(){let n=it().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qw(n){return new Promise((e,t)=>{var r,i,s;function o(){vp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vp(),t(Ye(n,"network-request-failed"))},timeout:Bw.get()})}if(!((i=(r=it().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=it().gapi)===null||s===void 0)&&s.load)o();else{let c=zp("iframefcb");return it()[c]=()=>{gapi.load?o():t(Ye(n,"network-request-failed"))},jp(`${xI()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Xs=null,e})}var Xs=null;function jw(n){return Xs=Xs||qw(n),Xs}var zw=new fn(5e3,15e3),Gw="__/auth/iframe",$w="emulator/auth/iframe",Ww={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hw(n){let e=n.config;M(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?Au(e,$w):`https://${n.config.authDomain}/${Gw}`,r={apiKey:e.apiKey,appName:n.name,v:Vt},i=Kw.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Yn(r).slice(1)}`}async function Qw(n){let e=await jw(n),t=it().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Hw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ww,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let o=Ye(n,"network-request-failed"),c=it().setTimeout(()=>{s(o)},zw.get());function u(){it().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(o)})}))}var Jw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yw=500,Xw=600,Zw="_blank",eE="http://localhost",vo=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function tE(n,e,t,r=Yw,i=Xw){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),c="",u=Object.assign(Object.assign({},Jw),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ce().toLowerCase();t&&(c=xp(h)?Zw:t),Op(h)&&(e=e||eE,u.scrollbars="yes");let f=Object.entries(u).reduce((_,[S,C])=>`${_}${S}=${C},`,"");if(CI(h)&&c!=="_self")return nE(e||"",c),new vo(null);let m=window.open(e||"",c,f);M(m,n,"popup-blocked");try{m.focus()}catch{}return new vo(m)}function nE(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var rE="__/auth/handler",iE="emulator/auth/handler",sE=encodeURIComponent("fac");async function Ip(n,e,t,r,i,s){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");let o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Vt,eventId:i};if(e instanceof Pi){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Gf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof _n){let f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);let c=o;for(let f of Object.keys(c))c[f]===void 0&&delete c[f];let u=await n._getAppCheckToken(),h=u?`#${sE}=${encodeURIComponent(u)}`:"";return`${oE(n)}?${Yn(c).slice(1)}${h}`}function oE({config:n}){return n.emulator?Au(n,iE):`https://${n.authDomain}/${rE}`}var iu="webStorageSupport",Iu=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ou,this._completeRedirectFn=Nw,this._overrideRedirectResult=Cw}async _openPopup(e,t,r,i){var s;yt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let o=await Ip(e,t,r,su(),i);return tE(e,o,Vu())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await Ip(e,t,r,su(),i);return hw(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(yt(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await Qw(e),r=new vu(e);return t.register("authEvent",i=>(M(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(iu,{type:iu},i=>{var s;let o=(s=i?.[0])===null||s===void 0?void 0:s[iu];o!==void 0&&t(!!o),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Fw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bp()||Vp()||Ru()}},om=Iu,Io=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return rt("unexpected MultiFactorSessionType")}}},wu=class n extends Io{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return iw(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Iw(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},wo=class{constructor(){}static assertion(e){return wu._fromCredential(e)}};wo.FACTOR_ID="phone";var Eo=class{static assertionForEnrollment(e,t){return To._fromSecret(e,t)}static assertionForSignIn(e,t){return To._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;M(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await sw(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return bo._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};Eo.FACTOR_ID="totp";var To=class n extends Io{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return M(typeof this.secret<"u",e,"argument-error"),ow(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){M(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return ww(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},bo=class n{constructor(e,t,r,i,s,o,c){this.sessionInfo=o,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(Ks(e)||Ks(t))&&(i=!0),i&&(Ks(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Ks(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Ks(n){return typeof n>"u"||n?.length===0}var wp="@firebase/auth",Ep="1.10.8";var Eu=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function aE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cE(n){Ot(new We("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qp(n)},h=new hu(r,i,s,u);return FI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ot(new We("auth-internal",e=>{let t=Xe(e.getProvider("auth").getImmediate());return(r=>new Eu(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(wp,Ep,aE(n)),Je(wp,Ep,"esm2017")}var uE=5*60,lE=Vc("authIdTokenMaxAge")||uE,Tp=null,hE=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>lE)return;let i=t?.token;Tp!==i&&(Tp=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Lu(n=Zc()){let e=yi(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Gp(n,{popupRedirectResolver:om,persistence:[rm,Zp,Ou]}),r=Vc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let o=hE(s.toString());Xp(t,o,()=>o(t.currentUser)),Yp(t,c=>o(c))}}let i=Lf("auth");return i&&$p(t,`http://${i}`),t}function dE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}OI({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=Ye("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",dE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cE("Browser");var am=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cm={};var vt,Mu;(function(){var n;function e(I,g){function v(){}v.prototype=g.prototype,I.D=g.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(w,E,b){for(var y=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)y[ht-2]=arguments[ht];return g.prototype[E].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,g,v){v||(v=0);var w=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)w[E]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(E=0;16>E;++E)w[E]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=I.g[0],v=I.g[1],E=I.g[2];var b=I.g[3],y=g+(b^v&(E^b))+w[0]+3614090360&4294967295;g=v+(y<<7&4294967295|y>>>25),y=b+(E^g&(v^E))+w[1]+3905402710&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(v^b&(g^v))+w[2]+606105819&4294967295,E=b+(y<<17&4294967295|y>>>15),y=v+(g^E&(b^g))+w[3]+3250441966&4294967295,v=E+(y<<22&4294967295|y>>>10),y=g+(b^v&(E^b))+w[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=b+(E^g&(v^E))+w[5]+1200080426&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(v^b&(g^v))+w[6]+2821735955&4294967295,E=b+(y<<17&4294967295|y>>>15),y=v+(g^E&(b^g))+w[7]+4249261313&4294967295,v=E+(y<<22&4294967295|y>>>10),y=g+(b^v&(E^b))+w[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=b+(E^g&(v^E))+w[9]+2336552879&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(v^b&(g^v))+w[10]+4294925233&4294967295,E=b+(y<<17&4294967295|y>>>15),y=v+(g^E&(b^g))+w[11]+2304563134&4294967295,v=E+(y<<22&4294967295|y>>>10),y=g+(b^v&(E^b))+w[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=b+(E^g&(v^E))+w[13]+4254626195&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(v^b&(g^v))+w[14]+2792965006&4294967295,E=b+(y<<17&4294967295|y>>>15),y=v+(g^E&(b^g))+w[15]+1236535329&4294967295,v=E+(y<<22&4294967295|y>>>10),y=g+(E^b&(v^E))+w[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=b+(v^E&(g^v))+w[6]+3225465664&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^v&(b^g))+w[11]+643717713&4294967295,E=b+(y<<14&4294967295|y>>>18),y=v+(b^g&(E^b))+w[0]+3921069994&4294967295,v=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(v^E))+w[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=b+(v^E&(g^v))+w[10]+38016083&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^v&(b^g))+w[15]+3634488961&4294967295,E=b+(y<<14&4294967295|y>>>18),y=v+(b^g&(E^b))+w[4]+3889429448&4294967295,v=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(v^E))+w[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=b+(v^E&(g^v))+w[14]+3275163606&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^v&(b^g))+w[3]+4107603335&4294967295,E=b+(y<<14&4294967295|y>>>18),y=v+(b^g&(E^b))+w[8]+1163531501&4294967295,v=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(v^E))+w[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=b+(v^E&(g^v))+w[2]+4243563512&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^v&(b^g))+w[7]+1735328473&4294967295,E=b+(y<<14&4294967295|y>>>18),y=v+(b^g&(E^b))+w[12]+2368359562&4294967295,v=E+(y<<20&4294967295|y>>>12),y=g+(v^E^b)+w[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=b+(g^v^E)+w[8]+2272392833&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^v)+w[11]+1839030562&4294967295,E=b+(y<<16&4294967295|y>>>16),y=v+(E^b^g)+w[14]+4259657740&4294967295,v=E+(y<<23&4294967295|y>>>9),y=g+(v^E^b)+w[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=b+(g^v^E)+w[4]+1272893353&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^v)+w[7]+4139469664&4294967295,E=b+(y<<16&4294967295|y>>>16),y=v+(E^b^g)+w[10]+3200236656&4294967295,v=E+(y<<23&4294967295|y>>>9),y=g+(v^E^b)+w[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=b+(g^v^E)+w[0]+3936430074&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^v)+w[3]+3572445317&4294967295,E=b+(y<<16&4294967295|y>>>16),y=v+(E^b^g)+w[6]+76029189&4294967295,v=E+(y<<23&4294967295|y>>>9),y=g+(v^E^b)+w[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=b+(g^v^E)+w[12]+3873151461&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^v)+w[15]+530742520&4294967295,E=b+(y<<16&4294967295|y>>>16),y=v+(E^b^g)+w[2]+3299628645&4294967295,v=E+(y<<23&4294967295|y>>>9),y=g+(E^(v|~b))+w[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=b+(v^(g|~E))+w[7]+1126891415&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~v))+w[14]+2878612391&4294967295,E=b+(y<<15&4294967295|y>>>17),y=v+(b^(E|~g))+w[5]+4237533241&4294967295,v=E+(y<<21&4294967295|y>>>11),y=g+(E^(v|~b))+w[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=b+(v^(g|~E))+w[3]+2399980690&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~v))+w[10]+4293915773&4294967295,E=b+(y<<15&4294967295|y>>>17),y=v+(b^(E|~g))+w[1]+2240044497&4294967295,v=E+(y<<21&4294967295|y>>>11),y=g+(E^(v|~b))+w[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=b+(v^(g|~E))+w[15]+4264355552&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~v))+w[6]+2734768916&4294967295,E=b+(y<<15&4294967295|y>>>17),y=v+(b^(E|~g))+w[13]+1309151649&4294967295,v=E+(y<<21&4294967295|y>>>11),y=g+(E^(v|~b))+w[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=b+(v^(g|~E))+w[11]+3174756917&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~v))+w[2]+718787259&4294967295,E=b+(y<<15&4294967295|y>>>17),y=v+(b^(E|~g))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var v=g-this.blockSize,w=this.B,E=this.h,b=0;b<g;){if(E==0)for(;b<=v;)i(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<g;)if(w[E++]=I.charCodeAt(b++),E==this.blockSize){i(this,w),E=0;break}}else for(;b<g;)if(w[E++]=I[b++],E==this.blockSize){i(this,w),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var v=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=v&255,v/=256;for(this.u(I),I=Array(16),g=v=0;4>g;++g)for(var w=0;32>w;w+=8)I[v++]=this.g[g]>>>w&255;return I};function s(I,g){var v=c;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=g(I)}function o(I,g){this.h=g;for(var v=[],w=!0,E=I.length-1;0<=E;E--){var b=I[E]|0;w&&b==g||(v[E]=b,w=!1)}this.g=v}var c={};function u(I){return-128<=I&&128>I?s(I,function(g){return new o([g|0],0>g?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return k(h(-I));for(var g=[],v=1,w=0;I>=v;w++)g[w]=I/v|0,v*=4294967296;return new o(g,0)}function f(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return k(f(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),w=m,E=0;E<I.length;E+=8){var b=Math.min(8,I.length-E),y=parseInt(I.substring(E,E+b),g);8>b?(b=h(Math.pow(g,b)),w=w.j(b).add(h(y))):(w=w.j(v),w=w.add(h(y)))}return w}var m=u(0),_=u(1),S=u(16777216);n=o.prototype,n.m=function(){if(N(this))return-k(this).m();for(var I=0,g=1,v=0;v<this.g.length;v++){var w=this.i(v);I+=(0<=w?w:4294967296+w)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(N(this))return"-"+k(this).toString(I);for(var g=h(Math.pow(I,6)),v=this,w="";;){var E=W(v,g).g;v=G(v,E.j(g));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=E,C(v))return b+w;for(;6>b.length;)b="0"+b;w=b+w}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function N(I){return I.h==-1}n.l=function(I){return I=G(this,I),N(I)?-1:C(I)?0:1};function k(I){for(var g=I.g.length,v=[],w=0;w<g;w++)v[w]=~I.g[w];return new o(v,~I.h).add(_)}n.abs=function(){return N(this)?k(this):this},n.add=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],w=0,E=0;E<=g;E++){var b=w+(this.i(E)&65535)+(I.i(E)&65535),y=(b>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);w=y>>>16,b&=65535,y&=65535,v[E]=y<<16|b}return new o(v,v[v.length-1]&-2147483648?-1:0)};function G(I,g){return I.add(k(g))}n.j=function(I){if(C(this)||C(I))return m;if(N(this))return N(I)?k(this).j(k(I)):k(k(this).j(I));if(N(I))return k(this.j(k(I)));if(0>this.l(S)&&0>I.l(S))return h(this.m()*I.m());for(var g=this.g.length+I.g.length,v=[],w=0;w<2*g;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var E=0;E<I.g.length;E++){var b=this.i(w)>>>16,y=this.i(w)&65535,ht=I.i(E)>>>16,Yr=I.i(E)&65535;v[2*w+2*E]+=y*Yr,B(v,2*w+2*E),v[2*w+2*E+1]+=b*Yr,B(v,2*w+2*E+1),v[2*w+2*E+1]+=y*ht,B(v,2*w+2*E+1),v[2*w+2*E+2]+=b*ht,B(v,2*w+2*E+2)}for(w=0;w<g;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=g;w<2*g;w++)v[w]=0;return new o(v,0)};function B(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function F(I,g){this.g=I,this.h=g}function W(I,g){if(C(g))throw Error("division by zero");if(C(I))return new F(m,m);if(N(I))return g=W(k(I),g),new F(k(g.g),k(g.h));if(N(g))return g=W(I,k(g)),new F(k(g.g),g.h);if(30<I.g.length){if(N(I)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var v=_,w=g;0>=w.l(I);)v=Y(v),w=Y(w);var E=$(v,1),b=$(w,1);for(w=$(w,2),v=$(v,2);!C(w);){var y=b.add(w);0>=y.l(I)&&(E=E.add(v),b=y),w=$(w,1),v=$(v,1)}return g=G(I,E.j(g)),new F(E,g)}for(E=m;0<=I.l(g);){for(v=Math.max(1,Math.floor(I.m()/g.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),b=h(v),y=b.j(g);N(y)||0<y.l(I);)v-=w,b=h(v),y=b.j(g);C(b)&&(b=_),E=E.add(b),I=G(I,y)}return new F(E,I)}n.A=function(I){return W(this,I).h},n.and=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],w=0;w<g;w++)v[w]=this.i(w)&I.i(w);return new o(v,this.h&I.h)},n.or=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],w=0;w<g;w++)v[w]=this.i(w)|I.i(w);return new o(v,this.h|I.h)},n.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],w=0;w<g;w++)v[w]=this.i(w)^I.i(w);return new o(v,this.h^I.h)};function Y(I){for(var g=I.g.length+1,v=[],w=0;w<g;w++)v[w]=I.i(w)<<1|I.i(w-1)>>>31;return new o(v,I.h)}function $(I,g){var v=g>>5;g%=32;for(var w=I.g.length-v,E=[],b=0;b<w;b++)E[b]=0<g?I.i(b+v)>>>g|I.i(b+v+1)<<32-g:I.i(b+v);return new o(E,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Mu=cm.Md5=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,vt=cm.Integer=o}).apply(typeof am<"u"?am:typeof self<"u"?self:typeof window<"u"?window:{});var Ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},It={};var Fu,fE,nr,Uu,Vi,Po,Bu,qu,ju;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,l,d){return a==Array.prototype||a==Object.prototype||(a[l]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ro=="object"&&Ro];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(a,l){if(l)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var T=a[p];if(!(T in d))break e;d=d[T]}a=a[a.length-1],p=d[a],l=l(p),l!=p&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}function s(a,l){a instanceof String&&(a+="");var d=0,p=!1,T={next:function(){if(!p&&d<a.length){var R=d++;return{value:l(R,a[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(a){return a||function(){return s(this,function(l,d){return d})}});var o=o||{},c=this||self;function u(a){var l=typeof a;return l=l!="object"?l:a?Array.isArray(a)?"array":l:"null",l=="array"||l=="object"&&typeof a.length=="number"}function h(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function f(a,l,d){return a.call.apply(a.bind,arguments)}function m(a,l,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),a.apply(l,T)}}return function(){return a.apply(l,arguments)}}function _(a,l,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function S(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,l){function d(){}d.prototype=l.prototype,a.aa=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,T,R){for(var O=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)O[ne-2]=arguments[ne];return l.prototype[T].apply(p,O)}}function N(a){let l=a.length;if(0<l){let d=Array(l);for(let p=0;p<l;p++)d[p]=a[p];return d}return[]}function k(a,l){for(let d=1;d<arguments.length;d++){let p=arguments[d];if(u(p)){let T=a.length||0,R=p.length||0;a.length=T+R;for(let O=0;O<R;O++)a[T+O]=p[O]}else a.push(p)}}class G{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var Y=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function $(a,l,d){for(let p in a)l.call(d,a[p],p,a)}function I(a,l){for(let d in a)l.call(void 0,a[d],d,a)}function g(a){let l={};for(let d in a)l[d]=a[d];return l}let v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,l){let d,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(d in p)a[d]=p[d];for(let R=0;R<v.length;R++)d=v[R],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function E(a){var l=1;a=a.split(":");let d=[];for(;0<l&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function b(a){c.setTimeout(()=>{throw a},0)}function y(){var a=rc;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class ht{constructor(){this.h=this.g=null}add(l,d){let p=Yr.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Yr=new G(()=>new wy,a=>a.reset());class wy{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Xr,Zr=!1,rc=new ht,Cd=()=>{let a=c.Promise.resolve(void 0);Xr=()=>{a.then(Ey)}};var Ey=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){b(d)}var l=Yr;l.j(a),100>l.h&&(l.h++,a.next=l.g,l.g=a)}Zr=!1};function St(){this.s=this.s,this.C=this.C}St.prototype.s=!1,St.prototype.ma=function(){this.s||(this.s=!0,this.N())},St.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Ty=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{let d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return a}();function ei(a,l){if(be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget){if(Y){e:{try{W(l.nodeName);var T=!0;break e}catch{}T=!1}T||(l=null)}}else d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:by[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ei.aa.h.call(this)}}C(ei,be);var by={2:"touch",3:"pen",4:"mouse"};ei.prototype.h=function(){ei.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ti="closure_listenable_"+(1e6*Math.random()|0),Ay=0;function Sy(a,l,d,p,T){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=T,this.key=++Ay,this.da=this.fa=!1}function ws(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Es(a){this.src=a,this.g={},this.h=0}Es.prototype.add=function(a,l,d,p,T){var R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);var O=sc(a,l,p,T);return-1<O?(l=a[O],d||(l.fa=!1)):(l=new Sy(l,this.src,R,!!p,T),l.fa=d,a.push(l)),l};function ic(a,l){var d=l.type;if(d in a.g){var p=a.g[d],T=Array.prototype.indexOf.call(p,l,void 0),R;(R=0<=T)&&Array.prototype.splice.call(p,T,1),R&&(ws(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function sc(a,l,d,p){for(var T=0;T<a.length;++T){var R=a[T];if(!R.da&&R.listener==l&&R.capture==!!d&&R.ha==p)return T}return-1}var oc="closure_lm_"+(1e6*Math.random()|0),ac={};function Dd(a,l,d,p,T){if(p&&p.once)return Nd(a,l,d,p,T);if(Array.isArray(l)){for(var R=0;R<l.length;R++)Dd(a,l[R],d,p,T);return null}return d=hc(d),a&&a[ti]?a.K(l,d,h(p)?!!p.capture:!!p,T):kd(a,l,d,!1,p,T)}function kd(a,l,d,p,T,R){if(!l)throw Error("Invalid event type");var O=h(T)?!!T.capture:!!T,ne=uc(a);if(ne||(a[oc]=ne=new Es(a)),d=ne.add(l,d,p,O,R),d.proxy)return d;if(p=Ry(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Ty||(T=O),T===void 0&&(T=!1),a.addEventListener(l.toString(),p,T);else if(a.attachEvent)a.attachEvent(Vd(l.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ry(){function a(d){return l.call(a.src,a.listener,d)}let l=Py;return a}function Nd(a,l,d,p,T){if(Array.isArray(l)){for(var R=0;R<l.length;R++)Nd(a,l[R],d,p,T);return null}return d=hc(d),a&&a[ti]?a.L(l,d,h(p)?!!p.capture:!!p,T):kd(a,l,d,!0,p,T)}function Od(a,l,d,p,T){if(Array.isArray(l))for(var R=0;R<l.length;R++)Od(a,l[R],d,p,T);else p=h(p)?!!p.capture:!!p,d=hc(d),a&&a[ti]?(a=a.i,l=String(l).toString(),l in a.g&&(R=a.g[l],d=sc(R,d,p,T),-1<d&&(ws(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete a.g[l],a.h--)))):a&&(a=uc(a))&&(l=a.g[l.toString()],a=-1,l&&(a=sc(l,d,p,T)),(d=-1<a?l[a]:null)&&cc(d))}function cc(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[ti])ic(l.i,a);else{var d=a.type,p=a.proxy;l.removeEventListener?l.removeEventListener(d,p,a.capture):l.detachEvent?l.detachEvent(Vd(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=uc(l))?(ic(d,a),d.h==0&&(d.src=null,l[oc]=null)):ws(a)}}}function Vd(a){return a in ac?ac[a]:ac[a]="on"+a}function Py(a,l){if(a.da)a=!0;else{l=new ei(l,this);var d=a.listener,p=a.ha||a.src;a.fa&&cc(a),a=d.call(p,l)}return a}function uc(a){return a=a[oc],a instanceof Es?a:null}var lc="__closure_events_fn_"+(1e9*Math.random()>>>0);function hc(a){return typeof a=="function"?a:(a[lc]||(a[lc]=function(l){return a.handleEvent(l)}),a[lc])}function Ae(){St.call(this),this.i=new Es(this),this.M=this,this.F=null}C(Ae,St),Ae.prototype[ti]=!0,Ae.prototype.removeEventListener=function(a,l,d,p){Od(this,a,l,d,p)};function ke(a,l){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=l.type||l,typeof l=="string")l=new be(l,a);else if(l instanceof be)l.target=l.target||a;else{var T=l;l=new be(p,a),w(l,T)}if(T=!0,d)for(var R=d.length-1;0<=R;R--){var O=l.g=d[R];T=Ts(O,p,!0,l)&&T}if(O=l.g=a,T=Ts(O,p,!0,l)&&T,T=Ts(O,p,!1,l)&&T,d)for(R=0;R<d.length;R++)O=l.g=d[R],T=Ts(O,p,!1,l)&&T}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var a=this.i,l;for(l in a.g){for(var d=a.g[l],p=0;p<d.length;p++)ws(d[p]);delete a.g[l],a.h--}}this.F=null},Ae.prototype.K=function(a,l,d,p){return this.i.add(String(a),l,!1,d,p)},Ae.prototype.L=function(a,l,d,p){return this.i.add(String(a),l,!0,d,p)};function Ts(a,l,d,p){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,R=0;R<l.length;++R){var O=l[R];if(O&&!O.da&&O.capture==d){var ne=O.listener,Ie=O.ha||O.src;O.fa&&ic(a.i,O),T=ne.call(Ie,p)!==!1&&T}}return T&&!p.defaultPrevented}function xd(a,l,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(a,l||0)}function Ld(a){a.g=xd(()=>{a.g=null,a.i&&(a.i=!1,Ld(a))},a.l);let l=a.h;a.h=null,a.m.apply(null,l)}class Cy extends St{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ld(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ni(a){St.call(this),this.h=a,this.g={}}C(ni,St);var Md=[];function Fd(a){$(a.g,function(l,d){this.g.hasOwnProperty(d)&&cc(l)},a),a.g={}}ni.prototype.N=function(){ni.aa.N.call(this),Fd(this)},ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dc=c.JSON.stringify,Dy=c.JSON.parse,ky=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function fc(){}fc.prototype.h=null;function Ud(a){return a.h||(a.h=a.i())}function Bd(){}var ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pc(){be.call(this,"d")}C(pc,be);function mc(){be.call(this,"c")}C(mc,be);var an={},qd=null;function bs(){return qd=qd||new Ae}an.La="serverreachability";function jd(a){be.call(this,an.La,a)}C(jd,be);function ii(a){let l=bs();ke(l,new jd(l))}an.STAT_EVENT="statevent";function zd(a,l){be.call(this,an.STAT_EVENT,a),this.stat=l}C(zd,be);function Ne(a){let l=bs();ke(l,new zd(l,a))}an.Ma="timingevent";function Gd(a,l){be.call(this,an.Ma,a),this.size=l}C(Gd,be);function si(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},l)}function oi(){this.g=!0}oi.prototype.xa=function(){this.g=!1};function Ny(a,l,d,p,T,R){a.info(function(){if(a.g)if(R)for(var O="",ne=R.split("&"),Ie=0;Ie<ne.length;Ie++){var X=ne[Ie].split("=");if(1<X.length){var Se=X[0];X=X[1];var Re=Se.split("_");O=2<=Re.length&&Re[1]=="type"?O+(Se+"="+X+"&"):O+(Se+"=redacted&")}}else O=null;else O=R;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+l+`
`+d+`
`+O})}function Oy(a,l,d,p,T,R,O){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+l+`
`+d+`
`+R+" "+O})}function Kn(a,l,d,p){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+xy(a,d)+(p?" "+p:"")})}function Vy(a,l){a.info(function(){return"TIMEOUT: "+l})}oi.prototype.info=function(){};function xy(a,l){if(!a.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var R=T[0];if(R!="noop"&&R!="stop"&&R!="close")for(var O=1;O<T.length;O++)T[O]=""}}}}return dc(d)}catch{return l}}var As={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$d={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gc;function Ss(){}C(Ss,fc),Ss.prototype.g=function(){return new XMLHttpRequest},Ss.prototype.i=function(){return{}},gc=new Ss;function Rt(a,l,d,p){this.j=a,this.i=l,this.l=d,this.R=p||1,this.U=new ni(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wd}function Wd(){this.i=null,this.g="",this.h=!1}var Kd={},_c={};function yc(a,l,d){a.L=1,a.v=Ds(dt(l)),a.m=d,a.P=!0,Hd(a,null)}function Hd(a,l){a.F=Date.now(),Rs(a),a.A=dt(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),uf(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Wd,a.g=Rf(a.j,d?l:null,!a.m),0<a.O&&(a.M=new Cy(_(a.Y,a,a.g),a.O)),l=a.U,d=a.g,p=a.ca;var T="readystatechange";Array.isArray(T)||(T&&(Md[0]=T.toString()),T=Md);for(var R=0;R<T.length;R++){var O=Dd(d,T[R],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,l)):(a.u="GET",a.g.ea(a.A,a.u,null,l)),ii(),Ny(a.i,a.u,a.A,a.l,a.R,a.m)}Rt.prototype.ca=function(a){a=a.target;let l=this.M;l&&ft(a)==3?l.j():this.Y(a)},Rt.prototype.Y=function(a){try{if(a==this.g)e:{let Re=ft(this.g);var l=this.g.Ba();let Jn=this.g.Z();if(!(3>Re)&&(Re!=3||this.g&&(this.h.h||this.g.oa()||gf(this.g)))){this.J||Re!=4||l==7||(l==8||0>=Jn?ii(3):ii(2)),vc(this);var d=this.g.Z();this.X=d;t:if(Qd(this)){var p=gf(this.g);a="";var T=p.length,R=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),ai(this);var O="";break t}this.h.i=new c.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,a+=this.h.i.decode(p[l],{stream:!(R&&l==T-1)});p.length=0,this.h.g+=a,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,Oy(this.i,this.u,this.A,this.l,this.R,Re,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,Ie=this.g;if((ne=Ie.g?Ie.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(ne)){var X=ne;break t}}X=null}if(d=X)Kn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ic(this,d);else{this.o=!1,this.s=3,Ne(12),cn(this),ai(this);break e}}if(this.P){d=!0;let Qe;for(;!this.J&&this.C<O.length;)if(Qe=Ly(this,O),Qe==_c){Re==4&&(this.s=4,Ne(14),d=!1),Kn(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==Kd){this.s=4,Ne(15),Kn(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else Kn(this.i,this.l,Qe,null),Ic(this,Qe);if(Qd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||O.length!=0||this.h.h||(this.s=1,Ne(16),d=!1),this.o=this.o&&d,!d)Kn(this.i,this.l,O,"[Invalid Chunked Response]"),cn(this),ai(this);else if(0<O.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Sc(Se),Se.M=!0,Ne(11))}}else Kn(this.i,this.l,O,null),Ic(this,O);Re==4&&cn(this),this.o&&!this.J&&(Re==4?Tf(this.j,this):(this.o=!1,Rs(this)))}else Zy(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),cn(this),ai(this)}}}catch{}finally{}};function Qd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ly(a,l){var d=a.C,p=l.indexOf(`
`,d);return p==-1?_c:(d=Number(l.substring(d,p)),isNaN(d)?Kd:(p+=1,p+d>l.length?_c:(l=l.slice(p,p+d),a.C=p+d,l)))}Rt.prototype.cancel=function(){this.J=!0,cn(this)};function Rs(a){a.S=Date.now()+a.I,Jd(a,a.I)}function Jd(a,l){if(a.B!=null)throw Error("WatchDog timer not null");a.B=si(_(a.ba,a),l)}function vc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Rt.prototype.ba=function(){this.B=null;let a=Date.now();0<=a-this.S?(Vy(this.i,this.A),this.L!=2&&(ii(),Ne(17)),cn(this),this.s=2,ai(this)):Jd(this,this.S-a)};function ai(a){a.j.G==0||a.J||Tf(a.j,a)}function cn(a){vc(a);var l=a.M;l&&typeof l.ma=="function"&&l.ma(),a.M=null,Fd(a.U),a.g&&(l=a.g,a.g=null,l.abort(),l.ma())}function Ic(a,l){try{var d=a.j;if(d.G!=0&&(d.g==a||wc(d.h,a))){if(!a.K&&wc(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)xs(d),Os(d);else break e;Ac(d),Ne(18)}}else d.za=T[1],0<d.za-d.T&&37500>T[2]&&d.F&&d.v==0&&!d.C&&(d.C=si(_(d.Za,d),6e3));if(1>=Zd(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ln(d,11)}else if((a.K||d.g==a)&&xs(d),!B(l))for(T=d.Da.g.parse(l),l=0;l<T.length;l++){let X=T[l];if(d.T=X[0],X=X[1],d.G==2)if(X[0]=="c"){d.K=X[1],d.ia=X[2];let Se=X[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));let Re=X[4];Re!=null&&(d.Aa=Re,d.j.info("SVER="+d.Aa));let Jn=X[5];Jn!=null&&typeof Jn=="number"&&0<Jn&&(p=1.5*Jn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;let Qe=a.g;if(Qe){let Ms=Qe.g?Qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ms){var R=p.h;R.g||Ms.indexOf("spdy")==-1&&Ms.indexOf("quic")==-1&&Ms.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ec(R,R.h),R.h=null))}if(p.D){let Rc=Qe.g?Qe.g.getResponseHeader("X-HTTP-Session-Id"):null;Rc&&(p.ya=Rc,re(p.I,p.D,Rc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=a;if(p.qa=Sf(p,p.J?p.ia:null,p.W),O.K){ef(p.h,O);var ne=O,Ie=p.L;Ie&&(ne.I=Ie),ne.B&&(vc(ne),Rs(ne)),p.g=O}else wf(p);0<d.i.length&&Vs(d)}else X[0]!="stop"&&X[0]!="close"||ln(d,7);else d.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?ln(d,7):bc(d):X[0]!="noop"&&d.l&&d.l.ta(X),d.v=0)}}ii(4)}catch{}}var My=class{constructor(a,l){this.g=a,this.map=l}};function Yd(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zd(a){return a.h?1:a.g?a.g.size:0}function wc(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Ec(a,l){a.g?a.g.add(l):a.h=l}function ef(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Yd.prototype.cancel=function(){if(this.i=tf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let a of this.g.values())a.cancel();this.g.clear()}};function tf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let l=a.i;for(let d of a.g.values())l=l.concat(d.D);return l}return N(a.i)}function Fy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var l=[],d=a.length,p=0;p<d;p++)l.push(a[p]);return l}l=[],d=0;for(p in a)l[d++]=a[p];return l}function Uy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var l=[];a=a.length;for(var d=0;d<a;d++)l.push(d);return l}l=[],d=0;for(let p in a)l[d++]=p;return l}}}function nf(a,l){if(a.forEach&&typeof a.forEach=="function")a.forEach(l,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,l,void 0);else for(var d=Uy(a),p=Fy(a),T=p.length,R=0;R<T;R++)l.call(void 0,p[R],d&&d[R],a)}var rf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function By(a,l){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),T=null;if(0<=p){var R=a[d].substring(0,p);T=a[d].substring(p+1)}else R=a[d];l(R,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function un(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof un){this.h=a.h,Ps(this,a.j),this.o=a.o,this.g=a.g,Cs(this,a.s),this.l=a.l;var l=a.i,d=new li;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),sf(this,d),this.m=a.m}else a&&(l=String(a).match(rf))?(this.h=!1,Ps(this,l[1]||"",!0),this.o=ci(l[2]||""),this.g=ci(l[3]||"",!0),Cs(this,l[4]),this.l=ci(l[5]||"",!0),sf(this,l[6]||"",!0),this.m=ci(l[7]||"")):(this.h=!1,this.i=new li(null,this.h))}un.prototype.toString=function(){var a=[],l=this.j;l&&a.push(ui(l,of,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(ui(l,of,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ui(d,d.charAt(0)=="/"?zy:jy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ui(d,$y)),a.join("")};function dt(a){return new un(a)}function Ps(a,l,d){a.j=d?ci(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function Cs(a,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);a.s=l}else a.s=null}function sf(a,l,d){l instanceof li?(a.i=l,Wy(a.i,a.h)):(d||(l=ui(l,Gy)),a.i=new li(l,a.h))}function re(a,l,d){a.i.set(l,d)}function Ds(a){return re(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ci(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ui(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,qy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var of=/[#\/\?@]/g,jy=/[#\?:]/g,zy=/[#\?]/g,Gy=/[#\?@]/g,$y=/#/g;function li(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Pt(a){a.g||(a.g=new Map,a.h=0,a.i&&By(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=li.prototype,n.add=function(a,l){Pt(this),this.i=null,a=Hn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function af(a,l){Pt(a),l=Hn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function cf(a,l){return Pt(a),l=Hn(a,l),a.g.has(l)}n.forEach=function(a,l){Pt(this),this.g.forEach(function(d,p){d.forEach(function(T){a.call(l,T,p,this)},this)},this)},n.na=function(){Pt(this);let a=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){let T=a[p];for(let R=0;R<T.length;R++)d.push(l[p])}return d},n.V=function(a){Pt(this);let l=[];if(typeof a=="string")cf(this,a)&&(l=l.concat(this.g.get(Hn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)l=l.concat(a[d])}return l},n.set=function(a,l){return Pt(this),this.i=null,a=Hn(this,a),cf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=this.V(a),0<a.length?String(a[0]):l):l};function uf(a,l,d){af(a,l),0<d.length&&(a.i=null,a.g.set(Hn(a,l),N(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let a=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];let R=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var T=R;O[p]!==""&&(T+="="+encodeURIComponent(String(O[p]))),a.push(T)}}return this.i=a.join("&")};function Hn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function Wy(a,l){l&&!a.j&&(Pt(a),a.i=null,a.g.forEach(function(d,p){var T=p.toLowerCase();p!=T&&(af(this,p),uf(this,T,d))},a)),a.j=l}function Ky(a,l){let d=new oi;if(c.Image){let p=new Image;p.onload=S(Ct,d,"TestLoadImage: loaded",!0,l,p),p.onerror=S(Ct,d,"TestLoadImage: error",!1,l,p),p.onabort=S(Ct,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=S(Ct,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else l(!1)}function Hy(a,l){let d=new oi,p=new AbortController,T=setTimeout(()=>{p.abort(),Ct(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:p.signal}).then(R=>{clearTimeout(T),R.ok?Ct(d,"TestPingServer: ok",!0,l):Ct(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),Ct(d,"TestPingServer: error",!1,l)})}function Ct(a,l,d,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(d)}catch{}}function Qy(){this.g=new ky}function Jy(a,l,d){let p=d||"";try{nf(a,function(T,R){let O=T;h(T)&&(O=dc(T)),l.push(p+R+"="+encodeURIComponent(O))})}catch(T){throw l.push(p+"type="+encodeURIComponent("_badmap")),T}}function hi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(hi,fc),hi.prototype.g=function(){return new ks(this.l,this.j)},hi.prototype.i=function(a){return function(){return a}}({});function ks(a,l){Ae.call(this),this.D=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ks,Ae),n=ks.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=l,this.readyState=1,fi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(l.body=a),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,di(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function lf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?di(this):fi(this),this.readyState==3&&lf(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,di(this))},n.Qa=function(a){this.g&&(this.response=a,di(this))},n.ga=function(){this.g&&di(this)};function di(a){a.readyState=4,a.l=null,a.j=null,a.v=null,fi(a)}n.setRequestHeader=function(a,l){this.u.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function fi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hf(a){let l="";return $(a,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function Tc(a,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=hf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):re(a,l,d))}function ae(a){Ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ae,Ae);var Yy=/^https?$/i,Xy=["POST","PUT"];n=ae.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gc.g(),this.v=this.o?Ud(this.o):Ud(gc),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(R){df(this,R);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)d.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(let R of p.keys())d.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),T=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Xy,l,void 0))||p||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[R,O]of d)this.g.setRequestHeader(R,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mf(this),this.u=!0,this.g.send(a),this.u=!1}catch(R){df(this,R)}};function df(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.m=5,ff(a),Ns(a)}function ff(a){a.A||(a.A=!0,ke(a,"complete"),ke(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ke(this,"complete"),ke(this,"abort"),Ns(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ns(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?pf(this):this.bb())},n.bb=function(){pf(this)};function pf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ft(a)!=4||a.Z()!=2)){if(a.u&&ft(a)==4)xd(a.Ea,0,a);else if(ke(a,"readystatechange"),ft(a)==4){a.h=!1;try{let O=a.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=O===0){var T=String(a.D).match(rf)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),p=!Yy.test(T?T.toLowerCase():"")}d=p}if(d)ke(a,"complete"),ke(a,"success");else{a.m=6;try{var R=2<ft(a)?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.Z()+"]",ff(a)}}finally{Ns(a)}}}}function Ns(a,l){if(a.g){mf(a);let d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,l||ke(a,"ready");try{d.onreadystatechange=p}catch{}}}function mf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function ft(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Dy(l)}};function gf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Zy(a){let l={};a=(a.g&&2<=ft(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(B(a[p]))continue;var d=E(a[p]);let T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();let R=l[T]||[];l[T]=R,R.push(d)}I(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function pi(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function _f(a){this.Aa=0,this.i=[],this.j=new oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pi("baseRetryDelayMs",5e3,a),this.cb=pi("retryDelaySeedMs",1e4,a),this.Wa=pi("forwardChannelMaxRetries",2,a),this.wa=pi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Yd(a&&a.concurrentRequestLimit),this.Da=new Qy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_f.prototype,n.la=8,n.G=1,n.connect=function(a,l,d,p){Ne(0),this.W=a,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Sf(this,null,this.W),Vs(this)};function bc(a){if(yf(a),a.G==3){var l=a.U++,d=dt(a.I);if(re(d,"SID",a.K),re(d,"RID",l),re(d,"TYPE","terminate"),mi(a,d),l=new Rt(a,a.j,l),l.L=2,l.v=Ds(dt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Rf(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Rs(l)}Af(a)}function Os(a){a.g&&(Sc(a),a.g.cancel(),a.g=null)}function yf(a){Os(a),a.u&&(c.clearTimeout(a.u),a.u=null),xs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Vs(a){if(!Xd(a.h)&&!a.s){a.s=!0;var l=a.Ga;Xr||Cd(),Zr||(Xr(),Zr=!0),rc.add(l,a),a.B=0}}function ev(a,l){return Zd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=l.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=si(_(a.Ga,a,l),bf(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;let T=new Rt(this,this.j,a),R=this.o;if(this.S&&(R?(R=g(R),w(R,this.S)):R=this.S),this.m!==null||this.O||(T.H=R,R=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=If(this,T,l),d=dt(this.I),re(d,"RID",a),re(d,"CVER",22),this.D&&re(d,"X-HTTP-Session-Id",this.D),mi(this,d),R&&(this.O?l="headers="+encodeURIComponent(String(hf(R)))+"&"+l:this.m&&Tc(d,this.m,R)),Ec(this.h,T),this.Ua&&re(d,"TYPE","init"),this.P?(re(d,"$req",l),re(d,"SID","null"),T.T=!0,yc(T,d,null)):yc(T,d,l),this.G=2}}else this.G==3&&(a?vf(this,a):this.i.length==0||Xd(this.h)||vf(this))};function vf(a,l){var d;l?d=l.l:d=a.U++;let p=dt(a.I);re(p,"SID",a.K),re(p,"RID",d),re(p,"AID",a.T),mi(a,p),a.m&&a.o&&Tc(p,a.m,a.o),d=new Rt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),l&&(a.i=l.D.concat(a.i)),l=If(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ec(a.h,d),yc(d,p,l)}function mi(a,l){a.H&&$(a.H,function(d,p){re(l,p,d)}),a.l&&nf({},function(d,p){re(l,p,d)})}function If(a,l,d){d=Math.min(a.i.length,d);var p=a.l?_(a.l.Na,a.l,a):null;e:{var T=a.i;let R=-1;for(;;){let O=["count="+d];R==-1?0<d?(R=T[0].g,O.push("ofs="+R)):R=0:O.push("ofs="+R);let ne=!0;for(let Ie=0;Ie<d;Ie++){let X=T[Ie].g,Se=T[Ie].map;if(X-=R,0>X)R=Math.max(0,T[Ie].g-100),ne=!1;else try{Jy(Se,O,"req"+X+"_")}catch{p&&p(Se)}}if(ne){p=O.join("&");break e}}}return a=a.i.splice(0,d),l.D=a,p}function wf(a){if(!a.g&&!a.u){a.Y=1;var l=a.Fa;Xr||Cd(),Zr||(Xr(),Zr=!0),rc.add(l,a),a.v=0}}function Ac(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=si(_(a.Fa,a),bf(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Ef(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=si(_(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),Os(this),Ef(this))};function Sc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Ef(a){a.g=new Rt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var l=dt(a.qa);re(l,"RID","rpc"),re(l,"SID",a.K),re(l,"AID",a.T),re(l,"CI",a.F?"0":"1"),!a.F&&a.ja&&re(l,"TO",a.ja),re(l,"TYPE","xmlhttp"),mi(a,l),a.m&&a.o&&Tc(l,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ds(dt(l)),d.m=null,d.P=!0,Hd(d,a)}n.Za=function(){this.C!=null&&(this.C=null,Os(this),Ac(this),Ne(19))};function xs(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Tf(a,l){var d=null;if(a.g==l){xs(a),Sc(a),a.g=null;var p=2}else if(wc(a.h,l))d=l.D,ef(a.h,l),p=1;else return;if(a.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var T=a.B;p=bs(),ke(p,new Gd(p,d)),Vs(a)}else wf(a);else if(T=l.s,T==3||T==0&&0<l.X||!(p==1&&ev(a,l)||p==2&&Ac(a)))switch(d&&0<d.length&&(l=a.h,l.i=l.i.concat(d)),T){case 1:ln(a,5);break;case 4:ln(a,10);break;case 3:ln(a,6);break;default:ln(a,2)}}}function bf(a,l){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*l}function ln(a,l){if(a.j.info("Error code "+l),l==2){var d=_(a.fb,a),p=a.Xa;let T=!p;p=new un(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ps(p,"https"),Ds(p),T?Ky(p.toString(),d):Hy(p.toString(),d)}else Ne(2);a.G=0,a.l&&a.l.sa(l),Af(a),yf(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function Af(a){if(a.G=0,a.ka=[],a.l){let l=tf(a.h);(l.length!=0||a.i.length!=0)&&(k(a.ka,l),k(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Sf(a,l,d){var p=d instanceof un?dt(d):new un(d);if(p.g!="")l&&(p.g=l+"."+p.g),Cs(p,p.s);else{var T=c.location;p=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var R=new un(null);p&&Ps(R,p),l&&(R.g=l),T&&Cs(R,T),d&&(R.l=d),p=R}return d=a.D,l=a.ya,d&&l&&re(p,d,l),re(p,"VER",a.la),mi(a,p),p}function Rf(a,l,d){if(l&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Ca&&!a.pa?new ae(new hi({eb:d})):new ae(a.pa),l.Ha(a.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pf(){}n=Pf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ls(){}Ls.prototype.g=function(a,l){return new Fe(a,l)};function Fe(a,l){Ae.call(this),this.g=new _f(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(a?a["X-WebChannel-Client-Profile"]=l.va:a={"X-WebChannel-Client-Profile":l.va}),this.g.S=a,(a=l&&l.Sb)&&!B(a)&&(this.g.m=a),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!B(l)&&(this.g.D=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Qn(this)}C(Fe,Ae),Fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){bc(this.g)},Fe.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=dc(a),a=d);l.i.push(new My(l.Ya++,a)),l.G==3&&Vs(l)},Fe.prototype.N=function(){this.g.l=null,delete this.j,bc(this.g),delete this.g,Fe.aa.N.call(this)};function Cf(a){pc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(let d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}C(Cf,pc);function Df(){mc.call(this),this.status=1}C(Df,mc);function Qn(a){this.g=a}C(Qn,Pf),Qn.prototype.ua=function(){ke(this.g,"a")},Qn.prototype.ta=function(a){ke(this.g,new Cf(a))},Qn.prototype.sa=function(a){ke(this.g,new Df)},Qn.prototype.ra=function(){ke(this.g,"b")},Ls.prototype.createWebChannel=Ls.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,ju=It.createWebChannelTransport=function(){return new Ls},qu=It.getStatEventTarget=function(){return bs()},Bu=It.Event=an,Po=It.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},As.NO_ERROR=0,As.TIMEOUT=8,As.HTTP_ERROR=6,Vi=It.ErrorCode=As,$d.COMPLETE="complete",Uu=It.EventType=$d,Bd.EventType=ri,ri.OPEN="a",ri.CLOSE="b",ri.ERROR="c",ri.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,nr=It.WebChannel=Bd,fE=It.FetchXmlHttpFactory=hi,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,Fu=It.XhrIo=ae}).apply(typeof Ro<"u"?Ro:typeof self<"u"?self:typeof window<"u"?window:{});var um="@firebase/firestore",lm="4.8.0";var ye=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ye.UNAUTHENTICATED=new ye(null),ye.GOOGLE_CREDENTIALS=new ye("google-credentials-uid"),ye.FIRST_PARTY=new ye("first-party-uid"),ye.MOCK_USER=new ye("mock-user");var Gr="11.10.0";var xn=new kt("@firebase/firestore");function ur(){return xn.logLevel}function D(n,...e){if(xn.logLevel<=H.DEBUG){let t=e.map(Qh);xn.debug(`Firestore (${Gr}): ${n}`,...t)}}function le(n,...e){if(xn.logLevel<=H.ERROR){let t=e.map(Qh);xn.error(`Firestore (${Gr}): ${n}`,...t)}}function Ht(n,...e){if(xn.logLevel<=H.WARN){let t=e.map(Qh);xn.warn(`Firestore (${Gr}): ${n}`,...t)}}function Qh(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function L(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,bg(n,r,t)}function bg(n,e,t){let r=`FIRESTORE (${Gr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw le(r),new Error(r)}function q(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||bg(e,i,r)}function U(n,e){return n}var P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},V=class extends Ue{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var ct=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Ju=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Yu=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ye.UNAUTHENTICATED))}shutdown(){}};var Xu=class{constructor(e){this.t=e,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){q(this.o===void 0,42304);let r=this.i,i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve(),s=new ct;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ct,e.enqueueRetryable(()=>i(this.currentUser))};let o=()=>{let u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){let u=this.t.getImmediate({optional:!0});u?c(u):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ct)}},0),o()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(q(typeof r.accessToken=="string",31837,{l:r}),new Ju(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string",2055,{h:e}),new ye(e)}},Zu=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},el=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Zu(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}},jo=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},tl=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){q(this.o===void 0,3512);let r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let o=s.token!==this.m;return this.m=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.V.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new jo(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new jo(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function pE(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}function Ag(){return new TextEncoder}var Ji=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516),r="";for(;r.length<20;){let i=pE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}};function z(n,e){return n<e?-1:n>e?1:0}function nl(n,e){let t=0;for(;t<n.length&&t<e.length;){let r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return z(r,i);{let s=Ag(),o=mE(s.encode(hm(n,t)),s.encode(hm(e,t)));return o!==0?o:z(r,i)}}t+=r>65535?2:1}return z(n.length,e.length)}function hm(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function mE(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return z(n[t],e[t]);return z(n.length,e.length)}function vr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Sg(n){return n+"\0"}var dm="__name__",zo=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&L(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&L(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=n.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return z(e.length,t.length)}static compareSegments(e,t){let r=n.isNumericId(e),i=n.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?n.extractNumericId(e).compare(n.extractNumericId(t)):nl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vt.fromString(e.substring(4,e.length-2))}},Z=class n extends zo{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new V(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},gE=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ge=class n extends zo{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return gE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dm}static keyField(){return new n([dm])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},o=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new V(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var x=class n{constructor(e){this.path=e}static fromPath(e){return new n(Z.fromString(e))}static fromName(e){return new n(Z.fromString(e).popFirst(5))}static empty(){return new n(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new Z(e.slice()))}};function Rg(n,e,t){if(!t)throw new V(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function _E(n,e,t,r){if(e===!0&&r===!0)throw new V(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function fm(n){if(!x.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pm(n){if(x.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Jh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function zt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Jh(n);throw new V(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function pe(n,e){let t={typeString:n};return e&&(t.value=e),t}function gs(n,e){if(!Pg(n))throw new V(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(let r in e)if(e[r]){let i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}let o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new V(P.INVALID_ARGUMENT,t);return!0}var mm=-62135596800,gm=1e6,oe=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*gm);return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<mm)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gm}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gs(e,n._jsonSchema))return new n(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-mm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:pe("string",oe._jsonSchemaVersion),seconds:pe("number"),nanoseconds:pe("number")};var j=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new oe(0,0))}static max(){return new n(new oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Ir=-1,wr=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};function rl(n){return n.fields.find(e=>e.kind===2)}function wn(n){return n.fields.filter(e=>e.kind!==2)}wr.UNKNOWN_ID=-1;var mr=class{constructor(e,t){this.fieldPath=e,this.kind=t}};var Yi=class n{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new n(0,He.min())}};function Cg(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new oe(t+1,0):new oe(t,r));return new He(i,x.empty(),e)}function Dg(n){return new He(n.readTime,n.key,Ir)}var He=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(j.min(),x.empty(),Ir)}static max(){return new n(j.max(),x.empty(),Ir)}};function Yh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:z(n.largestBatchId,e.largestBatchId))}var kg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Go=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function nn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==kg)throw n;D("LocalStore","Unexpectedly lost primary lease")}var A=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,o=new Array(s),c=0;for(let u=0;u<s;u++){let h=u;t(e[h]).next(f=>{o[h]=f,++c,c===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};var Be="SimpleDb",$o=class n{static open(e,t,r,i){try{return new n(t,e.transaction(i,r))}catch(s){throw new Dn(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new ct,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Dn(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{let i=Xh(r.target.error);this.S.reject(new Dn(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(D(Be,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){let e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){let t=this.transaction.objectStore(e);return new sl(t)}},Er=class n{static delete(e){return D(Be,"Removing database:",e),Tn(Nc().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!js())return!1;if(n.F())return!0;let e=ce(),t=n.M(e),r=0<t&&t<10,i=Ng(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,n.M(ce())===12.2&&le("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(D(Be,"Opening database:",this.name),this.db=await new Promise((t,r)=>{let i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{let o=s.target.result;t(o)},i.onblocked=()=>{r(new Dn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{let o=s.target.error;o.name==="VersionError"?r(new V(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new V(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Dn(e,o))},i.onupgradeneeded=s=>{D(Be,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);let o=s.target.result;if(this.L!==null&&this.L!==s.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${s.oldVersion}, event.newVersion=${s.newVersion}, db.version=${o.version}`);this.B.q(o,i.transaction,s.oldVersion,this.version).next(()=>{D(Be,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{let r=t.target;this.L=r.version},{passive:!0})),this.db.addEventListener("versionchange",t=>{var r;t.newVersion===null&&(Ht('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(r=this.databaseDeletedListener)===null||r===void 0||r.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,r,i){let s=t==="readonly",o=0;for(;;){++o;try{this.db=await this.k(e);let c=$o.open(this.db,e,s?"readonly":"readwrite",r),u=i(c).next(h=>(c.v(),h)).catch(h=>(c.abort(h),A.reject(h))).toPromise();return u.catch(()=>{}),await c.D,u}catch(c){let u=c,h=u.name!=="FirebaseError"&&o<3;if(D(Be,"Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}};function Ng(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}var il=class{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return Tn(this.$.delete())}},Dn=class extends V{constructor(e,t){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}};function rn(n){return n.name==="IndexedDbTransactionError"}var sl=class{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(D(Be,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(D(Be,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Tn(r)}add(e){return D(Be,"ADD",this.store.name,e,e),Tn(this.store.add(e))}get(e){return Tn(this.store.get(e)).next(t=>(t===void 0&&(t=null),D(Be,"GET",this.store.name,e,t),t))}delete(e){return D(Be,"DELETE",this.store.name,e),Tn(this.store.delete(e))}count(){return D(Be,"COUNT",this.store.name),Tn(this.store.count())}j(e,t){let r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){let s=i.getAll(r.range);return new A((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{let s=this.cursor(r),o=[];return this.J(s,(c,u)=>{o.push(u)}).next(()=>o)}}H(e,t){let r=this.store.getAll(e,t===null?void 0:t);return new A((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,t){D(Be,"DELETE ALL",this.store.name);let r=this.options(e,t);r.Z=!1;let i=this.cursor(r);return this.J(i,(s,o,c)=>c.delete())}X(e,t){let r;t?r=e:(r={},t=e);let i=this.cursor(r);return this.J(i,t)}ee(e){let t=this.cursor({});return new A((r,i)=>{t.onerror=s=>{let o=Xh(s.target.error);i(o)},t.onsuccess=s=>{let o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}J(e,t){let r=[];return new A((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{let c=o.target.result;if(!c)return void i();let u=new il(c),h=t(c.primaryKey,c.value,u);if(h instanceof A){let f=h.catch(m=>(u.done(),A.reject(m)));r.push(f)}u.isDone?i():u.W===null?c.continue():c.continue(u.W)}}).next(()=>A.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}};function Tn(n){return new A((e,t)=>{n.onsuccess=r=>{let i=r.target.result;e(i)},n.onerror=r=>{let i=Xh(r.target.error);t(i)}})}var _m=!1;function Xh(n){let e=Er.M(ce());if(e>=12.2&&e<13){let t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){let r=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return _m||(_m=!0,setTimeout(()=>{throw r},0)),r}}return n}var qi="IndexBackfiller",ol=class{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){D(qi,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{let t=await this.te.re();D(qi,`Documents written: ${t}`)}catch(t){rn(t)?D(qi,"Ignoring IndexedDB error during index backfill: ",t):await nn(t)}await this.ne(6e4)})}},al=class{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ie(t,e))}ie(e,t){let r=new Set,i=t,s=!0;return A.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return D(qi,`Processing collection: ${o}`),this.se(e,o,i).next(c=>{i-=c,r.add(o)});s=!1})).next(()=>t-i)}se(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{let o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.oe(i,s)).next(c=>(D(qi,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}oe(e,t){let r=e;return t.changes.forEach((i,s)=>{let o=Dg(s);Yh(o,r)>0&&(r=o)}),new He(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}};var Ce=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}};Ce.ue=-1;var kn=-1;function za(n){return n==null}function Xi(n){return n===0&&1/n==-1/0}function Og(n){return typeof n=="number"&&Number.isInteger(n)&&!Xi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var Wo="";function De(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ym(e)),e=yE(n.get(t),e);return ym(e)}function yE(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case Wo:t+="";break;default:t+=s}}return t}function ym(n){return n+Wo+""}function ot(n){let e=n.length;if(q(e>=2,64408,{path:n}),e===2)return q(n.charAt(0)===Wo&&n.charAt(1)==="",56145,{path:n}),Z.emptyPath();let t=e-2,r=[],i="";for(let s=0;s<e;){let o=n.indexOf(Wo,s);switch((o<0||o>t)&&L(50515,{path:n}),n.charAt(o+1)){case"":let c=n.substring(s,o),u;i.length===0?u=c:(i+=c,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:L(61167,{path:n})}s=o+2}return new Z(r)}var En="remoteDocuments",_s="owner",rr="owner",Zi="mutationQueues",vE="userId",Ze="mutations",vm="batchId",Rn="userMutationsIndex",Im=["userId","batchId"];function Vo(n,e){return[n,De(e)]}function Vg(n,e,t){return[n,De(e),t]}var IE={},Tr="documentMutations",Ko="remoteDocumentsV14",wE=["prefixPath","collectionGroup","readTime","documentId"],xo="documentKeyIndex",EE=["prefixPath","collectionGroup","documentId"],xg="collectionGroupIndex",TE=["collectionGroup","readTime","prefixPath","documentId"],es="remoteDocumentGlobal",cl="remoteDocumentGlobalKey",br="targets",Lg="queryTargetsIndex",bE=["canonicalId","targetId"],Ar="targetDocuments",AE=["targetId","path"],Zh="documentTargetsIndex",SE=["path","targetId"],Ho="targetGlobalKey",Nn="targetGlobal",ts="collectionParents",RE=["collectionId","parent"],Sr="clientMetadata",PE="clientId",Ga="bundles",CE="bundleId",$a="namedQueries",DE="name",ed="indexConfiguration",kE="indexId",ul="collectionGroupIndex",NE="collectionGroup",ji="indexState",OE=["indexId","uid"],Mg="sequenceNumberIndex",VE=["uid","sequenceNumber"],zi="indexEntries",xE=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Fg="documentKeyIndex",LE=["indexId","uid","orderedDocumentKey"],Wa="documentOverlays",ME=["userId","collectionPath","documentId"],ll="collectionPathOverlayIndex",FE=["userId","collectionPath","largestBatchId"],Ug="collectionGroupOverlayIndex",UE=["userId","collectionGroup","largestBatchId"],td="globals",BE="name",Bg=[Zi,Ze,Tr,En,br,_s,Nn,Ar,Sr,es,ts,Ga,$a],qE=[...Bg,Wa],qg=[Zi,Ze,Tr,Ko,br,_s,Nn,Ar,Sr,es,ts,Ga,$a,Wa],jg=qg,nd=[...jg,ed,ji,zi],jE=nd,zg=[...nd,td],zE=zg;var ns=class extends Go{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}};function _e(n,e){let t=U(n);return Er.N(t.ce,e)}function wm(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function sn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Gg(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var ie=class n{constructor(e,t){this.comparator=e,this.root=t||ut.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pr(this.root,e,this.comparator,!1)}getReverseIterator(){return new pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pr(this.root,e,this.comparator,!0)}},pr=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ut=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw L(27949);return e+(this.isRed()?0:1)}};ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new ut(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var te=class n{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qo(this.data.getIterator())}getIteratorFrom(e){return new Qo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},Qo=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};function ir(n){return n.hasNext()?n.getNext():void 0}var qe=class n{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new n([])}unionWith(e){let t=new te(ge.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vr(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var Jo=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var me=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Jo("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};me.EMPTY_BYTE_STRING=new me("");var GE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(n){if(q(!!n,39018),typeof n=="string"){let e=0,t=GE.exec(n);if(q(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:se(n.seconds),nanos:se(n.nanos)}}function se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Tt(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}var $g="server_timestamp",Wg="__type__",Kg="__previous_value__",Hg="__local_write_time__";function rd(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Wg])===null||t===void 0?void 0:t.stringValue)===$g}function Ka(n){let e=n.mapValue.fields[Kg];return rd(e)?Ka(e):e}function rs(n){let e=Et(n.mapValue.fields[Hg].timestampValue);return new oe(e.seconds,e.nanos)}var hl=class{constructor(e,t,r,i,s,o,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}},Yo="(default)",Rr=class n{constructor(e,t){this.projectId=e,this.database=t||Yo}static empty(){return new n("","")}get isDefaultDatabase(){return this.database===Yo}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var id="__type__",Qg="__max__",jt={mapValue:{fields:{__type__:{stringValue:Qg}}}},sd="__vector__",Pr="value",Lo={nullValue:"NULL_VALUE"};function Qt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?rd(n)?4:Jg(n)?9007199254740991:Ha(n)?10:11:L(28295,{value:n})}function lt(n,e){if(n===e)return!0;let t=Qt(n);if(t!==Qt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rs(n).isEqual(rs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let o=Et(i.timestampValue),c=Et(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Tt(i.bytesValue).isEqual(Tt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return se(i.geoPointValue.latitude)===se(s.geoPointValue.latitude)&&se(i.geoPointValue.longitude)===se(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return se(i.integerValue)===se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let o=se(i.doubleValue),c=se(s.doubleValue);return o===c?Xi(o)===Xi(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return vr(n.arrayValue.values||[],e.arrayValue.values||[],lt);case 10:case 11:return function(i,s){let o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(wm(o)!==wm(c))return!1;for(let u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!lt(o[u],c[u])))return!1;return!0}(n,e);default:return L(52216,{left:n})}}function is(n,e){return(n.values||[]).find(t=>lt(t,e))!==void 0}function Jt(n,e){if(n===e)return 0;let t=Qt(n),r=Qt(e);if(t!==r)return z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,e.booleanValue);case 2:return function(s,o){let c=se(s.integerValue||s.doubleValue),u=se(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Em(n.timestampValue,e.timestampValue);case 4:return Em(rs(n),rs(e));case 5:return nl(n.stringValue,e.stringValue);case 6:return function(s,o){let c=Tt(s),u=Tt(o);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){let c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){let f=z(c[h],u[h]);if(f!==0)return f}return z(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){let c=z(se(s.latitude),se(o.latitude));return c!==0?c:z(se(s.longitude),se(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Tm(n.arrayValue,e.arrayValue);case 10:return function(s,o){var c,u,h,f;let m=s.fields||{},_=o.fields||{},S=(c=m[Pr])===null||c===void 0?void 0:c.arrayValue,C=(u=_[Pr])===null||u===void 0?void 0:u.arrayValue,N=z(((h=S?.values)===null||h===void 0?void 0:h.length)||0,((f=C?.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Tm(S,C)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===jt.mapValue&&o===jt.mapValue)return 0;if(s===jt.mapValue)return 1;if(o===jt.mapValue)return-1;let c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){let _=nl(u[m],f[m]);if(_!==0)return _;let S=Jt(c[u[m]],h[f[m]]);if(S!==0)return S}return z(u.length,f.length)}(n.mapValue,e.mapValue);default:throw L(23264,{le:t})}}function Em(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return z(n,e);let t=Et(n),r=Et(e),i=z(t.seconds,r.seconds);return i!==0?i:z(t.nanos,r.nanos)}function Tm(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=Jt(t[i],r[i]);if(s)return s}return z(t.length,r.length)}function Cr(n){return dl(n)}function dl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=Et(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Tt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return x.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=dl(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let o of r)s?s=!1:i+=",",i+=`${o}:${dl(t.fields[o])}`;return i+"}"}(n.mapValue):L(61005,{value:n})}function Mo(n){switch(Qt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=Ka(n);return e?16+Mo(e):16;case 5:return 2*n.stringValue.length;case 6:return Tt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Mo(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return sn(r.fields,(s,o)=>{i+=s.length+Mo(o)}),i}(n.mapValue);default:throw L(13486,{value:n})}}function od(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function fl(n){return!!n&&"integerValue"in n}function ss(n){return!!n&&"arrayValue"in n}function bm(n){return!!n&&"nullValue"in n}function Am(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fo(n){return!!n&&"mapValue"in n}function Ha(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[id])===null||t===void 0?void 0:t.stringValue)===sd}function Gi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return sn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Gi(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Jg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Qg}var Yg={mapValue:{fields:{[id]:{stringValue:sd},[Pr]:{arrayValue:{}}}}};function $E(n){return"nullValue"in n?Lo:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?od(Rr.empty(),x.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Ha(n)?Yg:{mapValue:{}}:L(35942,{value:n})}function WE(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?od(Rr.empty(),x.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Yg:"mapValue"in n?Ha(n)?{mapValue:{}}:jt:L(61959,{value:n})}function Sm(n,e){let t=Jt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Rm(n,e){let t=Jt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}var Ve=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Fo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gi(t)}setAll(e){let t=ge.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){let u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=Gi(o):i.push(c.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());Fo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Fo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){sn(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(Gi(this.value))}};function Xg(n){let e=[];return sn(n.fields,(t,r)=>{let i=new ge([t]);if(Fo(r)){let s=Xg(r.mapValue).fields;if(s.length===0)e.push(i);else for(let o of s)e.push(i.child(o))}else e.push(i)}),new qe(e)}var Ee=class n{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new n(e,0,j.min(),j.min(),j.min(),Ve.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,j.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,j.min(),j.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,j.min(),j.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Yt=class{constructor(e,t){this.position=e,this.inclusive=t}};function Pm(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],o=n.position[i];if(s.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),t.key):r=Jt(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!lt(n.position[t],e.position[t]))return!1;return!0}var Dr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function KE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var Xo=class{},Q=class n extends Xo{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new gl(e,t,r):t==="array-contains"?new vl(e,r):t==="in"?new Zo(e,r):t==="not-in"?new Il(e,r):t==="array-contains-any"?new wl(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new _l(e,r):new yl(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Jt(t,this.value)):t!==null&&Qt(this.value)===Qt(t)&&this.matchesComparison(Jt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},ee=class n extends Xo{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new n(e,t)}matches(e){return kr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}};function kr(n){return n.op==="and"}function pl(n){return n.op==="or"}function ad(n){return Zg(n)&&kr(n)}function Zg(n){for(let e of n.filters)if(e instanceof ee)return!1;return!0}function ml(n){if(n instanceof Q)return n.field.canonicalString()+n.op.toString()+Cr(n.value);if(ad(n))return n.filters.map(e=>ml(e)).join(",");{let e=n.filters.map(t=>ml(t)).join(",");return`${n.op}(${e})`}}function e_(n,e){return n instanceof Q?function(r,i){return i instanceof Q&&r.op===i.op&&r.field.isEqual(i.field)&&lt(r.value,i.value)}(n,e):n instanceof ee?function(r,i){return i instanceof ee&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&e_(o,i.filters[c]),!0):!1}(n,e):void L(19439)}function t_(n,e){let t=n.filters.concat(e);return ee.create(t,n.op)}function n_(n){return n instanceof Q?function(t){return`${t.field.canonicalString()} ${t.op} ${Cr(t.value)}`}(n):n instanceof ee?function(t){return t.op.toString()+" {"+t.getFilters().map(n_).join(" ,")+"}"}(n):"Filter"}var gl=class extends Q{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){let t=x.comparator(e.key,this.key);return this.matchesComparison(t)}},_l=class extends Q{constructor(e,t){super(e,"in",t),this.keys=r_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},yl=class extends Q{constructor(e,t){super(e,"not-in",t),this.keys=r_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function r_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>x.fromName(r.referenceValue))}var vl=class extends Q{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return ss(t)&&is(t.arrayValue,this.value)}},Zo=class extends Q{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&is(this.value.arrayValue,t)}},Il=class extends Q{constructor(e,t){super(e,"not-in",t)}matches(e){if(is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!is(this.value.arrayValue,t)}},wl=class extends Q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!ss(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>is(this.value.arrayValue,r))}};var El=class{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Pe=null}};function Tl(n,e=null,t=[],r=[],i=null,s=null,o=null){return new El(n,e,t,r,i,s,o)}function Ln(n){let e=U(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ml(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),za(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Cr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Cr(r)).join(",")),e.Pe=t}return e.Pe}function ys(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!KE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!e_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cm(n.startAt,e.startAt)&&Cm(n.endAt,e.endAt)}function ea(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ta(n,e){return n.filters.filter(t=>t instanceof Q&&t.field.isEqual(e))}function Dm(n,e,t){let r=Lo,i=!0;for(let s of ta(n,e)){let o=Lo,c=!0;switch(s.op){case"<":case"<=":o=$E(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=Lo}Sm({value:r,inclusive:i},{value:o,inclusive:c})<0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let o=t.position[s];Sm({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function km(n,e,t){let r=jt,i=!0;for(let s of ta(n,e)){let o=jt,c=!0;switch(s.op){case">=":case">":o=WE(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=jt}Rm({value:r,inclusive:i},{value:o,inclusive:c})>0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let o=t.position[s];Rm({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}var Nr=class{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}};function i_(n,e,t,r,i,s,o,c){return new Nr(n,e,t,r,i,s,o,c)}function Qa(n){return new Nr(n)}function Nm(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function HE(n){return n.collectionGroup!==null}function $i(n){let e=U(n);if(e.Te===null){e.Te=[];let t=new Set;for(let s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new te(ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Dr(s,r))}),t.has(ge.keyField().canonicalString())||e.Te.push(new Dr(ge.keyField(),r))}return e.Te}function Ge(n){let e=U(n);return e.Ie||(e.Ie=QE(e,$i(n))),e.Ie}function QE(n,e){if(n.limitType==="F")return Tl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new Dr(i.field,s)});let t=n.endAt?new Yt(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yt(n.startAt.position,n.startAt.inclusive):null;return Tl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function bl(n,e,t){return new Nr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ja(n,e){return ys(Ge(n),Ge(e))&&n.limitType===e.limitType}function s_(n){return`${Ln(Ge(n))}|lt:${n.limitType}`}function lr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>n_(i)).join(", ")}]`),za(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Cr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Cr(i)).join(",")),`Target(${r})`}(Ge(n))}; limitType=${n.limitType})`}function vs(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):x.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of $i(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,u){let h=Pm(o,c,u);return o.inclusive?h<=0:h<0}(r.startAt,$i(r),i)||r.endAt&&!function(o,c,u){let h=Pm(o,c,u);return o.inclusive?h>=0:h>0}(r.endAt,$i(r),i))}(n,e)}function o_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function a_(n){return(e,t)=>{let r=!1;for(let i of $i(n)){let s=JE(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function JE(n,e,t){let r=n.field.isKeyField()?x.comparator(e.key,t.key):function(s,o,c){let u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?Jt(u,h):L(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}var et=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){sn(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return Gg(this.inner)}size(){return this.innerSize}};var YE=new ie(x.comparator);function je(){return YE}var c_=new ie(x.comparator);function Ui(...n){let e=c_;for(let t of n)e=e.insert(t.key,t);return e}function u_(n){let e=c_;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function at(){return Wi()}function l_(){return Wi()}function Wi(){return new et(n=>n.toString(),(n,e)=>n.isEqual(e))}var XE=new ie(x.comparator),ZE=new te(x.comparator);function K(...n){let e=ZE;for(let t of n)e=e.add(t);return e}var eT=new te(z);function cd(){return eT}function ud(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xi(e)?"-0":e}}function h_(n){return{integerValue:""+n}}function tT(n,e){return Og(e)?h_(e):ud(n,e)}var Or=class{constructor(){this._=void 0}};function nT(n,e,t){return n instanceof Mn?function(i,s){let o={fields:{[Wg]:{stringValue:$g},[Hg]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&rd(s)&&(s=Ka(s)),s&&(o.fields[Kg]=s),{mapValue:o}}(t,e):n instanceof bt?f_(n,e):n instanceof At?p_(n,e):function(i,s){let o=d_(i,s),c=Om(o)+Om(i.Ee);return fl(o)&&fl(i.Ee)?h_(c):ud(i.serializer,c)}(n,e)}function rT(n,e,t){return n instanceof bt?f_(n,e):n instanceof At?p_(n,e):t}function d_(n,e){return n instanceof Fn?function(r){return fl(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var Mn=class extends Or{},bt=class extends Or{constructor(e){super(),this.elements=e}};function f_(n,e){let t=m_(e);for(let r of n.elements)t.some(i=>lt(i,r))||t.push(r);return{arrayValue:{values:t}}}var At=class extends Or{constructor(e){super(),this.elements=e}};function p_(n,e){let t=m_(e);for(let r of n.elements)t=t.filter(i=>!lt(i,r));return{arrayValue:{values:t}}}var Fn=class extends Or{constructor(e,t){super(),this.serializer=e,this.Ee=t}};function Om(n){return se(n.integerValue||n.doubleValue)}function m_(n){return ss(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var os=class{constructor(e,t){this.field=e,this.transform=t}};function iT(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof bt&&i instanceof bt||r instanceof At&&i instanceof At?vr(r.elements,i.elements,lt):r instanceof Fn&&i instanceof Fn?lt(r.Ee,i.Ee):r instanceof Mn&&i instanceof Mn}(n.transform,e.transform)}var Al=class{constructor(e,t){this.version=e,this.transformResults=t}},ze=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Uo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Vr=class{};function g_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xr(n.key,ze.none()):new Xt(n.key,n.data,ze.none());{let t=n.data,r=Ve.empty(),i=new te(ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new tt(n.key,r,new qe(i.toArray()),ze.none())}}function sT(n,e,t){n instanceof Xt?function(i,s,o){let c=i.value.clone(),u=xm(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof tt?function(i,s,o){if(!Uo(i.precondition,s))return void s.convertToUnknownDocument(o.version);let c=xm(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(__(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ki(n,e,t,r){return n instanceof Xt?function(s,o,c,u){if(!Uo(s.precondition,o))return c;let h=s.value.clone(),f=Lm(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof tt?function(s,o,c,u){if(!Uo(s.precondition,o))return c;let h=Lm(s.fieldTransforms,u,o),f=o.data;return f.setAll(__(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,o,c){return Uo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function oT(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=d_(r.transform,i||null);s!=null&&(t===null&&(t=Ve.empty()),t.set(r.field,s))}return t||null}function Vm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vr(r,i,(s,o)=>iT(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Xt=class extends Vr{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},tt=class extends Vr{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function __(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function xm(n,e,t){let r=new Map;q(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){let s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,rT(o,c,t[i]))}return r}function Lm(n,e,t){let r=new Map;for(let i of n){let s=i.transform,o=t.data.field(i.field);r.set(i.field,nT(s,o,e))}return r}var xr=class extends Vr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},na=class extends Vr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var as=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&sT(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ki(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Ki(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=l_();return this.mutations.forEach(i=>{let s=e.get(i.key),o=s.overlayedDocument,c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;let u=g_(o,c);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&vr(this.mutations,e.mutations,(t,r)=>Vm(t,r))&&vr(this.baseMutations,e.baseMutations,(t,r)=>Vm(t,r))}},Sl=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){q(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return XE}(),s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new n(e,t,r,i)}};var cs=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Rl=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var de,J;function aT(n){switch(n){case P.OK:return L(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function y_(n){if(n===void 0)return le("GRPC error has no .code"),P.UNKNOWN;switch(n){case de.OK:return P.OK;case de.CANCELLED:return P.CANCELLED;case de.UNKNOWN:return P.UNKNOWN;case de.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case de.INTERNAL:return P.INTERNAL;case de.UNAVAILABLE:return P.UNAVAILABLE;case de.UNAUTHENTICATED:return P.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case de.NOT_FOUND:return P.NOT_FOUND;case de.ALREADY_EXISTS:return P.ALREADY_EXISTS;case de.PERMISSION_DENIED:return P.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case de.ABORTED:return P.ABORTED;case de.OUT_OF_RANGE:return P.OUT_OF_RANGE;case de.UNIMPLEMENTED:return P.UNIMPLEMENTED;case de.DATA_LOSS:return P.DATA_LOSS;default:return L(39323,{code:n})}}(J=de||(de={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";var Mm=null;var cT=new vt([4294967295,4294967295],0);function Fm(n){let e=Ag().encode(n),t=new Mu;return t.update(e),new Uint8Array(t.digest())}function Um(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new vt([t,r],0),new vt([i,s],0)]}var Pl=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Pn(`Invalid padding: ${t}`);if(r<0)throw new Pn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Pn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Pn(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=vt.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(vt.fromNumber(r)));return i.compare(cT)===1&&(i=new vt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;let t=Fm(e),[r,i]=Um(t);for(let s=0;s<this.hashCount;s++){let o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new n(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.fe===0)return;let t=Fm(e),[r,i]=Um(t);for(let s=0;s<this.hashCount;s++){let o=this.pe(r,i,s);this.we(o)}}we(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},Pn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var us=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,ls.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(j.min(),i,new ie(z),je(),K())}},ls=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,K(),K(),K())}};var gr=class{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}},ra=class{constructor(e,t){this.targetId=e,this.De=t}},ia=class{constructor(e,t,r=me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},sa=class{constructor(){this.ve=0,this.Ce=Bm(),this.Fe=me.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=K(),t=K(),r=K();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:L(38017,{changeType:s})}}),new ls(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Bm()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,q(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}},Cl=class{constructor(e){this.We=e,this.Ge=new Map,this.ze=je(),this.je=Co(),this.Je=Co(),this.He=new ie(z)}Ye(e){for(let t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(let t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{let r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:L(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){let t=e.targetId,r=e.De.count,i=this.st(t);if(i){let s=i.target;if(ea(s))if(r===0){let o=new x(s.path);this.Xe(t,o,Ee.newNoDocument(o,j.min()))}else q(r===1,20013,{expectedCount:r});else{let o=this.ot(t);if(o!==r){let c=this._t(e),u=c?this.ut(c,e,o):1;if(u!==0){this.rt(t);let h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}Mm?.ct(function(f,m,_,S,C){var N,k,G,B,F,W;let Y={localCacheCount:f,existenceFilterCount:m.count,databaseId:_.database,projectId:_.projectId},$=m.unchangedNames;return $&&(Y.bloomFilter={applied:C===0,hashCount:(N=$?.hashCount)!==null&&N!==void 0?N:0,bitmapLength:(B=(G=(k=$?.bits)===null||k===void 0?void 0:k.bitmap)===null||G===void 0?void 0:G.length)!==null&&B!==void 0?B:0,padding:(W=(F=$?.bits)===null||F===void 0?void 0:F.padding)!==null&&W!==void 0?W:0,mightContain:I=>{var g;return(g=S?.mightContain(I))!==null&&g!==void 0&&g}}),Y}(o,e.De,this.We.lt(),c,u))}}}}_t(e){let t=e.De.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,o,c;try{o=Tt(r).toUint8Array()}catch(u){if(u instanceof Jo)return Ht("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Pl(o,i,s)}catch(u){return Ht(u instanceof Pn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){let r=this.We.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,s,null),i++)}),i}Pt(e){let t=new Map;this.Ge.forEach((s,o)=>{let c=this.st(o);if(c){if(s.current&&ea(c.target)){let u=new x(c.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,Ee.newNoDocument(u,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}});let r=K();this.Je.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{let h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));let i=new us(e,t,this.He,this.ze,r);return this.ze=je(),this.je=Co(),this.Je=Co(),this.He=new ie(z),i}Ze(e,t){if(!this.nt(e))return;let r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;let i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){let t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new sa,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new te(z),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new te(z),this.je=this.je.insert(e,t)),t}nt(e){let t=this.st(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}st(e){let t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new sa),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}};function Co(){return new ie(x.comparator)}function Bm(){return new ie(x.comparator)}var uT={asc:"ASCENDING",desc:"DESCENDING"},lT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hT={and:"AND",or:"OR"},Dl=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function kl(n,e){return n.useProto3Json||za(e)?e:{value:e}}function Lr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function v_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function dT(n,e){return Lr(n,e.toTimestamp())}function xe(n){return q(!!n,49232),j.fromTimestamp(function(t){let r=Et(t);return new oe(r.seconds,r.nanos)}(n))}function ld(n,e){return Nl(n,e).canonicalString()}function Nl(n,e){let t=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function I_(n){let e=Z.fromString(n);return q(C_(e),10190,{key:e.toString()}),e}function oa(n,e){return ld(n.databaseId,e.path)}function On(n,e){let t=I_(e);if(t.get(1)!==n.databaseId.projectId)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(T_(t))}function w_(n,e){return ld(n.databaseId,e)}function E_(n){let e=I_(n);return e.length===4?Z.emptyPath():T_(e)}function Ol(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function T_(n){return q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function qm(n,e,t){return{name:oa(n,e),fields:t.value.mapValue.fields}}function fT(n,e,t){let r=On(n,e.name),i=xe(e.updateTime),s=e.createTime?xe(e.createTime):j.min(),o=new Ve({mapValue:{fields:e.fields}}),c=Ee.newFoundDocument(r,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function pT(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:L(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(q(f===void 0||typeof f=="string",58123),me.fromBase64String(f||"")):(q(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),me.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){let f=h.code===void 0?P.UNKNOWN:y_(h.code);return new V(f,h.message||"")}(o);t=new ia(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=On(n,r.document.name),s=xe(r.document.updateTime),o=r.document.createTime?xe(r.document.createTime):j.min(),c=new Ve({mapValue:{fields:r.document.fields}}),u=Ee.newFoundDocument(i,s,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new gr(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=On(n,r.document),s=r.readTime?xe(r.readTime):j.min(),o=Ee.newNoDocument(i,s),c=r.removedTargetIds||[];t=new gr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=On(n,r.document),s=r.removedTargetIds||[];t=new gr([],s,i,null)}else{if(!("filter"in e))return L(11601,{At:e});{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,o=new Rl(i,s),c=r.targetId;t=new ra(c,o)}}return t}function aa(n,e){let t;if(e instanceof Xt)t={update:qm(n,e.key,e.value)};else if(e instanceof xr)t={delete:oa(n,e.key)};else if(e instanceof tt)t={update:qm(n,e.key,e.data),updateMask:IT(e.fieldMask)};else{if(!(e instanceof na))return L(16599,{Rt:e.type});t={verify:oa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){let c=o.transform;if(c instanceof Mn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof bt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof At)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Fn)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw L(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dT(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L(27497)}(n,e.precondition)),t}function Vl(n,e){let t=e.currentDocument?function(s){return s.updateTime!==void 0?ze.updateTime(xe(s.updateTime)):s.exists!==void 0?ze.exists(s.exists):ze.none()}(e.currentDocument):ze.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let u=null;if("setToServerValue"in c)q(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new Mn;else if("appendMissingElements"in c){let f=c.appendMissingElements.values||[];u=new bt(f)}else if("removeAllFromArray"in c){let f=c.removeAllFromArray.values||[];u=new At(f)}else"increment"in c?u=new Fn(o,c.increment):L(16584,{proto:c});let h=ge.fromServerFormat(c.fieldPath);return new os(h,u)}(n,i)):[];if(e.update){e.update.name;let i=On(n,e.update.name),s=new Ve({mapValue:{fields:e.update.fields}});if(e.updateMask){let o=function(u){let h=u.fieldPaths||[];return new qe(h.map(f=>ge.fromServerFormat(f)))}(e.updateMask);return new tt(i,s,o,t,r)}return new Xt(i,s,t,r)}if(e.delete){let i=On(n,e.delete);return new xr(i,t)}if(e.verify){let i=On(n,e.verify);return new na(i,t)}return L(1463,{proto:e})}function mT(n,e){return n&&n.length>0?(q(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?xe(i.updateTime):xe(s);return o.isEqual(j.min())&&(o=xe(s)),new Al(o,i.transformResults||[])}(t,e))):[]}function b_(n,e){return{documents:[w_(n,e.path)]}}function A_(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=w_(n,i);let s=function(h){if(h.length!==0)return P_(ee.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:hr(_.field),direction:_T(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);let c=kl(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:t,parent:i}}function S_(n){let e=E_(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){q(r===1,65062);let f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){let _=R_(m);return _ instanceof ee&&ad(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(_=>function(C){return new Dr(dr(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(m){let _;return _=typeof m=="object"?m.value:m,za(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(m){let _=!!m.before,S=m.values||[];return new Yt(S,_)}(t.startAt));let h=null;return t.endAt&&(h=function(m){let _=!m.before,S=m.values||[];return new Yt(S,_)}(t.endAt)),i_(e,i,o,s,c,"F",u,h)}function gT(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function R_(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=dr(t.unaryFilter.field);return Q.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=dr(t.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=dr(t.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let o=dr(t.unaryFilter.field);return Q.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}}(n):n.fieldFilter!==void 0?function(t){return Q.create(dr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ee.create(t.compositeFilter.filters.map(r=>R_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}}(t.compositeFilter.op))}(n):L(30097,{filter:n})}function _T(n){return uT[n]}function yT(n){return lT[n]}function vT(n){return hT[n]}function hr(n){return{fieldPath:n.canonicalString()}}function dr(n){return ge.fromServerFormat(n.fieldPath)}function P_(n){return n instanceof Q?function(t){if(t.op==="=="){if(Am(t.value))return{unaryFilter:{field:hr(t.field),op:"IS_NAN"}};if(bm(t.value))return{unaryFilter:{field:hr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Am(t.value))return{unaryFilter:{field:hr(t.field),op:"IS_NOT_NAN"}};if(bm(t.value))return{unaryFilter:{field:hr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hr(t.field),op:yT(t.op),value:t.value}}}(n):n instanceof ee?function(t){let r=t.getFilters().map(i=>P_(i));return r.length===1?r[0]:{compositeFilter:{op:vT(t.op),filters:r}}}(n):L(54877,{filter:n})}function IT(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function C_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Mr=class n{constructor(e,t,r,i,s=j.min(),o=j.min(),c=me.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var ca=class{constructor(e){this.gt=e}};function wT(n,e){let t;if(e.document)t=fT(n.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){let r=x.fromSegments(e.noDocument.path),i=Bn(e.noDocument.readTime);t=Ee.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return L(56709);{let r=x.fromSegments(e.unknownDocument.path),i=Bn(e.unknownDocument.version);t=Ee.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){let s=new oe(i[0],i[1]);return j.fromTimestamp(s)}(e.readTime)),t}function jm(n,e){let t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:ua(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:oa(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Lr(s,o.version.toTimestamp()),createTime:Lr(s,o.createTime.toTimestamp())}}(n.gt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Un(e.version)};else{if(!e.isUnknownDocument())return L(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Un(e.version)}}return r}function ua(n){let e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Un(n){let e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Bn(n){let e=new oe(n.seconds,n.nanoseconds);return j.fromTimestamp(e)}function bn(n,e){let t=(e.baseMutations||[]).map(s=>Vl(n.gt,s));for(let s=0;s<e.mutations.length-1;++s){let o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){let c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}let r=e.mutations.map(s=>Vl(n.gt,s)),i=oe.fromMillis(e.localWriteTimeMs);return new as(e.batchId,i,t,r)}function Bi(n){let e=Bn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Bn(n.lastLimboFreeSnapshotVersion):j.min(),r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){let o=s.documents.length;return q(o===1,1966,{count:o}),Ge(Qa(E_(s.documents[0])))}(n.query):function(s){return Ge(S_(s))}(n.query),new Mr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,me.fromBase64String(n.resumeToken))}function D_(n,e){let t=Un(e.snapshotVersion),r=Un(e.lastLimboFreeSnapshotVersion),i;i=ea(e.target)?b_(n.gt,e.target):A_(n.gt,e.target).Vt;let s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ln(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function k_(n){let e=S_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?bl(e,e.limit,"L"):e}function zu(n,e){return new cs(e.largestBatchId,Vl(n.gt,e.overlayMutation))}function zm(n,e){let t=e.path.lastSegment();return[n,De(e.path.popLast()),t]}function Gm(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Un(r.readTime),documentKey:De(r.documentKey.path),largestBatchId:r.largestBatchId}}var xl=class{getBundleMetadata(e,t){return $m(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Bn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return $m(e).put(function(i){return{bundleId:i.id,createTime:Un(xe(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Wm(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:k_(s.bundledQuery),readTime:Bn(s.readTime)}}(r)})}saveNamedQuery(e,t){return Wm(e).put(function(i){return{name:i.name,readTime:Un(xe(i.readTime)),bundledQuery:i.bundledQuery}}(t))}};function $m(n){return _e(n,Ga)}function Wm(n){return _e(n,$a)}var la=class n{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){let r=t.uid||"";return new n(e,r)}getOverlay(e,t){return xi(e).get(zm(this.userId,t)).next(r=>r?zu(this.serializer,r):null)}getOverlays(e,t){let r=at();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){let i=[];return r.forEach((s,o)=>{let c=new cs(t,o);i.push(this.wt(e,c))}),A.waitFor(i)}removeOverlaysForBatchId(e,t,r){let i=new Set;t.forEach(o=>i.add(De(o.getCollectionPath())));let s=[];return i.forEach(o=>{let c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(xi(e).Y(ll,c))}),A.waitFor(s)}getOverlaysForCollection(e,t,r){let i=at(),s=De(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return xi(e).j(ll,o).next(c=>{for(let u of c){let h=zu(this.serializer,u);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,r,i){let s=at(),o,c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return xi(e).X({index:Ug,range:c},(u,h,f)=>{let m=zu(this.serializer,h);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}wt(e,t){return xi(e).put(function(i,s,o){let[c,u,h]=zm(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:aa(i.gt,o.mutation)}}(this.serializer,this.userId,t))}};function xi(n){return _e(n,Wa)}var Ll=class{St(e){return _e(e,td)}getSessionToken(e){return this.St(e).get("sessionToken").next(t=>{let r=t?.value;return r?me.fromUint8Array(r):me.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}};var wt=class{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(se(e.integerValue));else if("doubleValue"in e){let r=se(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),Xi(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=Et(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(Tt(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?Jg(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):Ha(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):L(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){let r=e.fields||{};this.Ct(t,55);for(let i of Object.keys(r))this.xt(i,t),this.Dt(r[i],t)}Lt(e,t){var r,i;let s=e.fields||{};this.Ct(t,53);let o=Pr,c=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(se(c)),this.xt(o,t),this.Dt(s[o],t)}qt(e,t){let r=e.values||[];this.Ct(t,50);for(let i of r)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),x.fromName(e).path.forEach(r=>{this.Ct(t,60),this.$t(r,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}};wt.Ut=new wt;var sr=255;function ET(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Km(n){let e=64-function(r){let i=0;for(let s=0;s<8;++s){let o=ET(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}var Ml=class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Wt(r.value),r=t.next();this.Gt()}zt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.jt(r.value),r=t.next();this.Jt()}Ht(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.Wt(r);else if(r<2048)this.Wt(960|r>>>6),this.Wt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|r>>>12),this.Wt(128|63&r>>>6),this.Wt(128|63&r);else{let i=t.codePointAt(0);this.Wt(240|i>>>18),this.Wt(128|63&i>>>12),this.Wt(128|63&i>>>6),this.Wt(128|63&i)}}this.Gt()}Yt(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.jt(r);else if(r<2048)this.jt(960|r>>>6),this.jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|r>>>12),this.jt(128|63&r>>>6),this.jt(128|63&r);else{let i=t.codePointAt(0);this.jt(240|i>>>18),this.jt(128|63&i>>>12),this.jt(128|63&i>>>6),this.jt(128|63&i)}}this.Jt()}Zt(e){let t=this.Xt(e),r=Km(t);this.en(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}tn(e){let t=this.Xt(e),r=Km(t);this.en(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}nn(){this.rn(sr),this.rn(255)}sn(){this._n(sr),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){let t=function(s){let o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Wt(e){let t=255&e;t===0?(this.rn(0),this.rn(255)):t===sr?(this.rn(sr),this.rn(0)):this.rn(t)}jt(e){let t=255&e;t===0?(this._n(0),this._n(255)):t===sr?(this._n(sr),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){let t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);let i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}},Fl=class{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}},Ul=class{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}},An=class{constructor(){this.un=new Ml,this.cn=new Fl(this.un),this.ln=new Ul(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}};var Sn=class n{constructor(e,t,r,i){this.Pn=e,this.Tn=t,this.In=r,this.dn=i}En(){let e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new n(this.Pn,this.Tn,this.In,r)}An(e,t,r){return{indexId:this.Pn,uid:e,arrayValue:Bo(this.In),directionalValue:Bo(this.dn),orderedDocumentKey:Bo(t),documentKey:r.path.toArray()}}Rn(e,t,r){let i=this.An(e,t,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}};function Ft(n,e){let t=n.Pn-e.Pn;return t!==0?t:(t=Hm(n.In,e.In),t!==0?t:(t=Hm(n.dn,e.dn),t!==0?t:x.comparator(n.Tn,e.Tn)))}function Hm(n,e){for(let t=0;t<n.length&&t<e.length;++t){let r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Bo(n){return Mc()?function(t){let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return r}(n):n}function Qm(n){return typeof n!="string"?n:function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(n)}var ha=class{constructor(e){this.Vn=new te((t,r)=>ge.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(let t of e.filters){let r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.fn.push(r)}}get gn(){return this.Vn.size>1}pn(e){if(q(e.collectionGroup===this.collectionId,49279),this.gn)return!1;let t=rl(e);if(t!==void 0&&!this.yn(t))return!1;let r=wn(e),i=new Set,s=0,o=0;for(;s<r.length&&this.yn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){let c=this.Vn.getIterator().getNext();if(!i.has(c.field.canonicalString())){let u=r[s];if(!this.wn(c,u)||!this.Sn(this.mn[o++],u))return!1}++s}for(;s<r.length;++s){let c=r[s];if(o>=this.mn.length||!this.Sn(this.mn[o++],c))return!1}return!0}bn(){if(this.gn)return null;let e=new te(ge.comparator),t=[];for(let r of this.fn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new mr(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new mr(r.field,0))}for(let r of this.mn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new mr(r.field,r.dir==="asc"?0:1)));return new wr(wr.UNKNOWN_ID,this.collectionId,t,Yi.empty())}yn(e){for(let t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;let r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}};function N_(n){var e,t;if(q(n instanceof Q||n instanceof ee,20012),n instanceof Q){if(n instanceof Zo){let i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Q.create(n.field,"==",s)))||[];return ee.create(i,"or")}return n}let r=n.filters.map(i=>N_(i));return ee.create(r,n.op)}function TT(n){if(n.getFilters().length===0)return[];let e=jl(N_(n));return q(O_(e),7391),Bl(e)||ql(e)?[e]:e.getFilters()}function Bl(n){return n instanceof Q}function ql(n){return n instanceof ee&&ad(n)}function O_(n){return Bl(n)||ql(n)||function(t){if(t instanceof ee&&pl(t)){for(let r of t.getFilters())if(!Bl(r)&&!ql(r))return!1;return!0}return!1}(n)}function jl(n){if(q(n instanceof Q||n instanceof ee,34018),n instanceof Q)return n;if(n.filters.length===1)return jl(n.filters[0]);let e=n.filters.map(r=>jl(r)),t=ee.create(e,n.op);return t=da(t),O_(t)?t:(q(t instanceof ee,64498),q(kr(t),40251),q(t.filters.length>1,57927),t.filters.reduce((r,i)=>hd(r,i)))}function hd(n,e){let t;return q(n instanceof Q||n instanceof ee,38388),q(e instanceof Q||e instanceof ee,25473),t=n instanceof Q?e instanceof Q?function(i,s){return ee.create([i,s],"and")}(n,e):Jm(n,e):e instanceof Q?Jm(e,n):function(i,s){if(q(i.filters.length>0&&s.filters.length>0,48005),kr(i)&&kr(s))return t_(i,s.getFilters());let o=pl(i)?i:s,c=pl(i)?s:i,u=o.filters.map(h=>hd(h,c));return ee.create(u,"or")}(n,e),da(t)}function Jm(n,e){if(kr(e))return t_(e,n.getFilters());{let t=e.filters.map(r=>hd(n,r));return ee.create(t,"or")}}function da(n){if(q(n instanceof Q||n instanceof ee,11850),n instanceof Q)return n;let e=n.getFilters();if(e.length===1)return da(e[0]);if(Zg(n))return n;let t=e.map(i=>da(i)),r=[];return t.forEach(i=>{i instanceof Q?r.push(i):i instanceof ee&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ee.create(r,n.op)}var zl=class{constructor(){this.Dn=new hs}addToCollectionParentIndex(e,t){return this.Dn.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(He.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(He.min())}updateCollectionGroup(e,t,r){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}},hs=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new te(Z.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new te(Z.comparator)).toArray()}};var Ym="IndexedDbIndexManager",Do=new Uint8Array(0),Gl=class{constructor(e,t){this.databaseId=t,this.vn=new hs,this.Cn=new et(r=>Ln(r),(r,i)=>ys(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){let r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});let s={collectionId:r,parent:De(i)};return Xm(e).put(s)}return A.resolve()}getCollectionParents(e,t){let r=[],i=IDBKeyRange.bound([t,""],[Sg(t),""],!1,!0);return Xm(e).j(i).next(s=>{for(let o of s){if(o.collectionId!==t)break;r.push(ot(o.parent))}return r})}addFieldIndex(e,t){let r=Li(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;let s=r.add(i);if(t.indexState){let o=ar(e);return s.next(c=>{o.put(Gm(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){let r=Li(e),i=ar(e),s=or(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=Li(e),r=or(e),i=ar(e);return t.Y().next(()=>r.Y()).next(()=>i.Y())}createTargetIndexes(e,t){return A.forEach(this.Fn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){let s=new ha(r).bn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){let r=or(e),i=!0,s=new Map;return A.forEach(this.Fn(t),o=>this.Mn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=K(),c=[];return A.forEach(s,(u,h)=>{D(Ym,`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(W=>`${W.fieldPath}:${W.kind}`).join(",")}`}(u)} to execute ${Ln(t)}`);let f=function(F,W){let Y=rl(W);if(Y===void 0)return null;for(let $ of ta(F,Y.fieldPath))switch($.op){case"array-contains-any":return $.value.arrayValue.values||[];case"array-contains":return[$.value]}return null}(h,u),m=function(F,W){let Y=new Map;for(let $ of wn(W))for(let I of ta(F,$.fieldPath))switch(I.op){case"==":case"in":Y.set($.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return Y.set($.fieldPath.canonicalString(),I.value),Array.from(Y.values())}return null}(h,u),_=function(F,W){let Y=[],$=!0;for(let I of wn(W)){let g=I.kind===0?Dm(F,I.fieldPath,F.startAt):km(F,I.fieldPath,F.startAt);Y.push(g.value),$&&($=g.inclusive)}return new Yt(Y,$)}(h,u),S=function(F,W){let Y=[],$=!0;for(let I of wn(W)){let g=I.kind===0?km(F,I.fieldPath,F.endAt):Dm(F,I.fieldPath,F.endAt);Y.push(g.value),$&&($=g.inclusive)}return new Yt(Y,$)}(h,u),C=this.xn(u,h,_),N=this.xn(u,h,S),k=this.On(u,h,m),G=this.Nn(u.indexId,f,C,_.inclusive,N,S.inclusive,k);return A.forEach(G,B=>r.H(B,t.limit).next(F=>{F.forEach(W=>{let Y=x.fromSegments(W.documentKey);o.has(Y)||(o=o.add(Y),c.push(Y))})}))}).next(()=>c)}return A.resolve(null)})}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=TT(ee.create(e.filters,"and")).map(r=>Tl(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}Nn(e,t,r,i,s,o,c){let u=(t!=null?t.length:1)*Math.max(r.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){let _=t?this.Bn(t[m/h]):Do,S=this.Ln(e,_,r[m%h],i),C=this.kn(e,_,s[m%h],o),N=c.map(k=>this.Ln(e,_,k,!0));f.push(...this.createRange(S,C,N))}return f}Ln(e,t,r,i){let s=new Sn(e,x.empty(),t,r);return i?s:s.En()}kn(e,t,r,i){let s=new Sn(e,x.empty(),t,r);return i?s.En():s}Mn(e,t){let r=new ha(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(let c of s)r.pn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2,i=this.Fn(t);return A.forEach(i,s=>this.Mn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let h=new te(ge.comparator),f=!1;for(let m of u.filters)for(let _ of m.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(let m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}qn(e,t){let r=new An;for(let i of wn(e)){let s=t.data.field(i.fieldPath);if(s==null)return null;let o=r.hn(i.kind);wt.Ut.bt(s,o)}return r.an()}Bn(e){let t=new An;return wt.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){let r=new An;return wt.Ut.bt(od(this.databaseId,t),r.hn(function(s){let o=wn(s);return o.length===0?0:o[o.length-1].kind}(e))),r.an()}On(e,t,r){if(r===null)return[];let i=[];i.push(new An);let s=0;for(let o of wn(e)){let c=r[s++];for(let u of i)if(this.$n(t,o.fieldPath)&&ss(c))i=this.Un(i,o,c);else{let h=u.hn(o.kind);wt.Ut.bt(c,h)}}return this.Kn(i)}xn(e,t,r){return this.On(e,t,r.position)}Kn(e){let t=[];for(let r=0;r<e.length;++r)t[r]=e[r].an();return t}Un(e,t,r){let i=[...e],s=[];for(let o of r.arrayValue.values||[])for(let c of i){let u=new An;u.seed(c.an()),wt.Ut.bt(o,u.hn(t.kind)),s.push(u)}return s}$n(e,t){return!!e.filters.find(r=>r instanceof Q&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){let r=Li(e),i=ar(e);return(t?r.j(ul,IDBKeyRange.bound(t,t)):r.j()).next(s=>{let o=[];return A.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{o.push(function(f,m){let _=m?new Yi(m.sequenceNumber,new He(Bn(m.readTime),new x(ot(m.documentKey)),m.largestBatchId)):Yi.empty(),S=f.fields.map(([C,N])=>new mr(ge.fromServerFormat(C),N));return new wr(f.indexId,f.collectionGroup,S,_)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{let s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:z(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){let i=Li(e),s=ar(e);return this.Wn(e).next(o=>i.j(ul,IDBKeyRange.bound(t,t)).next(c=>A.forEach(c,u=>s.put(Gm(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){let r=new Map;return A.forEach(t,(i,s)=>{let o=r.get(i.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),A.forEach(c,u=>this.Gn(e,i,u).next(h=>{let f=this.zn(s,u);return h.isEqual(f)?A.resolve():this.jn(e,s,u,h,f)}))))})}Jn(e,t,r,i){return or(e).put(i.An(this.uid,this.Qn(r,t.key),t.key))}Hn(e,t,r,i){return or(e).delete(i.Rn(this.uid,this.Qn(r,t.key),t.key))}Gn(e,t,r){let i=or(e),s=new te(Ft);return i.X({index:Fg,range:IDBKeyRange.only([r.indexId,this.uid,Bo(this.Qn(r,t))])},(o,c)=>{s=s.add(new Sn(r.indexId,t,Qm(c.arrayValue),Qm(c.directionalValue)))}).next(()=>s)}zn(e,t){let r=new te(Ft),i=this.qn(t,e);if(i==null)return r;let s=rl(t);if(s!=null){let o=e.data.field(s.fieldPath);if(ss(o))for(let c of o.arrayValue.values||[])r=r.add(new Sn(t.indexId,e.key,this.Bn(c),i))}else r=r.add(new Sn(t.indexId,e.key,Do,i));return r}jn(e,t,r,i,s){D(Ym,"Updating index entries for document '%s'",t.key);let o=[];return function(u,h,f,m,_){let S=u.getIterator(),C=h.getIterator(),N=ir(S),k=ir(C);for(;N||k;){let G=!1,B=!1;if(N&&k){let F=f(N,k);F<0?B=!0:F>0&&(G=!0)}else N!=null?B=!0:G=!0;G?(m(k),k=ir(C)):B?(_(N),N=ir(S)):(N=ir(S),k=ir(C))}}(i,s,Ft,c=>{o.push(this.Jn(e,t,r,c))},c=>{o.push(this.Hn(e,t,r,c))}),A.waitFor(o)}Wn(e){let t=1;return ar(e).X({index:Mg,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>Ft(o,c)).filter((o,c,u)=>!c||Ft(o,u[c-1])!==0);let i=[];i.push(e);for(let o of r){let c=Ft(o,e),u=Ft(o,t);if(c===0)i[0]=e.En();else if(c>0&&u<0)i.push(o),i.push(o.En());else if(u>0)break}i.push(t);let s=[];for(let o=0;o<i.length;o+=2){if(this.Yn(i[o],i[o+1]))return[];let c=i[o].Rn(this.uid,Do,x.empty()),u=i[o+1].Rn(this.uid,Do,x.empty());s.push(IDBKeyRange.bound(c,u))}return s}Yn(e,t){return Ft(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Zm)}getMinOffset(e,t){return A.mapArray(this.Fn(t),r=>this.Mn(e,r).next(i=>i||L(44426))).next(Zm)}};function Xm(n){return _e(n,ts)}function or(n){return _e(n,zi)}function Li(n){return _e(n,ed)}function ar(n){return _e(n,ji)}function Zm(n){q(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){let i=n[r].indexState.offset;Yh(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new He(e.readTime,e.documentKey,t)}var eg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},V_=41943040,Le=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};function x_(n,e,t){let r=n.store(Ze),i=n.store(Tr),s=[],o=IDBKeyRange.only(t.batchId),c=0,u=r.X({range:o},(f,m,_)=>(c++,_.delete()));s.push(u.next(()=>{q(c===1,47070,{batchId:t.batchId})}));let h=[];for(let f of t.mutations){let m=Vg(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return A.waitFor(s).next(()=>h)}function fa(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw L(14731);e=n.noDocument}return JSON.stringify(e).length}Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(V_,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);var pa=class n{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static yt(e,t,r,i){q(e.uid!=="",64387);let s=e.isAuthenticated()?e.uid:"";return new n(s,t,r,i)}checkEmpty(e){let t=!0,r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ut(e).X({index:Rn,range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){let s=fr(e),o=Ut(e);return o.add({}).next(c=>{q(typeof c=="number",49019);let u=new as(c,t,r,i),h=function(S,C,N){let k=N.baseMutations.map(B=>aa(S.gt,B)),G=N.mutations.map(B=>aa(S.gt,B));return{userId:C,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:k,mutations:G}}(this.serializer,this.userId,u),f=[],m=new te((_,S)=>z(_.canonicalString(),S.canonicalString()));for(let _ of i){let S=Vg(this.userId,_.key.path,c);m=m.add(_.key.path.popLast()),f.push(o.put(h)),f.push(s.put(S,IE))}return m.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Zn[c]=u.keys()}),A.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return Ut(e).get(t).next(r=>r?(q(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),bn(this.serializer,r)):null)}Xn(e,t){return this.Zn[t]?A.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){let i=r.keys();return this.Zn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]),s=null;return Ut(e).X({index:Rn,range:i},(o,c,u)=>{c.userId===this.userId&&(q(c.batchId>=r,47524,{er:r}),s=bn(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),r=kn;return Ut(e).X({index:Rn,range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,kn],[this.userId,Number.POSITIVE_INFINITY]);return Ut(e).j(Rn,t).next(r=>r.map(i=>bn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){let r=Vo(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return fr(e).X({range:i},(o,c,u)=>{let[h,f,m]=o,_=ot(f);if(h===this.userId&&t.path.isEqual(_))return Ut(e).get(m).next(S=>{if(!S)throw L(61480,{tr:o,batchId:m});q(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:m}),s.push(bn(this.serializer,S))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new te(z),i=[];return t.forEach(s=>{let o=Vo(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=fr(e).X({range:c},(h,f,m)=>{let[_,S,C]=h,N=ot(S);_===this.userId&&s.path.isEqual(N)?r=r.add(C):m.done()});i.push(u)}),A.waitFor(i).next(()=>this.nr(e,r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=Vo(this.userId,r),o=IDBKeyRange.lowerBound(s),c=new te(z);return fr(e).X({range:o},(u,h,f)=>{let[m,_,S]=u,C=ot(_);m===this.userId&&r.isPrefixOf(C)?C.length===i&&(c=c.add(S)):f.done()}).next(()=>this.nr(e,c))}nr(e,t){let r=[],i=[];return t.forEach(s=>{i.push(Ut(e).get(s).next(o=>{if(o===null)throw L(35274,{batchId:s});q(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(bn(this.serializer,o))}))}),A.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return x_(e.ce,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.rr(t.batchId)}),A.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return A.resolve();let r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return fr(e).X({range:r},(s,o,c)=>{if(s[0]===this.userId){let u=ot(s[1]);i.push(u)}else c.done()}).next(()=>{q(i.length===0,56720,{ir:i.map(s=>s.canonicalString())})})})}containsKey(e,t){return L_(e,this.userId,t)}sr(e){return M_(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:kn,lastStreamToken:""})}};function L_(n,e,t){let r=Vo(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r),o=!1;return fr(n).X({range:s,Z:!0},(c,u,h)=>{let[f,m,_]=c;f===e&&m===i&&(o=!0),h.done()}).next(()=>o)}function Ut(n){return _e(n,Ze)}function fr(n){return _e(n,Tr)}function M_(n){return _e(n,Zi)}var Fr=class n{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new n(0)}static ur(){return new n(-1)}};var $l=class{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next(t=>{let r=new Fr(t.highestTargetId);return t.highestTargetId=r.next(),this.lr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.cr(e).next(t=>j.fromTimestamp(new oe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.cr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.cr(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.lr(e,i)))}addTargetData(e,t){return this.hr(e,t).next(()=>this.cr(e).next(r=>(r.targetCount+=1,this.Pr(t,r),this.lr(e,r))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>cr(e).delete(t.targetId)).next(()=>this.cr(e)).next(r=>(q(r.targetCount>0,8065),r.targetCount-=1,this.lr(e,r)))}removeTargets(e,t,r){let i=0,s=[];return cr(e).X((o,c)=>{let u=Bi(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(e,t){return cr(e).X((r,i)=>{let s=Bi(i);t(s)})}cr(e){return tg(e).get(Ho).next(t=>(q(t!==null,2888),t))}lr(e,t){return tg(e).put(Ho,t)}hr(e,t){return cr(e).put(D_(this.serializer,t))}Pr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.cr(e).next(t=>t.targetCount)}getTargetData(e,t){let r=Ln(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]),s=null;return cr(e).X({range:i,index:Lg},(o,c,u)=>{let h=Bi(c);ys(t,h.target)&&(s=h,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){let i=[],s=qt(e);return t.forEach(o=>{let c=De(o.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,o))}),A.waitFor(i)}removeMatchingKeys(e,t,r){let i=qt(e);return A.forEach(t,s=>{let o=De(s.path);return A.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){let r=qt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){let r=IDBKeyRange.bound([t],[t+1],!1,!0),i=qt(e),s=K();return i.X({range:r,Z:!0},(o,c,u)=>{let h=ot(o[1]),f=new x(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){let r=De(t.path),i=IDBKeyRange.bound([r],[Sg(r)],!1,!0),s=0;return qt(e).X({index:Zh,Z:!0,range:i},([o,c],u,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}Et(e,t){return cr(e).get(t).next(r=>r?Bi(r):null)}};function cr(n){return _e(n,br)}function tg(n){return _e(n,Nn)}function qt(n){return _e(n,Ar)}var ng="LruGarbageCollector",F_=1048576;function rg([n,e],[t,r]){let i=z(n,t);return i===0?z(e,r):i}var Wl=class{constructor(e){this.Tr=e,this.buffer=new te(rg),this.Ir=0}dr(){return++this.Ir}Er(e){let t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();rg(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},ma=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){D(ng,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rn(t)?D(ng,"Ignoring IndexedDB error during garbage collection: ",t):await nn(t)}await this.Rr(3e5)})}},Kl=class{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return A.resolve(Ce.ue);let r=new Wl(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(eg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eg):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,o,c,u,h,f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),ur()<=H.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}};function U_(n,e){return new Kl(n,e)}var Hl=class{constructor(e,t){this.db=e,this.garbageCollector=U_(this,t)}mr(e){let t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,(r,i)=>t(i))}addReference(e,t,r){return ko(e,r)}removeReference(e,t,r){return ko(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ko(e,t)}Sr(e,t){return function(i,s){let o=!1;return M_(i).ee(c=>L_(i,c,s).next(u=>(u&&(o=!0),A.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){let r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[],s=0;return this.wr(e,(o,c)=>{if(c<=t){let u=this.Sr(e,o).next(h=>{if(!h)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,j.min()),qt(e).delete(function(m){return[0,De(m.path)]}(o))))});i.push(u)}}).next(()=>A.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ko(e,t)}wr(e,t){let r=qt(e),i,s=Ce.ue;return r.X({index:Zh},([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==Ce.ue&&t(new x(ot(i)),s),s=h,i=u):s=Ce.ue}).next(()=>{s!==Ce.ue&&t(new x(ot(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}};function ko(n,e){return qt(n).put(function(r,i){return{targetId:0,path:De(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}var ga=class{constructor(){this.changes=new et(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?A.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Ql=class{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return In(e).put(r)}removeEntry(e,t,r){return In(e).delete(function(s,o){let c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],ua(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.br(e,r)))}getEntry(e,t){let r=Ee.newInvalidDocument(t);return In(e).X({index:xo,range:IDBKeyRange.only(Mi(t))},(i,s)=>{r=this.Dr(t,s)}).next(()=>r)}vr(e,t){let r={size:0,document:Ee.newInvalidDocument(t)};return In(e).X({index:xo,range:IDBKeyRange.only(Mi(t))},(i,s)=>{r={document:this.Dr(t,s),size:fa(s)}}).next(()=>r)}getEntries(e,t){let r=je();return this.Cr(e,t,(i,s)=>{let o=this.Dr(i,s);r=r.insert(i,o)}).next(()=>r)}Fr(e,t){let r=je(),i=new ie(x.comparator);return this.Cr(e,t,(s,o)=>{let c=this.Dr(s,o);r=r.insert(s,c),i=i.insert(s,fa(o))}).next(()=>({documents:r,Mr:i}))}Cr(e,t,r){if(t.isEmpty())return A.resolve();let i=new te(og);t.forEach(u=>i=i.add(u));let s=IDBKeyRange.bound(Mi(i.first()),Mi(i.last())),o=i.getIterator(),c=o.getNext();return In(e).X({index:xo,range:s},(u,h,f)=>{let m=x.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&og(c,m)<0;)r(c,null),c=o.getNext();c&&c.isEqual(m)&&(r(c,h),c=o.hasNext()?o.getNext():null),c?f.G(Mi(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){let o=t.path,c=[o.popLast().toArray(),o.lastSegment(),ua(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return In(e).j(IDBKeyRange.bound(c,u,!0)).next(h=>{s?.incrementDocumentReadCount(h.length);let f=je();for(let m of h){let _=this.Dr(x.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);_.isFoundDocument()&&(vs(t,_)||i.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,r,i){let s=je(),o=sg(t,r),c=sg(t,He.max());return In(e).X({index:xg,range:IDBKeyRange.bound(o,c,!0)},(u,h,f)=>{let m=this.Dr(x.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new Jl(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return ig(e).get(cl).next(t=>(q(!!t,20021),t))}br(e,t){return ig(e).put(cl,t)}Dr(e,t){if(t){let r=wT(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(j.min())))return r}return Ee.newInvalidDocument(e)}};function B_(n){return new Ql(n)}var Jl=class extends ga{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new et(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){let t=[],r=0,i=new te((s,o)=>z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{let c=this.Nr.get(s);if(t.push(this.Or.removeEntry(e,s,c.readTime)),o.isValidDocument()){let u=jm(this.Or.serializer,o);i=i.add(s.path.popLast());let h=fa(u);r+=h-c.size,t.push(this.Or.addEntry(e,s,u))}else if(r-=c.size,this.trackRemovals){let u=jm(this.Or.serializer,o.convertToNoDocument(j.min()));t.push(this.Or.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Or.updateMetadata(e,r)),A.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next(r=>(this.Nr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Or.Fr(e,t).next(({documents:r,Mr:i})=>(i.forEach((s,o)=>{this.Nr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}};function ig(n){return _e(n,es)}function In(n){return _e(n,Ko)}function Mi(n){let e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function sg(n,e){let t=e.documentKey.path.toArray();return[n,ua(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function og(n,e){let t=n.path.toArray(),r=e.path.toArray(),i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=z(t[s],r[s]),i)return i;return i=z(t.length,r.length),i||(i=z(t[t.length-2],r[r.length-2]),i||z(t[t.length-1],r[r.length-1]))}var Yl=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var _a=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ki(r.mutation,i,qe.empty(),oe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,t,r=K()){let i=at();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ui();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){let r=at();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,K()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=je(),o=Wi(),c=function(){return Wi()}();return t.forEach((u,h)=>{let f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof tt)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ki(f.mutation,h,f.mutation.getFieldMask(),oe.now())):o.set(h.key,qe.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return c.set(h,new Yl(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){let r=Wi(),i=new ie((o,c)=>o-c),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(let c of o)c.keys().forEach(u=>{let h=t.get(u);if(h===null)return;let f=r.get(u)||qe.empty();f=c.applyToLocalView(h,f),r.set(u,f);let m=(i.get(c.batchId)||K()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{let o=[],c=i.getReverseIterator();for(;c.hasNext();){let u=c.getNext(),h=u.key,f=u.value,m=l_();f.forEach(_=>{if(!s.has(_)){let S=g_(t.get(_),r.get(_));S!==null&&m.set(_,S),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return x.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):HE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):A.resolve(at()),c=Ir,u=s;return o.next(h=>A.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?A.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,K())).next(f=>({batchId:c,changes:u_(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next(r=>{let i=Ui();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,o=Ui();return this.indexManager.getCollectionParents(e,s).next(c=>A.forEach(c,u=>{let h=function(m,_){return new Nr(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,h)=>{let f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ee.newInvalidDocument(f)))});let c=Ui();return o.forEach((u,h)=>{let f=s.get(u);f!==void 0&&Ki(f.mutation,h,qe.empty(),oe.now()),vs(t,h)&&(c=c.insert(u,h))}),c})}};var Xl=class{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return A.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:xe(i.createTime)}}(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:k_(i.bundledQuery),readTime:xe(i.readTime)}}(t)),A.resolve()}};var Zl=class{constructor(){this.overlays=new ie(x.comparator),this.kr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){let r=at();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),A.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),A.resolve()}getOverlaysForCollection(e,t,r){let i=at(),s=t.length+1,o=new x(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){let u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return A.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ie((h,f)=>h-f),o=this.overlays.getIterator();for(;o.hasNext();){let h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=at(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}let c=at(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return A.resolve(c)}wt(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cs(t,r));let s=this.kr.get(t);s===void 0&&(s=K(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}};var eh=class{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}};var ds=class{constructor(){this.qr=new te(fe.Qr),this.$r=new te(fe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){let r=new fe(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new fe(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){let t=new x(new Z([])),r=new fe(t,e),i=new fe(t,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let t=new x(new Z([])),r=new fe(t,e),i=new fe(t,e+1),s=K();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){let t=new fe(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},fe=class{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return x.comparator(e.key,t.key)||z(e.Hr,t.Hr)}static Ur(e,t){return z(e.Hr,t.Hr)||x.comparator(e.key,t.key)}};var th=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new te(fe.Qr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let o=new as(s,t,r,i);this.mutationQueue.push(o);for(let c of i)this.Yr=this.Yr.add(new fe(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.Xr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?kn:this.er-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new fe(t,0),i=new fe(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{let c=this.Zr(o.Hr);s.push(c)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new te(z);return t.forEach(i=>{let s=new fe(i,0),o=new fe(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],c=>{r=r.add(c.Hr)})}),A.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;x.isDocumentKey(s)||(s=s.child(""));let o=new fe(new x(s),0),c=new te(z);return this.Yr.forEachWhile(u=>{let h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.Hr)),!0)},o),A.resolve(this.ei(c))}ei(e){let t=[];return e.forEach(r=>{let i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){q(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return A.forEach(t.mutations,i=>{let s=new fe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){let r=new fe(t,0),i=this.Yr.firstAfterOrEqual(r);return A.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var nh=class{constructor(e){this.ni=e,this.docs=function(){return new ie(x.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return A.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=je();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=je(),o=t.path,c=new x(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){let{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Yh(Dg(f),r)<=0||(i.has(f.key)||vs(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,t,r,i){L(9500)}ri(e,t){return A.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new rh(this)}getSize(e){return A.resolve(this.size)}},rh=class extends ga{constructor(e){super(),this.Or=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),A.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}};var ih=class{constructor(e){this.persistence=e,this.ii=new et(t=>Ln(t),ys),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.si=0,this.oi=new ds,this.targetCount=0,this._i=Fr.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),A.resolve()}hr(e){this.ii.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this._i=new Fr(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.hr(t),A.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.ii.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){let r=this.ii.get(t)||null;return A.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),A.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),A.resolve()}getMatchingKeysForTargetId(e,t){let r=this.oi.Jr(t);return A.resolve(r)}containsKey(e,t){return A.resolve(this.oi.containsKey(t))}};var fs=class{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ce(0),this.ci=!1,this.ci=!0,this.li=new eh,this.referenceDelegate=e(this),this.hi=new ih(this),this.indexManager=new zl,this.remoteDocumentCache=function(i){return new nh(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new ca(t),this.Ti=new Xl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new th(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);let i=new sh(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return A.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}},sh=class extends Go{constructor(e){super(),this.currentSequenceNumber=e}},ya=class n{constructor(e){this.persistence=e,this.Ai=new ds,this.Ri=null}static Vi(e){return new n(e)}get mi(){if(this.Ri)return this.Ri;throw L(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),A.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),A.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.mi,r=>{let i=x.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,j.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return A.or([()=>A.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}},va=class n{constructor(e,t){this.persistence=e,this.gi=new et(r=>De(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=U_(this,t)}static Vi(e,t){return new n(e,t)}Ii(){}di(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){let t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return A.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?A.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,t).next(c=>{c||(r++,s.removeEntry(o,j.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),A.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),A.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mo(e.data.value)),t}Sr(e,t,r){return A.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.gi.get(t);return A.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var oh=class{constructor(e){this.serializer=e}q(e,t,r,i){let s=new $o("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore(_s)}(e),function(u){u.createObjectStore(Zi,{keyPath:vE}),u.createObjectStore(Ze,{keyPath:vm,autoIncrement:!0}).createIndex(Rn,Im,{unique:!0}),u.createObjectStore(Tr)}(e),ag(e),function(u){u.createObjectStore(En)}(e));let o=A.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore(Ar),u.deleteObjectStore(br),u.deleteObjectStore(Nn)}(e),ag(e)),o=o.next(()=>function(u){let h=u.store(Nn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return h.put(Ho,f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,h){return h.store(Ze).j().next(m=>{u.deleteObjectStore(Ze),u.createObjectStore(Ze,{keyPath:vm,autoIncrement:!0}).createIndex(Rn,Im,{unique:!0});let _=h.store(Ze),S=m.map(C=>_.put(C));return A.waitFor(S)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore(Sr,{keyPath:PE})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.pi(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore(es)}(e),this.yi(s)))),r<7&&i>=7&&(o=o.next(()=>this.wi(s))),r<8&&i>=8&&(o=o.next(()=>this.Si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.bi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(Ga,{keyPath:CE})})(e),function(u){u.createObjectStore($a,{keyPath:DE})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){let h=u.createObjectStore(Wa,{keyPath:ME});h.createIndex(ll,FE,{unique:!1}),h.createIndex(Ug,UE,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){let h=u.createObjectStore(Ko,{keyPath:wE});h.createIndex(xo,EE),h.createIndex(xg,TE)}(e)).next(()=>this.Di(e,s)).next(()=>e.deleteObjectStore(En))),r<14&&i>=14&&(o=o.next(()=>this.Ci(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore(ed,{keyPath:kE,autoIncrement:!0}).createIndex(ul,NE,{unique:!1}),u.createObjectStore(ji,{keyPath:OE}).createIndex(Mg,VE,{unique:!1}),u.createObjectStore(zi,{keyPath:xE}).createIndex(Fg,LE,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore(ji).clear()}).next(()=>{t.objectStore(zi).clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(td,{keyPath:BE})})(e)})),r<18&&i>=18&&Mc()&&(o=o.next(()=>{t.objectStore(ji).clear()}).next(()=>{t.objectStore(zi).clear()})),o}yi(e){let t=0;return e.store(En).X((r,i)=>{t+=fa(i)}).next(()=>{let r={byteSize:t};return e.store(es).put(cl,r)})}pi(e){let t=e.store(Zi),r=e.store(Ze);return t.j().next(i=>A.forEach(i,s=>{let o=IDBKeyRange.bound([s.userId,kn],[s.userId,s.lastAcknowledgedBatchId]);return r.j(Rn,o).next(c=>A.forEach(c,u=>{q(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});let h=bn(this.serializer,u);return x_(e,s.userId,h).next(()=>{})}))}))}wi(e){let t=e.store(Ar),r=e.store(En);return e.store(Nn).get(Ho).next(i=>{let s=[];return r.X((o,c)=>{let u=new Z(o),h=function(m){return[0,De(m)]}(u);s.push(t.get(h).next(f=>f?A.resolve():(m=>t.put({targetId:0,path:De(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>A.waitFor(s))})}Si(e,t){e.createObjectStore(ts,{keyPath:RE});let r=t.store(ts),i=new hs,s=o=>{if(i.add(o)){let c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:De(u)})}};return t.store(En).X({Z:!0},(o,c)=>{let u=new Z(o);return s(u.popLast())}).next(()=>t.store(Tr).X({Z:!0},([o,c,u],h)=>{let f=ot(c);return s(f.popLast())}))}bi(e){let t=e.store(br);return t.X((r,i)=>{let s=Bi(i),o=D_(this.serializer,s);return t.put(o)})}Di(e,t){let r=t.store(En),i=[];return r.X((s,o)=>{let c=t.store(Ko),u=function(m){return m.document?new x(Z.fromString(m.document.name).popFirst(5)):m.noDocument?x.fromSegments(m.noDocument.path):m.unknownDocument?x.fromSegments(m.unknownDocument.path):L(36783)}(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>A.waitFor(i))}Ci(e,t){let r=t.store(Ze),i=B_(this.serializer),s=new fs(ya.Vi,this.serializer.gt);return r.j().next(o=>{let c=new Map;return o.forEach(u=>{var h;let f=(h=c.get(u.userId))!==null&&h!==void 0?h:K();bn(this.serializer,u).keys().forEach(m=>f=f.add(m)),c.set(u.userId,f)}),A.forEach(c,(u,h)=>{let f=new ye(h),m=la.yt(this.serializer,f),_=s.getIndexManager(f),S=pa.yt(f,this.serializer,_,s.referenceDelegate);return new _a(i,S,m,_).recalculateAndSaveOverlaysForDocumentKeys(new ns(t,Ce.ue),u).next()})})}};function ag(n){n.createObjectStore(Ar,{keyPath:AE}).createIndex(Zh,SE,{unique:!0}),n.createObjectStore(br,{keyPath:"targetId"}).createIndex(Lg,bE,{unique:!0}),n.createObjectStore(Nn)}var Bt="IndexedDbPersistence",Gu=18e5,$u=5e3,Wu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",bT="main",ah=class n{constructor(e,t,r,i,s,o,c,u,h,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Fi=s,this.window=o,this.document=c,this.Mi=h,this.xi=f,this.Oi=m,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=_=>Promise.resolve(),!n.C())throw new V(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Hl(this,i),this.Qi=t+bT,this.serializer=new ca(u),this.$i=new Er(this.Qi,this.Oi,new oh(this.serializer)),this.li=new Ll,this.hi=new $l(this.referenceDelegate,this.serializer),this.remoteDocumentCache=B_(this.serializer),this.Ti=new xl,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&le(Bt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(P.FAILED_PRECONDITION,Wu);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.hi.getHighestSequenceNumber(e))}).then(e=>{this.ui=new Ce(e,this.Mi)}).then(()=>{this.ci=!0}).catch(e=>(this.$i&&this.$i.close(),Promise.reject(e)))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>No(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(e).next(t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Yi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(rn(e))return D(Bt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D(Bt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable(()=>this.qi(e)),this.isPrimary=e})}Ji(e){return Fi(e).get(rr).next(t=>A.resolve(this.Xi(t)))}es(e){return No(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,Gu)){this.ki=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{let r=_e(t,Sr);return r.j().next(i=>{let s=this.rs(i,Gu),o=i.filter(c=>s.indexOf(c)===-1);return A.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(let t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?A.resolve(!0):Fi(e).get(rr).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,$u)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new V(P.FAILED_PRECONDITION,Wu);return!1}}return!(!this.networkEnabled||!this.inForeground)||No(e).j().next(r=>this.rs(r,$u).find(i=>{if(this.clientId!==i.clientId){let s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&D(Bt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[_s,Sr],e=>{let t=new ns(e,Ce.ue);return this.Yi(t).next(()=>this.es(t))}),this.$i.close(),this.hs()}rs(e,t){return e.filter(r=>this.ns(r.updateTimeMs,t)&&!this._s(r.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",e=>No(e).j().next(t=>this.rs(t,Gu).map(r=>r.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return pa.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Gl(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return la.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,r){D(Bt,"Starting transaction:",e);let i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===18?zE:u===17?zg:u===16?jE:u===15?nd:u===14?jg:u===13?qg:u===12?qE:u===11?Bg:void L(60245)}(this.Oi),o;return this.$i.runTransaction(e,i,s,c=>(o=new ns(c,this.ui?this.ui.next():Ce.ue),t==="readwrite-primary"?this.Ji(o).next(u=>!!u||this.Hi(o)).next(u=>{if(!u)throw le(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new V(P.FAILED_PRECONDITION,kg);return r(o)}).next(u=>this.Zi(o).next(()=>u)):this.Ts(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ts(e){return Fi(e).get(rr).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,$u)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new V(P.FAILED_PRECONDITION,Wu)})}Zi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Fi(e).put(rr,t)}static C(){return Er.C()}Yi(e){let t=Fi(e);return t.get(rr).next(r=>this.Xi(r)?(D(Bt,"Releasing primary lease."),t.delete(rr)):A.resolve())}ns(e,t){let r=Date.now();return!(e<r-t)&&(!(e>r)||(le(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();let t=/(?:Version|Mobile)\/1[456]/;Lc()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{let r=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return D(Bt,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return le(Bt,"Failed to get zombied client id.",r),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){le("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}};function Fi(n){return _e(n,_s)}function No(n){return _e(n,Sr)}function q_(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}var ch=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=K(),i=K();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var uh=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Ia=class{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Lc()?8:Ng(ce())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.ps(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;let o=new uh;return this.ws(e,t,o).next(c=>{if(s.result=c,this.Rs)return this.Ss(e,t,o,c.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(ur()<=H.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",lr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),A.resolve()):(ur()<=H.DEBUG&&D("QueryEngine","Query:",lr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(ur()<=H.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",lr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(t))):A.resolve())}ps(e,t){if(Nm(t))return A.resolve(null);let r=Ge(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=bl(t,null,"F"),r=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let o=K(...s);return this.gs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{let h=this.bs(t,c);return this.Ds(t,h,o,u.readTime)?this.ps(e,bl(t,null,"F")):this.vs(e,h,t,u)}))})))}ys(e,t,r,i){return Nm(t)||i.isEqual(j.min())?A.resolve(null):this.gs.getDocuments(e,r).next(s=>{let o=this.bs(t,s);return this.Ds(t,o,r,i)?A.resolve(null):(ur()<=H.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),lr(t)),this.vs(e,o,t,Cg(i,Ir)).next(c=>c))})}bs(e,t){let r=new te(a_(e));return t.forEach((i,s)=>{vs(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return ur()<=H.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",lr(t)),this.gs.getDocumentsMatchingQuery(e,t,He.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}};var dd="LocalStore",AT=3e8,lh=class{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new ie(z),this.Ms=new et(s=>Ln(s),ys),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _a(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}};function j_(n,e,t,r){return new lh(n,e,t,r)}async function z_(n,e){let t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let o=[],c=[],u=K();for(let h of i){o.push(h.batchId);for(let f of h.mutations)u=u.add(f.key)}for(let h of s){c.push(h.batchId);for(let f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:c}))})})}function ST(n,e){let t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){let m=h.batch,_=m.keys(),S=A.resolve();return _.forEach(C=>{S=S.next(()=>f.getEntry(u,C)).next(N=>{let k=h.docVersions.get(C);q(k!==null,48541),N.version.compareTo(k)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=K();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function G_(n){let e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function RT(n,e){let t=U(n),r=e.snapshotVersion,i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;let c=[];e.targetChanges.forEach((f,m)=>{let _=i.get(m);if(!_)return;c.push(t.hi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.hi.addMatchingKeys(s,f.addedDocuments,m)));let S=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(me.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(m,S),function(N,k,G){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=AT?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(_,S,f)&&c.push(t.hi.updateTargetData(s,S))});let u=je(),h=K();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(PT(s,o,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!r.isEqual(j.min())){let f=t.hi.getLastRemoteSnapshotVersion(s).next(m=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return A.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.Fs=i,s))}function PT(n,e,t){let r=K(),i=K();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=je();return t.forEach((c,u)=>{let h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):D(dd,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function CT(n,e){let t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=kn),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wa(n,e){let t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):t.hi.allocateTargetId(r).next(o=>(i=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function Ur(n,e,t){let r=U(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!rn(o))throw o;D(dd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function hh(n,e,t){let r=U(n),i=j.min(),s=K();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){let m=U(u),_=m.Ms.get(f);return _!==void 0?A.resolve(m.Fs.get(_)):m.hi.getTargetData(h,f)}(r,o,Ge(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:j.min(),t?s:K())).next(c=>(K_(r,o_(e),c),{documents:c,qs:s})))}function $_(n,e){let t=U(n),r=U(t.hi),i=t.Fs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.Et(s,e).next(o=>o?o.target:null))}function W_(n,e){let t=U(n),r=t.xs.get(e)||j.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Os.getAllFromCollectionGroup(i,e,Cg(r,Ir),Number.MAX_SAFE_INTEGER)).then(i=>(K_(t,e,i),i))}function K_(n,e,t){let r=n.xs.get(e)||j.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}var H_="firestore_clients";function cg(n,e){return`${H_}_${n}_${e}`}var Q_="firestore_mutations";function ug(n,e,t){let r=`${Q_}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}var J_="firestore_targets";function Ku(n,e){return`${J_}_${n}_${e}`}var st="SharedClientState",Ea=class n{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Ks(e,t,r){let i=JSON.parse(r),s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new V(i.error.code,i.error.message))),o?new n(e,t,i.state,s):(le(st,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}},Hi=class n{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ks(e,t){let r=JSON.parse(t),i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new V(r.error.code,r.error.message))),s?new n(e,r.state,i):(le(st,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}},Ta=class n{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){let r=JSON.parse(t),i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=cd();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Og(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new n(e,s):(le(st,`Failed to parse client data for instance '${e}': ${t}`),null)}},dh=class n{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){let t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new n(t.clientId,t.onlineState):(le(st,`Failed to parse online state: ${e}`),null)}},ps=class{constructor(){this.activeTargetIds=cd()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}},Qi=class{constructor(e,t,r,i,s){this.window=e,this.Fi=t,this.persistenceKey=r,this.js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new ie(z),this.started=!1,this.Zs=[];let o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=cg(this.persistenceKey,this.js),this.eo=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new ps),this.no=new RegExp(`^${H_}_${o}_([^_]*)$`),this.ro=new RegExp(`^${Q_}_${o}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${J_}_${o}_(\\d+)$`),this.so=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.oo=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){let e=await this.syncEngine.Ps();for(let r of e){if(r===this.js)continue;let i=this.getItem(cg(this.persistenceKey,r));if(i){let s=Ta.Ks(r,i);s&&(this.Ys=this.Ys.insert(s.clientId,s))}}this._o();let t=this.storage.getItem(this.so);if(t){let r=this.ao(t);r&&this.uo(r)}for(let r of this.Zs)this.Hs(r);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,r){this.lo(e,t,r),this.ho(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){let i=this.storage.getItem(Ku(this.persistenceKey,e));if(i){let s=Hi.Ks(e,i);s&&(r=s.state)}}return t&&this.Po.Gs(e),this._o(),r}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ku(this.persistenceKey,e))}updateQueryState(e,t,r){this.To(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.ho(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return D(st,"READ",e,t),t}setItem(e,t){D(st,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){D(st,"REMOVE",e),this.storage.removeItem(e)}Hs(e){let t=e;if(t.storageArea===this.storage){if(D(st,"EVENT",t.key,t.newValue),t.key===this.Xs)return void le("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.no.test(t.key)){if(t.newValue==null){let r=this.Ao(t.key);return this.Ro(r,null)}{let r=this.Vo(t.key,t.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.ro.test(t.key)){if(t.newValue!==null){let r=this.mo(t.key,t.newValue);if(r)return this.fo(r)}}else if(this.io.test(t.key)){if(t.newValue!==null){let r=this.po(t.key,t.newValue);if(r)return this.yo(r)}}else if(t.key===this.so){if(t.newValue!==null){let r=this.ao(t.newValue);if(r)return this.uo(r)}}else if(t.key===this.eo){let r=function(s){let o=Ce.ue;if(s!=null)try{let c=JSON.parse(s);q(typeof c=="number",30636,{wo:s}),o=c}catch(c){le(st,"Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==Ce.ue&&this.sequenceNumberHandler(r)}else if(t.key===this.oo){let r=this.So(t.newValue);await Promise.all(r.map(i=>this.syncEngine.bo(i)))}}}else this.Zs.push(t)})}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,r){let i=new Ea(this.currentUser,e,t,r),s=ug(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ws())}ho(e){let t=ug(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){let t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,r){let i=Ku(this.persistenceKey,e),s=new Hi(e,t,r);this.setItem(i,s.Ws())}Eo(e){let t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){let t=this.no.exec(e);return t?t[1]:null}Vo(e,t){let r=this.Ao(e);return Ta.Ks(r,t)}mo(e,t){let r=this.ro.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Ea.Ks(new ye(s),i,t)}po(e,t){let r=this.io.exec(e),i=Number(r[1]);return Hi.Ks(i,t)}ao(e){return dh.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);D(st,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){let r=t?this.Ys.insert(e,t):this.Ys.remove(e),i=this.co(this.Ys),s=this.co(r),o=[],c=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||c.push(u)}),this.syncEngine.Co(o,c).then(()=>{this.Ys=r})}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=cd();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}},ba=class{constructor(){this.Fo=new ps,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ps,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var fh=class{xo(e){}shutdown(){}};var lg="ConnectivityMonitor",Aa=class{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){D(lg,"Network connectivity changed: AVAILABLE");for(let e of this.ko)e(0)}Lo(){D(lg,"Network connectivity changed: UNAVAILABLE");for(let e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Oo=null;function ph(){return Oo===null?Oo=function(){return 268435456+Math.round(2147483648*Math.random())}():Oo++,"0x"+Oo.toString(16)}var Hu="RestConnection",DT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},mh=class{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Yo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){let o=ph(),c=this.Go(e,t.toUriEncodedString());D(Hu,`Sending RPC '${e}' ${o}:`,c,r);let u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);let{host:h}=new URL(c),f=Dt(h);return this.jo(e,c,u,r,f).then(m=>(D(Hu,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Ht(Hu,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m})}Jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){let r=DT[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}};var gh=class{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}};var Pe="WebChannelConnection",_h=class extends mh{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){let o=ph();return new Promise((c,u)=>{let h=new Fu;h.setWithCredentials(!0),h.listenOnce(Uu.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Vi.NO_ERROR:let m=h.getResponseJson();D(Pe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case Vi.TIMEOUT:D(Pe,`RPC '${e}' ${o} timed out`),u(new V(P.DEADLINE_EXCEEDED,"Request time out"));break;case Vi.HTTP_ERROR:let _=h.getStatus();if(D(Pe,`RPC '${e}' ${o} failed with status:`,_,"response text:",h.getResponseText()),_>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);let C=S?.error;if(C&&C.status&&C.message){let N=function(G){let B=G.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN}(C.status);u(new V(N,C.message))}else u(new V(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new V(P.UNAVAILABLE,"Connection failed."));break;default:L(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{D(Pe,`RPC '${e}' ${o} completed.`)}});let f=JSON.stringify(i);D(Pe,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",f,r,15)})}P_(e,t,r){let i=ph(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ju(),c=qu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;let f=s.join("");D(Pe,`Creating RPC '${e}' stream ${i}: ${f}`,u);let m=o.createWebChannel(f,u);this.T_(m);let _=!1,S=!1,C=new gh({Ho:k=>{S?D(Pe,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(_||(D(Pe,`Opening RPC '${e}' stream ${i} transport.`),m.open(),_=!0),D(Pe,`RPC '${e}' stream ${i} sending:`,k),m.send(k))},Yo:()=>m.close()}),N=(k,G,B)=>{k.listen(G,F=>{try{B(F)}catch(W){setTimeout(()=>{throw W},0)}})};return N(m,nr.EventType.OPEN,()=>{S||(D(Pe,`RPC '${e}' stream ${i} transport opened.`),C.s_())}),N(m,nr.EventType.CLOSE,()=>{S||(S=!0,D(Pe,`RPC '${e}' stream ${i} transport closed`),C.__(),this.I_(m))}),N(m,nr.EventType.ERROR,k=>{S||(S=!0,Ht(Pe,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),C.__(new V(P.UNAVAILABLE,"The operation could not be completed")))}),N(m,nr.EventType.MESSAGE,k=>{var G;if(!S){let B=k.data[0];q(!!B,16349);let F=B,W=F?.error||((G=F[0])===null||G===void 0?void 0:G.error);if(W){D(Pe,`RPC '${e}' stream ${i} received error:`,W);let Y=W.status,$=function(v){let w=de[v];if(w!==void 0)return y_(w)}(Y),I=W.message;$===void 0&&($=P.INTERNAL,I="Unknown error status: "+Y+" with message "+W.message),S=!0,C.__(new V($,I)),m.close()}else D(Pe,`RPC '${e}' stream ${i} received:`,B),C.a_(B)}}),N(c,Bu.STAT_EVENT,k=>{k.stat===Po.PROXY?D(Pe,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Po.NOPROXY&&D(Pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}};function Y_(){return typeof window<"u"?window:null}function qo(){return typeof document<"u"?document:null}function Ya(n){return new Dl(n,!0)}var Sa=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}};var hg="PersistentStream",Ra=class{constructor(e,t,r,i,s,o,c,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Sa(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(le(t.toString()),le("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{let i=new V(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){let r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return D(hg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(D(hg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},yh=class extends Ra{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=pT(this.serializer,e),r=function(s){if(!("targetChange"in s))return j.min();let o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?xe(o.readTime):j.min()}(e);return this.listener.J_(t,r)}H_(e){let t={};t.database=Ol(this.serializer),t.addTarget=function(s,o){let c,u=o.target;if(c=ea(u)?{documents:b_(s,u)}:{query:A_(s,u).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=v_(s,o.resumeToken);let h=kl(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(j.min())>0){c.readTime=Lr(s,o.snapshotVersion.toTimestamp());let h=kl(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);let r=gT(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){let t={};t.database=Ol(this.serializer),t.removeTarget=e,this.k_(t)}},vh=class extends Ra{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let t=mT(e.writeResults,e.commitTime),r=xe(e.commitTime);return this.listener.ta(r,t)}na(){let e={};e.database=Ol(this.serializer),this.k_(e)}X_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>aa(this.serializer,r))};this.k_(t)}};var Ih=class{},wh=class extends Ih{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Nl(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(P.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Jo(e,Nl(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(P.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}},Eh=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(le(t),this._a=!1):D("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}};var qn="RemoteStore",Th=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{$n(this)&&(D(qn,"Restarting streams for network reachability change."),await async function(u){let h=U(u);h.Ia.add(4),await Is(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Xa(h)}(this))})}),this.Aa=new Eh(r,i)}};async function Xa(n){if($n(n))for(let e of n.da)await e(!0)}async function Is(n){for(let e of n.da)await e(!1)}function Za(n,e){let t=U(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),md(t)?pd(t):Wr(t).x_()&&fd(t,e))}function Br(n,e){let t=U(n),r=Wr(t);t.Ta.delete(e),r.x_()&&X_(t,e),t.Ta.size===0&&(r.x_()?r.B_():$n(t)&&t.Aa.set("Unknown"))}function fd(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Wr(n).H_(e)}function X_(n,e){n.Ra.$e(e),Wr(n).Y_(e)}function pd(n){n.Ra=new Cl({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Wr(n).start(),n.Aa.aa()}function md(n){return $n(n)&&!Wr(n).M_()&&n.Ta.size>0}function $n(n){return U(n).Ia.size===0}function Z_(n){n.Ra=void 0}async function kT(n){n.Aa.set("Online")}async function NT(n){n.Ta.forEach((e,t)=>{fd(n,e)})}async function OT(n,e){Z_(n),md(n)?(n.Aa.la(e),pd(n)):n.Aa.set("Unknown")}async function VT(n,e,t){if(n.Aa.set("Online"),e instanceof ia&&e.state===2&&e.cause)try{await async function(i,s){let o=s.cause;for(let c of s.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ta.delete(c),i.Ra.removeTarget(c))}(n,e)}catch(r){D(qn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pa(n,r)}else if(e instanceof gr?n.Ra.Ye(e):e instanceof ra?n.Ra.it(e):n.Ra.et(e),!t.isEqual(j.min()))try{let r=await G_(n.localStore);t.compareTo(r)>=0&&await function(s,o){let c=s.Ra.Pt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){let f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{let f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(me.EMPTY_BYTE_STRING,f.snapshotVersion)),X_(s,u);let m=new Mr(f.target,u,h,f.sequenceNumber);fd(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){D(qn,"Failed to raise snapshot:",r),await Pa(n,r)}}async function Pa(n,e,t){if(!rn(e))throw e;n.Ia.add(1),await Is(n),n.Aa.set("Offline"),t||(t=()=>G_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(qn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Xa(n)})}function ey(n,e){return e().catch(t=>Pa(n,t,e))}async function $r(n){let e=U(n),t=Zt(e),r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:kn;for(;xT(e);)try{let i=await CT(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,LT(e,i)}catch(i){await Pa(e,i)}ty(e)&&ny(e)}function xT(n){return $n(n)&&n.Pa.length<10}function LT(n,e){n.Pa.push(e);let t=Zt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function ty(n){return $n(n)&&!Zt(n).M_()&&n.Pa.length>0}function ny(n){Zt(n).start()}async function MT(n){Zt(n).na()}async function FT(n){let e=Zt(n);for(let t of n.Pa)e.X_(t.mutations)}async function UT(n,e,t){let r=n.Pa.shift(),i=Sl.from(r,e,t);await ey(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await $r(n)}async function BT(n,e){e&&Zt(n).Z_&&await async function(r,i){if(function(o){return aT(o)&&o!==P.ABORTED}(i.code)){let s=r.Pa.shift();Zt(r).N_(),await ey(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $r(r)}}(n,e),ty(n)&&ny(n)}async function dg(n,e){let t=U(n);t.asyncQueue.verifyOperationInProgress(),D(qn,"RemoteStore received new credentials");let r=$n(t);t.Ia.add(3),await Is(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Xa(t)}async function bh(n,e){let t=U(n);e?(t.Ia.delete(2),await Xa(t)):e||(t.Ia.add(2),await Is(t),t.Aa.set("Unknown"))}function Wr(n){return n.Va||(n.Va=function(t,r,i){let s=U(t);return s.ia(),new yh(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:kT.bind(null,n),e_:NT.bind(null,n),n_:OT.bind(null,n),J_:VT.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),md(n)?pd(n):n.Aa.set("Unknown")):(await n.Va.stop(),Z_(n))})),n.Va}function Zt(n){return n.ma||(n.ma=function(t,r,i){let s=U(t);return s.ia(),new vh(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:MT.bind(null,n),n_:BT.bind(null,n),ea:FT.bind(null,n),ta:UT.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await $r(n)):(await n.ma.stop(),n.Pa.length>0&&(D(qn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}var Ah=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let o=Date.now()+r,c=new n(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function gd(n,e){if(le("AsyncQueue",`${e}: ${n}`),rn(n))return new V(P.UNAVAILABLE,`${e}: ${n}`);throw n}var Ca=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=Ui(),this.sortedSet=new ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var Da=class{constructor(){this.fa=new ie(x.comparator)}track(e){let t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):L(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){let e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}},qr=class n{constructor(e,t,r,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){let o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new n(e,t,Ca.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var Sh=class{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}},Rh=class{constructor(){this.queries=fg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){let i=U(t),s=i.queries;i.queries=fg(),s.forEach((o,c)=>{for(let u of c.wa)u.onError(r)})})(this,new V(P.ABORTED,"Firestore shutting down"))}};function fg(){return new et(n=>s_(n),Ja)}async function qT(n,e){let t=U(n),r=3,i=e.query,s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new Sh,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){let c=gd(o,`Initialization of query '${lr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&_d(t)}async function jT(n,e){let t=U(n),r=e.query,i=3,s=t.queries.get(r);if(s){let o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function zT(n,e){let t=U(n),r=!1;for(let i of e){let s=i.query,o=t.queries.get(s);if(o){for(let c of o.wa)c.Ca(i)&&(r=!0);o.ya=i}}r&&_d(t)}function GT(n,e,t){let r=U(n),i=r.queries.get(e);if(i)for(let s of i.wa)s.onError(t);r.queries.delete(e)}function _d(n){n.Da.forEach(e=>{e.next()})}var Ph,pg;(pg=Ph||(Ph={})).Fa="default",pg.Cache="cache";var Ch=class{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new qr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;let r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;let t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ph.Cache}};var ka=class{constructor(e){this.key=e}},Na=class{constructor(e){this.key=e}},Dh=class{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=K(),this.mutatedKeys=K(),this.Xa=a_(e),this.eu=new Ca(this.Xa)}get tu(){return this.Ha}nu(e,t){let r=t?t.ru:new Da,i=t?t.eu:this.eu,s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1,u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{let _=i.get(f),S=vs(this.query,m)?m:null,C=!!_&&this.mutatedKeys.has(_.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations),k=!1;_&&S?_.data.isEqual(S.data)?C!==N&&(r.track({type:3,doc:S}),k=!0):this.iu(_,S)||(r.track({type:2,doc:S}),k=!0,(u&&this.Xa(S,u)>0||h&&this.Xa(S,h)<0)&&(c=!0)):!_&&S?(r.track({type:0,doc:S}),k=!0):_&&!S&&(r.track({type:1,doc:_}),k=!0,(u||h)&&(c=!0)),k&&(S?(o=o.add(S),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){let f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:c,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let o=e.ru.pa();o.sort((f,m)=>function(S,C){let N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{At:k})}};return N(S)-N(C)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(r),i=i!=null&&i;let c=t&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new qr(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Da,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=K(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});let t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new Na(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new ka(r))}),t}uu(e){this.Ha=e.qs,this.Za=K();let t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return qr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}},Kr="SyncEngine",kh=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Nh=class{constructor(e){this.key=e,this.lu=!1}},Oh=class{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new et(c=>s_(c),Ja),this.Tu=new Map,this.Iu=new Set,this.du=new ie(x.comparator),this.Eu=new Map,this.Au=new ds,this.Ru={},this.Vu=new Map,this.mu=Fr.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}};async function $T(n,e,t=!0){let r=ec(n),i,s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await ry(r,e,t,!0),i}async function WT(n,e){let t=ec(n);await ry(t,e,!0,!1)}async function ry(n,e,t,r){let i=await wa(n.localStore,Ge(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t),c;return r&&(c=await yd(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Za(n.remoteStore,i),c}async function yd(n,e,t,r,i){n.gu=(m,_,S)=>async function(N,k,G,B){let F=k.view.nu(G);F.Ds&&(F=await hh(N.localStore,k.query,!1).then(({documents:I})=>k.view.nu(I,F)));let W=B&&B.targetChanges.get(k.targetId),Y=B&&B.targetMismatches.get(k.targetId)!=null,$=k.view.applyChanges(F,N.isPrimaryClient,W,Y);return Vh(N,k.targetId,$._u),$.snapshot}(n,m,_,S);let s=await hh(n.localStore,e,!0),o=new Dh(e,s.qs),c=o.nu(s.documents),u=ls.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=o.applyChanges(c,n.isPrimaryClient,u);Vh(n,t,h._u);let f=new kh(e,t,o);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function KT(n,e,t){let r=U(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!Ja(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ur(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Br(r.remoteStore,i.targetId),jr(r,i.targetId)}).catch(nn)):(jr(r,i.targetId),await Ur(r.localStore,i.targetId,!0))}async function HT(n,e){let t=U(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Br(t.remoteStore,r.targetId))}async function QT(n,e,t){let r=Ed(n);try{let i=await function(o,c){let u=U(o),h=oe.now(),f=c.reduce((S,C)=>S.add(C.key),K()),m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=je(),N=K();return u.Os.getEntries(S,f).next(k=>{C=k,C.forEach((G,B)=>{B.isValidDocument()||(N=N.add(G))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(k=>{m=k;let G=[];for(let B of c){let F=oT(B,m.get(B.key).overlayedDocument);F!=null&&G.push(new tt(B.key,F,Xg(F.value.mapValue),ze.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,G,c)}).next(k=>{_=k;let G=k.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(S,k.batchId,G)})}).then(()=>({batchId:_.batchId,changes:u_(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new ie(z)),h=h.insert(c,u),o.Ru[o.currentUser.toKey()]=h}(r,i.batchId,t),await on(r,i.changes),await $r(r.remoteStore)}catch(i){let s=gd(i,"Failed to persist write");t.reject(s)}}async function iy(n,e){let t=U(n);try{let r=await RT(t.localStore,e);e.targetChanges.forEach((i,s)=>{let o=t.Eu.get(s);o&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?q(o.lu,14607):i.removedDocuments.size>0&&(q(o.lu,42227),o.lu=!1))}),await on(t,r,e)}catch(r){await nn(r)}}function mg(n,e,t){let r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Pu.forEach((s,o)=>{let c=o.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){let u=U(o);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(let _ of m.wa)_.va(c)&&(h=!0)}),h&&_d(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JT(n,e,t){let r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Eu.get(e),s=i&&i.key;if(s){let o=new ie(x.comparator);o=o.insert(s,Ee.newNoDocument(s,j.min()));let c=K().add(s),u=new us(j.min(),new Map,new ie(z),o,c);await iy(r,u),r.du=r.du.remove(s),r.Eu.delete(e),wd(r)}else await Ur(r.localStore,e,!1).then(()=>jr(r,e,t)).catch(nn)}async function YT(n,e){let t=U(n),r=e.batch.batchId;try{let i=await ST(t.localStore,e);Id(t,r,null),vd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await on(t,i)}catch(i){await nn(i)}}async function XT(n,e,t){let r=U(n);try{let i=await function(o,c){let u=U(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(q(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Id(r,e,t),vd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await on(r,i)}catch(i){await nn(i)}}function vd(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function Id(n,e,t){let r=U(n),i=r.Ru[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function jr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||sy(n,r)})}function sy(n,e){n.Iu.delete(e.path.canonicalString());let t=n.du.get(e);t!==null&&(Br(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),wd(n))}function Vh(n,e,t){for(let r of t)r instanceof ka?(n.Au.addReference(r.key,e),ZT(n,r)):r instanceof Na?(D(Kr,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||sy(n,r.key)):L(19791,{yu:r})}function ZT(n,e){let t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(D(Kr,"New document in limbo: "+t),n.Iu.add(r),wd(n))}function wd(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){let e=n.Iu.values().next().value;n.Iu.delete(e);let t=new x(Z.fromString(e)),r=n.mu.next();n.Eu.set(r,new Nh(t)),n.du=n.du.insert(t,r),Za(n.remoteStore,new Mr(Ge(Qa(t.path)),r,"TargetPurposeLimboResolution",Ce.ue))}}async function on(n,e,t){let r=U(n),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((c,u)=>{o.push(r.gu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){let m=h?!h.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);let m=ch.Es(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,h){let f=U(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>A.forEach(h,_=>A.forEach(_.Is,S=>f.persistence.referenceDelegate.addReference(m,_.targetId,S)).next(()=>A.forEach(_.ds,S=>f.persistence.referenceDelegate.removeReference(m,_.targetId,S)))))}catch(m){if(!rn(m))throw m;D(dd,"Failed to update sequence numbers: "+m)}for(let m of h){let _=m.targetId;if(!m.fromCache){let S=f.Fs.get(_),C=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(_,N)}}}(r.localStore,s))}async function eb(n,e){let t=U(n);if(!t.currentUser.isEqual(e)){D(Kr,"User change. New user:",e.toKey());let r=await z_(t.localStore,e);t.currentUser=e,function(s,o){s.Vu.forEach(c=>{c.forEach(u=>{u.reject(new V(P.CANCELLED,o))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await on(t,r.Bs)}}function tb(n,e){let t=U(n),r=t.Eu.get(e);if(r&&r.lu)return K().add(r.key);{let i=K(),s=t.Tu.get(e);if(!s)return i;for(let o of s){let c=t.Pu.get(o);i=i.unionWith(c.view.tu)}return i}}async function nb(n,e){let t=U(n),r=await hh(t.localStore,e.query,!0),i=e.view.uu(r);return t.isPrimaryClient&&Vh(t,e.targetId,i._u),i}async function rb(n,e){let t=U(n);return W_(t.localStore,e).then(r=>on(t,r))}async function ib(n,e,t,r){let i=U(n),s=await function(c,u){let h=U(c),f=U(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Xn(m,u).next(_=>_?h.localDocuments.getDocuments(m,_):A.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await $r(i.remoteStore):t==="acknowledged"||t==="rejected"?(Id(i,e,r||null),vd(i,e),function(c,u){U(U(c).mutationQueue).rr(u)}(i.localStore,e)):L(6720,"Unknown batchState",{wu:t}),await on(i,s)):D(Kr,"Cannot apply mutation batch with id: "+e)}async function sb(n,e){let t=U(n);if(ec(t),Ed(t),e===!0&&t.fu!==!0){let r=t.sharedClientState.getAllActiveQueryTargets(),i=await gg(t,r.toArray());t.fu=!0,await bh(t.remoteStore,!0);for(let s of i)Za(t.remoteStore,s)}else if(e===!1&&t.fu!==!1){let r=[],i=Promise.resolve();t.Tu.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(jr(t,o),Ur(t.localStore,o,!0))),Br(t.remoteStore,o)}),await i,await gg(t,r),function(o){let c=U(o);c.Eu.forEach((u,h)=>{Br(c.remoteStore,h)}),c.Au.jr(),c.Eu=new Map,c.du=new ie(x.comparator)}(t),t.fu=!1,await bh(t.remoteStore,!1)}}async function gg(n,e,t){let r=U(n),i=[],s=[];for(let o of e){let c,u=r.Tu.get(o);if(u&&u.length!==0){c=await wa(r.localStore,Ge(u[0]));for(let h of u){let f=r.Pu.get(h),m=await nb(r,f);m.snapshot&&s.push(m.snapshot)}}else{let h=await $_(r.localStore,o);c=await wa(r.localStore,h),await yd(r,oy(h),o,!1,c.resumeToken)}i.push(c)}return r.hu.J_(s),i}function oy(n){return i_(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function ob(n){return function(t){return U(U(t).persistence).Ps()}(U(n).localStore)}async function ab(n,e,t,r){let i=U(n);if(i.fu)return void D(Kr,"Ignoring unexpected query state notification.");let s=i.Tu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{let o=await W_(i.localStore,o_(s[0])),c=us.createSynthesizedRemoteEventForCurrentChange(e,t==="current",me.EMPTY_BYTE_STRING);await on(i,o,c);break}case"rejected":await Ur(i.localStore,e,!0),jr(i,e,r);break;default:L(64155,t)}}async function cb(n,e,t){let r=ec(n);if(r.fu){for(let i of e){if(r.Tu.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){D(Kr,"Adding an already active target "+i);continue}let s=await $_(r.localStore,i),o=await wa(r.localStore,s);await yd(r,oy(s),o.targetId,!1,o.resumeToken),Za(r.remoteStore,o)}for(let i of t)r.Tu.has(i)&&await Ur(r.localStore,i,!1).then(()=>{Br(r.remoteStore,i),jr(r,i)}).catch(nn)}}function ec(n){let e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=iy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JT.bind(null,e),e.hu.J_=zT.bind(null,e.eventManager),e.hu.pu=GT.bind(null,e.eventManager),e}function Ed(n){let e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XT.bind(null,e),e}var jn=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ya(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return j_(this.persistence,new Ia,e.initialUser,this.serializer)}Du(e){return new fs(ya.Vi,this.serializer)}bu(e){return new ba}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};jn.provider={build:()=>new jn};var xh=class extends jn{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){q(this.persistence.referenceDelegate instanceof va,46915);let r=this.persistence.referenceDelegate.garbageCollector;return new ma(r,e.asyncQueue,t)}Du(e){let t=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new fs(r=>va.Vi(r,t),this.serializer)}},Oa=class extends jn{constructor(e,t,r){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await Ed(this.Mu.syncEngine),await $r(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return j_(this.persistence,new Ia,e.initialUser,this.serializer)}Cu(e,t){let r=this.persistence.referenceDelegate.garbageCollector;return new ma(r,e.asyncQueue,t)}Fu(e,t){let r=new al(t,this.persistence);return new ol(e.asyncQueue,r)}Du(e){let t=q_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new ah(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Y_(),qo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new ba}},Lh=class extends Oa{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.Mu.syncEngine;this.sharedClientState instanceof Qi&&(this.sharedClientState.syncEngine={Do:ib.bind(null,t),vo:ab.bind(null,t),Co:cb.bind(null,t),Ps:ob.bind(null,t),bo:rb.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji(async r=>{await sb(this.Mu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}bu(e){let t=Y_();if(!Qi.C(t))throw new V(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let r=q_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Qi(t,e.asyncQueue,r,e.clientId,e.initialUser)}},zn=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eb.bind(null,this.syncEngine),await bh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Rh}()}createDatastore(e){let t=Ya(e.databaseInfo.databaseId),r=function(s){return new _h(s)}(e.databaseInfo);return function(s,o,c,u){return new wh(s,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new Th(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>mg(this.syncEngine,t,0),function(){return Aa.C()?new Aa:new fh}())}createSyncEngine(e,t){return function(i,s,o,c,u,h,f){let m=new Oh(i,s,o,c,u,h);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=U(i);D(qn,"RemoteStore shutting down."),s.Ia.add(5),await Is(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};zn.provider={build:()=>new zn};var Mh=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):le("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var en="FirestoreClient",Fh=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ye.UNAUTHENTICATED,this.clientId=Ji.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{D(en,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(D(en,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=gd(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Qu(n,e){n.asyncQueue.verifyOperationInProgress(),D(en,"Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await z_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{Ht("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{D("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Ht("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e}async function _g(n,e){n.asyncQueue.verifyOperationInProgress();let t=await ub(n);D(en,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>dg(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>dg(e.remoteStore,i)),n._onlineComponents=e}async function ub(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(en,"Using user provided OfflineComponentProvider");try{await Qu(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ht("Error using user provided cache. Falling back to memory cache: "+t),await Qu(n,new jn)}}else D(en,"Using default OfflineComponentProvider"),await Qu(n,new xh(void 0));return n._offlineComponents}async function ay(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(en,"Using user provided OnlineComponentProvider"),await _g(n,n._uninitializedComponentsProvider._online)):(D(en,"Using default OnlineComponentProvider"),await _g(n,new zn))),n._onlineComponents}function lb(n){return ay(n).then(e=>e.syncEngine)}async function yg(n){let e=await ay(n),t=e.eventManager;return t.onListen=$T.bind(null,e.syncEngine),t.onUnlisten=KT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=WT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=HT.bind(null,e.syncEngine),t}function cy(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var vg=new Map;var hb="firestore.googleapis.com",Ig=!0,Va=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hb,this.ssl=Ig}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ig;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=V_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<F_)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_E("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},ms=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Va({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Va(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Yu;switch(r.type){case"firstParty":return new el(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=vg.get(t);r&&(D("ComponentProvider","Removing Datastore"),vg.delete(t),r.terminate())}(this),Promise.resolve()}};var xa=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Te=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}toJSON(){return{type:n._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(gs(t,n._jsonSchema))return new n(e,r||null,new x(Z.fromString(t.referencePath)))}};Te._jsonSchemaVersion="firestore/documentReference/1.0",Te._jsonSchema={type:pe("string",Te._jsonSchemaVersion),referencePath:pe("string")};var Gt=class n extends xa{constructor(e,t,r){super(e,t,Qa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new x(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function tc(n,e,...t){if(n=ue(n),Rg("collection","path",e),n instanceof ms){let r=Z.fromString(e,...t);return pm(r),new Gt(n,null,r)}{if(!(n instanceof Te||n instanceof Gt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(Z.fromString(e,...t));return pm(r),new Gt(n.firestore,null,r)}}function Me(n,e,...t){if(n=ue(n),arguments.length===1&&(e=Ji.newId()),Rg("doc","path",e),n instanceof ms){let r=Z.fromString(e,...t);return fm(r),new Te(n,null,new x(r))}{if(!(n instanceof Te||n instanceof Gt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(Z.fromString(e,...t));return fm(r),new Te(n.firestore,n instanceof Gt?n.converter:null,new x(r))}}var wg="AsyncQueue",La=class{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Sa(this,"async_queue_retry"),this.oc=()=>{let r=qo();r&&D(wg,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;let t=qo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let t=qo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let t=new ct;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!rn(e))throw e;D(wg,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,le("INTERNAL UNHANDLED ERROR: ",Eg(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);let i=Ah.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&L(47125,{hc:Eg(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let t=this.ec.indexOf(e);this.ec.splice(t,1)}};function Eg(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}function Tg(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var tn=class extends ms{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new La,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new La(e),this._firestoreClient=void 0,await e}}};function Td(n,e,t){t||(t=Yo);let r=yi(n,"firestore");if(r.isInitialized(t)){let i=r.getImmediate({identifier:t}),s=r.getOptions(t);if($e(s,e))return i;throw new V(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new V(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<F_)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Dt(e.host)&&qs(e.host),r.initialize({options:e,instanceIdentifier:t})}function uy(n){if(n._terminated)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||db(n),n._firestoreClient}function db(n){var e,t,r;let i=n._freezeSettings(),s=function(c,u,h,f){return new hl(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,cy(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Fh(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){let u=c?._online.build();return{_offline:c?._offline.build(u),_online:u}}(n._componentsProvider))}var $t=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(me.fromBase64String(e))}catch(t){throw new V(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gs(e,n._jsonSchema))return n.fromBase64String(e.bytes)}};$t._jsonSchemaVersion="firestore/bytes/1.0",$t._jsonSchema={type:pe("string",$t._jsonSchemaVersion),bytes:pe("string")};var zr=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var Gn=class{constructor(e){this._methodName=e}};var Wt=class n{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:n._jsonSchemaVersion}}static fromJSON(e){if(gs(e,n._jsonSchema))return new n(e.latitude,e.longitude)}};Wt._jsonSchemaVersion="firestore/geoPoint/1.0",Wt._jsonSchema={type:pe("string",Wt._jsonSchemaVersion),latitude:pe("number"),longitude:pe("number")};var Kt=class n{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gs(e,n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new n(e.vectorValues);throw new V(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};Kt._jsonSchemaVersion="firestore/vectorValue/1.0",Kt._jsonSchema={type:pe("string",Kt._jsonSchemaVersion),vectorValues:pe("object")};var fb=/^__.*__$/,Uh=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new tt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xt(e,this.data,t,this.fieldTransforms)}},Ma=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new tt(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function ly(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ec:n})}}var Fa=class n{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ba(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(ly(this.Ec)&&fb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}},Bh=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ya(e)}Dc(e,t,r,i=!1){return new Fa({Ec:e,methodName:t,bc:r,path:ge.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function hy(n){let e=n._freezeSettings(),t=Ya(n._databaseId);return new Bh(n._databaseId,!!e.ignoreUndefinedProperties,t)}function pb(n,e,t,r,i,s={}){let o=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);bd("Data must be an object, but it was:",o,r);let c=fy(r,o),u,h;if(s.merge)u=new qe(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){let f=[];for(let m of s.mergeFields){let _=zh(e,m,t);if(!o.contains(_))throw new V(P.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);my(f,_)||f.push(_)}u=new qe(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new Uh(new Ve(c),u,h)}var Ua=class n extends Gn{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function dy(n,e,t){return new Fa({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}var qh=class n extends Gn{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){let t=dy(this,e,!0),r=this.vc.map(s=>Hr(s,t)),i=new bt(r);return new os(e.path,i)}isEqual(e){return e instanceof n&&$e(this.vc,e.vc)}},jh=class n extends Gn{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){let t=dy(this,e,!0),r=this.vc.map(s=>Hr(s,t)),i=new At(r);return new os(e.path,i)}isEqual(e){return e instanceof n&&$e(this.vc,e.vc)}};function mb(n,e,t,r){let i=n.Dc(1,e,t);bd("Data must be an object, but it was:",i,r);let s=[],o=Ve.empty();sn(r,(u,h)=>{let f=Ad(e,u,t);h=ue(h);let m=i.gc(f);if(h instanceof Ua)s.push(f);else{let _=Hr(h,m);_!=null&&(s.push(f),o.set(f,_))}});let c=new qe(s);return new Ma(o,c,i.fieldTransforms)}function gb(n,e,t,r,i,s){let o=n.Dc(1,e,t),c=[zh(e,r,t)],u=[i];if(s.length%2!=0)throw new V(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)c.push(zh(e,s[_])),u.push(s[_+1]);let h=[],f=Ve.empty();for(let _=c.length-1;_>=0;--_)if(!my(h,c[_])){let S=c[_],C=u[_];C=ue(C);let N=o.gc(S);if(C instanceof Ua)h.push(S);else{let k=Hr(C,N);k!=null&&(h.push(S),f.set(S,k))}}let m=new qe(h);return new Ma(f,m,o.fieldTransforms)}function Hr(n,e){if(py(n=ue(n)))return bd("Unsupported field value:",e,n),fy(n,e);if(n instanceof Gn)return function(r,i){if(!ly(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){let s=[],o=0;for(let c of r){let u=Hr(c,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=oe.fromDate(r);return{timestampValue:Lr(i.serializer,s)}}if(r instanceof oe){let s=new oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lr(i.serializer,s)}}if(r instanceof Wt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $t)return{bytesValue:v_(i.serializer,r._byteString)};if(r instanceof Te){let s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ld(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Kt)return function(o,c){return{mapValue:{fields:{[id]:{stringValue:sd},[Pr]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return ud(c.serializer,h)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${Jh(r)}`)}(n,e)}function fy(n,e){let t={};return Gg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sn(n,(r,i)=>{let s=Hr(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function py(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof oe||n instanceof Wt||n instanceof $t||n instanceof Te||n instanceof Gn||n instanceof Kt)}function bd(n,e,t){if(!py(t)||!Pg(t)){let r=Jh(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function zh(n,e,t){if((e=ue(e))instanceof zr)return e._internalPath;if(typeof e=="string")return Ad(n,e);throw Ba("Field path arguments must be of type string or ",n,!1,void 0,t)}var _b=new RegExp("[~\\*/\\[\\]]");function Ad(n,e,t){if(e.search(_b)>=0)throw Ba(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new zr(...e.split("."))._internalPath}catch{throw Ba(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ba(n,e,t,r,i){let s=r&&!r.isEmpty(),o=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new V(P.INVALID_ARGUMENT,c+n+u)}function my(n,e){return n.some(t=>t.isEqual(e))}var qa=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Gh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(gy("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Gh=class extends qa{data(){return super.data()}};function gy(n,e){return typeof e=="string"?Ad(n,e):e instanceof zr?e._internalPath:e._delegate._internalPath}function yb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var $h=class{convertValue(e,t="none"){switch(Qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return sn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Pr].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>se(o.doubleValue));return new Kt(s)}convertGeoPoint(e){return new Wt(se(e.latitude),se(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Ka(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(rs(e));default:return null}}convertTimestamp(e){let t=Et(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=Z.fromString(e);q(C_(r),9688,{name:e});let i=new Rr(r.get(1),r.get(3)),s=new x(r.popFirst(5));return i.isEqual(t)||le(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function vb(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var Cn=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Vn=class n extends qa{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new _r(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(gy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};Vn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vn._jsonSchema={type:pe("string",Vn._jsonSchemaVersion),bundleSource:pe("string","DocumentSnapshot"),bundleName:pe("string"),bundle:pe("string")};var _r=class extends Vn{data(e={}){return super.data(e)}},yr=class n{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Cn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new _r(this._firestore,this._userDataWriter,r.key,r,new Cn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{let u=new _r(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Cn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{let u=new _r(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Cn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:Ib(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ji.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function Ib(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}yr._jsonSchemaVersion="firestore/querySnapshot/1.0",yr._jsonSchema={type:pe("string",yr._jsonSchemaVersion),bundleSource:pe("string","QuerySnapshot"),bundleName:pe("string"),bundle:pe("string")};var ja=class extends $h{constructor(e){super(),this.firestore=e}convertBytes(e){return new $t(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,t)}};function Wn(n,e,t){n=zt(n,Te);let r=zt(n.firestore,tn),i=vb(n.converter,e,t);return Rd(r,[pb(hy(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ze.none())])}function Sd(n,e,t,...r){n=zt(n,Te);let i=zt(n.firestore,tn),s=hy(i),o;return o=typeof(e=ue(e))=="string"||e instanceof zr?gb(s,"updateDoc",n._key,e,t,r):mb(s,"updateDoc",n._key,e),Rd(i,[o.toMutation(n._key,ze.exists(!0))])}function nc(n){return Rd(zt(n.firestore,tn),[new xr(n._key,ze.none())])}function Qr(n,...e){var t,r,i;n=ue(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Tg(e[o])||(s=e[o++]);let c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Tg(e[o])){let m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(n instanceof Te)h=zt(n.firestore,tn),f=Qa(n._key.path),u={next:m=>{e[o]&&e[o](wb(h,n,m))},error:e[o+1],complete:e[o+2]};else{let m=zt(n,xa);h=zt(m.firestore,tn),f=m._query;let _=new ja(h);u={next:S=>{e[o]&&e[o](new yr(h,_,m,S))},error:e[o+1],complete:e[o+2]},yb(n._query)}return function(_,S,C,N){let k=new Mh(N),G=new Ch(S,k,C);return _.asyncQueue.enqueueAndForget(async()=>qT(await yg(_),G)),()=>{k.Ou(),_.asyncQueue.enqueueAndForget(async()=>jT(await yg(_),G))}}(uy(h),f,c,u)}function Rd(n,e){return function(r,i){let s=new ct;return r.asyncQueue.enqueueAndForget(async()=>QT(await lb(r),i,s)),s.promise}(uy(n),e)}function wb(n,e,t){let r=t.docs.get(e._key),i=new ja(n);return new Vn(n,i,e._key,r,new Cn(t.hasPendingWrites,t.fromCache),e.converter)}var Wh=class{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Eb(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}};function _y(n){return new Wh(n)}var Kh=class{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=zn.provider,this._offlineComponentProvider={build:t=>new Oa(t,e?.cacheSizeBytes,this.forceOwnership)}}},Hh=class{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=zn.provider,this._offlineComponentProvider={build:t=>new Lh(t,e?.cacheSizeBytes)}}};function Eb(n){return new Kh(n?.forceOwnership)}function yy(){return new Hh}function vy(...n){return new qh("arrayUnion",n)}function Iy(...n){return new jh("arrayRemove",n)}(function(e,t=!0){(function(i){Gr=i})(Vt),Ot(new We("firestore",(r,{instanceIdentifier:i,options:s})=>{let o=r.getProvider("app").getImmediate(),c=new tn(new Xu(r.getProvider("auth-internal")),new tl(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new V(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Je(um,lm,e),Je(um,lm,"esm2017")})();var Tb={apiKey:"AIzaSyDWSjTKSddpftnM42BgH8RPOY8Pp9SVsuM",authDomain:"flux-joerg.firebaseapp.com",projectId:"flux-joerg",storageBucket:"flux-joerg.firebasestorage.app",messagingSenderId:"503818825793",appId:"1:503818825793:web:7ef6c4acc7f2f00d69d6c0"},Pd=Xc(Tb),Jr=Lu(Pd),ve;try{ve=Td(Pd,{localCache:_y({tabManager:yy()})})}catch{ve=Td(Pd,{})}window.FBX={onUser:n=>ku(Jr,n),google:()=>xu(Jr,new yn),login:(n,e)=>Du(Jr,n,e),register:(n,e)=>Cu(Jr,n,e),reset:n=>Pu(Jr,n),logout:()=>Nu(Jr),watchMain:(n,e,t)=>Qr(Me(ve,"users",n,"data","main"),r=>e(r.exists()?r.data():null,r.metadata),t),putMain:(n,e)=>Wn(Me(ve,"users",n,"data","main"),e),watchImg:(n,e,t)=>Qr(tc(ve,"users",n,"img"),r=>e(r.docs.map(i=>({id:i.id,d:i.data().d})),r.metadata),t),putImg:(n,e,t)=>Wn(Me(ve,"users",n,"img",e),{d:t}),delImg:(n,e)=>nc(Me(ve,"users",n,"img",e)),watchCol:(n,e,t,r)=>Qr(tc(ve,"users",n,e),i=>t(i.docs.map(s=>({id:s.id,data:s.data()})),i.metadata),r),putDoc:(n,e,t,r)=>Wn(Me(ve,"users",n,e,t),r),delDocU:(n,e,t)=>nc(Me(ve,"users",n,e,t)),createGroup:(n,e)=>Wn(Me(ve,"groups",n),e),putGroup:(n,e)=>Wn(Me(ve,"groups",n),e,{merge:!0}),joinGroup:(n,e)=>Sd(Me(ve,"groups",n),{members:vy(e)}),leaveGroup:(n,e)=>Sd(Me(ve,"groups",n),{members:Iy(e)}),watchGroup:(n,e,t)=>Qr(Me(ve,"groups",n),r=>e(r.exists()?r.data():null,r.metadata),t),watchItems:(n,e,t)=>Qr(tc(ve,"groups",n,"items"),r=>e(r.docChanges().map(i=>({type:i.type,id:i.doc.id,data:i.doc.data()})),r.metadata),t),putItem:(n,e,t)=>Wn(Me(ve,"groups",n,"items",e),t),delItem:(n,e)=>nc(Me(ve,"groups",n,"items",e))};window.dispatchEvent(new Event("fbx-ready"));})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law | agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
