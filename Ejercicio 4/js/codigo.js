/*
 *  T31-Ejercicio 4
 *
 */

// array primario
var valores = [true, 5, false, "hola", "adios", 2];

// añadimos al div textoMayor el string más largo del array:
document.getElementById("textoMayor").innerHTML = "<p> El texto más largo del array[" + valores + "] es: " + StringMayor(valores) + "</p>";

// añadimos al div trueFalse el valor true del array
document.getElementById("trueFalse").innerHTML = "<p> El boolean true del array[" + valores + "] es = " + trueFalse(valores) + "</p>";

// añadimos al div operaciones el valor de todas las operaciones de los numeros del array
document.getElementById("operaciones").innerHTML += "<br>La suma de los números del array[" + valores + "] es = " + opSuma(valores);
document.getElementById("operaciones").innerHTML += "<br>La resta de los números del array[" + valores + "] es = " + opResta(valores);
document.getElementById("operaciones").innerHTML += "<br>La multiplicación de los números del array[" + valores + "] es = " + opMulti(valores);
document.getElementById("operaciones").innerHTML += "<br>La división de los números del array[" + valores + "] es = " + opDiv(valores);
document.getElementById("operaciones").innerHTML += "<br>El módulo de los números del array[" + valores + "] es = " + opMod(valores);




// FUNCIONES 

function StringMayor(a) {
// Determina cual de los elementos de texto del array pasado por parametro es mayor

    // variable local para guardar la cadena más larga antes de devolverla
    let larga = "";
    // recorremos el array
    a.forEach(element => {
        if(typeof element == 'string'){
            if(element.length > larga.length){
                larga = element;
            }
        }    
    });

    // retornamos el string largo
    return larga;
}

function trueFalse(a) {
// retorna el valore true del array pasado por parámetro

    // variable local para guardar el booleano true
    let verdad;
    a.forEach(element => {
        if(element == true){
            verdad = element;
        }
    });

    // retornamos el booleano
    return verdad;
}

function opSuma(a) {
// retorna la suma de los numeros de un array
    
    // variable local para guardar la suma
    let suma = 0;

    // recorremos el array, sumando los números
    a.forEach(element => {
        if(typeof element == "number"){
            suma += element;
        }
    });

    // retornamos la suma
    return suma;
}


function opResta(a) {
// retorna la resta de los numeros de un array
    
    // variable local para guardar la resta
    let resta = 0;

    // recorremos el array, restando los números
    a.forEach(element => {
        if(typeof element == "number"){
            if (resta == 0){ // si es el primer numero
                resta = element;
            }
            else {
                resta -= element;
            }
        }
    });

    // retornamos la resta
    return resta;
}

function opMulti(a) {
// retorna la multiplicacion de los numeros de un array
    
    // variable local para guardar la multiplicacion
    let multi = 0;

    // recorremos el array, multiplicando los números
    a.forEach(element => {
        if(typeof element == "number"){
            if (multi == 0){ // si es el primer numero
                multi = element;
            }
            else {
                multi *= element;
            }
        }
    });

    // retornamos la multiplicación
    return multi;
}
    
function opDiv(a) {
// retorna la división de los numeros de un array
    
    // variable local para guardar la división
    let div = 0;

    // recorremos el array, dividiendo los números
    a.forEach(element => {
        if(typeof element == "number"){
            if (div == 0){ // si es el primer numero
                div = element;
            }
            else {
                div /= element;
            }
        }
    });

    // retornamos la división
    return div;
}

function opMod(a) {
    // retorna el módulo de los numeros de un array
        
        // variable local para guardar el módulo
        let mod = 0;
    
        // recorremos el array, haciendo el módulo los números
        a.forEach(element => {
            if(typeof element == "number"){
                if (mod == 0){ // si es el primer numero
                    mod = element;
                }
                else {
                    mod %= element;
                }
            }
        });
    
        // retornamos el módulo
        return mod;
    }
    
