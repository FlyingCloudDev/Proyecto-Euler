import math

def largestPalindromeProduct(n): 

    # 1. Definir los límites para los factores de N dígitos
    maxFactor = (10** n) - 1       # Ej: si n=3, 999
    minFactor = 10** (n - 1)       # Ej: si n=3, 100

    # 2. Definir el rango para la "mitad" superior del palíndromo
    maxMitad = (10** n) - 1       # Ej: 999
    minMitad = 10**( n - 1)       # Ej: 100

    # 3. Empezamos a generar palíndromos de mayor a menor
    for  mitad in range(maxMitad, minMitad-1, -1):
        
        # Creamos el palíndromo (Caso PAR: ej: 998 -> 998899)
        stringMitad = str(mitad)
        stringInvertido = stringMitad[::-1]
        palindromo = int(stringMitad + stringInvertido)

        # 4. Verificar si este palíndromo tiene dos factores de N dígitos
        limite_inferior = int(math.sqrt(palindromo))
        for divisor in range(maxFactor, limite_inferior -1,-1):
            
            if palindromo % divisor == 0:
                cociente = palindromo // divisor
                
                if minFactor <= cociente <= maxFactor:
                    # Si lo encontramos, devolvemos el número del palíndromo directamente
                    return palindromo
    # Si recorrió todo y no encontró un palíndromo PAR (por seguridad)
    return None

resultado = largestPalindromeProduct(3)
print(f"Resultado para N=3: {resultado}")