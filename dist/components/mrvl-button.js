import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire();
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

const mrvlButtonCss = ":host{--font-family:'Lato', sans-serif;--primary:#007f93;--primary-hover:#00a6c0;--primary-active:#005765;--white:white}.button{font-family:var(--font-family);font-size:16px;line-height:150%;background-color:var(--primary);color:var(--white);padding:8px 16px;border:0;border-radius:100px;cursor:pointer}.button:hover{background-color:var(--primary-hover)}.button:active{background-color:var(--primary-active)}.size-small{padding:4px 12px}.size-large{line-height:133%;font-size:18px;padding:12px 24px}.outline{background:transparent;border:1px solid var(--primary);color:var(--primary)}.outline:hover{color:var(--white)}";

const MrvlButton$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.size = 'medium';
    this.outline = false;
  }
  render() {
    return (h(Host, null, h("button", { class: classnames('button', `size-${this.size}`, { outline: this.outline }) }, h("slot", null))));
  }
  static get style() { return mrvlButtonCss; }
}, [1, "mrvl-button", {
    "type": [1],
    "size": [1],
    "outline": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mrvl-button"];
  components.forEach(tagName => { switch (tagName) {
    case "mrvl-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MrvlButton$1);
      }
      break;
  } });
}

const MrvlButton = MrvlButton$1;
const defineCustomElement = defineCustomElement$1;

export { MrvlButton, defineCustomElement };
