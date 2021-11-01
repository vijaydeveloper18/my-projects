class square():
    def __init__(self,a=0):
        self.s=a
    def area(self):
        a=a^2
        print("area of square {}".format(self.s))
class rectangle(square):
    def __init__(self,x=0,y=0):
        self.length=x
        self.breadth=y
    def area(self):
        area=x*y
        print("area of rectangle {}".format(self.length,self.breadth))
a=square(2)
r=rectangle(10,5)
        
