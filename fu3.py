def reverse(n):
    s=0
    while(n!=0):
        s=s*10+(n%10)
        n=n//10
        return s
n=int(input("Enter the  number:"))
print("Reverse order {}".format(reverse(n)))