n=int(input("enter the total number:"))
a=[]
for i in range(0,n):
elem=int(input("Enter the mark:"))
a.append(elem)
avg=sum(a)/n
print("The average is %d",%avg)