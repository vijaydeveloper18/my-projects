#include<iostream.h>
#include<conio.h>
void main()
{
    int fact,n;
    int factorial(int);
    clrscr();
    cout<<"Enter your number"<<endl;
    cin>>n;
    fact=factorial(n);
    cout<<endl<<"The factorial value is"<<fact;
    getch();
}
int factorial(int x){
    if(x==1)
    return 1;
    else:
    return x*factorial(x-1);
}