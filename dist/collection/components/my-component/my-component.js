import { Component, Prop, h, Event } from '@stencil/core';
export class MyComponent {
  completedHandler() {
    this.todoCompleted.emit({ foo: 'bar' });
  }
  render() {
    return (h("div", null,
      "Hello, World! I'm ",
      this.count,
      h("button", { onClick: this.completedHandler.bind(this) }, "send event")));
  }
  static get is() { return "my-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get properties() { return {
    "count": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The first name"
      },
      "attribute": "count",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "todoCompleted",
      "name": "todoCompleted",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
