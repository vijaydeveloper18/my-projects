#include<iostream.h>
#include<conio.h>
class rectangle
{
    private:
    int length,breadth,area;
    public:
    void getdata(){
        cout<<"Enter length value:";
        cin>>length;
        cout<<"Enter breadth balue:";
        cin>>breadth;
        area=length*breadth;
    }
    void getdata(int a)
    {
        length=a;
        cout<<"Enter breadth value:";
        cin>>breadth;
        area=length*breadth;
    }
    void showdata()
    {
        cout<<"length is:"<<length;
        cout<<"breadth is:"<<breadth;
        cout<<"The area is:"<<area;
    }
};
void main()
{
    rectangle r1,r2;
    cout<<"Enter the detail:"<<endl;
    r1.getdata();
    r1.showdata();
    cout<<"Enter the detail:"<<endl;
    r2.getdata();
    r2.showdata();
    getch();
}