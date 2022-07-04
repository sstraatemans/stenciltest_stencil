import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-56610031.js';

const MrvlCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mrvlInput = createEvent(this, "mrvlInput", 7);
  }
  onInputChangeValue(event) {
    this.value = event.target.checked;
    console.log('value', event.target.name, event.target.checked);
    //console.log('form', this._internals);
    this.mrvlInput.emit(event);
  }
  renderInputOutsideShadowRoot(container, name, value) {
    let input = container.querySelector('input.hidden-input');
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'text';
      input.classList.add('hidden-input');
      container.appendChild(input);
    }
    input.name = name;
    input.value = `${value}`;
  }
  render() {
    const { el, value, name } = this;
    this.renderInputOutsideShadowRoot(el, name, value);
    return (h(Host, null, h("div", null, "dd", h("label", { htmlFor: this.name }, this.label), h("input", { onInput: this.onInputChangeValue.bind(this), type: "checkbox", name: name, id: name, checked: !!value }))));
  }
  get el() { return getElement(this); }
};

export { MrvlCheckbox as mrvl_checkbox };
