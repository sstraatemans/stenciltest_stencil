import { r as registerInstance, c as createEvent, h } from './index-78147f5a.js';

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.todoCompleted = createEvent(this, "todoCompleted", 7);
  }
  completedHandler() {
    console.log(234234234);
    this.todoCompleted.emit({ foo: 'bar' });
  }
  render() {
    return (h("div", null, "Hello, World! I'm ", this.count, "s", h("button", { onClick: this.completedHandler.bind(this) }, "send event")));
  }
};

export { MyComponent as my_component };
