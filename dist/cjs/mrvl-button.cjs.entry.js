'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eac7f8d8.js');

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const MrvlButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("button", null, "test", this.getText());
  }
};

exports.mrvl_button = MrvlButton;
