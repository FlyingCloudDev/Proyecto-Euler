def largestPrimeFactor(number):

    divisor = 2
    largestFactor = 1

    while number > 1:
    
        if number % divisor == 0:
            largestFactor = divisor
            number //= divisor
    
        else :
            divisor+=1
    
  
    return largestFactor


largestPrimeFactor(13195)
