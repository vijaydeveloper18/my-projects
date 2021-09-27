#include<iostream.h>
#include<conio.h>
class circle{
    private:
    int area,radius;
    public:
    void getdata(){
        cout<<"enter the radius:";
        cin>>radius;
    }
    void calculate(){
        area=3.14*radius*radius;
    }
    void show(){
        cout<<"The area is"<<area<<endl;
    };
    void main(){
        int i;
        circle e[5];
        for(i=0;i<5;i++)
        {
            e[i].getdata();
            e[i].calculate();
            e[i].show();
        }
        getch();
    }
}