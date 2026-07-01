function largestPrimeFactor(number) {

  let divisor = 2;
  let largestFactor = 1;

  while (number > 1) {
    
    if (number % divisor === 0) {
      largestFactor = divisor;
      number /= divisor;
    }
    else {
      divisor++;
    }
  }
  return largestFactor
}

largestPrimeFactor(13195);

/*
Para empezar, hay una propiedad que dice que TODOS LOS NUMEROS SE PUEDEN
REPRESENTAR ARITMETICAMENTE COMO EL PRODUCTO DE SUS FACTORES PRIMOS. Con
eso en mente, se comienza intentando dividir N por 2. Si el divisor es un
factor, N pasa a ser el resultado de esa división y se vuelve a intentar 
dividir por el mismo número, ya que ese factor puede repetirse. Cuando deja
de dividir exactamente, se incrementa el divisor en 1 y se repite el proceso.

No es necesario comprobar si cada divisor es primo. Como los divisores se 
prueban en orden ascendente y cada vez que un factor divide se elimina de N,
cuando se llega a un número compuesto (por ejemplo 4, 6, 8 o 9), sus factores
primos ya fueron eliminados anteriormente. Por eso, un divisor compuesto nunca
será el primer divisor válido de N, y el algoritmo termina encontrando
únicamente los factores primos.
*/