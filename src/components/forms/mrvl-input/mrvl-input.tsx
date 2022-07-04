import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'mrvl-input',
  shadow: false,
})
export class MrvlInput {
  @Prop() name: string;
  @Prop() value: string;
  @Prop() label: string;

  render() {
    const { value, name } = this;

    return (
      <div>
        <label htmlFor={this.name}>{this.label}</label>
        <input type="text" name={name} id={name} value={value} />
      </div>
    );
  }
}
