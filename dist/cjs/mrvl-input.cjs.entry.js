'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bdd72441.js');

const MrvlInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mrvlInput = index.createEvent(this, "mrvlInput", 7);
  }
  onInputChangeValue(event) {
    this.value = event.target.value;
    console.log('value', event.target.name, event.target.value);
    //console.log('form', this._internals);
    this.mrvlInput.emit(event);
  }
  renderInputOutsideShadowRoot(container, name, value) {
    let input = container.querySelector('input.hidden-input');
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('hidden-input');
      container.appendChild(input);
    }
    input.name = name;
    input.value = value || '';
  }
  render() {
    const { el, value, name } = this;
    this.renderInputOutsideShadowRoot(el, name, value);
    return (index.h(index.Host, null, index.h("div", null, "dd", index.h("label", { htmlFor: this.name }, this.label), index.h("input", { onInput: this.onInputChangeValue.bind(this), type: "text", name: name, id: name, value: value }))));
  }
  get el() { return index.getElement(this); }
};

exports.mrvl_input = MrvlInput;
