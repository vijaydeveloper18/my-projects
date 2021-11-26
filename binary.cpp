#include<iostream.h>
#include<conio.h>
class distance
{
    private:
    int feet;
    float inches;
    public:
    distance(){
        feet=0;
        inches=0.0;
    }
    distance(int ft,float in){
        feet=ft;
        inches=in;
    }
    void get(){
        cout<<"\n Enter feet:";
        cin>>feet;
        cout<<"\n Enter inches:";
        cin>>inches;
    }
    void show(){
        cout<<feet<<inches<<"\n";
    }
    distance operator+(distance);
};
distance distance::operator+distance(d2)
{
    int f=feet+d2.feet;
    float i=inches+d2.inches;
    return distance(f,i);
}
void main()
{
    distance d1,d3,d4;
    distance d2(11,6.25);
    d1.get();
    d3=d1+d2;
    d4=d1+d2+d3;
    cout<<"\n d1=";d1.show();
    cout<<"\n d2=";d2.show();
    cout<<"\n d3=";d3.show();
    cout<<"\n d4=";d4.show();
    getch();
}