#include<iostream.h>
#include<conio.h>
#include<fstream.h>
void main(){
    ofstream outfile;
    char fname[20];
    cout<<"enter the filename"<<endl;
    cin>>fname;
    outfile.open(fname);
    outfile<<"sachin"<<endl;
    outfile<<"jackie"<<endl;
    outfile<<"vijay"<<endl;
    cout<<"\n successfully created";
    outfile.close();
}