import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const MrvlInput$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.mrvlInput = createEvent(this, "mrvlInput", 7);
  }
  onInputChangeValue(event) {
    this.value = event.target.value;
    console.log('value', event.target.name, event.target.value);
    //console.log('form', this._internals);
    this.mrvlInput.emit(event);
  }
  renderInputOutsideShadowRoot(container, name, value) {
    let input = container.querySelector('input.hidden-input');
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('hidden-input');
      container.appendChild(input);
    }
    input.name = name;
    input.value = value || '';
  }
  render() {
    const { el, value, name } = this;
    this.renderInputOutsideShadowRoot(el, name, value);
    return (h(Host, null, h("div", null, "dd", h("label", { htmlFor: this.name }, this.label), h("input", { onInput: this.onInputChangeValue.bind(this), type: "text", name: name, id: name, value: value }))));
  }
  get el() { return this; }
}, [1, "mrvl-input", {
    "name": [1],
    "value": [1],
    "label": [1],
    "innerValue": [1, "inner-value"]
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
