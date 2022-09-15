import { r as registerInstance, h } from './index-78147f5a.js';

const mrvlTypographyCss = ":host{--font-family:'Lato', sans-serif;--primary-font:#00a6c0}.wrapper{font-family:var(--font-family);font-size:24px;background-color:var(--background);border-radius:20px}";

const MrvlTypography = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "wrapper" }, h("slot", null)));
  }
};
MrvlTypography.style = mrvlTypographyCss;

export { MrvlTypography as mrvl_typography };
