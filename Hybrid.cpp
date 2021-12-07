#include<iostream.h>
#include<conio.h>
class lecturer
{
    private:
    class lecturer_name[20];
    public:
    void getdata(){
        cout<<"Enter lecturer name:";
        cin>>lecturer_name;
    }
    void putdata(){
        cout<<"lecturer name is:"<<endl; 
    }
};
class department:public lecturer{
    Private:
    char dept_name[20];
    public:
    void getdata(){
        cout<<"Enter department name:";
        cin>>dept_name;
    }
    void putdata(){
        cout<<"Department name is"<<dept_name;
    }
};
class marks{
    public:
    int mark1;
    int mark2;
    int mark3;
}
void getdata(){
    cout<<"Enter the marks for 3 subjects:";
    cin>>mark1>>mark2>>mark3;
}
void putdata(){
    cout<<"The marks for 3 subjects are"<<mark1<<"\t"<<mark2<<"\t"<<mark3;
}};
class student:public department,public marks{
    private:
    int rollno;
    char student_name[20];
    public:
    void getdata(){
        department::getdata();
        cout<<"Enter the student name:";
        cin>>stdname;
        cout<<"Enter student rollno:";
        cin>>rollno;
        marks::getdata();
    }
    void putdata(){
        department::putdata();
        cout<<"The name & rollno is:"<<stdname<<rollno;
        marks::putdata();
    }
};
void main(){
    student s;
    clrscr();
    s.getdata();
    s.putdata();
    getch();
}