#include<iostream.h>
#include<conio.h>
void main()
{
    int num,rev=0;
    cout<<"enter the number:";
    cin>>num;
    while(num!=0)
    {
        rev=(rev*10)+(num%10);
        num/=10;
    }
    cout<<rev<<endl;
    getch();
}