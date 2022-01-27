var student=new Object();
student.name='Ajay';
student.rollno=32;
student.std='10th';
student.perform="Good";
Object.defineProperty(student,'rollno',{
    configurable:true,
    enumerable:true,
    writable:true,
    value:40
});