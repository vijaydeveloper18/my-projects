#include<stdio.h>
#include<string.h>
void main(){
    char str[40],ch,result;
    int i,len;
    clrscr();
    printf("Enter the character:");
    gets(str);
    len=str.length;
      for(i=0;i<len;i++){
          result=str[i].len--;  //(or) str[i]=null;
      }
    printf("Removing given character is %s: ",result);
}