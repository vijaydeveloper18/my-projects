var obj1={
    length:20,
    breadth:45
};
var obj2={
    length:80,
    breadth:60
};
function area(){
    area=this.length*this.breadth;
    document.write("Area: ",+this.length+" "+this.breadth);
}
var obj1_area=area.bind(obj1);
var obj2_area=area.bind(obj2);
obj1_area();
obj2_area();
