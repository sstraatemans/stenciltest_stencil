import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.todoCompleted = createEvent(this, "todoCompleted", 7);
  }
  completedHandler() {
    console.log(234234234);
    this.todoCompleted.emit({ foo: 'bar' });
  }
  render() {
    return (h("div", null, "Hello, World! I'm ", this.count, "s", h("button", { onClick: this.completedHandler.bind(this) }, "send event")));
  }
}, [1, "my-component", {
    "count": [2]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-component"];
  components.forEach(tagName => { switch (tagName) {
    case "my-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent$1);
      }
      break;
  } });
}

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
