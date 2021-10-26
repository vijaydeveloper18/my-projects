str2=""
str1=input("enter a string\n")
l=len(str1)
find_char=input("enter a character to find:")
rep_char=input("enter a character to replace:")
for i in range(o,l):
    if str1[i]==find_char:
        str2=str2+rep_char
    else:
        str2=str2+str1[i]
print(str2)        
