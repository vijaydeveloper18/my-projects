from thread import start_new_thread
threadid=1
def factorial(n):
    global threadid
    if(n<1):
        print("%s:%d"%("Thread",threadid))
        threadid += 1
        return 1
    else:
        returnNumber= n*factorial(n-1)
        print(str(n)+'!='+str(returnNumber))
        return returnNumber
    start_new_thread(factorial,(5,))
    start_new_thread(factorial,(4,))
c=input("Waiting for threads to return...\n")    
