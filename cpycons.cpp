#include<iostream.h>
#include<string.h>
#include<conio.h>
class item{
    private:
    int itno;
    char itname[20];
    float price;
    public:
    item(int a,char*b,float c)
    {
        itno=a;
        strcpy(itname,b);
        price=c;
    }
    item(item&ptr)
    {
        itno=ptr.itno;
        strcpy(itname,ptr.itname);
        price=ptr.price;
    }
    void show item(){
        cout<<itno<<itname<<price;
    }};
    void main(){
        clrscr();
        item
        i1(1,"monitor",3800),i2(i1);
        cout<<"First item:"<<endl;
        i1.show item();
        cout<<"Second item"<<endl;
        i2.show item();
        getch();
    }