import { Component, h } from '@stencil/core';
export class MrvlTypography {
  render() {
    return (h("div", { class: "wrapper" },
      h("slot", null)));
  }
  static get is() { return "mrvl-typography"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mrvl-typography.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mrvl-typography.css"]
  }; }
}
