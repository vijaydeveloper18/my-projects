def calc(x)
    if x==1:
       return 1
    else:
        return(x*calc(x-1))
x=4
print("The factorial number",x,"is",calc(x))        