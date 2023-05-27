# Somos-F5
Proyecto pensado para poner el práctica uno de los principios SOLID: Open-Closed Principle (OCP)

## Principio Abierto-Cerrado 
Herramienta indispensable para protegernos frente a cambios en módulos o partes de código en los que esas modificaciones son frecuentes. Tener código cerrado a modificación y abierto a extensión nos da la máxima flexibilidad con el mínimo impacto.

Conceptos: Una clase abstracta no puede ser instanciada directamente, pero puede ser utilizada como base para otras clases.

Un método abstracto no tiene implementación en la clase abstracta, sino que debe ser implementado en las clases que heredan de ella.


Presentación explicativa: https://www.canva.com/design/DAFkAOkzChM/1hJGNMQMNpfIUMudTT0gwA/edit?utm_content=DAFkAOkzChM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## ¡Manos a la obra!
El objetivo de este repositorio es que todos trabajemos al unisono, pudiendo poner en práctica el principio de Abierto-Cerrado. 
Antes de que puedas hacer el ejercicio te mostraremos cuál será nuestra clase "cerrada": 
          
    Define una clase abstracta llamada Coders:
            abstract class Coders {
                name: string
                age: number
                birthday: string
            
    El constructor de la clase Coders se utiliza para inicializar las propiedades de la clase.
            Recibe tres parámetros: name (nombre), age (edad) y birthday (fecha de nacimiento): 
            
                constructor(name: string, age: number, birthday: string) {
                    this.name = name;
                    this.age = age;
                    this.birthday = birthday;
                }
                abstract yourDates(): void
            };
            
Esta clase aquella que nos permitirá agregar funciones sin necesidad de modificarla. El Prinicio Abierto/Cerrado nos permite trabajar con una clase que ya a pasado testing. 

1- Clona el repositorio: https://github.com/Arielparicio28/Somos-F5.git

2- Trabaja sobre su propia rama (ejemplo: feature/name)

3- Decida que otro parametro quisiera pasar en esta clase: pais de origen, estado civil, dirección, entre otras. 

4- En el siguiente ejemplo te mostraremos qué debes hacer: 

Ariel decidió agregar a la clase Coder una nueva propiedad adicional llamada "hobbies", para ello debemos definir una nueva clase "class Ariel" pero esta debe ser una 
extención de Coders es por ello que usamos "extends Coders". 


        class Ariel extends Coders {
            hobbies: string;

    Debemos declarar nuevamente el constructor con los parámetros de Coders y el nuevo. 
            constructor(name: string, age: number, birthday: string, hobbies: string) {
                super(name, age, birthday);
                this.hobbies = hobbies;
            }
    
    Creamos una nueva función para esta clase: "yourDates", implementando el método abstracto heredado de la clase Coders. 
    En este caso, el método imprime en la consola una texto que contiene la información de Ariel.
           
            yourDates():string{
        return `My name is ${this.name} my age is ${this.age} my birthday is ${this.birthday} and my hobbie is ${this.hobbies}`;
            }
        };
       
    Declaramos con datos los parametros para que luego podamos leerlo en consola. 
        const ariel = new Ariel("Ariel", 25, "1994-04-26", "play soccer");
        ariel.yourDates()
        console.log(ariel.yourDates());

5- ¡Te animamos a que agregues tu clase!

6- Para verificar que haz logrado generar una nueva clase escribí en tu consola el comando "tsc coders.ts", aquí lo que lograremos es que tu archivo de 
TypeScrip sea compliado a JavaScript. 

7- Luego escribí "node coders.js" y ¡Olé! Veras el resultado en tu consola. (¡Deberías poder leer la de todos los coders y la tuya! )

8- Guarda y sube tu clase a la rama main para que toda la promoción 7 tenga tus datos

¡Ahora no hay motivos para no saber los cumpleaños de tus compis! 

Espereamos que con este ejercicio puedas ver con mejor claridad el uso de buenas prácticas a partir del Principio de Abierto/Cerrado. 

¡Gracias! 

Ariel, Huilen, Federico y Eva. 
