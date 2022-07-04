import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const MrvlInput$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("div", null, h("label", { htmlFor: this.name }, this.label), h("input", { type: "text", name: name, id: name, value: value }))));
  }
  get el() { return this; }
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
