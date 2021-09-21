#include<stdio.h>
#include<conio.h>
void main()
{
    int a;
    clrscr();
    printf("\n enter the number:");
    scanf("%d",&a);
    if(a/2){
        printf("\n this is an odd number");
    }
    else{
        printf("\n this is an even number");
    }
    getch();
}