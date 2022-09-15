import { Component, Prop, h, Host } from '@stencil/core';
export class MrvlInput {
  render() {
    const { value, name, label } = this;
    return (h(Host, null,
      h("div", null,
        h("label", { htmlFor: name }, label),
        h("input", { type: "text", name: name, id: name, value: value }))));
  }
  static get is() { return "mrvl-input"; }
  static get originalStyleUrls() { return {
    "$": ["mrvl-input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mrvl-input.css"]
  }; }
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
    },
    "value": {
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
      "attribute": "value",
      "reflect": false
    },
    "label": {
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
      "attribute": "label",
      "reflect": false
    }
  }; }
}
