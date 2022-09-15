import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'mrvl-checkbox',
  shadow: false,
})
export class MrvlCheckbox {
  @Prop() name: string;
  @Prop() value: boolean;
  @Prop() label: string;

  render() {
    const { value, name, label } = this;

    return (
      <Host>
        <div>
          <label htmlFor={name}>{label}</label>
          <input type="checkbox" name={name} id={name} checked={!!value} />
        </div>
      </Host>
    );
  }
}
