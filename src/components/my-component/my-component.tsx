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
    this.todoCompleted.emit({ foo: 'bar' });
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.count}
        <button onClick={this.completedHandler.bind(this)}>send event</button>
      </div>
    );
  }
}
