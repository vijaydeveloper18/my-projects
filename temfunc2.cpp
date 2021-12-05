#include<iostream.h>
void function1(int i){
    cout<<"The value of i is"<<i<<endl;
}
void function2(double d){
    cout<<"The integer part is"<<int(d);
    d=int(d);
    cout<<"The factorial part is"<<d;
}
void main(){
    function1(2);
    function2(23.5);
    getch();
}