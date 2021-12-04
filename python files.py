import pickle
file1=open("student.txt","w")
course1={9001:["anu",10000],9002:["priya",12000]}
pickle.dump(course1,file1)
file1.close()