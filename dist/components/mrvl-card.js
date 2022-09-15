import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './mrvl-typography2.js';

const mrvlCardCss = ":host{--font-family:'Lato', sans-serif;--background:#e4ebec;--primary-hover:#00a6c0;--primary-active:#005765;--white:white}.card{font-family:var(--font-family);background-color:var(--background);border-radius:20px}.content{padding:32px}";

const MrvlCard$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("div", { class: "card" }, h("div", { class: "content" }, h("mrvl-typography", null, "Text inside the card component"), h("slot", { name: "body" }), h("slot", { name: "actions" })))));
  }
  static get style() { return mrvlCardCss; }
}, [1, "mrvl-card"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mrvl-card", "mrvl-typography"];
  components.forEach(tagName => { switch (tagName) {
    case "mrvl-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MrvlCard$1);
      }
      break;
    case "mrvl-typography":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MrvlCard = MrvlCard$1;
const defineCustomElement = defineCustomElement$1;

export { MrvlCard, defineCustomElement };
