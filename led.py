from typing_extensions import Self
class led1():
    def __init__(self,b,c):
        self.b=b
        self.c=c
def glow1(self):
    return (self.b,self.c)
l1=glow1()    
class led2(led1):
    def __init__(self,a,b,g,e,d):
        self.a=a
        self.b=b
        self.g=g
        self.e=e
        self.d=d
def glow2(self):
    return (self.a,self.b,self.g,self.e,self.d)
l2=glow2()
class led3(led2):
    def  __init__(self,a,b,g,c,d):
        self.a=a
        self.b=b
        self.g=g
        self.c=c
        self.d=d
def glow3(self):
    return (self.a,self.b,self.g,self.c,self.d)
l3=glow3()
class led4(led3):
    def __init__(self,f,b,g,c):
        self.f=f
        self.b=b
        self.g=g
        self.c=c
def glow4(self):
    return (self.f,self.b,self.g,self.c)
l4=glow4()
class led5(led4):
    def __init__(self,a,f,g,c,d):
        self.a=a
        self.f=f
        self.g=g
        self.c=c
        self.d=d
def glow5(self):
    return(self.a,self.f,self.g,self.c,self.d)
l5=glow5()
class led6(led5):
    def __init__(self,a,f,e,d,c,g):
        self.a=a
        self.f=f
        self.e=e
        self.d=d
        self.c=c
        self.g=g
def glow6(self):
    return(self.a,self.f,self.e,self.d,self.c,self.g)
l6=glow6()
class led7(led6):
    def __init__(self,a,b,c):
        self.a=a
        self.b=b
        self.c=c
def glow7(self):
    return (self.a,self.b,self.c)
l7=glow7()
while True:
    print("\n 1.One")
    print("\n 2.Two")
    print("\n 3.Three")
    print("\n 4.Four")
    print("\n 5.Five")
    print("\n 6.Six")
    print("\n 7.Seven")
    ch=int(input("\choice...[1..7"))
    if ch>=1 and ch<=7:
        if ch==1:l1.glow1()
        if ch==2:l2.glow2()  
        if ch==3:l3.glow3()    
        if ch==4:l4.glow4()
        if ch==5:l5.glow5()
        if ch==6:l6.glow6()
        if ch==7:l7.glow7()
        break
