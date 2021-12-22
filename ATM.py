class bankaccount():
    balance=0
    def withdraw(self,amount):
        self.balance -= amount
        return self.balance
    def deposit(self,amount):
        self.balance += amount
        return self.balance
    def balancecheck(self):
        print("\n New balance is....rs.{}".format(self.balance))
    def bal_return(self):
        return(self.balance)
BT=bankaccount()
while(true):
    print("1.Deposit\n")
    print("2.Withdraw\n")
    print("3.Balance\n")
    print("4.Exit\n")
    ch=int(input("Enter your choice.."))
    if(ch==1):
        while true:
            amt=int(input("Enter the amount to deposit...."))
            if(amt>0):
                BT.deposit(amt)
                break
            else:
                print("Enter valid amount")
                continue
    if(ch==2):
        while(true):
            amt=int(input("Enter amount to withdraw...."))
            if(bal_return()>amt):
                BT.withdraw(amt)
                break
            else:
                BT.balancecheck()
                print("\n Low balance,Please enter less amount..")
                continue
    if(ch==3):
        BT.balancecheck()
    if(ch==4):
        break
        
        
