num=123456789
reversed_num=0
while num!=0:
    dig=num%10
    reversed_num=reversed_num*10+dig
    num//=10
print("reversed number:"+str(reversed_num))    
