function num(...numbers:number[]){
    let x:number=0
    for(var i=0;i<=numbers.length;i++){
        x+=numbers[i];
    }
    return x;
}
alert(num(undefined,10,20));
alert(num(10,20,30));
alert(num(10,20,30,40,50));
