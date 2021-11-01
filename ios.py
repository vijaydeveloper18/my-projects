class details:
    def __init__(self,no=0,name=0,s1=0,s2=0,s3=0,s4=0):
        self.no=no
        self.name=name
        self.sub1=s1
        self.sub2=s2
        self.sub3=s3
        self.sub4=s4
    def dispdata(self):
        print("student no:",self.no)
        print("student name:",self.name)
        print("c language:",self.sub1)
        print("c++ language:",self.sub2)
        print("java:",self.sub3)
        print("python:",self.sub4)
no=no(12)
no.dispdata()
name=name('ram')
name.dispdata()
sub1=s1(64)
s1.dispdata()
sub2=s2(74)
s2.dispdata()
sub3=s3(56)
s3.dispdata()
sub4=s4(67)
s4.dispdata()
class result(details):
    def __init__(self,tot=0,avg=0):
        self.tot=tot
        self.avg=avg
    def dispdata2(self.tot,self.avg):
        self.tot=self.sub1+self.sub2+self.sub3+self.sub4
        self.avg=self.tot/4
        print("total:",self.tot)
        print("average:",self.avg)
tot.dispdata2()
avg.dispdata2()
    
        
