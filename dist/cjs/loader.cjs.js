'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c240034d.js');

/*
 Stencil Client Patch Esm v2.17.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["mrvl-card.cjs",[[1,"mrvl-card"]]],["mrvl-button.cjs",[[1,"mrvl-button",{"type":[1],"size":[1],"outline":[4]}]]],["mrvl-checkbox.cjs",[[0,"mrvl-checkbox",{"name":[1],"value":[4],"label":[1]}]]],["mrvl-form.cjs",[[4,"mrvl-form",{"name":[1]},[[0,"input","inputHandler"]]]]],["mrvl-input.cjs",[[0,"mrvl-input",{"name":[1],"value":[1],"label":[1]}]]],["my-component.cjs",[[1,"my-component",{"count":[2]}]]],["mrvl-typography.cjs",[[1,"mrvl-typography"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
