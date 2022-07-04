import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const MrvlCheckbox$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
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
    return (h(Host, null, h("div", null, h("label", { htmlFor: this.name }, this.label), h("input", { type: "checkbox", name: name, id: name, checked: !!value }))));
  }
  get el() { return this; }
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
