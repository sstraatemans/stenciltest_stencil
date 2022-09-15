import { r as registerInstance, h, H as Host } from './index-78147f5a.js';

const mrvlInputCss = ":host{--font-family:'Lato', sans-serif;--primary:#007f93;--primary-hover:#00a6c0;--primary-active:#005765;--white:white}";

const MrvlInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { value, name, label } = this;
    return (h(Host, null, h("div", null, h("label", { htmlFor: name }, label), h("input", { type: "text", name: name, id: name, value: value }))));
  }
};
MrvlInput.style = mrvlInputCss;

export { MrvlInput as mrvl_input };
