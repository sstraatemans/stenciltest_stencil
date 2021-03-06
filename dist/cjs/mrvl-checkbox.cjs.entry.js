'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7ad7da1b.js');

const MrvlCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  // renderInputOutsideShadowRoot(container, name, value) {
  //   let input = container.querySelector('input.hidden-input');
  //   if (!input) {
  //     input = container.ownerDocument.createElement('input');
  //     input.type = 'hidden';
  //     input.classList.add('hidden-input');
  //     container.appendChild(input);
  //   }
  //   input.name = name;
  //   input.value = value || '';
  // }
  render() {
    const { value, name } = this;
    //this.renderInputOutsideShadowRoot(el, name, value);
    return (index.h(index.Host, null, index.h("div", null, index.h("label", { htmlFor: this.name }, this.label), index.h("input", { type: "checkbox", name: name, id: name, checked: !!value }))));
  }
  get el() { return index.getElement(this); }
};

exports.mrvl_checkbox = MrvlCheckbox;
