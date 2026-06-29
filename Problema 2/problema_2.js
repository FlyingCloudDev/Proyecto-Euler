function fiboEvenSum(n) {

  let e1 = 2
  let e2 = 8
  let suma = 0

  while(e1 <= n){
    
    suma += e1
    let siguiente = (4 * e2) + e1
    e1 = e2
    e2 = siguiente
  }

  return suma;
}

/*
Se utilizan los dos primeros términos pares de la sucesión de Fibonacci
(2 y 8) como punto de partida y una variable para acumular la suma.

La optimización se basa en una propiedad de la sucesión de Fibonacci:
cada tercer término es par. Gracias a esto, no es necesario generar
todos los números de la sucesión.

Los términos PARES cumplen la recurrencia:

    E(n) = 4 * E(n - 1) + E(n - 2)

De esta forma se generan únicamente los Fibonacci pares, reduciendo la
cantidad de iteraciones necesarias.

----------------------------------------------------------------------
El razonamiento fue este: en Fibonacci, cada tercer término es par.

1
2  ← par
3
5
8  ← par
13
21
34 ← par
55
89
144 ← par
...

Eso es una propiedad de la sucesión, entonces decís: "Si solo me interesan 
los pares, voy a mirar únicamente esos." Y obtenés una nueva sucesión:

2
8
34
144
610
2584
...

Ahora observás esa nueva sucesión y descubrís otra propiedad:
34  = 4×8   + 2
144 = 4×34  + 8
610 = 4×144 + 34
2584 = 4×610 + 144

Es decir: E(n) = 4 * E(n-1) + E(n-2)

Esa es la recurrencia de los Fibonacci pares.

*/