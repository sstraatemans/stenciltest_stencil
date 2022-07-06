import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyComponent {
  count: number;
  todoCompleted: EventEmitter<any>;
  completedHandler(): void;
  render(): any;
}
