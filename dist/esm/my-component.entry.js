import { r as registerInstance, c as createEvent, h } from './index-56610031.js';

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.todoCompleted = createEvent(this, "todoCompleted", 7);
  }
  completedHandler() {
    this.todoCompleted.emit({ foo: 'bar' });
  }
  render() {
    return (h("div", null, "Hello, World! I'm ", this.count, h("button", { onClick: this.completedHandler.bind(this) }, "send event")));
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
