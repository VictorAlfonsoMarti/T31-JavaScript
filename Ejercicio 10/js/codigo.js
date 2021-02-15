/*
 *  T31-Ejercicio 10
 *
 */

// pedimos al usuario una frase
var entrada = prompt("Inserta una frase:");

// imrpimimos el número por pantalla:
document.getElementById("palindromo").innerHTML = "<h2> La frase \"" + entrada + "\" es un palindromo? " + esPalindromo(entrada) + "</h2>";

function esPalindromo(n) {
// función para decir si un string es palindromo o no
    
    // eliminamos los espacios
    cadena = n.replace(/ /g, '');
    
    // ponemos todas las letras en minúscuals
    cadena = cadena.toLowerCase();

    // si la cadena es igual que la cadena al revés, true, si no, false
    return cadena == cadena.split('').reverse().join('');
}