import { newSpecPage } from '@stencil/core/testing';
import { MrvlButton } from './mrvl-button';
describe('mrvl-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MrvlButton],
      html: '<mrvl-button>my first button</mrvl-button>',
    });
    expect(root).toEqualHtml(`
      <mrvl-button>
        <mock:shadow-root>
          <button>
            my first button
          </button>
        </mock:shadow-root>
      </mrvl-button>
    `);
  });
});
