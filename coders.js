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
//Define una clase abstracta llamada Coders
var Coders = /** @class */ (function () {
    /* El constructor de la clase Coders y se utiliza para inicializar las propiedades de la clase.
     Recibe tres parámetros: name (nombre), age (edad) y birthday (fecha de nacimiento). */
    function Coders(name, age, birthday) {
        this.name = name;
        this.age = age;
        this.birthday = birthday;
    }
    return Coders;
}());
;
/* Esto define una clase llamada Ariel que hereda de la clase abstracta Coders.
 La clase Ariel tiene una propiedad adicional llamada hobbies (aficiones). */
var Ariel = /** @class */ (function (_super) {
    __extends(Ariel, _super);
    function Ariel(name, age, birthday, hobbies) {
        var _this = _super.call(this, name, age, birthday) || this;
        _this.hobbies = hobbies;
        return _this;
    }
    /*  Este es el método yourDates en la clase Ariel.
     Implementa el método abstracto heredado de la clase Coders.
     En este caso, el método imprime en la consola una texto que contiene la información de Ariel. */
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
///Clase Huilen 
var Huilen = /** @class */ (function (_super) {
    __extends(Huilen, _super);
    function Huilen(name, age, birthday, hobbies) {
        var _this = _super.call(this, name, age, birthday) || this;
        _this.hobbies = hobbies;
        return _this;
    }
    Huilen.prototype.yourDates = function () {
        return "My name is ".concat(this.name, " my age is ").concat(this.age, " my birthday is ").concat(this.birthday, " and my hobbie is ").concat(this.hobbies);
    };
    return Huilen;
}(Coders));
;
var huilen = new Huilen("Huilen", 36, "1987-01-29", "travel");
huilen.yourDates();
// Clase Fede 
var Fede = /** @class */ (function (_super) {
    __extends(Fede, _super);
    function Fede(name, age, birthday, hobbies) {
        var _this = _super.call(this, name, age, birthday) || this;
        _this.hobbies = hobbies;
        return _this;
    }
    Fede.prototype.yourDates = function () {
        return "My name is ".concat(this.name, " my age is ").concat(this.age, " my birthday is ").concat(this.birthday, " and my hobbie is ").concat(this.hobbies);
    };
    return Fede;
}(Coders));
;
var fede = new Fede("Fede", 32, "1990-09-09", "go to the gym");
fede.yourDates();
var Eva = /** @class */ (function (_super) {
    __extends(Eva, _super);
    function Eva(name, age, birthday, country) {
        var _this = _super.call(this, name, age, birthday) || this;
        _this.country = country;
        return _this;
    }
    Eva.prototype.yourDates = function () {
        return "My name is ".concat(this.name, " my age is ").concat(this.age, " my birthday is ").concat(this.birthday, " and my hobbie is ").concat(this.country);
    };
    return Eva;
}(Coders));
;
var eva = new Eva("Eva", 29, "1993-07-30", "Argentina");
eva.yourDates();
