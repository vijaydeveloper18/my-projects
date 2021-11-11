n=[83,25,50,70,14,74,67,90]
for i in range(0,len(n)-1):
    for j in range(0,i+1):
        if(n[j]>n[j+1]):
            temp=n[j]
            n[j]=n[j+1]
            n[j+1]=temp
print(n)            
