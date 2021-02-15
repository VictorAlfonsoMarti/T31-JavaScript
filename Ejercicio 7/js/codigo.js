/*
 *  T31-Ejercicio 7
 *
 */

// pedimos al usuario un número
var entrada = prompt("Inserta un número:");

// imrpimimos el número por pantalla:
document.getElementById("factorial").innerHTML = "<h1> Factorial de " + entrada + " es: " + calcFactorial(entrada) + "</h1>";



function calcFactorial(n) {
// función para calcular el factorial de un número
    
    // variable para guardar el resultado, asignamos a 1 para que no se multiplique por 0
    var result = 1;

    for(var x = 1; x <= n; x++) {
        result *= x;
    }

    // retornamos el resultado
    return result;
}
