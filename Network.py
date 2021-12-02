import socket
s=socket.socket()
host=socket.gethostname()
port=12345
s.bind((host,port))
s.listen(5)
while true:
    c,addr=s.accept()
print("Got connection from",addr)
c.send("Thankyou for connecting")
c.close()
