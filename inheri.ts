class person{
    firstname:string;
    lastname:string;
    constructor(firstname:string,lastname:string){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    show():string{
        return (+this.firstname+" "+this.lastname);
    }
}
class employee extends person{
    regno:number;
    place:string;
    constructor(firstname:string,lastname:string,regno:number,place:string){
        super(firstname,lastname)
        this.regno=regno;
        this.place=place;
    }
    show(): string {
        let s:string=super.show();
        s += `${this.regno} ${this.place}`;
        return s;
    }
}
var p:person=new employee("Rajesh","sree",23478,"vellore");
p.show();