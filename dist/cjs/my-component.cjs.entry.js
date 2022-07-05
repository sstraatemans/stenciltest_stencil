'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5c857e50.js');

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.todoCompleted = index.createEvent(this, "todoCompleted", 7);
  }
  completedHandler() {
    this.todoCompleted.emit({ foo: 'bar' });
  }
  render() {
    return (index.h("div", null, "Hello, World! I'm ", this.count, index.h("button", { onClick: this.completedHandler.bind(this) }, "send event")));
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
