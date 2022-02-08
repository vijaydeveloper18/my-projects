var stud1={
    name:"ram",
    course:'programming',
    age:18
};
var stud2={
    name:'vicky',
    course:'cyber security'
};
function tutorial(lang1,lang2){
    document.write(+this.name" " +this.course" "+lang1" "+lang2);
}
tutorial.call(stud1,"Html","css");
tutorial.apply(stud2,["hack","lock"]);