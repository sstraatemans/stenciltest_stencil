'use strict';

const index = require('./index-c240034d.js');

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
  return index.bootstrapLazy([["mrvl-card.cjs",[[1,"mrvl-card"]]],["mrvl-button.cjs",[[1,"mrvl-button",{"type":[1],"size":[1],"outline":[4]}]]],["mrvl-checkbox.cjs",[[0,"mrvl-checkbox",{"name":[1],"value":[4],"label":[1]}]]],["mrvl-form.cjs",[[4,"mrvl-form",{"name":[1]},[[0,"input","inputHandler"]]]]],["mrvl-input.cjs",[[0,"mrvl-input",{"name":[1],"value":[1],"label":[1]}]]],["my-component.cjs",[[1,"my-component",{"count":[2]}]]],["mrvl-typography.cjs",[[1,"mrvl-typography"]]]], options);
});
