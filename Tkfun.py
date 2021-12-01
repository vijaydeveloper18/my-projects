from Tkinter import*
import tkMessageBox
master=Tk()
num=IntVar()
def callme():
    if int(num.get())<0:
        tkMessageBox.showinfo("Error","Enter positive number")
    else:
        tkMessageBox.showinfo("success","Valid Input")
Label(master,text="Enter the number").pack()
Entry(master,textvariablename=num).pack()
b1=Button(master,text="click",command=callme)
b1.pack()
mainloop()
