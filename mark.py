name=raw_input("enter the name:")
age=int(input("enter the age:"))
print("Mark details")
tam=int(input("Tamil:"))
eng=int(input("English:"))
math=int(input("Maths:"))
sci=int(input("Science:"))
soc=int(input("Social:"))
tot=tam+eng+math+sci+soc
print('\t',tot)
avg=tot/5
print('\t',avg)
if(avg>40):
    print("pass")
 else:
     print("fail")   