import { r as registerInstance, h, H as Host } from './index-78147f5a.js';

const MrvlCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { value, name, label } = this;
    return (h(Host, null, h("div", null, h("label", { htmlFor: name }, label), h("input", { type: "checkbox", name: name, id: name, checked: !!value }))));
  }
};

export { MrvlCheckbox as mrvl_checkbox };
