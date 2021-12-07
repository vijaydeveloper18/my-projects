#include<iostream.h>
#include<conio.h>
class base1
{
    protected:
    int var1;
    public:
    void disp_base(){
        cout<<"Var1:"<<var1<<endl;
    }
};
class base2{
    protected:
    int var2;
    public:
    void disp_base2(){
        cout<<"Var2:"<<var2<<endl;
    }
};
class deri:public base1,public base2{
    private:
    int var3;
    public:
    deri(int a,int b,int c){
        var1=a;
        var2=b;
        var3=c;
    }
    void disp_me(){
        cout<<"Var3:"<<var3;
    }
};
void main(){
    deri d(10,20,30);
    clrscr();
    d.disp_base1();
    d.disp_base2();
    d.disp_me();
    getch();
}