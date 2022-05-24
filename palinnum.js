function palindrome(){
    var rev,temp,x=0;
    var num=34423;
    temp=num;
    while(num>0){
        rev=num%10;
        num=parseInt(num/10);
        x=x*10+rev;
    }
    if(temp==x){
        console.log("Number is palindrome");
    }else{
        console.log("Number is not palindrome");
    }
}