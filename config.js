employee3.designation='developer';
employee3.salary=20,000;
for(prop in employee3){
    console.log(prop,employee3[prop]);
}
Object.defineProperty(employee3,'salary'),{
    configurable:true,
    writable:false,
    enumerable:false,
};
console.log('After enumerable change');
for(prop in employee3){
    console.log(prop,employee3[prop]);
}