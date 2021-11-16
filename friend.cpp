#include<iostream.h>
#include<conio.h>
class second;
class first
{
    private:
    int no;
    public:
    first(int n);
    friend int add(first,second);
};
class second{
    private:
    int n1;
    public:
    second(int);
    friend int add(first,second);
};
first::first(int n)
{
    no=n;
}
second::second(int n)
{
    n1=n;
}
int add(first f,second s){
    cout<<"first class="<<f.no<<endl;
    cout<<"second class="<<s.n1;
    return f.no+s.n1;
}
void main()
{
    first f(10);
    second s(20);
    clrscr();
    cout<<"The result is"<<add(f,s);
    getch();
}