import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const MrvlButton$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("button", null, "test", this.getText());
  }
}, [1, "mrvl-button", {
    "first": [1],
    "middle": [1],
    "last": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mrvl-button"];
  components.forEach(tagName => { switch (tagName) {
    case "mrvl-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MrvlButton$1);
      }
      break;
  } });
}

const MrvlButton = MrvlButton$1;
const defineCustomElement = defineCustomElement$1;

export { MrvlButton, defineCustomElement };
