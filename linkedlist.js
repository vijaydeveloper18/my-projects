var node={};temp;
node.data=data;
node.reference=reference;  //Creating first node
if(node=reference){
    reference.nxt=new node.nxtdata;  //connecting to other node
}
temp=node;             //temporary points to first node
node=head;             //first node points to be null
while(node!=null){
    node=temp.nxt;
    temp.nxt=new Node;     //checking operation whenever the node is null
}
function newnode(){
    new node=data;
    new node=reference;
    return newnode;         //Another nodes...will be creating automatically
}
if(node==null){
    delete node;
}
node.nxt=newnode();
if(temp.nxt==new node.nxt){
    new node.nxt=head;
}                            // while creating of new nodes points to be head
else{
    new node=0;
}
console.log(temp);
//Time complexitiy=0(n)->best case
//Time complexity=0(4)->worst case
