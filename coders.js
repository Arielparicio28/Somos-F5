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
var Fede = /** @class */ (function (_super) {
    __extends(Fede, _super);
    function Fede(name, age, birthday, hobbies) {
        var _this = _super.call(this, name, age, birthday) || this;
        _this.hobbies = hobbies;
        return _this;
    }
    Fede.prototype.yourDates = function () {
        return console.log("My name is ".concat(this.name, " my age is ").concat(this.age, " my birthday is ").concat(this.birthday, " and my hobbie is ").concat(this.hobbies));
    };
    return Fede;
}(Coders));
;
// Uso de la clase Fede
var fede = new Fede("Fede", 32, "1990-09-09", "go to the gym");
fede.yourDates();
