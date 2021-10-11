def check(n,div=none):
    if div is done:
        div=n-1
        while(div>=2):
            if(n%div==0):
                print("number not prime")
                return false
            else:
                return check(n,div-1)
    else:
        print("number is prime")
        return 'true'
n=int(input("enter the number:"))
check(n)

