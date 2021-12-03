#include<iostream.h>
#include<conio.h>
template<class T>
T max(Tx,Ty){
    return(x>y)?x:y;
};
void main(){
    clrscr();
    cout<<max(17,19)<<endl;
    cout<<max(1.5,6.7)<<endl;
    cout<<max('A','B')<<endl;
    getch();
}