"use strict";var i=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var u=i(function(A,n){
var y=typeof Uint32Array=="function"?Uint32Array:null;n.exports=y
});var p=i(function(U,o){
var c=require('@stdlib/assert-is-uint32array/dist'),e=require('@stdlib/constants-uint32-max/dist'),s=u();function f(){var t,r;if(typeof s!="function")return!1;try{r=[1,3.14,-3.14,e+1,e+2],r=new s(r),t=c(r)&&r[0]===1&&r[1]===3&&r[2]===e-2&&r[3]===0&&r[4]===1}catch(a){t=!1}return t}o.exports=f
});var l=p();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
