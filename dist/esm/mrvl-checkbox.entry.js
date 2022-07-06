import { r as registerInstance, h, H as Host, g as getElement } from './index-34dd2338.js';

const MrvlCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};

export { MrvlCheckbox as mrvl_checkbox };
