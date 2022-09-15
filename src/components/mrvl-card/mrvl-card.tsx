import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'mrvl-card',
  styleUrl: 'mrvl-card.css',
  shadow: true,
})
export class MrvlCard {
  render() {
    return (
      <Host>
        <div class="card">
          <div class="content">
            <mrvl-typography>Text inside the card component</mrvl-typography>
            <slot name="body" />
            <slot name="actions" />
          </div>
        </div>
      </Host>
    );
  }
}
