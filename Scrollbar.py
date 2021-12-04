from Tkinter import*
master=Tk()
list=['ajay','suresh','vicky','ram']
scrollbar=scrollbar(master)
scrollbar.pack(side=left,fill=Y)
listbox=listbox(master,yscrollcommand=scrollbar.set)
for i in list:
    listbox.insert(end,i)
listbox.pack(side='right')
scrollbar.config(command=listbox.yview)
mainloop()    