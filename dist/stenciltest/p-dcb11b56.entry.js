import{r as t,h as e,g as o}from"./p-d60488d8.js";const s=class{constructor(e){var o,s;t(this,e),this._internals=null===(s=(o=this.host).attachInternals)||void 0===s?void 0:s.call(o)}inputHandler(t){const e=t.target;console.log("Received the custom todoCompleted event: ",e.value),console.log("value after event",e.name,e.value);const o=new FormData(this.form);console.log(this.form.elements),o.set(e.name,e.value)}render(){return e("form",{name:this.name,ref:t=>this.form=t},e("slot",null))}get host(){return o(this)}};export{s as mrvl_form}