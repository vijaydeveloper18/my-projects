const square=(numsquare)=>{
     if(numsquare < 1 || numsqaure > 64){
        console.error("Square must between 1 and 64");
     }
     var res= 2n ** BigInt(numsquare-1);
     console.log("Grains in given square: ",res);
}
const total=()=>{
    var total= (2n ** 64n)-1n;
    console.log("Total grains in chessboard:",total);
};