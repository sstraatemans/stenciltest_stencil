import { Component, Prop, h, Listen, Element } from '@stencil/core';
export class MrvlForm {
  constructor() {
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
    return (h("form", { name: this.name, ref: el => (this.form = el) },
      h("slot", null)));
  }
  static get is() { return "mrvl-form"; }
  static get properties() { return {
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "name",
      "reflect": false
    }
  }; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "mrvlInput",
      "method": "inputHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
