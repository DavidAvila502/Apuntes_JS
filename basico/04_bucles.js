/*Los bucles tambien conocidos como loops 
son una forma de repetir acciones en nuestro programa, bajo condicionales
*/

/*BUCLE FOR */
//sintaxis
// for( iterador ; condicion ; incremento ){..instrucciones..}

for (let i = 0; i < 5; i++) {
  console.log("hello word!"); // * 5
}

/*BUCLE WHILE */
//sintaxis
//while(..condicion..){..instrucciones..}

let stop = 6;

while (stop > 0) {
  console.log("hello world! con while"); // * 6
  stop = stop - 1;
}

/*BUCLE DO WHILE*/
//sintaxis
//do{..instrucciones..}while(..condicion..)

let stop2 = 3;

do {
  console.log("Me repetire 3 veces");
  stop2 = stop2 - 1;
} while (stop2 > 0);

/*USO DE BREAK */
//la instruccion break nos permite romper los bucles cuando queramos

//ejemplo

for (let i = 0; i < 10; i++) {
  console.log("Esto intentara imprimirse 10 veces");
  if (i == 3) {
    break;
  }
}
/*En el ejemplo anterior indicamos al for repetrise 10 veces
pero le dijimos que en la vuelta 3 rompiera el bucle con break,
imprimiendose solo 4 veces ya que el conteo inicia en 0.
*/
