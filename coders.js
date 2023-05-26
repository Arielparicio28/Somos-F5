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
var Coders = /** @class */ (function () {
    function Coders(name, age, birthday) {
        this.name = name;
        this.age = age;
        this.birthday = birthday;
    }
    return Coders;
}());
;
var Ariel = /** @class */ (function (_super) {
    __extends(Ariel, _super);
    function Ariel(name, age, birthday, hobbies) {
        var _this = _super.call(this, name, age, birthday) || this;
        _this.hobbies = hobbies;
        return _this;
    }
    Ariel.prototype.yourDates = function () {
        return "My name is ".concat(this.name, " my age is ").concat(this.age, " my birthday is ").concat(this.birthday, " and my hobbie is ").concat(this.hobbies);
    };
    return Ariel;
}(Coders));
;
// Uso de la clase Ariel
var ariel = new Ariel("Ariel", 25, "1994-04-26", "soccer");
ariel.yourDates();

console.log(ariel.yourDates());

var Huilen = /** @class */ (function (_super) {
    __extends(Huilen, _super);
    function Huilen(name, age, birthday, hobbies) {
        var _this = _super.call(this, name, age, birthday) || this;
        _this.hobbies = hobbies;
        return _this;
    }
    Huilen.prototype.yourDates = function () {
        return console.log("My name is ".concat(this.name, " my age is ").concat(this.age, " my birthday is ").concat(this.birthday, " and my hobbie is ").concat(this.hobbies));
    };
    return Huilen;
}(Coders));
;
// Uso de la clase Huilen
var huilen = new Huilen("Huilen", 36, "1987-01-29", "travel");
huilen.yourDates();
