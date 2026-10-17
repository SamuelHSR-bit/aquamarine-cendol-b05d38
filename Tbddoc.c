#include <stdio.h>

int main()
{
    int tabuada;
    int i;

    for(tabuada = 1; tabuada <= 10; tabuada++)
    {
        printf("\nTabuada do %d:\n", tabuada);

        for(i = 1; i <= 10; i++)
        {
            printf("%d X %d = %d\n", tabuada, i, tabuada * i);
        }
    }

    return 0;
}