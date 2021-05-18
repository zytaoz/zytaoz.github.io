"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Phone = /** @class */ (function () {
    function Phone(brand, price, size) {
        this.price = 100;
        this.brand = brand;
        this.size = size;
    }
    return Phone;
}());
var iphone = new Phone('apple', 5000, true);
console.log(iphone.brand);
// console.log(iphone.price); // 不能访问
// console.log(iphone.size); // 不能访问
var xiaomi = /** @class */ (function (_super) {
    __extends(xiaomi, _super);
    function xiaomi(brand, price, size) {
        var _this = _super.call(this, brand, price, size) || this;
        // console.log(this.price); // private 不能访问
        console.log(_this.size); // protected 可以访问
        return _this;
    }
    return xiaomi;
}(Phone));
var xm = new xiaomi('mi11', 4000, true);
var huawei = /** @class */ (function (_super) {
    __extends(huawei, _super);
    function huawei(brand, price, size) {
        return _super.call(this, brand, price, size) || this;
    }
    huawei.create = function (brand, price, size) {
        return new huawei(brand, price, size);
    };
    return huawei;
}(Phone));
// const meta = new huawei(); // 私有的，不能被 new
var meat = huawei.create('mete', 6000, true); // 可以使用静态属性
