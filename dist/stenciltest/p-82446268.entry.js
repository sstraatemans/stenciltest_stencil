import{r as e,h as o}from"./p-526cf81e.js";const t=class{constructor(o){e(this,o)}inputHandler(e){console.log(1111);const o=e.target;console.log("Received the custom todoCompleted event: ",o.value),console.log("value after event",o.name,o.value),new FormData(this.form).set(o.name,o.value)}render(){return o("slot",null)}};export{t as mrvl_form}