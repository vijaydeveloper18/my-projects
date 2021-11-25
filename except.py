class myerror(exception):
    pass
class zerovalueerror(exception):
    pass
while true:
    try:
        i_num=int(input("enter the number:"))
        if(i_num==0):
            raise zerovalueerror
        if(i_num<0):
            raise myerror
        else:
            print("valid input")
            break
    except myerror:
         print("value should be positive number...,try again!")
    except zerovalueerror:
         print("value should not be zero..,try again!")
