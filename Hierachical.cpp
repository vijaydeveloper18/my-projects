#include<iostream.h>
#include<conio.h>
class employee
{
    private:
    int empno;
    char empname[20];
    public:
    void getdata(){
        cout<<"\n Enter employee no:";
        cin>>empno;
        cout<<"\n Enter employee name:";
        cin>>empname;
    }
    void putdata(){
        cout<<"\n Employee no:"<<empno;
        cout<<"\n Employee name:"<<empname;
    }
};
class manager:public employee{
    private:
    float basic;
    public:
    float salary;
    float da;
    float hra;
    float cca;
    float pf;
    float special_allowance;
    void getdata(){
        employee::getdata();
        cout<<"Enter basic salary:";
        cin>>basic;
    }
};
void putdata(){
    da=0.30*basic;
    hra=0.15*basic;
    cca=0.05*basic;
    pf=0.12*basic;
    special_allowance=0.4*basic;
    salary=basic+da+hra+cca+special_allowance-pf;
    employee::putdata();
    cout<<endl<<salary;
}};
class supervisor:public employee{
    private:
    float basic;
    public:
    float salary;
    float da;
    float hra;
    float cca;
    float pf;
    float special_allowance;
    void getdata(){
        employee::getdata();
        cout<<"\n Enter basic salary:";
        cin>>basic;
    }
    void putadata(){
        da=0.30*basic;
        hra=0.15*basic;
        cca=0.05*basic;
        pf=0.12*basic;
        special_allowance=0.4*basic;
        salary=basic+da+hra+cca+special_allowance-pf;
        employee::putdata();
        cout<<endl<<salary;
    }
};
class worker:public employee{
    public:
    float salary;
    float wages;
    float incentive;
    void getdata();
    {
        employee::getdata();
        cout<<"\n Enter wages & incentives:";
        cin>>wages>>incentive;
    }
    void putdata(){
        salary=wages+incentive;
        employee::putdata();
        cout<<endl<<salary;
    }
};
void main(){
    manager m;
    supervisor s;
    worker w;
    clrscr();
    m.getdata();
    s.getdata();
    w.getdata();
    w.putdata();
    s.putdata();
    m.putdata();
    getch();
}