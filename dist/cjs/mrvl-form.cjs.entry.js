'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bdd72441.js');

const MrvlForm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    var _a, _b;
    this._internals = (_b = (_a = this.host).attachInternals) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  inputHandler(event) {
    const target = event.target;
    console.log('Received the custom todoCompleted event: ', target.value);
    console.log('value after event', target.name, target.value);
    const formData = new FormData(this.form);
    console.log(this.form.elements);
    formData.set(target.name, target.value);
  }
  render() {
    return (index.h("form", { name: this.name, ref: el => (this.form = el) }, index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};

exports.mrvl_form = MrvlForm;
