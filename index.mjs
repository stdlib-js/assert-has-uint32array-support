// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint32-max@v0.2.2-esm/index.mjs";var r="function"==typeof Uint32Array?Uint32Array:null;function s(){var s,i;if("function"!=typeof r)return!1;try{i=new r(i=[1,3.14,-3.14,n+1,n+2]),s=t(i)&&1===i[0]&&3===i[1]&&i[2]===n-2&&0===i[3]&&1===i[4]}catch(t){s=!1}return s}export{s as default};
//# sourceMappingURL=index.mjs.map
