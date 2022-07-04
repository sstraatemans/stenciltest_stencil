import { Component, Prop, h, Element, Host } from '@stencil/core';

@Component({
  tag: 'mrvl-checkbox',
  shadow: false,
})
export class MrvlCheckbox {
  @Prop() name: string;
  @Prop() value: boolean;
  @Prop() label: string;
  @Prop() innerValue: string;
  @Element() el: HTMLInputElement;

  // renderInputOutsideShadowRoot(container, name, value) {
  //   let input = container.querySelector('input.hidden-input');
  //   if (!input) {
  //     input = container.ownerDocument.createElement('input');
  //     input.type = 'hidden';
  //     input.classList.add('hidden-input');
  //     container.appendChild(input);
  //   }
  //   input.name = name;
  //   input.value = value || '';
  // }

  render() {
    const { value, name } = this;

    //this.renderInputOutsideShadowRoot(el, name, value);

    return (
      <Host>
        <div>
          <label htmlFor={this.name}>{this.label}</label>
          <input type="checkbox" name={name} id={name} checked={!!value} />
        </div>
      </Host>
    );
  }
}
