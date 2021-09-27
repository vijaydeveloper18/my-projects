#include<iostream.h>
#include<conio.h>
void main()
{
    int num,count=0;
    clrscr();
    cout<<"enter the number:";
    cin>>num;
    while(num!=0)
    {
        count++;
        num=num/10;
    }
    cout<<count<<endl;
    getch();
}