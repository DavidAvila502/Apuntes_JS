
/*Estructuras de datos en javascript*/

// Arrays 

let animals = ["Perro", "Gato", "Ardilla", "Conejo", "Leon", "Tigre"] // array de strings

let numeros = [1, 2, 3, 4, 5, 6, 7, 8] //array de enteros

/*Los arrays pueden contener otras estructuras dentro como los objetos*/

let objetos = [{ name: "pedro", edad: 22 }, { name: "Manuel", edad: 22 }] // array de objetos

console.log(animals[0]);//imprimiendo el primer dato en el array animals
console.log(animals[animals.length - 1]);//imprimiendo el ultimo dato en el array animals


animals.push("elefante")//agregamos elefante al array animals
console.log(animals)
animals.pop(animals.length - 1)//Eliminamos elemento en la ultima posicion del array animals
console.log(animals)



//Objetos o diccionarios

let persona1 = {

    nombre: "luis",
    apellidos: "Diaz Beltran",
    edad: 22,
    genero: "Masculino"


}

/*Los objetos tambien pueden tener otras estructuras dentro como por ejemplo arrays */

let persona2 = {

    nombre: "Juan",
    apellidos: "Cruz Hernandez",
    edad: 22,
    genero: "Masculino",
    mascotas: ["perro", "gato", "tortuga"]


}

console.log(persona1)//imprimiendo objeto completo de la persona1
console.log(persona1.nombre)// imprimiento solo nombre de la persona1


console.log(persona2.mascotas)//imprimiendo array de mascotas de la persona2
console.log(persona2.mascotas[1])//imprimiendo mascota en la posicion 1 de persona2


/*Podemos agregar propíedades a un objeto de la siguiente forma*/

persona2.nacionalidad = "Mexicana";

console.log(persona2)

/* Tambien puede hacerse de esta forma */
persona2["numero_telefonico"] = 7777777;

console.log(persona2)


/* si se repiten las operaciones anteriores a una propiedad existente solo se actualizara */
persona2.edad = 23
console.log(persona2)
