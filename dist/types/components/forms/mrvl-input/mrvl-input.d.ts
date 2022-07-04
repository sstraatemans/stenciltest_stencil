import { EventEmitter } from '../../../stencil-public-runtime';
export declare class MrvlInput {
  name: string;
  value: string;
  label: string;
  innerValue: string;
  mrvlInput: EventEmitter;
  _internals: any;
  el: HTMLInputElement;
  private onInputChangeValue;
  private renderInputOutsideShadowRoot;
  render(): any;
}
