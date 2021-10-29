class myerror(exception):
    pass
class ZeroValueError(exception):
    pass
while true:
    try:
        i_num=int(input("enter a number:"))
        if i_num==0:
            raise ZeroValueError
        if i_num<0:
            raise MyError
        else:
            print("valid input")
            break
    except Myerror:
        print("value should be positive number...try again!")
    except ZeroValueError:
        print("value should not be zero...,try again!")
