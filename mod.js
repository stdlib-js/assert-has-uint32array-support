// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var a,e,l,y,c;if(null==t)return r.call(t);e=t[o],c=o,a=null!=(y=t)&&n.call(y,c);try{t[o]=void 0}catch(n){return r.call(t)}return l=r.call(t),a?t[o]=e:delete t[o],l}:function(t){return r.call(t)},e="function"==typeof Uint32Array;var l="function"==typeof Uint32Array?Uint32Array:null;function y(){var t,r,n;if("function"!=typeof l)return!1;try{r=new l(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(e&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}export{y as default};
//# sourceMappingURL=mod.js.map
