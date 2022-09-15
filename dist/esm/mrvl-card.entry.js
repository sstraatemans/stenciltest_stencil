import { r as registerInstance, h, H as Host } from './index-78147f5a.js';

const mrvlCardCss = ":host{--font-family:'Lato', sans-serif;--background:#e4ebec;--primary-hover:#00a6c0;--primary-active:#005765;--white:white}.card{font-family:var(--font-family);background-color:var(--background);border-radius:20px}.content{padding:32px}";

const MrvlCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "card" }, h("div", { class: "content" }, h("mrvl-typography", null, "Text inside the card component"), h("slot", { name: "body" }), h("slot", { name: "actions" })))));
  }
};
MrvlCard.style = mrvlCardCss;

export { MrvlCard as mrvl_card };
