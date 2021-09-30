def fact(n):
    x=1
    for i in range(1,n):
          x=x+x*i
    return x
n=int(input("Enter the number:"))
print("\nFactorial value=%d",% fact(n))