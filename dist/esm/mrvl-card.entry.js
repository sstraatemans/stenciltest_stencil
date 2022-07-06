import { r as registerInstance, h } from './index-34dd2338.js';

const mrvlCardCss = ".sc-mrvl-card-h{--font-family:'Lato', sans-serif;--background:#e4ebec;--primary-hover:#00a6c0;--primary-active:#005765;--white:white}.card.sc-mrvl-card{font-family:var(--font-family);background-color:var(--background);border-radius:20px}.content.sc-mrvl-card{padding:32px}";

const MrvlCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "card" }, h("div", { class: "content" }, h("mrvl-typography", null, "Text inside the card component", h("slot", null)), h("slot", { name: "actions" }))));
  }
};
MrvlCard.style = mrvlCardCss;

export { MrvlCard as mrvl_card };
