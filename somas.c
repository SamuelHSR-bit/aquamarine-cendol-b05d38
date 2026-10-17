#include <stdio.h>
#include <windows.h>

int main() {

    SetConsoleOutputCP(65001);

    int v[2];
    char nome[50];
    char operacao[20];
    printf("Olá, qual seu nome?");
    scanf("%s", nome);
    printf("Qual o primeiro valor %s? \n", nome);
    scanf("%d", &v[0]);
    printf("Qual o segundo valor %s? \n", nome);
    scanf("%d", &v[1]);
    int soma = v[0] + v[1];
    printf("%s, a soma total dos itens deu: %d\n", nome, soma);
    

    return 0;


}



