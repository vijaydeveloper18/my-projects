#include<iostream.h>
#include<conio.h>
class circle
{
    private:
    int radius;
    float area;
    int b,h;
    public:
    circle(){
        cout<<"Enter the radius:"<<endl;
        cin>>radius;
        area=3.14*radius*radius;
        cout<<"area of the circle"<<area;
    }
}
circle(int r){
    radius=r;
    area=3.14*radius*radius;
    cout<<"Area of circle is"<<area;
}
circle(int x,int y){
    b=x;
    h=y;
    area=0.5*b*h;
    cout<<"area of the triangle is"<<area;
}
void main()
{
    circle c;
    circle d1(6);
    circle c1(3,4);
    getch();
}