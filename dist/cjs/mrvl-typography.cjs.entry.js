'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7ad7da1b.js');

const mrvlTypographyCss = ":host{--font-family:'Lato', sans-serif;--primary-font:#00a6c0}.wrapper{font-family:var(--font-family);font-size:24px;background-color:var(--background);border-radius:20px}";

const MrvlTypography = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("span", { class: "wrapper" }, index.h("slot", null)));
  }
};
MrvlTypography.style = mrvlTypographyCss;

exports.mrvl_typography = MrvlTypography;
