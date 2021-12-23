class student:
    branch='T.nagar'
    def __init__(self,rollno,name,branch):
        self.sno=rollno
        self.sname=name
        self.branch=branch
    def dispdata(self):
        print("branch name:",self.branch)
        print("enrollment no:",self.sno)
        print("Name of the student:",self.sname)
s1=student('TN001','Rakesh','kurichi')
s2=student('TN002','suresh','junction')
s1.dispdata()
s2.dispdata()
print(s1.branch)
print(s2.branch)
print(s1.sno)
print(s2.sno)
