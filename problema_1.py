def suma_multiplos(k, n):
    p = (n - 1) // k
    return k * (p * (p + 1)) // 2

def multiples_of_3_or_5(number):
    return (suma_multiplos(3, number) + 
            suma_multiplos(5, number) - 
            suma_multiplos(15, number))

print(multiples_of_3_or_5(1000))