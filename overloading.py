class point:
    def __init__(self,x=0,y=0):
        self.x=x
        self.y=y
    def __repr__(self):
        return "(x={0},y={1})".format(self.x,self.y)
    def __add__(self,other):
        x=self.x+other.x
        y=self.y+other.y
        return point(x,y)
p1=point(2,3)
p2=point(-1,2)
p3=p1+p2
print("\n addition of two object is")
print("p1({})+p2({})=p3({})".format(p1,p2,p3))
    
