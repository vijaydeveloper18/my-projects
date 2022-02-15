class c{
    p=12;
    m(){
      }
}
var c=new c();
var clone={...c};
clone.c();   //ok
clone.m(); //error