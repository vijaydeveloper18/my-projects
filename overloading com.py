class point:
    def __init__(self,x=0,y=0):
        self.x=x
        self.y=y
    def __str__(self):
        return "({0},{1})".format(self.x,self.y)
    def __it__(self,other):
        self_mag=(self.x**2)+(self.y**2)
        other_mag=(other.x**2)+(other.y**2)
        return self_mag<other_mag
