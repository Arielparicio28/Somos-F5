
abstract class Coders{
    name:string
    age:number
    birthday: string

    constructor(name: string, age: number, birthday: string) {
        this.name = name;
        this.age = age;
        this.birthday = birthday;
    }
   abstract yourDates():void
};

class Ariel extends Coders {
    hobbies: string;

     constructor(name: string, age: number, birthday: string, hobbies: string) {
        super(name, age, birthday);
        this.hobbies = hobbies; 
    }
    yourDates(){
        return console.log(`My name is ${this.name} my age is ${this.age} my birthday is ${this.birthday} and my hobbie is ${this.hobbies}`);
    }
};
// Uso de la clase Ariel
const ariel = new Ariel("Ariel", 25, "1994-04-26", "soccer");
ariel.yourDates()


