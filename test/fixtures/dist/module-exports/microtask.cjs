/* [vite-plugin-commonjs] export-runtime-S */ var module = { exports: {} }; var exports = module.exports; /* [vite-plugin-commonjs] export-runtime-E *//* [vite-plugin-commonjs] import-hoist-S */ import * as __CJS__import__0__ from "./object-get-own-property-descriptor"; /* [vite-plugin-commonjs] import-hoist-E */// node_modules/core-js/internals/microtask.js
var getOwnPropertyDescriptor = __CJS__import__0__.default || __CJS__import__0__.f;

// mock function call
var queueMicrotaskDescriptor = getOwnPropertyDescriptor('global', 'queueMicrotask');


module.exports = function (fn) {
    // mock function
    console.log(queueMicrotaskDescriptor);
};
/* [vite-plugin-commonjs] export-statement-S */
const __CJS__export_default__ = (module.exports == null ? {} : module.exports).default || module.exports;
export {
  __CJS__export_default__ as default,
}
/* [vite-plugin-commonjs] export-statement-E */