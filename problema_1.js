function sumaMultiplos(k, n) {
    let p = Math.floor((n - 1) / k);
    return k * (p * (p + 1)) / 2;
}

function multiplesOf3Or5(number) {
    return sumaMultiplos(3, number) + 
           sumaMultiplos(5, number) - 
           sumaMultiplos(15, number);
}

console.log(multiplesOf3Or5(1000));
/*
La funcion "sumaMultiplos" usa una formula matemática para
SUMAR TODOS LOS MULTIPLOS DE "K" MENORES QUE "N" SIN USAR NINGUN BUCLE:
-------------------------------------------------------------------------

let p = Math.floor((n - 1) / k);

"k" es el numero del que quiero sumar los múltiplos
"n" es el limite, que no se incluye
"p" es la cantidad de multiplos de "k" que existen antes de llegar a "n"

"P" me sirve para obtener LA CANTIDAD de numeros divisibles, no conozco 
cuales son, solamente obtengo LA CANTIDAD.

-------------------------------------------------------------------------

k * (p * (p + 1)) / 2;

el orden es el siguiente:
-> ( p + 1 )
-> p * ( p + 1 )
-> k * ( p * ( p + 1 ) )
-> k * (p * ( p + 1) ) / 2

1)
La suma que queremos calcular es: k + 2 * k + 3 * k + ... + p * k

Sacando factor común: k × ( 1 + 2 + 3 + ... + p )

2)
La suma: 1 + 2 + ... + p

se calcula con la fórmula: p * ( p + 1) / 2

3)
Por eso el resultado final es: k * ( p * ( p + 1 ) ) / 2

De esta forma obtenemos la suma de todos los múltiplos
de "k" menores que "n" sin recorrerlos uno por uno.
*/