class person{
    firstname:string;
    lastname:string;
    dob:Date;
    show(){
       alert(`${this.firstname} ${this.lastname} ${this.dob}`);
    }
}
let p:person=new person();
p.firstname="rakesh";
p.lastname="kumar";
p.dob=new Date(1999,12,26);
p.show();