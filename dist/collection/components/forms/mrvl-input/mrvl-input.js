import { Component, Prop, h, Element, Host } from '@stencil/core';
export class MrvlInput {
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
    return (h(Host, null,
      h("div", null,
        h("label", { htmlFor: this.name }, this.label),
        h("input", { type: "text", name: name, id: name, value: value }))));
  }
  static get is() { return "mrvl-input"; }
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
  static get elementRef() { return "el"; }
}
