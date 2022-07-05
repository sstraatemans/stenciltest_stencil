import { Component, h, Prop, Host } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'mrvl-button',
  styleUrl: 'mrvl-button.css',
  shadow: true,
})
export class MrvlButton {
  @Prop() type: 'button' | 'submit';
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() outline: boolean = false;

  render() {
    return (
      <Host>
        <button class={classNames('button', `size-${this.size}`, { outline: this.outline })}>
          <slot />
        </button>
      </Host>
    );
  }
}
