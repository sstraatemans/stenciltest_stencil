import { p as promiseResolve, b as bootstrapLazy } from './index-abb4bf53.js';

/*
 Stencil Client Patch Browser v2.17.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["mrvl-button",[[1,"mrvl-button",{"type":[1],"size":[1],"outline":[4]}]]],["mrvl-checkbox",[[0,"mrvl-checkbox",{"name":[1],"value":[4],"label":[1],"innerValue":[1,"inner-value"]}]]],["mrvl-form",[[4,"mrvl-form",{"name":[1]},[[0,"input","inputHandler"]]]]],["mrvl-input",[[0,"mrvl-input",{"name":[1],"value":[1],"label":[1]}]]],["my-component",[[1,"my-component",{"count":[2]}]]]], options);
});
