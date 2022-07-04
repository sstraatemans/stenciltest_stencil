import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'mrvl-checkbox',
  shadow: false,
})
export class MrvlCheckbox {
  @Prop() name: string;
  @Prop() value: boolean;
  @Prop() label: string;
  @Prop() innerValue: string;

  render() {
    const { value, name } = this;

    return (
      <div>
        <label htmlFor={this.name}>{this.label}</label>
        <input type="checkbox" name={name} id={name} checked={!!value} />
      </div>
    );
  }
}
