// Hay distintas formas de declarar variables utilizando var, let y const

//Las variables en javacript son dinamicas lo que significa que su tipo de dato es asignado
//de forma automatica


//variales con var
// Todas las variables declaradas con var , son variables globales, por lo que es una forma
// obsoleta de declararlas ya que ocacionaba errores en codigos muy robustos.

var nombre = "Pedro";
var edad = 23;
var boleano1 = true;

//En cambio se recomienda usar let, el cual tiene el mismo comportamiento
// que las variables en otros lenguajes (respeta bloques de codigo)

let nombre2 = "Pancho";
let edad2 = 24;
let mayor_edad = edad > 18; // true

//variables con const
//const a diferencia de las variables anteriores no puede cambiar su valor una vez que se declara.

const nombre3 = "Juan";

nombre3 = "Roberto"; //Error

//Tampoco puedes declarar una variable const sin inicializarla

const animal;//Error

//Las variables const son perfectas cuando vas a declarar variables que nunca cambiaran su valor

console.log("Hello world!") //imprimir mensajes en consola