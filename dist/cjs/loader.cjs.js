'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-76068a38.js');

/*
 Stencil Client Patch Esm v2.17.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["mrvl-button.cjs",[[1,"mrvl-button",{"first":[1],"middle":[1],"last":[1]}]]],["mrvl-checkbox.cjs",[[0,"mrvl-checkbox",{"name":[1],"value":[4],"label":[1],"innerValue":[1,"inner-value"]}]]],["mrvl-form.cjs",[[4,"mrvl-form",{"name":[1]},[[0,"input","inputHandler"]]]]],["mrvl-input.cjs",[[0,"mrvl-input",{"name":[1],"value":[1],"label":[1]}]]],["my-component.cjs",[[1,"my-component",{"count":[2]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
