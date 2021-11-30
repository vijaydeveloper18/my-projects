#include<iostream.h>
#include<conio.h>
class base
{
    public:
    virtual void getdata()=0;
    virtual void display()=0;
};
class derived B:public base{
    private:
    long int rollno;
    char name[20];
    public:
    void getdata();
    void display();
};
void derived B:getdata(){
    cout<<"enter the name:"<<endl;
    cin>>name;
    cout<<"enter the rollno:"<<endl;
    cin>>rollno;
}
void derived B:display(){
    cout<<"The name is"<<name<<endl;
    cout<<"The rollno is"<<rollno<<endl;
}
void main(){
    clrscr();
    base*ptr;
    derived B obj;
    ptr=&obj;
    ptr->getdata();
    ptr->display();
    getch();
}