N=[83,25,50,70,14,74,67,90]
for i in range(1,len(N)):
    curval=N[i]
    curpos=i
    while curpos>0 and N[curpos-1]>curval:
        N[curpos]=N[curpos-1]
        curpos=curpos-1
        N[curpos]=curval
else:
    print(N)
