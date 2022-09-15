'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c240034d.js');

const MrvlCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { value, name, label } = this;
    return (index.h(index.Host, null, index.h("div", null, index.h("label", { htmlFor: name }, label), index.h("input", { type: "checkbox", name: name, id: name, checked: !!value }))));
  }
};

exports.mrvl_checkbox = MrvlCheckbox;
