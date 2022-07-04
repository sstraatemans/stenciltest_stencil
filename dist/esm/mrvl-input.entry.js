import { r as registerInstance, h } from './index-ea898b41.js';

const MrvlInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { value, name } = this;
    return (h("div", null, h("label", { htmlFor: this.name }, this.label), h("input", { type: "text", name: name, id: name, value: value })));
  }
};

export { MrvlInput as mrvl_input };
