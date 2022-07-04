import { r as registerInstance, h } from './index-ea898b41.js';

const MrvlCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { value, name } = this;
    return (h("div", null, h("label", { htmlFor: this.name }, this.label), h("input", { type: "checkbox", name: name, id: name, checked: !!value })));
  }
};

export { MrvlCheckbox as mrvl_checkbox };
