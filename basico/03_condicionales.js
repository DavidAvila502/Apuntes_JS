/* Las condicionales sriven para tomar deciciones 
En el caso de javascript funcionan forma parecida a java o c++.

estructura:
if(..condicion..){..instrucciones..}

*/

//Ejemplo 1

let persona = 20;

if (persona > 18) {
  console.log("La persona es mayor a 18");
} else {
  console.log("La persona es menor a 18");
}

//Ejemplo 2 (else if)

let persona2 = 27;

if (persona2 < 18) {
  console.log("La persona2 es menor a 18");
} else if (persona2 >= 18) {
  console.log("La persona2 es mayor o igual a 18");
}

//Ejemplo 3 (if anidados)

let persona3 = 29;

if (persona3 >= 18) {
  if (persona3 < 30) {
    console.log("La persona3 es mayor o igual a 18 pero no mayor o igual a 30");
  } else {
    console.log("La persona3 es mayor o igual a 30");
  }
} else if (persona3 < 18) {
  console.log("La persona3 es menor a 18");
}

/********************************OPERADORES DE COMPARACION************************************/
//Estos operadores se utilizan dentro de los if para formar condiciones  if(..condicion..){..instrucciones..}
//Estos operadores son:
/*
(==) igual - devuelve true si los operandos son iguales
(!=) diferente - devuelve true si los operandos son diferentes
(===) igual estricto - devuelve true si los operandos son iguales y del mismo tipo
(!==) diferente estricto - devuelve true  si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.
(>) mayor que - devuelve true si el operando izquierdo es mayor al derecho
(>=) mayor o igual que - devuelve true si el operando izquierdo es mayor o igual al derecho
(<) menor que - devuelve true si el operando izquierdo es menor al derecho
(<=) menor o igual que - devuelve true si el operando izquierdo es menor o igual al derecho
*/

//Ejemplo con (==)
let numero1 = 2,
  numero2 = 2;

if (numero1 == numero2) {
  console.log("numero1 y numero2 son iguales");
}
//Ejemplo con (!=)
if (numero1 != numero2) {
  console.log("son diferentes");
}
//Ejemplo con (>=)
if (numero1 >= numero2) {
  console.log("numero1 es mayor o igual a numero2");
}

/**************************************OPERADORES LOGICOS*******************************/
/*Al igual que los operadores anteriores estos tambien se utilizan en los if, pero en lugar
de evaluar operandos , estos evaluan el resultado de una expresion completa, estos operadores
son:
(&&) and - devuelve true si ambas expresiones son true
(||) or - devuelve ture si alguna de las dos expresiones a evaluar es true
(!) not - devuelve false si el resultado de su expresion es true
*/

let numero3 = 5,
  numero4 = 6;

// ejemplo con &&

if (numero3 == 5 && numero4 == 6) {
  console.log("numero3 vale 5 y numero4 vale 6");
}

// ejemplo con ||
if (numero3 == 2 || numero4 == 6) {
  console.log("una de estas expresiones es true");
}
// ejemplo con !
//retorna resultado booleano opesto de la expresion
if (!(numero3 == 3)) {
  console.log(!(numero3 == 3)); //true
}
