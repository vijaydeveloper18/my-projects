#include<iostream.h>
#include<conio.h>
class circle
{
    private:
    int radius;
    float area;
    public:
    void getdata(){
        cout<<"enter the radius:";
        cin>>radius;
    }
    void calculate(){
        area=3.14*radius*radius;
    }
    void showdata(){
        cout<<"The area of circle is"<<area<<endl;
    }
};
void main()
{
    circle r;
    r.getdata();
    r.calculate();
    r.showdata();
    getch();
}