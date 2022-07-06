import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const mrvlTypographyCss = ":host{--font-family:'Lato', sans-serif;--primary-font:#00a6c0}.wrapper{font-family:var(--font-family);font-size:24px;background-color:var(--background);border-radius:20px}";

const MrvlTypography = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("span", { class: "wrapper" }, h("slot", null)));
  }
  static get style() { return mrvlTypographyCss; }
}, [1, "mrvl-typography"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mrvl-typography"];
  components.forEach(tagName => { switch (tagName) {
    case "mrvl-typography":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MrvlTypography);
      }
      break;
  } });
}

export { MrvlTypography as M, defineCustomElement as d };
