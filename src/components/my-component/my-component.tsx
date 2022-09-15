import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  @Prop() count: number;
  @Event()
  todoCompleted: EventEmitter<any>;

  completedHandler() {
    console.log(234234234);
    this.todoCompleted.emit({ foo: 'bar' });
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.count}s<button onClick={this.completedHandler.bind(this)}>send event</button>
      </div>
    );
  }
}
