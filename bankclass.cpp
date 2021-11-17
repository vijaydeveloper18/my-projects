#include<iostream.h>
#include<conio.h>
class bank{
    private:
    char name[30],address[60];
    int accno,age;
    public:
    void getdata(){
        cout<<"Enter the name:";
        cin>>name;
        cout<<"Your account no:";
        cin>>accno;
        cout<<"Enter the age:";
        cin>>age;
        cout<<"Enter the address:";
        cin>>address;
    }
void showdata(){
    cout<<"Name:"<<name<<endl;
    cout<<"account no:"<<accno<<endl;
    cout<<"Age:"<<age<<endl;
    cout<<"address:"<<address<<endl;
};
void main(){
    bank a;
    a.getdata();
    a.showdata();
    getch();
}