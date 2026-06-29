def fiboEvenSum(n):

    e1 = 2
    e2 = 8
    suma = 0

    while e1 <= n:
        
        suma += e1
        siguiente = (4 * e2) + e1
        e1 = e2
        e2 = siguiente

    return suma
