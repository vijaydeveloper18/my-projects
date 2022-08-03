class solution{
    constructor(s){
        this.string = s;
    }
    firstRep(){
        var s = "geeksforgeeks";
        var count = 0;
        for(var i=0;i<s.length;i++){
            if(s[i]=="g"){
                count = count + 1;
            }
        }
        if(count>1){
            console.log("g");
        }
        else{
            return -1;
        }
    }
}
var solve = new solution("geeksforgeeks");
solve.firstRep();
console.log(solve.firstRep());