#include<iostream.h>
#include<conio.h>
class ptr
{
    private:
    int a;
    public:
    void b(){
        a=10;
        cout<<"this->a value is"<<this->a;
        cout<<"\n (*this).a value is"<<(*this).a;
    }
};
void main(){
    ptr p;
    clrscr();
    p.b();
    getch();
}