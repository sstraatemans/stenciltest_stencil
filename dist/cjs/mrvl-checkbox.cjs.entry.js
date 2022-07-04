'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eac7f8d8.js');

const MrvlCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { value, name } = this;
    return (index.h("div", null, index.h("label", { htmlFor: this.name }, this.label), index.h("input", { type: "checkbox", name: name, id: name, checked: !!value })));
  }
};

exports.mrvl_checkbox = MrvlCheckbox;
