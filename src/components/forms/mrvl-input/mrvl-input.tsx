import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'mrvl-input',
  styleUrl: 'mrvl-input.css',
  shadow: false,
})
export class MrvlInput {
  @Prop() name: string;
  @Prop() value: string;
  @Prop() label: string;

  render() {
    const { value, name, label } = this;

    return (
      <Host>
        <div>
          <label htmlFor={name}>{label}</label>
          <input type="text" name={name} id={name} value={value} />
        </div>
      </Host>
    );
  }
}
