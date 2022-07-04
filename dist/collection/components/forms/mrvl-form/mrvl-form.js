import { Component, Prop, h, Listen } from '@stencil/core';
export class MrvlForm {
  inputHandler(event) {
    console.log(1111);
    const target = event.target;
    console.log('Received the custom todoCompleted event: ', target.value);
    console.log('value after event', target.name, target.value);
    const formData = new FormData(this.form);
    formData.set(target.name, target.value);
  }
  render() {
    return h("slot", null);
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
  static get listeners() { return [{
      "name": "input",
      "method": "inputHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
