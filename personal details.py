per=[]
while true:
    Na=input("\n enter person name:")
    age=int(input("\n enter the age:"))
    per.append([Na,age])
    ch=input("continue[y/n]? ")
    if ch in ('n','N'):
      break
print(per)
print("\n Sno\t Name\t\t Age\t Eligible status\n")
l=len(per)
for i in range(o,l):
    if per[i][1]>=18:
        print("\n {}\t{} \t\t {} \t eligible\t".format(i+1,per[i][o],per[i][1]))
    else:
        print("\n{}\t {} \t\t {} \t not eligible\t".format(i+1,per[i][o],per[i][1]))
            
            
