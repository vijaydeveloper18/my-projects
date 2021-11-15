#include<iostream.h>
#include<conio.h>
void line();
void line(char);
void line(char,int);
void main()
{
    int no of time;
    char c;
    clrscr();
    cout<<"Enter no of times:";
    cin>>no of time;
    cout<<"Enter the character:";
    cin>>c;
    line();
    line(c);
    line(c,no of time);
    getch();
}
void line()
{
    for(int i=0;i<=15;i++)
    {
        cout<<"&";
    }
    cout<<"\n";
}