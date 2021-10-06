i=[]
def convert(b):
    if(b==0):
       return 1
    dig=b%2
    i.append(dig)
    convert(b//2)
b=int(input("enter the number:"))
 convert(b)
 i.reverse()
print("\n Binary equivalent")
  for s in i:
      print(s)        
