// node_modules/core-js/internals/object-get-own-property-descriptor.js
var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = false ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    // mock function
    console.log(O, P);
};
