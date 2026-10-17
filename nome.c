#include <stdio.h>
#include <windows.h>

int main(){

SetConsoleOutputCP(65001);

  int idade;
  char nome[50];
  printf("Olá , digite seu nome:");
  scanf("%49s", nome);
  printf("seu nome é: %s \n", nome);
  printf("Olá %s, qual a sua idade? \n", nome);
  scanf("%d", &idade);
  if (idade < 18) {
    printf("Sinto muito %s, você não pode acessar.\n", nome);
  }
  else {
  printf("Seu nome é: %s e você tem %d anos\n", nome, idade);
  }

    return 0;
}
