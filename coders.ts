//Define una clase abstracta llamada Coders
abstract class Coders {
    name: string
    age: number
    birthday: string
/* El constructor de la clase Coders y se utiliza para inicializar las propiedades de la clase.
 Recibe tres parámetros: name (nombre), age (edad) y birthday (fecha de nacimiento). */
    constructor(name: string, age: number, birthday: string) {
        this.name = name;
        this.age = age;
        this.birthday = birthday;
    }
    abstract yourDates(): void
};
/* Esto define una clase llamada Ariel que hereda de la clase abstracta Coders.
 La clase Ariel tiene una propiedad adicional llamada hobbies (aficiones). */
class Ariel extends Coders {
    hobbies: string;

    constructor(name: string, age: number, birthday: string, hobbies: string) {
        super(name, age, birthday);
        this.hobbies = hobbies;
    }
   /*  Este es el método yourDates en la clase Ariel. 
    Implementa el método abstracto heredado de la clase Coders. 
    En este caso, el método imprime en la consola una texto que contiene la información de Ariel. */
    yourDates():string{
  return `My name is ${this.name} my age is ${this.age} my birthday is ${this.birthday} and my hobbie is ${this.hobbies}`;
    }
};
// Uso de la clase Ariel
const ariel = new Ariel("Ariel", 25, "1994-04-26", "play soccer");
ariel.yourDates()
console.log(ariel.yourDates());

///Clase Huilen 
class Huilen extends Coders {
    hobbies: string;

     constructor(name: string, age: number, birthday: string, hobbies: string) {
        super(name, age, birthday);
        this.hobbies = hobbies; 
    }
    yourDates():string{
        return `My name is ${this.name} my age is ${this.age} my birthday is ${this.birthday} and my hobbie is ${this.hobbies}`;
          }
};

const huilen = new Huilen("Huilen", 36, "1987-01-29", "travel");
huilen.yourDates()
console.log(huilen.yourDates());
    
// Clase Fede 
class Fede extends Coders {
    hobbies: string;

    constructor(name: string, age: number, birthday: string, hobbies: string) {
        super(name, age, birthday);
        this.hobbies = hobbies;
    }
    yourDates():string{
        return `My name is ${this.name} my age is ${this.age} my birthday is ${this.birthday} and my hobbie is ${this.hobbies}`;
          }
};

const fede = new Fede("Fede", 32, "1990-09-09", "go to the gym");
fede.yourDates()
console.log(fede.yourDates());

class Eva extends Coders {
    country: string;

     constructor(name: string, age: number, birthday: string, country: string) {
        super(name, age, birthday);
        this.country = country; 
    }
    yourDates():string{
        return `My name is ${this.name} my age is ${this.age} my birthday is ${this.birthday} and my country is ${this.country}`;
          }
  };

const eva = new Eva("Eva", 29, "1993-07-30", "Argentina");
eva.yourDates()
console.log(eva.yourDates());

