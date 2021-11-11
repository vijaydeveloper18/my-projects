n=[83,25,50,70,14,74,67,90]
for i in range(0,len(n)-1):
    minpos=i
    for j in range(i+1,len(n)-1):
        if(n[j]<n[minpos]):
            minpos=j
            temp=n[i]
            n[i]=n[minpos]
            n[minpos]=temp
else:
    print(n)
