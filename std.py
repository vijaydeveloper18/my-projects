class name:
    def __init__(self,no,name):
        self.stno=no
        self.stname=name
    def dispdata(self):
        print("student no:",self.stno)
        print("student name:",self.stname)
no=no('12')
name=name('ram')
no.dispdata()
name.dispdata()
class test1:
    def __init__(self,s1,s2):
        self.ct=s1
        self.dc=s2
    def dispdata1(self):
        print("c language:",self.ct)
        print("c++ language:",self.dc)
m1=s1('64')
m2=s2('54')
m1.dispdata()
m2.dispdata()
class test2:
    def __init__(self,s3,s4):
        self.jv=s3
        self.py=s4
    def dispdata2(self):
        print("java:",self.jv)
        print("python:",self.py)
m3=s3('63')
m4=s4('78')
m3.dispdata()
m4.dispdata()
class result(name,test1,test2):
    def __init__(self,no,name,s1,s2,s3,s4):
        student.__init__(self,no,name)
        test1.__init__(self,s1,s2)
        test2.__init__(self,s3,s4)
    def calfun(self):   
        self.tot=self.ct+self.dc+self.jv+self.py
        self.avg=self.tot/4
def display(self):
    print("total",self.tot)
    print("average",self.avg)
    if self.avg>40:
        print("pass")
    else:
        print("fail")
    
