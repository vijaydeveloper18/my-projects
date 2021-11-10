#include<iostream.h>
#include<conio.h>
class second;
class first;
{
    private:
    int no;
    public:
    friend class second;
      first(int n)
      {
          no=n;
      }};
      class second{
          public:
          void show(first f)
           {
               cout<<f.no;
           }
      };
      void main()
      {
          first f(10)
          second s;
          s.show(f);
          getch();
      }
