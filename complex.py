class complexnumber:
    def init(self,r=0,i=0):
        self.real=r
        self.img=i
    def add(self,other):
        return complexnumber(self.real+other.real,self.img+other.img)
    def dispdata(self):
        print("{0}+{1}j".format(self.real,self.img))
c1=complexnumber(2,3)
c2=complexnumber(5,6)
c3=c1.add(c2)
print("first complex number")
c1.dispdata()
print("second complex number")
c2.dispdata()
print("final complex number")
c3.dispdata()
              
