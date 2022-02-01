var data=[4];
data[0]=56;
data[1]=34;
data[2]=44;
data[3]=67;
var key=34;temp;
while(temp!=key){
    data[0]=temp;
    temp=temp.nxt;  //searching that removing element
}
if(temp===key){
    data[0].nxt=null;   //Remove that element
}
data[2]=data[1];    //Data shifting from right position
data[2]=data[3];     
var data=new data();  //Adding one New data
var element;
data[4]=function(){
      return element;  //Adding new element that new data
}

