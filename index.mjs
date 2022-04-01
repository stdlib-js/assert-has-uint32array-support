// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint32-max@esm/index.mjs";var r="function"==typeof Uint32Array?Uint32Array:null,s=t,i=n,e=r;var a=function(){var t,n;if("function"!=typeof e)return!1;try{n=new e(n=[1,3.14,-3.14,i+1,i+2]),t=s(n)&&1===n[0]&&3===n[1]&&n[2]===i-2&&0===n[3]&&1===n[4]}catch(n){t=!1}return t};export{a as default};
//# sourceMappingURL=index.mjs.map
