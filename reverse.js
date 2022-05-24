var num=34423;
var rev=0;
var lastdigit;
while(num!=0){
    lastdigit=num%10;
    rev=rev*10 + lastdigit;
    num=math.floor(num/10);
}
console.log("Reversed number: "+rev);