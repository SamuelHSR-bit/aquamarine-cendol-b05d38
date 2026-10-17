#include <stdio.h>

int main() 
{
 int i;
  int t;

  printf("Tabuada do 5 é:\n");
  for(i=1;i<=10;i++)
    {
      t = i*5;
      printf("5 * %d: %d\n", i, t);
      
    }
    
  return 0;
}