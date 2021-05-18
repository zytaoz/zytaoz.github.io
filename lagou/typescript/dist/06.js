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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function (food) {
        console.log(food);
    };
    Person.prototype.speak = function (status) {
        console.log(status);
    };
    return Person;
}());
var dog = /** @class */ (function () {
    function dog() {
    }
    dog.prototype.eat = function (food) {
        console.log(food);
    };
    dog.prototype.speak = function (status) {
        console.log(status);
    };
    return dog;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function (food) {
        console.log(food);
    };
    return Animal;
}());
// const cat = new Animal(); // 不能事例抽象类
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.run = function (distance) {
        console.log(distance);
    };
    return Dog;
}(Animal));
