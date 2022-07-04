import { Component, Prop, h, Listen, Element } from '@stencil/core';

@Component({
  tag: 'mrvl-form',
  shadow: false,
})
export class MrvlForm {
  @Prop() name: string;
  private form?: HTMLFormElement;
  @Element()
  private host: HTMLFormElement;
  public _internals: any;

  constructor() {
    this._internals = this.host.attachInternals?.();
  }

  @Listen('mrvlInput')
  inputHandler(event: CustomEvent) {
    const target: any = event.target;
    console.log('Received the custom todoCompleted event: ', target.value);
    console.log('value after event', target.name, target.value);

    const formData = new FormData(this.form);

    console.log(this.form.elements);
    formData.set(target.name, target.value);
  }

  render() {
    return (
      <form name={this.name} ref={el => (this.form = el as HTMLFormElement)}>
        <slot />
      </form>
    );
  }
}