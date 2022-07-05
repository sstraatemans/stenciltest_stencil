import { Component, h, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
export class MrvlButton {
  constructor() {
    this.size = 'medium';
    this.outline = false;
  }
  render() {
    return (h(Host, null,
      h("button", { class: classNames('button', `size-${this.size}`, { outline: this.outline }) },
        h("slot", null))));
  }
  static get is() { return "mrvl-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mrvl-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mrvl-button.css"]
  }; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'button' | 'submit'",
        "resolved": "\"button\" | \"submit\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'small' | 'medium' | 'large'",
        "resolved": "\"large\" | \"medium\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'medium'"
    },
    "outline": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "outline",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
