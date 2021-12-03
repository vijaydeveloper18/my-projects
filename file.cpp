#include<iostream.h>
#include<conio.h>
#include<stdlib.h>
#include<fstream.h>
void main()
{
    of stream outfile;
    if stream infile;
    char source[10],target[10],ch;
    clrscr();
    cout<<"Enter the source file name:";
    cin>>source;
    cout<<"Enter the target file name:";
    cin>>target;
    infile.open(source);
    if(infile.fail())
    {
        cout<<"source file doesnot exist:";
        exit(1);
    }
    outfile.open(target);
    if(outfile.fail()){
        cout<<"Unable to create a file";
        exit(1);
    }
    while(!infile.eof()){
        ch=infile.get();
        outfile.put(ch);
        cout<<ch;
    }
    infile.close();
    outfile.close();
    getch();
}