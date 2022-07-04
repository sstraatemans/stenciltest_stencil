import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const MrvlCheckbox$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.mrvlInput = createEvent(this, "mrvlInput", 7);
  }
  onInputChangeValue(event) {
    this.value = event.target.checked;
    console.log('value', event.target.name, event.target.checked);
    //console.log('form', this._internals);
    this.mrvlInput.emit(event);
  }
  renderInputOutsideShadowRoot(container, name, value) {
    let input = container.querySelector('input.hidden-input');
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'text';
      input.classList.add('hidden-input');
      container.appendChild(input);
    }
    input.name = name;
    input.value = `${value}`;
  }
  render() {
    const { el, value, name } = this;
    this.renderInputOutsideShadowRoot(el, name, value);
    return (h(Host, null, h("div", null, "dd", h("label", { htmlFor: this.name }, this.label), h("input", { onInput: this.onInputChangeValue.bind(this), type: "checkbox", name: name, id: name, checked: !!value }))));
  }
  get el() { return this; }
}, [1, "mrvl-checkbox", {
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
