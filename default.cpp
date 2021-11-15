#include<iostream.h>
#include<conio.h>
int sum(int x=10,int y=20,int z=30);
void main()
{
    clrscr();
    cout<<"sum()="<<sum()<<endl;
    cout<<"sum(15)"<<sum(15)<<endl;
    cout<<"sum(15,25)"<<sum(15,25)<<endl;
    cout<<"sum(15,25,35)"<<sum(15,25,35)<<endl;
    getch();
}
int sum(int x,int y,int z)
{
    return(x+y+z)
}