import { r as registerInstance, h } from './index-ea898b41.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const MrvlButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("button", null, "test", this.getText());
  }
};

export { MrvlButton as mrvl_button };
