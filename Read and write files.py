a=open("txt.txt","w")
a.write("python")
a.write("programming language")
a.close()
a=open("txt.txt","r")
for i in a:
    print(i)
a.close()    