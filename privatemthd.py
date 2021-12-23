class number:
    __a=0
    __b=0
    c=0
    def _callme(self,x,y):
        self.__a=x
        self.__a=y
    def cal(self):
        s=self.__a+self.__b+self.c
        return(s)
    def maincall(self,x,y):
        self.__callme(x,y)
obj=number()
obj.c=40
obj.maincall(10,20)
print("sumvalue=%d"%obj.cal())
