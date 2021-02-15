/*
 *  T31-Ejercicio 9
 *
 */

// pedimos al usuario una frase
var entrada = prompt("Inserta una frase:");

// imrpimimos el número por pantalla:
document.getElementById("cadena").innerHTML = "<h1> La cadena " + entrada + " está: " + MinMayus(entrada) + "</h1>";

function MinMayus(cadena) {
// función para decir si un string está formado por mayúsculas, minúsculas o ambas
    
    if (cadena == cadena.toUpperCase()){
        return "formada sólo por mayúsculas";
    }
    else if (cadena == cadena.toLowerCase()){
        return "formada sólo por minúsculas";
    }
    else {
        return "formada por mayúscuals y minúsculas";
    }
}