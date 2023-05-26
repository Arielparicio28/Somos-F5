//Define una clase abstracta llamada Coders
abstract class Coders{
    name:string
    age:number
    birthday: string
/* El constructor de la clase Coders y se utiliza para inicializar las propiedades de la clase.
 Recibe tres parámetros: name (nombre), age (edad) y birthday (fecha de nacimiento). */
    constructor(name: string, age: number, birthday: string) {
        this.name = name;
        this.age = age;
        this.birthday = birthday;
    }
   abstract yourDates():void
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
const ariel = new Ariel("Ariel", 25, "1994-04-26", "soccer");
ariel.yourDates()
console.log(ariel.yourDates());

