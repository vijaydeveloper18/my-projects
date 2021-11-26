#include<iostream.h>
#include<conio.h>
const int size=5;
class array
{
    private:
    int a[size];
    public:
    int operator[](int i)
    {
        return i;
    }
};
void main()
{
    array a1;
    int i;
    for(i=1;i<=size;i++)
    {
        cout<<a1[i]<<"\t";
    }
    getch();
}