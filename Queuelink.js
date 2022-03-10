var node={}
node.data=data;                    //Create a new node
node.refer=reference;
if(front==null && rear==null && node==0){
    node=newnode;
    newnode=head;                 //Newnode points to be head
}
for(var i=0;i<=3;i++){
    node.data[i]=val;
    node.refer[i]=val;           //Insert data into nodes
    rear++;
}
if(front!=null && rear!=null){
    console.log("The queue is full");     //Queue was full
}else{
    console.log("The queue is empty");
}
if(front!=null){
    front++;                      
    var temp=0;                  //Set the temporary 
    for(i=0;i<=3;i++){
        temp[i]=node;
        temp[i]=null;            //Delete the node with temporary
    }
}