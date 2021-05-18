"use strict";
function fn1(a, b) {
    return 'text';
}
function fn2(a, b) {
    return 'text';
}
function fn3(a, b) {
    if (b === void 0) { b = 100; }
    return 'text';
}
var fn4 = function (a, b) {
    return a + b;
};
function fn5(val) {
    return val;
}
fn1(100, 300);
fn2(100);
fn3(100);
fn4(100, 300);
