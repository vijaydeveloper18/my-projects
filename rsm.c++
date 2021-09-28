#include<iostream.h>
#include<conio.h>
class resume
{
    private:
    char name[30],qual[25],clg[25],st[20];
    int age;
    float percent;
    public:
    void getdata(){
       cout<<"Enter the name:";
       cin>>name;
       cout<<"Enter the age:";
       cin>>age;
       cout<<"Qualification:";
       cin>>qual;
       cout<<"College:";
       cin>>clg;
       cout<<"Percentage:";
       cin>>percent; 
    }
    void showdata(){
        cout<<"Name:"<<name<<endl;
        cout<<"Age:"<<age<<endl;
        cout<<"Qualification:"<<qual<<endl;
        cout<<"College name:"<<clg<<endl;
        cout<<"Percentage:"<<percent<<endl;
        cout<<"State:"<<st<<endl;
    };
    void main(){
        resume r;
        r.getdata();
        r.showdata();
    }
    getch();
}