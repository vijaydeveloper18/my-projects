n=['zero','one','two','three','four','five']
c=[]
num=int(input("enter the number:"))
while num!=0:
    r=num%10
    num=num//10
    c.append(r)
c.reverse()
for i in c:
    print(n[i])
