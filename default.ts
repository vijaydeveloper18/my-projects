export default class point{
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
    distancefromorigin():number{
        return math.sqrt((this.x*this.x)+(this.y*this.y));
    }
} 
