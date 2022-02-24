var node={};
node.data=data;                  //Initialize nodes
node.refer=addr;
temp=0;
if(head==null||node==-1){           //Check whether it is empty or not
    console.log("Stack is empty");
}else{
    console.log("stack is full");
}
for(i=0;i<=node.length;i++){        //Points the firstnode to be head 
    node[i]=temp;
    temp.nxt=newnode;
    newnode=head;
}
function nodepush(data){          //Insert the data into stack of the node
    node[i].data=data;
    node.refer[i]=nxt.node[i].data;
    temp++;
    return 1;
}
nodepush(20);
nodepush(30);
nodepush(40);
function nodepop(data){           //Pop the data from stack of the node
    node(lastindexof(2)==head);
    node[head]=newnode;
for(i=2;i>=node.length;i--){
    node.data=null;
    temp=node;
    temp=null;
}
  head--;
  return -1;
}
nodepop(40);
nodepop(30);
nodepop(20);