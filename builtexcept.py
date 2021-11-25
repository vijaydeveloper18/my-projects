class error(exception):
    """Base class for other exceptions"""
    pass
class valuetoosmallerror(error):
    """Raised when the input value is too small"""
    pass
class valuetoolargeerror(error):
    """Raised when the input value is too large"""
    pass
while true:
    try:
        i_num=int(input("enter the number:"))
        if i_num<number:
            raise valuetoosmallerror
        elif i_num>number:
            raise valuetoolargeerror
        break
    except valuetoosmallerror:
        print("The value is too small,tryagain!")
        print()
    except valuetoolargeerror:
        print("The value is too large,tryagain!")
        print()
print("congratulations!you guessed it correctly")        
