#include<iostream.h>
#include<conio.h>
class form
{
    private:
    char name[20],dept[30],place[30];
    int age,d.o.b,d.o.j,tenth mark;
    public:
    void getdata(){
        cout<<"Name:";
        cin>>name;
        cout<<"Age:";
        cin>>age;
        cout<<"Tenth mark:";
        cin>>tenth mark;
        cout<<"Date of birth:";
        cin>>d.o.b;
        cout<<"Date of joining:";
        cin>>d.o.j;
        cout<<"Department:";
        cin>>dept;
        cout<<"Place:";
        cin>>place; 
    }
    void showdata(){
        cout<<"Name:"<<name<<endl;
        cout<<"Age:"<<age<<endl;
        cout<<"Tenth mark:"<<tenth mark<<endl;
        cout<<"Date of birth:"<<d.o.b<<endl;
        cout<<"Date of joining:"<<d.o.j<<endl;
        cout<<"Department:"<<dept<<endl;
        cout<<"Place:"<<place<<endl;
    }
};
void main(){
    form f;
    f.getdata();
    f.showdata();
    getch();
}