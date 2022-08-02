class person{
    constructor(name,year){
      this.name = name;
      this.year = year;
    }
    age(){
        var currentDate = new Date();
        var fullYear = currentDate.getFullYear();
        return fullYear - this.year;
    }
}
let myAge = new person('Ramesh',2000);
myAge.age();
console.log(myAge.age());