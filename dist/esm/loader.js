import { p as promiseResolve, b as bootstrapLazy } from './index-56610031.js';

/*
 Stencil Client Patch Esm v2.17.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["mrvl-button",[[1,"mrvl-button",{"first":[1],"middle":[1],"last":[1]}]]],["mrvl-checkbox",[[1,"mrvl-checkbox",{"name":[1],"value":[4],"label":[1],"innerValue":[1,"inner-value"]}]]],["mrvl-form",[[4,"mrvl-form",{"name":[1]},[[0,"mrvlInput","inputHandler"]]]]],["mrvl-input",[[1,"mrvl-input",{"name":[1],"value":[1],"label":[1],"innerValue":[1,"inner-value"]}]]],["my-component",[[1,"my-component",{"count":[2]}]]]], options);
  });
};

export { defineCustomElements };
