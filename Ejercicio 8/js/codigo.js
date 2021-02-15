/*
 *  T31-Ejercicio 8
 *
 */

// pedimos al usuario un número
var entrada = prompt("Inserta un número:");

// imrpimimos el número por pantalla:
document.getElementById("parImpar").innerHTML = "<h1> El número " + entrada + " es: " + esPar(entrada) + "</h1>";

function esPar(n) {
// función para decir si un número es par o no
    
    if (n % 2 == 0){
        return "PAR";
    }
    else {
        return "IMPAR";
    }
}