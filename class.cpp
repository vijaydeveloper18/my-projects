#include<iostream.h>
#include<conio.h.
class railway
{
    private:
    char name[20],place[30];
    int train no,depart,amount,age;
    public:
    void getdata(){
        cout<<"Train.No:";
        cin>>train no;
        cout<<"Departing time:";
        cin>>depart;
        cout<<"Name:";
        cin>>name;
        cout<<"Age:";
        cin>>age;
        cout<<"Place:";
        cin>>place;
        cout<<"Amount:";
        cin>>amount;
    }
    void showdata(){
        cout<<"Train.no:"<<train no<<endl;
        cout<<"Departing time:"<<depart<<endl;
        cout<<"Name:"<<name<<endl;
        cout<<"Age:"<<age<<endl;
        cout<<"Place:"<<place<<endl;
        cout<<"Amount:"<<amount<<endl;
    };
    void main()
    {
        railway r;
        r.getdata();
        r.showdata();
        getch();
    }

