function perfect(num){
    var perfect=0;
    for(var i=0;i<=num;i++){
        if(num%i===0){
            perfect=perfect+i;
        }
    }
    if(num!==perfect){
       console.log("It is not a perfect number");
    }
    if(perfect>num){
        console.log("Abundant number");
    }
    if(perfect<num){
        console.log("Deficient number");
    }
}
perfect(8);