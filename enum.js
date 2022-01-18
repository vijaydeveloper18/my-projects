employee1.designation='Frontend developer';
employee1.salary=45000;
for(prop in employee1){
    console.log(prop,employee1[prop]);
}
object.defineProperty(employee3,'salary',{
    configurable:true,
    writable:false,
    enumerable:false
});
console.log('after enumerable change');
for(prop in employee){
    console.log(prop,employee1[prop]);
}