import { r as registerInstance, h } from './index-abb4bf53.js';

const MrvlForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  inputHandler(event) {
    console.log(1111);
    const target = event.target;
    console.log('Received the custom todoCompleted event: ', target.value);
    console.log('value after event', target.name, target.value);
    const formData = new FormData(this.form);
    formData.set(target.name, target.value);
  }
  render() {
    return h("slot", null);
  }
};

export { MrvlForm as mrvl_form };
