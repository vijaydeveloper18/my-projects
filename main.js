var char=['I','l','i','k','e','c','h','o','c','o','l','a','t','e'];
var temp='0';

function removechar(){
    for(var i=0;i<char.length;i++){
        for(var j=temp;j<char.length;j++){
            char[i].find(temp);
            
        }
            
        if(char.indexof(temp)>=1){
            char.indexof(temp).remove();
        }
}
}
removechar();
console.log(char);


