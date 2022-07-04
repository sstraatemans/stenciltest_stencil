import { EventEmitter } from '../../../stencil-public-runtime';
export declare class MrvlCheckbox {
  name: string;
  value: boolean;
  label: string;
  innerValue: string;
  mrvlInput: EventEmitter;
  _internals: any;
  el: HTMLInputElement;
  private onInputChangeValue;
  private renderInputOutsideShadowRoot;
  render(): any;
}
