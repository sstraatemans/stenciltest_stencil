import { Component, h } from '@stencil/core';

@Component({
  tag: 'mrvl-typography',
  styleUrl: 'mrvl-typography.css',
  shadow: true,
})
export class MrvlTypography {
  render() {
    return (
      <span class="wrapper">
        <slot />
      </span>
    );
  }
}
