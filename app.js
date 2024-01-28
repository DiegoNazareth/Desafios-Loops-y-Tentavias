//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
//variable
let contador = 1;

while (contador < 11) {
  alert(contador);
  contador = contador + 1;
}

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
//variable
let contador2 = 10;

while (contador2 >= 0) {
  alert(contador2);
  contador2 = contador2 - 1;
}

//Crea un programa de cuenta progresiva.
//Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
//variables
let numeroPedido = prompt("Ingresa un numero: ");
let indice = 0;

while (numeroPedido >= indice) {
  console.log(indice);
  indice = indice + 1;
}

//Crea un programa de cuenta regresiva.
//Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
//variables
let numeroPedido2 = prompt("Ingresa un numero: ");
indice = 0;

while (numeroPedido2 >= 0) {
  console.log(numeroPedido2);
  numeroPedido2--;
}


