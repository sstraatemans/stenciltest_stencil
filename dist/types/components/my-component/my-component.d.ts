import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyComponent {
  /**
   * The first name
   */
  count: number;
  todoCompleted: EventEmitter<any>;
  completedHandler(): void;
  render(): any;
}
