import{r,h as n,H as t}from"./p-765b05aa.js";var i,o=(function(r){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var n={}.hasOwnProperty;function t(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var e=typeof o;if("string"===e||"number"===e)r.push(o);else if(Array.isArray(o)){if(o.length){var a=t.apply(null,o);a&&r.push(a)}}else if("object"===e)if(o.toString===Object.prototype.toString)for(var s in o)n.call(o,s)&&o[s]&&r.push(s);else r.push(o.toString())}}return r.join(" ")}r.exports?(t.default=t,r.exports=t):window.classNames=t}()}(i={path:undefined,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),i.exports);const e=class{constructor(n){r(this,n),this.size="medium"}render(){return n(t,null,n("button",{class:o("button",`size-${this.size}`)},n("slot",null)))}};e.style=":host{--font-family:'Lato', sans-serif;--primary:#007f93;--white:white}.button{font-family:var(--font-family);font-size:16px;line-height:24px;background-color:var(--primary);color:var(--white);padding:8px 16px;border:0;border-radius:100px}.size-small{padding:4px 12px}.size-large{padding:12px 24px}";export{e as mrvl_button}