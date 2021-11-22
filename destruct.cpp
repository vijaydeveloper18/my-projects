#include<iostream.h>
#include<conio.h>
class exam
{
    private:
    int s.no,mark1,mark2;
    public:
    exam()
    {
      s.no=mark1=mark2=100;
    }
    void showdata()
    {
        cout<<s.no<<mark1<<mark2
    }
    ~exam()
    {
        cout<<"destructor is invoked";
    }
};
void main()
{
    exam e;
    e.showdata();
    exam e1(1,90,90);
    clrscr();
    e1.showdata();
    getch();
}
}