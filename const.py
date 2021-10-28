class time:
    def init(self,m=0,n=0,p=0):
        self.cm=m
        self.cn=n
        self.cp=p
def callme(self):
    print("m:n:p am{}".format(self.cm,self.cn,self.cp))
c1=time(11,59,59)
c1.callme()
