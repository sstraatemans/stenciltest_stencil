import { Component, h, Host } from '@stencil/core';
export class MrvlCard {
  render() {
    return (h(Host, null,
      h("div", { class: "card" },
        h("div", { class: "content" },
          h("mrvl-typography", null, "Text inside the card component"),
          h("slot", { name: "body" }),
          h("slot", { name: "actions" })))));
  }
  static get is() { return "mrvl-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mrvl-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mrvl-card.css"]
  }; }
}
