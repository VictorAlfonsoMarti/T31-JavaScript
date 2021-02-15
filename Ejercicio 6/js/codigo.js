/*
 *  T31-Ejercicio 6
 *
 */

 // letras del dni
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// pedimos al usuario que ponga el número del dni y la guardamos en una variable
var dni = prompt("Introduce el número del DNI sin la letra: ");
var letra = prompt("Introduce la letra de tu DNI");

// comrpobamos el número del dni
if(dni <= 0 || dni > 99999999) {
    alert("Número de DNI no válido");
}
else {
    // calculamos y guardamos la letra
    var letraDNI = calculoLetraDNI(dni);
}
// comprobamos el número de la letra
if (letraDNI != letra.toUpperCase()){ //comrpobamos las letras en mayúsculas
    alert("La letra que has introducido no coincide con la correcta: " + letraDNI)
}
else {
    // printamos el dni completo en pantalla
    document.getElementById("dni").innerHTML = "<h1>" + dni + letraDNI + "</h1>";
}

function calculoLetraDNI(numero) {
// funcion para calcular la letra del dni
    return letras[dni%23];
}




