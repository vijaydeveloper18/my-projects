#include<iostream.h>
#include<conio.h>
class publications{
    private:
    int book no;
    public:
    void getdata()
    {
        cout<<"\n enter book number:";
        cin>>book no;
    }
    void putdata(){
        cout<<book no<<endl;
    }
};
class author:publications{
    private:
    char author name[20];
    public:
    void getdata(){
        publications::getdata();
        cout<<"enter author name:";
        cin>>author name;
    }
    void putdata(){
        publications::putdata();
        cout<<author name;
    }
};
void main()
{
    author x;
    x.getdata();
    x.putdata();
    getch();
}