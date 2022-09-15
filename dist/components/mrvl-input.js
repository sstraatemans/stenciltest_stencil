import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const mrvlInputCss = ":host{--font-family:'Lato', sans-serif;--primary:#007f93;--primary-hover:#00a6c0;--primary-active:#005765;--white:white}";

const MrvlInput$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const { value, name, label } = this;
    return (h(Host, null, h("div", null, h("label", { htmlFor: name }, label), h("input", { type: "text", name: name, id: name, value: value }))));
  }
  static get style() { return mrvlInputCss; }
}, [0, "mrvl-input", {
    "name": [1],
    "value": [1],
    "label": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mrvl-input"];
  components.forEach(tagName => { switch (tagName) {
    case "mrvl-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MrvlInput$1);
      }
      break;
  } });
}

const MrvlInput = MrvlInput$1;
const defineCustomElement = defineCustomElement$1;

export { MrvlInput, defineCustomElement };
