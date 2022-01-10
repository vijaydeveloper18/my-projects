function welcome(person){
    this.person=person;
}
var person=person('Ramesh');
console.log(person);
console.log('Hi ' +this.person);