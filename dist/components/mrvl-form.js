import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const MrvlForm$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    var _a, _b;
    this._internals = (_b = (_a = this.host).attachInternals) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  inputHandler(event) {
    const target = event.target;
    console.log('Received the custom todoCompleted event: ', target.value);
    console.log('value after event', target.name, target.value);
    const formData = new FormData(this.form);
    console.log(this.form.elements);
    formData.set(target.name, target.value);
  }
  render() {
    return (h("form", { name: this.name, ref: el => (this.form = el) }, h("slot", null)));
  }
  get host() { return this; }
}, [4, "mrvl-form", {
    "name": [1]
  }, [[0, "mrvlInput", "inputHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mrvl-form"];
  components.forEach(tagName => { switch (tagName) {
    case "mrvl-form":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MrvlForm$1);
      }
      break;
  } });
}

const MrvlForm = MrvlForm$1;
const defineCustomElement = defineCustomElement$1;

export { MrvlForm, defineCustomElement };
