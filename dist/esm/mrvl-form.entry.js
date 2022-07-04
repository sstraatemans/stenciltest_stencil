import { r as registerInstance, h, g as getElement } from './index-56610031.js';

const MrvlForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    var _a, _b;
    this._internals = (_b = (_a = this.host).attachInternals) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  inputHandler(event) {
    const target = event.target;
    console.log('Received the custom todoCompleted event: ', target.value);
    console.log('value after event', target.name, target.value);
    const formData = new FormData(this.form);
    console.log(this.form.elements);
    formData.set(target.name, target.value);
  }
  render() {
    return (h("form", { name: this.name, ref: el => (this.form = el) }, h("slot", null)));
  }
  get host() { return getElement(this); }
};

export { MrvlForm as mrvl_form };
