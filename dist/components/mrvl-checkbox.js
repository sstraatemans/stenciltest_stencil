import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const MrvlCheckbox$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const { value, name } = this;
    return (h("div", null, h("label", { htmlFor: this.name }, this.label), h("input", { type: "checkbox", name: name, id: name, checked: !!value })));
  }
}, [0, "mrvl-checkbox", {
    "name": [1],
    "value": [4],
    "label": [1],
    "innerValue": [1, "inner-value"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mrvl-checkbox"];
  components.forEach(tagName => { switch (tagName) {
    case "mrvl-checkbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MrvlCheckbox$1);
      }
      break;
  } });
}

const MrvlCheckbox = MrvlCheckbox$1;
const defineCustomElement = defineCustomElement$1;

export { MrvlCheckbox, defineCustomElement };
