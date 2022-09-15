'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c240034d.js');

const MrvlForm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return index.h("slot", null);
  }
};

exports.mrvl_form = MrvlForm;
