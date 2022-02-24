var arr=[3];temp=0;      //Initialize stack using array
if(arr(lastindexof(3)==-1)||arr[size]==null){
    console.log("Stack is empty");   //Check whether it is empty or not
}else{
    console.log("stack is full");
}
function push(data){               //Push the data into stack
    for(i=0;i<arr.length;i++){
        arr[i]=data;
        temp++;
    }
    return 1;
}
push(12);
push(13);
push(45);
push(28);
function pop(data){               //Pop the data from stack
    for(i=3;i>arr.length;i--){
        arr[i]=data=null;
        temp--;
    }
    return -1;
}
pop(28);
pop(45);
pop(28);
pop(12);
