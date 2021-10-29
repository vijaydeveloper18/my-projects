class person:
    def __init__(self,no,name):
        self.empno=no
        self.empname=name
    def dispdata(self):
        print("Employee no:",self.empno)
        print("Employee name:",self.empname)
class employee(person):
    print("I am a front end developer")
per=person(12,'ram')
emp=employee(13,'raj')
per.dispdata()
emp.dispdata()
