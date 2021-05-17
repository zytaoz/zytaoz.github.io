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
fn1(100, 300);
fn2(100);
fn3(100);
