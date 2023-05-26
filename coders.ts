
abstract class Coders {
    name: string
    age: number
    birthday: string

    constructor(name: string, age: number, birthday: string) {
        this.name = name;
        this.age = age;
        this.birthday = birthday;
    }
    abstract yourDates(): void
};

class Fede extends Coders {
    hobbies: string;

    constructor(name: string, age: number, birthday: string, hobbies: string) {
        super(name, age, birthday);
        this.hobbies = hobbies;
    }
    yourDates() {
        return console.log(`My name is ${this.name} my age is ${this.age} my birthday is ${this.birthday} and my hobbie is ${this.hobbies}`);
    }
};
// Uso de la clase Fede
const fede = new Fede("Fede", 32, "1990-09-09", "go to the gym");
fede.yourDates()


