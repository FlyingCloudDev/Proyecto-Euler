
function largestPalindromeProduct(n) {

    // 1. Definir los límites para los factores de N dígitos
    const maxFactor = Math.pow(10, n) - 1;       // Ej: si n=3, 999
    const minFactor = Math.pow(10, n - 1);       // Ej: si n=3, 100

    // 2. Definir el rango para la "mitad" superior del palíndromo
    const maxMitad = Math.pow(10, n) - 1;       // Ej: 999
    const minMitad = Math.pow(10, n - 1);       // Ej: 100

    // 3. Empezamos a generar palíndromos de mayor a menor
    for (let mitad = maxMitad; mitad >= minMitad; mitad--) {
        
        // Creamos el palíndromo (Caso PAR: ej: 998 -> 998899)
        let stringMitad = mitad.toString();
        let stringInvertido = stringMitad.split('').reverse().join('');
        let palindromo = parseInt(stringMitad + stringInvertido);

        // 4. Verificar si este palíndromo tiene dos factores de N dígitos
        for (let divisor = maxFactor; divisor >= Math.sqrt(palindromo); divisor--) {
            
            if (palindromo % divisor === 0) {
                let cociente = palindromo / divisor;
                
                if (cociente >= minFactor && cociente <= maxFactor) {
                    // Si lo encontramos, devolvemos el número del palíndromo directamente
                    return palindromo; 
                }
            }
        }
    }
    
    // Si recorrió todo y no encontró un palíndromo PAR (por seguridad)
    return null;
}
const resultado = largestPalindromeProduct(3);
console.log("Resultado para N=3:", resultado); 

/*

Antes de resolver el problema, primero entendemos qué es un palíndromo.
Un palíndromo es un número que se lee igual de izquierda a derecha que de
derecha a izquierda, por ejemplo: 9009, 12321 o 998899.

La idea principal de este algoritmo es que, al buscar el mayor producto
de dos números de N dígitos, el resultado que nos interesa suele ser un
palíndromo con una cantidad par de dígitos. Gracias a esta observación,
en lugar de probar todas las multiplicaciones posibles, podemos generar
directamente palíndromos de ese tipo construyéndolos a partir de una
mitad y su reflejo.

El primer paso consiste en definir los límites de los factores que pueden
participar en la multiplicación. Para un valor de n, el mayor factor
posible será 10ⁿ - 1 y el menor será 10ⁿ⁻¹. Por ejemplo, si n = 3, los
factores válidos estarán entre 100 y 999.

Después se definen los límites de las mitades con las que se construirán
los palíndromos. En este algoritmo esos valores coinciden con los límites
de los factores, aunque representan conceptos distintos: unos delimitan
los números que pueden multiplicarse y los otros delimitan las mitades
que utilizaremos para generar los palíndromos.

A continuación comienza el primer for, que recorre las mitades desde la
mayor hasta la menor. Esto es una optimización importante, ya que estamos
buscando el palíndromo más grande. Si encontramos uno válido, podremos
devolverlo inmediatamente sin seguir buscando.

Dentro de ese ciclo se construye el palíndromo. Para hacerlo, la mitad se
convierte en una cadena de texto, se invierte utilizando los métodos
split(), reverse() y join(), luego ambas partes se concatenan y
finalmente se convierten nuevamente en un número mediante parseInt(). Por
ejemplo, la mitad 998 genera el palíndromo 998899.

Una vez generado el palíndromo, comienza un segundo for cuya función es 
comprobar si ese número puede expresarse como el producto de dos números 
de N dígitos. El ciclo prueba divisores desde el mayor factor posible 
hasta la raíz cuadrada del palíndromo. Si un divisor divide exactamente
al palíndromo (palindromo % divisor === 0), se calcula el cociente y se
verifica que también se encuentre dentro del rango de los números de N
dígitos. Si tanto el divisor como el cociente cumplen esa condición,
significa que hemos encontrado una descomposición válida y el algoritmo
devuelve inmediatamente ese palíndromo.

La optimización más importante de este enfoque es que no genera todas las
multiplicaciones posibles para luego preguntar si el resultado es un
palíndromo. Hace exactamente lo contrario: genera únicamente palíndromos,
comenzando por los más grandes, y verifica si pueden escribirse como el
producto de dos números de N dígitos. Como los palíndromos se recorren de
mayor a menor, el primero que cumple la condición necesariamente es la
respuesta buscada.

*/