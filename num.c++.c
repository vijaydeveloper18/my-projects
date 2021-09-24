#include<iostream.h>
#include<conio.h>
void main()
{
    int num;
    clrscr();
    cout<<"Enter the number:";
    cin>>num;
    switch(num)
    {
        case 1:cout<<"ONE";
        break;
        case 2:cout<<"TWO";
        break;
        case 3:cout<<"THREE";
        break;
        case 4:cout<<"FOUR";
        break;
        case 5:cout<<"FIVE";
        break;
        case 6:cout<<"SIX";
        break;
        case 7:cout<<"SEVEN";
        break;
        default:cout<<"Error";
    }
    getch();
}