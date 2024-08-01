// node_modules/core-js/internals/microtask.js
var getOwnPropertyDescriptor = require('./object-get-own-property-descriptor').f;

// mock function call
var queueMicrotaskDescriptor = getOwnPropertyDescriptor('global', 'queueMicrotask');


module.exports = function (fn) {
    // mock function
    console.log(queueMicrotaskDescriptor);
};
