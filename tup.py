n=((30,12,45,15),(5,6,8,2,9),(100,345,567,12,43),(5.5,6.8,7,9,2,6))
x=len(n)
for index in range(0,x):
      m=n[index][0]
      for i in n[index]:
           if i>m:m=i
print("\n maximum of{} is {}".format(n[index],m)

