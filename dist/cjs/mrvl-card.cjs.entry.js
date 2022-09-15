'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c240034d.js');

const mrvlCardCss = ":host{--font-family:'Lato', sans-serif;--background:#e4ebec;--primary-hover:#00a6c0;--primary-active:#005765;--white:white}.card{font-family:var(--font-family);background-color:var(--background);border-radius:20px}.content{padding:32px}";

const MrvlCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "card" }, index.h("div", { class: "content" }, index.h("mrvl-typography", null, "Text inside the card component"), index.h("slot", { name: "body" }), index.h("slot", { name: "actions" })))));
  }
};
MrvlCard.style = mrvlCardCss;

exports.mrvl_card = MrvlCard;
