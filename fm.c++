#include<iostream.h>
#include<iomanip.h>
#include<conio.h>
void main()
{
   clrscr();
   int no;
   char name[30];
   double fees;
   cout<<"Enter your no:";
   cin>>no;
   cout<<"Enter your name:";
   cin>>name;
   cout<<"Enter your fees amount";
   cin>>fees;
   cout.width(4);
   cout.fill('0')
   cout<<"The no is"<<no<<endl;
   cout.fill('');
   cout<<"The name is";
   cout.setf(ios::left);
   cout<<name<<endl;
   cout.setf(ios::floatfield);
   cout.precision(2);
   cout<<"The fees is"<<fees<<endl;
   getch();
}


