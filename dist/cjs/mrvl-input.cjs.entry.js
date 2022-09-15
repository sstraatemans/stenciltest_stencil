'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c240034d.js');

const mrvlInputCss = ":host{--font-family:'Lato', sans-serif;--primary:#007f93;--primary-hover:#00a6c0;--primary-active:#005765;--white:white}";

const MrvlInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { value, name, label } = this;
    return (index.h(index.Host, null, index.h("div", null, index.h("label", { htmlFor: name }, label), index.h("input", { type: "text", name: name, id: name, value: value }))));
  }
};
MrvlInput.style = mrvlInputCss;

exports.mrvl_input = MrvlInput;
