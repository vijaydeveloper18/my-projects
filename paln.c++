#include<iostream.h>
#include<conio.h>
void main()
{
    int n,num,rev=0;
    clrscr();
    cout<<"enter the number:";
    cin>>n;
    num=n;
    while(n!=0)
    {
        rev=(rev*10)+(n%10);
        n/=10;
    }
    if(rev==num)
    {
        cout<<"The number is palindrome",num;
    }
    else
    {
        cout<<"The number is not palindrome",num;
    }
    getch();
}