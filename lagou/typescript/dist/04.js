"use strict";
var nums = [1, 12, 123];
var res = nums.find(function (i) { return i > 0; });
var nums1 = res;
var nums2 = res;
var ss = nums1 * nums1;
var ss1 = nums2 * nums2;
function func1(person) {
    console.log(person.name);
    console.log(person.age);
}
func1({
    name: '桃子',
    age: 30
});
