class test:
    def __init__(self,a,b):
        self.a=a
        self.b=b
    def __repr__(self):
        return "Test a:%s b:%s",(self.a,self.b)
t=test(1234,5678)
print(t)
