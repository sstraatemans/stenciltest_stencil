import { Component, h } from '@stencil/core';

@Component({
  tag: 'mrvl-card',
  styleUrl: 'mrvl-card.css',
  shadow: false,
  scoped: true,
})
export class MrvlCard {
  render() {
    return (
      <div class="card">
        <div class="content">
          <mrvl-typography>
            Text inside the card component
            <slot />
          </mrvl-typography>
          <slot name="actions" />
        </div>
      </div>
    );
  }
}
