import { Component, Prop, h, Event, EventEmitter, Element, Host } from '@stencil/core';

@Component({
  tag: 'mrvl-input',
  shadow: true,
})
export class MrvlInput {
  @Prop() name: string;
  @Prop() value: string;
  @Prop() label: string;
  @Prop() innerValue: string;
  @Event() mrvlInput: EventEmitter;
  public _internals: any;
  @Element() el!: HTMLInputElement;

  private onInputChangeValue(event) {
    this.value = (event.target as HTMLInputElement).value;
    console.log('value', event.target.name, event.target.value);

    //console.log('form', this._internals);

    this.mrvlInput.emit(event);
  }

  private renderInputOutsideShadowRoot(container: HTMLElement, name: string, value: string | null) {
    let input = container.querySelector('input.hidden-input') as HTMLInputElement | null;
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('hidden-input');
      container.appendChild(input);
    }
    input.name = name;
    input.value = value || '';
  }

  render() {
    const { el, value, name } = this;

    this.renderInputOutsideShadowRoot(el, name, value);

    return (
      <Host>
        <div>
          dd
          <label htmlFor={this.name}>{this.label}</label>
          <input onInput={this.onInputChangeValue.bind(this)} type="text" name={name} id={name} value={value} />
        </div>
      </Host>
    );
  }
}
