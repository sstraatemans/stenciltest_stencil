'use strict';

const index = require('./index-bdd72441.js');

/*
 Stencil Client Patch Browser v2.17.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stenciltest.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["mrvl-button.cjs",[[1,"mrvl-button",{"first":[1],"middle":[1],"last":[1]}]]],["mrvl-checkbox.cjs",[[1,"mrvl-checkbox",{"name":[1],"value":[4],"label":[1],"innerValue":[1,"inner-value"]}]]],["mrvl-form.cjs",[[4,"mrvl-form",{"name":[1]},[[0,"mrvlInput","inputHandler"]]]]],["mrvl-input.cjs",[[1,"mrvl-input",{"name":[1],"value":[1],"label":[1],"innerValue":[1,"inner-value"]}]]],["my-component.cjs",[[1,"my-component",{"count":[2]}]]]], options);
});
