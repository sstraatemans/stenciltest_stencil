import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
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
