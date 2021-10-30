class branch1:
    def display(self):
        print("I am a front end developer")
class branch2:
    def display(self):
        print("I am a python developer")
def myfun(ok):
  ok.display()
  b1=branch1()
  b2=branch2()
  myfun(b1)
  myfun(b2)
