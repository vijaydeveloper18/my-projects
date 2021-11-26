#include<iostream.h>
#include<conio.h>
class minus
{
    private:
    int a,b;
    public:
    void get(int i,int j);
    void display(void);
    friend void operator-(minus&m);
};
void minus::get(int i,int j)
{
    a=i;
    a=j;
}
void minus::display(void)
{
    cout<<a<<'\t'<<b<<endl;
}
void operator-(minus&m)
{
    m.a=-m.a;
    m.b=-m.b;
}
void main(){
    minus m;
    m.get(100,50);
    m.display();
    -m;
    m.display();
    getch();
}