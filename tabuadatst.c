#include <stdio.h>

int main() 
{
 int i;
 int t;

  for(t = 1; t <= 10; t++){
    printf("\nTabuada do: %d\n", t);

    for(i = 1; i <= 10; i++){
      printf("%d X %d: %d\n", t, i, t*i);
    }
  }
      
      return 0;
    }
    
  