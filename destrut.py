class sample:
    def __init__(self,x,y):
        self.x=x
        self.y=y
    def __del__(self):
        print("An object is removed")
    def dispdata(self):
        print("X value {} and Y value {}".format(self.x,self.y))
s1=sample(2,4)
s2=sample(3,6)
s1.dispdata()
s2.dispdata()
del s2
