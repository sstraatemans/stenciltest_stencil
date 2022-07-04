import { Component, Prop, h, Listen } from '@stencil/core';

@Component({
  tag: 'mrvl-form',
  shadow: false,
})
export class MrvlForm {
  @Prop() name: string;
  private form?: HTMLFormElement;

  @Listen('input')
  inputHandler(event: CustomEvent) {
    console.log(1111);
    const target: any = event.target;
    console.log('Received the custom todoCompleted event: ', target.value);
    console.log('value after event', target.name, target.value);

    const formData = new FormData(this.form);
    formData.set(target.name, target.value);
  }

  render() {
    return <slot />;
  }
}
